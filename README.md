# PISE Network — Website Redesign

Design exploration for the PISE Network website, built with React + Babel.

Three design directions (A, B, C) presented side-by-side on a pannable canvas.

## Structure

```
index.html              ← entry point (GitHub Pages)
design-canvas.jsx       ← canvas/artboard shell
tweaks-panel.jsx        ← in-page tweaks UI
components/
  DirectionA.jsx
  DirectionB.jsx
  DirectionC.jsx
  Logo.jsx
styles/
  direction-a.css
  direction-b.css
  direction-c.css
assets/
  logo-*.png/jpeg
  san-marco.jpeg
  poster-*.png
  ...
```

## Running locally

Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## GitHub Pages

Site is published from the `main` branch root.
