import { handleAffirmationsRoute } from "../server/sharedAuth.js";

export default function handler(req, res) {
  return handleAffirmationsRoute(req, res);
}
