# Shared web app password

The web beta has one password field, with the shared password set to `fireball`. No username, database, or Vercel environment variables are needed. The server checks the password and issues a signed, HTTP-only session cookie.

To change the password later, update `SHARED_PASSWORD` in `server/sharedAuth.js` and redeploy the site.

## Shared Teacher profile

Each browser starts with the same Teacher profile and 31 preloaded affirmations. Profile changes, custom affirmations, playlists, themes, stars, and streaks stay in that browser's local storage; they do not sync between devices.

## Local preview

Run `npm run dev` for a development server or `npm run preview` after building. The local Vite middleware serves the same password and affirmation endpoints as the Vercel Functions.
