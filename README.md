<p align="center">
  <img src="src/assets/images/logo.png" alt="Buildo Logo" width="200" />
</p>

<h1 align="center">Buildo - Astro Website Template</h1>

<p align="center">
  Astro website template for construction companies with data-driven sections, multiple homepage variants, and scroll animation tooling.
</p>

<p align="center">
  <a href="#features">Features</a> |
  <a href="#pages">Pages</a> |
  <a href="#getting-started">Getting Started</a> |
  <a href="#customization">Customization</a> |
  <a href="#project-structure">Project Structure</a> |
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="src/assets/images/description-img.jpg" alt="Buildo Preview" width="100%" />
</p>

---

## Features
- Astro 5 with Tailwind CSS 3 configured via `@astrojs/tailwind`.
- Scroll reveal animations with `prefers-reduced-motion` support and mouse parallax effects.
- Self-hosted Outfit font in WOFF2 format with preload for fast loading.
- Data-driven page content in `src/data/*.ts`.
- SEO metadata, Open Graph/Twitter cards, canonical URLs, and JSON-LD in `src/layouts/BaseLayout.astro`.
- RSS feed at `/rss.xml` and sitemap integration configured in `astro.config.mjs`.
- Reusable section and UI components in `src/components/`.
- Fully responsive design with mobile off-canvas navigation and keyboard accessibility.

---

## Pages

### Main
| Route | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/home-two` | `src/pages/home-two.astro` |
| `/home-three` | `src/pages/home-three.astro` |
| `/about-us` | `src/pages/about-us.astro` |
| `/services` | `src/pages/services.astro` |
| `/projects` | `src/pages/projects.astro` |
| `/teams` | `src/pages/teams.astro` |
| `/testimonials` | `src/pages/testimonials.astro` |
| `/contact-us` | `src/pages/contact-us.astro` |
| `/faq` | `src/pages/faq.astro` |

### Blog
| Route | File |
| --- | --- |
| `/blog-grid` | `src/pages/blog-grid.astro` |
| `/blog-list` | `src/pages/blog-list.astro` |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` |
| `/rss.xml` | `src/pages/rss.xml.ts` |

### Detail
| Route | File |
| --- | --- |
| `/services/[slug]` | `src/pages/services/[slug].astro` |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` |
| `/teams/[slug]` | `src/pages/teams/[slug].astro` |

### Template Info
| Route | File |
| --- | --- |
| `/template-info/style-guide` | `src/pages/template-info/style-guide.astro` |
| `/template-info/license` | `src/pages/template-info/license.astro` |
| `/template-info/changelog` | `src/pages/template-info/changelog.astro` |

### Legal
| Route | File |
| --- | --- |
| `/privacy-policy` | `src/pages/privacy-policy.astro` |
| `/terms-conditions` | `src/pages/terms-conditions.astro` |

### Utility
| Route | File |
| --- | --- |
| `/401` | `src/pages/401.astro` |
| `/404` | `src/pages/404.astro` |

---

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm, yarn, or pnpm

### Install
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

---

## Customization

### Site URL and SEO Defaults
- Update the production domain in `astro.config.mjs`.
- Update site name, description, phone, and URL in `src/data/site.ts`.

### Colors and Typography
- Tailwind theme tokens live in `tailwind.config.js`.
- Font face declarations live in `src/styles/global.css`.

### Page Content Data
Edit the data files in `src/data`:
- `src/data/home.ts`
- `src/data/home-two.ts`
- `src/data/home-three.ts`
- `src/data/about.ts`
- `src/data/about-page.ts`
- `src/data/services.ts`
- `src/data/projects.ts`
- `src/data/team.ts`
- `src/data/testimonials.ts`
- `src/data/faqs.ts`
- `src/data/contact.ts`
- `src/data/blog-posts.ts`

### Images and Fonts
- Optimized images: `src/assets/images`
- Static images: `public/images`
- Font files: `public/fonts`

---

## Project Structure

```
public/
  fonts/              # Self-hosted Outfit font files (WOFF2)
  images/             # Static images
  favicon.svg
  robots.txt
  webclip.svg
src/
  assets/
    images/           # Optimized images (processed by Astro)
  components/         # 64 Astro section and UI components
  data/               # Content data files (TypeScript)
  layouts/
    BaseLayout.astro  # HTML shell, head, meta, JSON-LD
    PageLayout.astro  # Header + footer wrapper
  pages/              # 23 page routes
  styles/
    global.css        # Font faces, base styles, animations
  utils/
    resolveImage.ts   # Image path resolver utility
astro.config.mjs
package.json
tailwind.config.js
tsconfig.json
```

---

## Tech Stack

| Dependency | Version | Purpose |
| --- | --- | --- |
| Astro | ^5.16.15 | Static site framework |
| Tailwind CSS | ^3.4.19 | Styling |
| @astrojs/tailwind | ^6.0.2 | Astro Tailwind integration |
| @astrojs/sitemap | ^3.7.0 | Sitemap |
| @astrojs/rss | ^4.0.15 | RSS feed |

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production site |
| `npm run preview` | Preview the production build |
| `npm run check` | Run Astro type checking |
| `npm run astro` | Run Astro CLI commands |

---

## License
This project is released under a commercial license. See `LICENSE`.
