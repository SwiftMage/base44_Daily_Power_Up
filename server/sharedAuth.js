import { createHmac, timingSafeEqual } from "node:crypto";
import teacherAffirmations from "./teacherAffirmations.json" with { type: "json" };
const COOKIE_NAME = "dpu_shared_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 24 * 7;
const SHARED_PASSWORD = "fireball";
// Temporarily open the Teacher web beta. Set this to false to restore password sign-in.
const DIRECT_TEACHER_ACCESS = true;

function equalSecret(candidate, expected) {
  const candidateBytes = Buffer.from(String(candidate ?? ""));
  const expectedBytes = Buffer.from(String(expected ?? ""));
  return candidateBytes.length === expectedBytes.length && timingSafeEqual(candidateBytes, expectedBytes);
}

function json(res, statusCode, body) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "private, no-store, max-age=0");
  res.end(JSON.stringify(body));
}

function sessionToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + SESSION_LIFETIME_SECONDS * 1000 })).toString("base64url");
  const signature = createHmac("sha256", SHARED_PASSWORD).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function readCookie(req, name) {
  const cookies = String(req.headers.cookie || "").split(";");
  const entry = cookies.map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  return entry ? decodeURIComponent(entry.slice(name.length + 1)) : "";
}

export function readSharedSession(req) {
  const token = readCookie(req, COOKIE_NAME);
  const separator = token.lastIndexOf(".");
  if (separator < 1) return null;

  const payload = token.slice(0, separator);
  const suppliedSignature = Buffer.from(token.slice(separator + 1));
  const expectedSignature = Buffer.from(createHmac("sha256", SHARED_PASSWORD).update(payload).digest("base64url"));
  if (suppliedSignature.length !== expectedSignature.length || !timingSafeEqual(suppliedSignature, expectedSignature)) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!Number.isFinite(session.exp) || session.exp <= Date.now()) return null;
    return { authenticated: true };
  } catch {
    return null;
  }
}

function setSessionCookie(req, res, value, maxAge) {
  const forwardedProto = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim();
  const secure = forwardedProto === "https" || process.env.VERCEL === "1";
  const attributes = [`${COOKIE_NAME}=${encodeURIComponent(value)}`, "Path=/", "HttpOnly", "SameSite=Lax", `Max-Age=${maxAge}`];
  if (secure) attributes.push("Secure");
  res.setHeader("Set-Cookie", attributes.join("; "));
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 4096) throw new Error("Request body too large");
  }
  return raw ? JSON.parse(raw) : {};
}

export async function handleSharedAuthRoute(route, req, res) {
  if (route === "login") {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return json(res, 405, { error: "Method not allowed." });
    }
    let body;
    try {
      body = await readJsonBody(req);
    } catch {
      return json(res, 400, { error: "Enter the password." });
    }
    const password = String(body.password || "");
    if (!equalSecret(password, SHARED_PASSWORD)) {
      return json(res, 401, { error: "That password did not match." });
    }

    setSessionCookie(req, res, sessionToken(), SESSION_LIFETIME_SECONDS);
    return json(res, 200, { authenticated: true });
  }

  if (route === "session") {
    const session = readSharedSession(req);
    return json(res, 200, {
      authenticated: DIRECT_TEACHER_ACCESS || Boolean(session),
      directAccess: DIRECT_TEACHER_ACCESS,
    });
  }

  if (route === "logout") {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return json(res, 405, { error: "Method not allowed." });
    }
    setSessionCookie(req, res, "", 0);
    return json(res, 200, { authenticated: false });
  }

  return json(res, 404, { error: "Not found." });
}

export function handleAffirmationsRoute(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return json(res, 405, { error: "Method not allowed." });
  }
  if (!DIRECT_TEACHER_ACCESS && !readSharedSession(req)) return json(res, 401, { error: "Sign in to load the teacher affirmations." });
  return json(res, 200, teacherAffirmations);
}
