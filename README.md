# Alpine Trails — React + Vite practice app

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
Run `npm run build`. Vite writes the production files to `dist/`.

## Docker practice
Create your own Dockerfile. Try a multi-stage build:
- Build stage: install dependencies and run `npm run build`.
- Runtime stage: serve the `dist/` folder using an Nginx image.

The app uses remote Unsplash image URLs and Google Fonts, so those assets need internet access in the browser.
