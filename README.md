# Dern Industries

The public site for **Dern Industries** — an umbrella holding company for a wide
range of side projects and ventures. Retro-futuristic, industrial, monochrome
with an orange accent.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com),
and [Three.js](https://threejs.org). Deployed free via **GitHub Pages**.

## Tech

- **Astro** — static output, zero JS by default, hydrated only where needed.
- **Tailwind CSS** — brand theme (mono + orange) in `tailwind.config.mjs`.
- **Three.js** — the extruded 3D "D" monogram in the hero.
- **Canvas** — the reactive particle/grid background.
- Self-hosted fonts via `@fontsource` (Orbitron / Rajdhani / Share Tech Mono).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # preview the production build
```

> Requires Node 18.14+ (this repo targets Astro 4, which supports Node 19).

## Project structure

```
public/            static assets (logo.svg, favicon, og-image, robots.txt)
src/
  layouts/         BaseLayout.astro (head, SEO, JSON-LD)
  pages/           index.astro (the landing page)
  components/      Nav, Footer, HudFrame, ParticleField, Hero3D, VentureGrid
  data/ventures.ts typed venture list that drives the grid
  styles/global.css theme utilities (CRT lines, glow, blueprint grid)
```

## Adding a venture

Edit `src/data/ventures.ts` and add an entry. Each entry renders as a card in
the Ventures grid. To give a venture its own page later, create
`src/pages/ventures/<id>.astro` (or `.mdx`) and set `href` on the entry.

## Deployment (GitHub Pages)

1. Push this repo to GitHub with the default branch `main`.
2. Repo **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` builds and deploys on every
   push to `main`.

### Custom domain (dernindustries.com) — optional, later

1. Add a file `public/CNAME` containing a single line: `dernindustries.com`.
2. At your DNS provider, point the apex domain at GitHub Pages:
   - `A` records to `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - (or an `ALIAS`/`ANAME` to `<user>.github.io` if supported)
   - `CNAME` for `www` -> `<user>.github.io`
3. In **Settings -> Pages**, set the custom domain and enable **Enforce HTTPS**.
4. `astro.config.mjs` already has `site: 'https://dernindustries.com'`.

## Assets / TODO

- Replace placeholder contact email + social links in `src/components/Footer.astro`.
- `og-image.svg` is provided; export a `1200x630` PNG for widest social support.
- Fill in real ventures in `src/data/ventures.ts`.
