# Kanvara Bonha Portfolio

React + Vite + Tailwind CSS portfolio with persistent light/dark themes.

## Run locally

```powershell
npm install
npm run dev
```

## Production test

```powershell
npm run build
npm run preview
```

## Included updates

- Light and dark modes with a navbar toggle
- Theme preference saved in `localStorage`
- Browser title changed to `Kanvara Bonha`
- New grayscale `KB` favicon
- `src/assets/hero.png` displayed in the first section
- Connected `Kanvara Bonha` heading without a forced line break
- Subtle motion, hover effects, mesh background, and floating artwork
- Downloadable CV card in the Contact section
- CV file: `public/documents/Kanvara-Bonha-CV.pdf`
- Certificate filename normalized for reliable deployment
- Project report links fixed

## Update profile links

Edit `src/data/site.js` to change:

- Email
- LinkedIn URL
- Location
- GPAX or education details

## Replace the CV

Replace this file while keeping the same filename:

```text
public/documents/Kanvara-Bonha-CV.pdf
```

The Contact section will continue downloading the replacement automatically.

## Deploy to Vercel

Push the project to GitHub, import the repository in Vercel, and keep the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
