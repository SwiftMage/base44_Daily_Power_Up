import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const TEMPLATE_PATH = path.join(DIST, "index.html");
const BASE_URL = "https://www.dailyaffirmationspowerup.com";
const SITE_NAME = "Daily Power Up";
const DEFAULT_IMAGE = BASE_URL + "/images/daily-power-up-social-preview.png";

const pages = [
  {
    path: "",
    title: "Daily Power Up - Positive Affirmations App for Kids",
    description: "Help your child build confidence and a positive mindset with Daily Power Up. Daily affirmations designed to boost self-esteem and reduce anxiety in children."
  },
  {
    path: "Blog",
    title: "Blog - Parenting Tips & Positive Thinking for Kids",
    description: "Expert insights on teaching kids positive self-talk, building confidence, and creating healthy morning routines. Science-backed tips for parents."
  },
  {
    path: "FAQ",
    title: "FAQ - Kids Affirmation App Questions",
    description: "Common questions about Daily Power Up, the positive affirmations app designed to help children build confidence and self-esteem."
  },
  {
    path: "Privacy",
    title: "Privacy Policy - Daily Power Up!",
    description: "Privacy policy for the Daily Power Up! app. Learn how we protect your data and your children's privacy."
  },
  {
    path: "blog/rewire-your-brain-neuroplasticity-guide",
    title: "How to Rewire Your Brain: A Parent's Guide to Neuroplasticity",
    description: "Your brain is not a fixed machine—it's a living ecosystem. Every thought, emotion, and habit sends signals that carve new neural pathways. Here's how to use this science to help yourself and your children build better mental habits.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    type: "article"
  },
  {
    path: "blog/building-lasting-confidence-power-of-positive-self-talk",
    title: "Building Lasting Confidence: The Power of Positive Self-Talk for Kids",
    description: "When we think about building confidence in our kids, the conversation usually starts on the outside. But there's a more powerful tool at play: the way our children talk to themselves in the privacy of their own minds.",
    image: "https://images.pexels.com/photos/8088100/pexels-photo-8088100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    type: "article"
  },
  {
    path: "blog/morning-routine-calm-confident-kids",
    title: "The Ultimate Morning Routine for Calm, Confident Kids",
    description: "Mornings with kids rarely look like the calm, smiling family photos on social media. Here's a detailed, parent-tested approach to creating a morning routine that helps your child start the day calm and confident.",
    image: "https://images.pexels.com/photos/7220534/pexels-photo-7220534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    type: "article"
  },
  {
    path: "blog/why-positive-self-talk-matters",
    title: "Why Positive Self Talk Matters More Than You Think",
    description: "Your inner voice is with you from the moment you wake up until your head hits the pillow. When that voice is kind and hopeful it can quietly reshape how you handle stress, challenges, and everyday life.",
    image: "https://images.unsplash.com/photo-1708119651120-f48a57a0437d?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "article"
  },
  {
    path: "blog/bedtime-affirmations-calmer-nights-confident-kids",
    title: "Bedtime Affirmations: How to Create Calmer Nights and More Confident Kids",
    description: "Many parents find that when the day quiets down and the lights go out, kids' worries have a way of growing louder. A simple, consistent bedtime affirmation practice can create a safer, calmer night—and it's one of the most powerful gifts you can offer your child.",
    image: "https://images.pexels.com/photos/5895052/pexels-photo-5895052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    type: "article"
  }
];

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegExp(value) {
  return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}

function setTitle(html, title) {
  const escapedTitle = escapeAttribute(title);
  const titlePattern = /<title>[\s\S]*?<\/title>/i;
  if (!titlePattern.test(html)) throw new Error("The built template has no title element.");
  return html.replace(titlePattern, "<title>" + escapedTitle + "</title>");
}

function setMeta(html, attribute, key, value) {
  const pattern = new RegExp("<meta\\s+" + attribute + "=[\"']" + escapeRegExp(key) + "[\"'][^>]*>", "i");
  const tag = '<meta ' + attribute + '="' + escapeAttribute(key) + '" content="' + escapeAttribute(value) + '" />';
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace(/<\/head>/i, "  " + tag + "\n</head>");
}

function setCanonical(html, url) {
  const pattern = /<link\s+rel=["']canonical["'][^>]*>/i;
  const tag = '<link rel="canonical" href="' + escapeAttribute(url) + '" />';
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace(/<\/head>/i, "  " + tag + "\n</head>");
}

function renderRoute(template, page) {
  const canonicalUrl = BASE_URL + (page.path ? "/" + page.path : "/");
  const title = page.title.toLowerCase().includes(SITE_NAME.toLowerCase())
    ? page.title
    : page.title + " | " + SITE_NAME;
  const image = page.image || DEFAULT_IMAGE;
  let html = setTitle(template, title);
  html = setMeta(html, "name", "title", title);
  html = setMeta(html, "name", "description", page.description);
  html = setMeta(html, "name", "robots", "index,follow");
  html = setCanonical(html, canonicalUrl);
  html = setMeta(html, "property", "og:type", page.type || "website");
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", page.description);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:site_name", SITE_NAME);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:url", canonicalUrl);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", page.description);
  html = setMeta(html, "name", "twitter:image", image);
  html = setMeta(html, "name", "twitter:site", "@DailyPowerUpApp");
  return html;
}

if (!existsSync(TEMPLATE_PATH)) {
  throw new Error("Run the Vite build before generating route metadata.");
}

const template = readFileSync(TEMPLATE_PATH, "utf8");

for (const page of pages) {
  const outputPath = page.path
    ? path.join(DIST, page.path + ".html")
    : TEMPLATE_PATH;
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderRoute(template, page));
}

console.log("Generated route-specific SEO metadata for " + pages.length + " canonical pages.");
