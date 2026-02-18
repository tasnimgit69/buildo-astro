# Buildo - Construction Company Astro Theme

A modern, fully responsive construction company website theme built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). Features multiple homepage variants, blog, team profiles, services, projects, testimonials, and more.

## Features

- 3 homepage variants (Default, Two, Three)
- 23+ pages including blog, services, projects, teams, testimonials, FAQ, contact
- Dynamic detail pages for blog posts, services, projects, and team members
- Fully responsive design (desktop, tablet, mobile)
- Scroll reveal animations with `prefers-reduced-motion` support
- Mouse parallax effects on hero sections
- Mobile off-canvas navigation with keyboard accessibility
- SEO optimized with meta tags, Open Graph, Twitter cards, canonical URLs, and auto-generated sitemap
- Self-hosted Outfit font (no external requests)
- Minimal JavaScript footprint (~5KB)
- 100% static site generation (no server required)

## Pages

| Page | Route |
|------|-------|
| Home (Default) | `/` |
| Home Two | `/home-two` |
| Home Three | `/home-three` |
| About Us | `/about-us` |
| Services | `/services` |
| Service Detail | `/services/[slug]` |
| Projects | `/projects` |
| Project Detail | `/projects/[slug]` |
| Teams | `/teams` |
| Team Detail | `/teams/[slug]` |
| Blog Grid | `/blog-grid` |
| Blog List | `/blog-list` |
| Blog Detail | `/blog/[slug]` |
| Testimonials | `/testimonials` |
| Contact Us | `/contact-us` |
| FAQ | `/faq` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-conditions` |
| 404 | `/404` |
| Password Protected | `/401` |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |
| `npm run check` | Run Astro type checking |

## Project Structure

```
buildo-astro/
  public/
    fonts/              Self-hosted Outfit font files
    images/             Static images
    scripts/            Reveal & parallax scripts
    favicon.svg
    robots.txt
  src/
    assets/images/      Optimized images (processed by Astro)
    components/         64 Astro components
    data/               Content data files (TypeScript)
    layouts/
      BaseLayout.astro  HTML shell, head, global styles
      PageLayout.astro  Header + footer wrapper
    pages/              23 page routes
    styles/
      global.css        Font faces, base styles, animations
    utils/
      resolveImage.ts   Image path resolver utility
  astro.config.mjs
  tailwind.config.js
  tsconfig.json
  package.json
```

## Customization

### Site Configuration

Update your site details in `src/data/site.ts`:

```typescript
export const site = {
  name: 'Your Company',
  description: 'Your site description',
  locale: 'en',
  phone: 'your-phone',
  url: 'https://your-domain.com'
};
```

Also update the `site` field in `astro.config.mjs` to match your production domain:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### Colors & Design Tokens

Edit `tailwind.config.js` to customize the color palette:

- `brand-primary` - Primary accent color (default: `#ff7a01`)
- `brand-secondary` - Secondary accent color (default: `#598989`)
- `ink-body` - Body text color
- `ink-heading` - Heading text color
- `surface-white` - Background color

### Fonts

Self-hosted Outfit font files are in `public/fonts/`. To change fonts:

1. Replace font files in `public/fonts/`
2. Update `@font-face` declarations in `src/styles/global.css`
3. Update the `fontFamily` config in `tailwind.config.js`

### Content

All content is managed through TypeScript data files in `src/data/`:

- `nav.ts` - Navigation menu items
- `footer.ts` - Footer content
- `blog-posts.ts` - Blog articles
- `services.ts` - Service offerings
- `projects.ts` - Project portfolio
- `team.ts` - Team member profiles
- `testimonials.ts` - Client testimonials
- `faqs.ts` - FAQ entries

## Deployment

This theme generates a fully static site. Deploy the `dist/` folder to any static hosting provider:

- [Netlify](https://docs.astro.build/en/guides/deploy/netlify/)
- [Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Cloudflare Pages](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

## Tech Stack

- [Astro](https://astro.build/) v5 - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) v3 - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- Zero JavaScript frameworks - Pure Astro components

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
