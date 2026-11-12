import { handleSharedAuthRoute } from "../server/sharedAuth.js";

export default function handler(req, res) {
  return handleSharedAuthRoute("session", req, res);
}
