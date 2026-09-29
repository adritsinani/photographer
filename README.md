# Adrit Sinani — Photography & Films (Next.js)

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Customize
- **Name, tagline, contact, services, hero and photos:** `lib/site.js`; the About, Approach and Experience texts are in `app/page.js`
- **About text:** `app/page.js`
- **Colors and fonts:** CSS variables in `app/globals.css`, font imports in `app/layout.js`
- **Your own images:** put files in `public/photos/` and use paths like `/photos/shot.jpg` (then the `remotePatterns` block in `next.config.mjs` can go)
- **Contact form:** `app/api/contact/route.js` currently logs messages. Add an email provider (Resend, Postmark, SMTP) where marked, and keep keys in environment variables.

## Deploy
Push to GitHub and import into Vercel (zero config), or run `npm run build` and host anywhere that runs Node.

## Font: Glacial Indifference
Download the free font (Hanken Design Co.) and copy these files into `public/fonts/`:
`GlacialIndifference-Regular.otf` and `GlacialIndifference-Bold.otf`.
Until they are added, the site uses Jost (a similar geometric sans) as a fallback.

## Photos
Photos live in `public/photos/` and are listed in `lib/photos.js` (`cat` sets the filter category).
Your portrait for the About section: put it in `public/photos/` and set `about.photo` in `lib/site.js`.

## Contact form emails (Resend)
1. Create a free account at resend.com **with adritsinani@gmail.com** and create an API key.
2. In Vercel: Project > Settings > Environment Variables, add `RESEND_API_KEY` = your key. Redeploy.
Inquiries arrive at adritsinani@gmail.com (change with `CONTACT_TO`). Replying answers the visitor directly.
With the default sender (onboarding@resend.dev) Resend only delivers to your own signup email, which is exactly this case.

## Analytics
`@vercel/analytics` is already in package.json and `<Analytics />` is in `app/layout.js`.
Enable it in Vercel: Project > Analytics > Enable. Data appears after the next visits.
