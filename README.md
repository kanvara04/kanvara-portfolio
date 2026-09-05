# Kanvara Bonha Portfolio

React + Vite + Tailwind CSS portfolio with light/dark themes.

## Run locally

```powershell
npm install
npm run dev
```

## Production check

```powershell
npm run build
npm run lint
```

## Important files

- `src/data/site.js` — portfolio content, project data, contact details
- `src/sections/` — home page sections
- `src/pages/ProjectDetailPage.jsx` — project detail layout
- `public/documents/` — CV, certificates, and project reports
- `src/assets/` — website images

## Replace the CV

Keep the file name:

```text
public/documents/Kanvara-Bonha-CV.pdf
```

Replacing that file is enough; no code change is required.

## Notes

The cleaned package intentionally excludes generated/development files such as
`node_modules`, `dist`, and `.git`. Run `npm install` after extracting the ZIP.
