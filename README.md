# Photographer portfolio (Next.js)

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Customize
- **Name, tagline, email, hero and photos:** `lib/site.js`
- **About text:** `app/page.js`
- **Colors and fonts:** CSS variables in `app/globals.css`, font imports in `app/layout.js`
- **Your own images:** put files in `public/photos/` and use paths like `/photos/shot.jpg` (then the `remotePatterns` block in `next.config.mjs` can go)
- **Contact form:** `app/api/contact/route.js` currently logs messages. Add an email provider (Resend, Postmark, SMTP) where marked, and keep keys in environment variables.

## Deploy
Push to GitHub and import into Vercel (zero config), or run `npm run build` and host anywhere that runs Node.
