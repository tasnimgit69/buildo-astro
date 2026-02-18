# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Buildo construction/business website template built with Astro and Tailwind CSS. This is the primary Astro implementation directory.

The parent project folder also contains a **buildo-webflow** directory with a static Webflow export for reference only.

## Common Commands

Run all commands from the project root:

```bash
# Install dependencies
npm install

# Development server (runs on localhost:4321)
npm run dev

# Production build (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- <command>
```

## Architecture

### Framework Stack
- **Astro 5.x**: Static site generator with component islands architecture
- **Tailwind CSS 3.x**: Utility-first CSS framework with custom design tokens
- **TypeScript**: Strict type checking enabled ([tsconfig.json](tsconfig.json))

### Data Layer Pattern

Content is managed through TypeScript files in [src/data/](src/data/) that export structured data objects. This allows for type-safe content management without a CMS.

**Key data files:**
- [blog-posts.ts](src/data/blog-posts.ts): Blog post entries with slug, title, dates, images, and content
- [services.ts](src/data/services.ts): Service offerings with nested details, tabs, and client feedback
- [projects.ts](src/data/projects.ts): Project portfolio items
- [team.ts](src/data/team.ts): Team member profiles
- [testimonials.ts](src/data/testimonials.ts): Client testimonials
- [nav.ts](src/data/nav.ts): Navigation structure
- [site.ts](src/data/site.ts): Global site metadata
- [home-two.ts](src/data/home-two.ts): Home Two page data (overrides base data with page-specific content)
- [home-three.ts](src/data/home-three.ts): Home Three page data

Pages import and consume this data directly. When adding new content, update the relevant data file rather than hardcoding content in components.

### Image Handling

The [resolveImage](src/utils/resolveImage.ts) utility converts path strings to Astro ImageMetadata objects:

```typescript
import { resolveImage } from '../utils/resolveImage';

const image = resolveImage('/images/example.png');
// Resolves to /src/assets/images/example.png
```

- All images are stored in [src/assets/images/](src/assets/images/)
- Use `/images/` paths in data files, which get resolved to actual asset imports
- This enables Astro's built-in image optimization

### Layout System

**Base layouts:**
- [BaseLayout.astro](src/layouts/BaseLayout.astro): Provides HTML structure, meta tags, and global scripts
- [PageLayout.astro](src/layouts/PageLayout.astro): Extends BaseLayout and adds Header/Footer. Supports `footerPaddingTop` prop to override default Footer padding per page.

**Page variants:**
- [index.astro](src/pages/index.astro): Default home page (fully converted)
- [home-two.astro](src/pages/home-two.astro): Alternative home layout (fully converted, pixel-perfect responsive)
- [home-three.astro](src/pages/home-three.astro): Third home variation (structure in place, needs responsive audit)

### Dynamic Routes

The site uses Astro's file-based routing with dynamic segments:

- `/blog/[slug].astro`: Blog post detail pages
- `/services/[slug].astro`: Service detail pages
- `/projects/[slug].astro`: Project detail pages
- `/teams/[slug].astro`: Team member detail pages

These pages use `getStaticPaths()` to generate routes from data files at build time.

### Component Organization

Components in [src/components/](src/components/) follow a sectional pattern with variant suffixes:

- **Section components**: Full page sections (e.g., `ServicesSection.astro`, `ServicesTwoSection.astro`, `ServicesThreeSection.astro`)
- **Card components**: Reusable content cards (e.g., `ServiceCard.astro`, `ServiceCardTwo.astro`, `BlogCard.astro`)
- **Utility components**: Layout and formatting helpers (e.g., `Container.astro`, `SectionHeading.astro`)
- **Global components**: `Header.astro`, `Footer.astro`, `BreadcrumbHero.astro`

**Variant naming convention:**
- Base (no suffix): Used by index.astro (home one)
- `Two` suffix: Used by home-two.astro
- `Three` suffix: Used by home-three.astro

**Shared components across variants:**
- [BlogCard.astro](src/components/BlogCard.astro): Shared by both BlogSection and BlogTwoSection (with `variant="grid"` and `variant="list"` props)
- [BrandLogoStrip.astro](src/components/BrandLogoStrip.astro): Shared by both index.astro and home-two.astro

Pages compose these sections to build full layouts. Most sections pull data from [src/data/](src/data/) files.

### Styling System

[tailwind.config.js](tailwind.config.js) extends Tailwind with a comprehensive design system:

- **Custom colors**: `brand.primary` (#ff7a01), `brand.secondary`, `ink.black` (#090e2a), `ink.body`, `surface.white`, `surface.gray` (#f9fafb), `neutral.*`, `gold` (#fec84b)
- **Typography scale**: Named sizes like `text-hero`, `text-h1`, `text-body`, `text-nav`, `text-button`
- **Custom spacing**: Pixel-based spacing tokens (e.g., `gap-24`, `p-50`)
- **Custom screens**: `max-991`, `max-767`, `max-479`, `xl` (1280px), `min-992`, `min-1920` — NOT standard Tailwind `lg`, `md`, etc.
- **Shadows**: `shadow-sm`, `shadow-team`, `shadow-nav`, etc.
- **Container**: `mx-auto w-full max-w-container px-15 xl:max-w-page` (page max-width 1170px)

**Important:** Tailwind preflight is disabled (`corePlugins.preflight: false`). This means browser defaults apply — all borders need explicit `border-solid` class. Base styles are defined in [src/styles/global.css](src/styles/global.css).

The Outfit font family is loaded via `@font-face` declarations in [global.css](src/styles/global.css).

**Section padding patterns:**
- `.section-padding-top-90`: `pt-90 max-991:pt-70 max-767:pt-50`
- `.section-padding-bottom-100`: `pb-100 max-991:pb-80 max-767:pb-60`
- `.section-padding-top-100`: `pt-100 max-991:pt-80 max-767:pt-60`

**Common button patterns:**
- Outline: `flex items-center gap-8.5 border-1.5 border-solid border-ink-black px-24 py-12 text-button tracking-button text-ink-black transition-colors duration-300 hover:bg-ink-black hover:text-surface-white`
- Filled CTA: `flex items-center gap-8.5 bg-ink-black px-24 py-12 text-button tracking-button text-surface-white transition-colors duration-300 hover:bg-brand-primary`

**Section heading patterns:**
- Left-aligned with shape bar (home one): Shape bar above title, subtitle, optional CTA in grid
- Centered with shape bar (home two): `text-center`, shape bar as `inline-block` with `mb-10`, section gap `mb-50 max-991:mb-40 max-767:mb-30`

**Responsive overrides via CSS media queries:** Some responsive behavior is managed through CSS media queries in [global.css](src/styles/global.css) rather than Tailwind utility classes, using data-attribute selectors for higher specificity:

- **`overflow-x: hidden`** on both `html` and `body` to prevent horizontal scrollbar on small devices
- **Page container** (`.max-w-container`): 960px default, 720px at 768–991px, 100%/auto at ≤767px
- **Team modal** (`[data-team-modal] [role="dialog"]`):
  - Default: `max-width: 960px`
  - 992–1199px: `max-width: 100%; width: auto` + responsive image (`aspect-ratio: 320/398`)
  - 768–991px: `max-width: 100%; width: auto` + responsive image (`aspect-ratio: 320/398`)
  - ≤767px: `max-width: 100%; width: auto` + `max-height: 90vh; overflow-y: auto` + `margin: 0 10px` + close button repositioned to `top: 10px; right: 10px` + responsive image
- **Note:** The modal dialog width is fully managed via CSS in global.css (no Tailwind `max-w-*` classes on the element). Padding is still managed via Tailwind classes on the element (`p-80`, `max-767:p-[50px_30px]`, `max-479:pb-30 max-479:pr-20`).

**Header breakpoint:** The mobile/desktop header transition uses the custom `min-992` breakpoint (992px) instead of the default Tailwind `lg` (1024px). All header responsive classes use `max-991:` and `min-992:` prefixes.

**Header logo:** Width is 136px (`w-[136px]` with `h-auto`).

### Client-Side Scripts

Two vanilla JavaScript modules are bundled inline in [BaseLayout.astro](src/layouts/BaseLayout.astro) via `<script>` tags (processed by Astro):

- **Reveal script**: Scroll-based reveal animations using IntersectionObserver
- **Mouse parallax script**: Mouse-tracking parallax effects

**Reveal animation system** ([global.css](src/styles/global.css) + inline script in BaseLayout):
- `.reveal`: Fade in (opacity 0→1)
- `.reveal-top`: Slide down from -30px + fade in
- `.reveal-bottom`: Slide up from 30px + fade in
- `.reveal-grow`: Scale up from 0.75→1 + fade in
- All use `transition: opacity 0.6s ease, transform 0.6s ease`
- IntersectionObserver adds `is-visible` class on scroll into view
- CSS delay classes (`.delay-1` through `.delay-6`) only scoped to `.reveal`, not other variants
- For `.reveal-grow` delays, use inline `style="transition-delay: 0.3s"` instead

**Component-level scripts:**

- **Project slider** ([ProjectsSection.astro](src/components/ProjectsSection.astro)): Transform-based carousel with loop wrapping using modulo (`((index % total) + total) % total`), dot navigation, and touch swipe support.
- **Team modal** ([TeamSection.astro](src/components/TeamSection.astro)): Inline script with `define:vars` to pass processed team data. Opens modal on `[data-team-open]` click, populates content dynamically, includes focus trapping and Escape key close.
- **Mobile nav** ([Header.astro](src/components/Header.astro)): Off-canvas menu toggled via `.nav-open` / `.nav-overlay-visible` CSS classes (with `!important` for JS-driven state). Dropdown menus toggled via `[data-dropdown-toggle]`.

### Key Patterns and Conventions

**HTML in data strings:** Use Astro's `set:html` directive to render HTML tags embedded in data strings (e.g., `<br />` in titles):
```astro
<!-- In data: title: 'Line One<br />Line Two' -->
<h2 set:html={heading.title} />
```

**Per-page prop overrides:** Props can be passed through the layout chain. Example: `footerPaddingTop` flows from page → PageLayout → Footer:
```astro
<!-- home-two.astro -->
<PageLayout footerPaddingTop="pt-100 max-991:pt-80 max-767:pt-60">
```

**SVG half-star rating:** Uses clipPath technique — full star drawn in gray (#F3F4F6), then same star clipped to left half (`width=12` of 24) filled with gold. See [TestimonialsTwoSection.astro](src/components/TestimonialsTwoSection.astro).

**Data override pattern for page variants:** Home Two data file spreads base data objects and overrides specific fields:
```typescript
// home-two.ts
export const homeTwoTestimonials = {
  item: {
    ...testimonials.items[0],  // spread base data
    quote: 'Custom quote text',  // override specific fields
    image: { src: resolveImage('/images/custom.png'), alt: 'Alt' }
  }
};
```

## Development Guidelines

### Adding New Content

1. **Blog posts**: Add entries to [blog-posts.ts](src/data/blog-posts.ts)
2. **Services**: Add to `items` array in [services.ts](src/data/services.ts)
3. **Projects**: Add to [projects.ts](src/data/projects.ts)
4. **Team members**: Add to [team.ts](src/data/team.ts)

Ensure all slugs are unique and kebab-cased.

### Adding New Pages

Static pages go in [src/pages/](src/pages/). Use `.astro` extension. Pages automatically become routes based on filename.

### Working with Images

1. Place images in [src/assets/images/](src/assets/images/)
2. Reference using `/images/` path in data files
3. Import `resolveImage` utility where needed
4. The utility handles conversion to optimized ImageMetadata

### Modifying Styles

- Use Tailwind utilities wherever possible
- Add custom design tokens to [tailwind.config.js](tailwind.config.js) rather than arbitrary values
- Global CSS modifications go in [src/styles/global.css](src/styles/global.css)
- Component-scoped styles use `<style>` blocks in `.astro` files

### TypeScript

The project uses Astro's strict TypeScript config. Type definitions are auto-generated in `.astro/types.d.ts` during dev server startup.

**Known diagnostic:** `resolveImage()` returns `string | ImageMetadata`, which causes pre-existing TypeScript diagnostics in some components. This does not affect the build.

## Change Log

### Completed — Home One (index.astro)

- **Webflow to Astro conversion**: All home page sections (Hero, Services, About, Projects, Testimonials, Team, Blog, CTA), Header, Footer
- **Mobile off-canvas menu**: Slide-in nav with overlay, dropdown support, `.nav-open` / `.nav-overlay-visible` CSS classes with `!important`, `box-shadow` fix
- **Header breakpoint**: Changed from Tailwind `lg:` (1024px) to custom `min-992:` (992px). All `lg:` replaced with `min-992:` in [Header.astro](src/components/Header.astro)
- **Header logo**: Width set to 136px
- **Project slider loop**: Converted from scroll-snap to transform-based slider with modulo wrapping, dot navigation, and touch swipe in [ProjectsSection.astro](src/components/ProjectsSection.astro)
- **Horizontal overflow fix**: `overflow-x: hidden` on both `html` and `body` in [global.css](src/styles/global.css)
- **Container responsive widths**: CSS media queries for `.max-w-container` — 720px at 768–991px, 100%/auto at ≤767px
- **Team modal responsive widths**: CSS media queries for `[data-team-modal] [role="dialog"]` — 960px default, 100%/auto at 992–1199px and 768–991px, 100% at ≤767px
- **Team modal responsive image**: `width: 100%; height: auto; aspect-ratio: 320/398` at 992–1199px, 768–991px, and ≤767px
- **Team modal mobile fixes (≤767px)**: `max-height: 90vh; overflow-y: auto`, close button repositioned inside dialog, margins reduced to 10px
- **Border fixes**: Added `border-solid` to all borders due to `preflight: false`

### Completed — Home Two (home-two.astro)

All sections pixel-perfect converted and responsive-audited:

- **HeroTwo**: Full hero section with dual CTAs (Get a Quote + Call Now), hero image and decorative shapes
- **BrandLogoStrip**: Shared with home one, brand logo row on dark background
- **ServicesTwoSection**: 6 service cards with `reveal-grow` animation (scale 0.75→1) and 300ms transition delay. Uses [ServiceCardTwo.astro](src/components/ServiceCardTwo.astro)
- **AboutTwoSection**: Two-column layout (content + image with experience badge), bullet list, dual CTAs. `reveal-grow` animation with 300ms delay on all elements. Image section has decorative overlay with years-of-experience counter
- **ProjectsTwoSection**: 3 project cards in grid with left-aligned heading
- **TeamTwoSection**: 3 team member cards with centered heading, shape bar
- **TestimonialsTwoSection**: Single featured testimonial with:
  - 4.5 star rating using SVG clipPath (4 full gold stars + 1 half-star)
  - Custom quote text override
  - Title with `<br />` line break via `set:html`
  - Fully responsive heading grid: `8fr/4fr` → `7fr/5fr` at 1440px → 1 col at 479px
  - Quote with xl overrides: `xl:mt-35 xl:mr-10 xl:text-[30px] xl:leading-[39px]`
- **BlogTwoSection**: Rewritten to use shared [BlogCard.astro](src/components/BlogCard.astro) component (grid + list variants). Centered heading with inline-block shape bar. Filled CTA button at bottom, centered with `mt-60`
- **CtaTwoSection removed**: Section removed from home-two page (component still exists for other pages)
- **Footer padding override**: `footerPaddingTop="pt-100 max-991:pt-80 max-767:pt-60"` via prop chain through [PageLayout.astro](src/layouts/PageLayout.astro) → [Footer.astro](src/components/Footer.astro)

### Completed — Home Three (home-three.astro)

**Pixel-perfect converted and responsive-audited sections:**

- **HeroThree**: Full hero section with animations and responsive typography
- **BrandLogoStripThree**: Brand logo row with dark background
- **ServicesThreeSection**:
  - 3 service cards using [ServiceCardThree.astro](src/components/ServiceCardThree.astro)
  - Cards with hover effects (border, bg-color, shadow change on hover)
  - SectionHeading with xl typography override: `xl:text-[46px] xl:leading-[55.2px]`
  - Fully responsive across all breakpoints
- **AboutThreeSection**:
  - Two-column grid layout with image + content
  - Grid container: `p-[60px_40px] shadow-[0_8px_64px_rgba(25,35,63,0.06)]` with responsive variants
  - Experience badge with years counter
  - Shape image animations:
    - `.about-shape-float`: Float up/down animation (translateY 0 → -15px), 3s infinite
    - `.about-shape-rotate`: Rotate back/forth animation (0° → 10° → -10°), 4s infinite
  - Dual CTAs: primary (filled) + secondary (outline with arrow)
  - Main image with `h-auto` and hover scale effect
  - Fully responsive: `max-991:grid-cols-1`, `max-479:p-[40px_20px_30px]`
- **ProjectsThreeSection**:
  - 2-column asymmetric grid (left: 1 large project, right: 2 stacked projects)
  - Grid: `grid-cols-2 gap-30 max-767:grid-cols-1`
  - Project title responsive typography via scoped CSS:
    - Default: 26px/36.4px
    - max-991: 22px/33px
    - max-767: 24px/34px
    - max-479: 21px/31px
  - Hover overlay with gradient (`bg-darkfade-70`) and slide-up animation
  - Category labels with SectionHeading (added subtitle "Completed Projects")

**Tailwind config additions for Home Three:**
- Screen: `'min-1440': { min: '1440px' }`
- Spacing: `'33'`, `'102'`, `'114'`, `'130'`, `'182'`

**Data layer updates:**
- [home-three.ts](src/data/home-three.ts):
  - AboutThreeSection: Changed `cta` to `primaryCta` + added `secondaryCta`
  - ProjectsThreeSection: Added `subtitle: 'Completed Projects'` to heading

### Completed — About Us Page (about-us.astro)

- **Page layout**: Uses `headerLogoVariant="black"` for black header logo on light background
- **ValuesSection.astro**: Card hover effects (`hover:-translate-y-[5px] hover:shadow-[0_16px_40px_#19233f14]`), icon hover (`group-hover:bg-[#598989] group-hover:text-white`), fixed title font-size (`text-h3 tracking-h3`), fully responsive (991, 767, 479)
- **MissionGoalSection.astro**: Complete rewrite — mission grid `grid-cols-[7fr_5fr]`, goal grid `grid-cols-[5fr_7fr]`, gap `min-992:gap-60`, images `h-auto w-full rounded-8`, bullet list with check icon background image, fully responsive
- **Component swaps**: Replaced `TeamSliderSection` → `TeamThreeSection`, replaced `CtaTwoSection` → `CtaThreeSection`
- **Header.astro**: Added `logoVariant` prop ('default' | 'black'). Default: `/images/logo.png`, Black: `/images/footer-logo-black.png`
- **PageLayout.astro**: Added `headerLogoVariant` prop to pass logo variant through to Header

### Completed — 401.astro (Protected Page)

Standalone page (no header/footer), imports `global.css` directly:
- Image: `h-auto`, `xl:w-[440px]` for 1280px breakpoint
- Button: `border-0`, `font-sans`
- Label: `text-center`, `font-sans`
- Input: `font-sans`, `box-border` to prevent overflow beyond 600px container
- Typography: Removed scoped `.protected-title` styles — h2 inherits responsive sizes from `global.css` (1280px: 46px/55.2px)
- Layout: `px-15` padding, `box-border` on outer wrapper
- Fully responsive across all breakpoints

### Completed — 404.astro (Not Found Page)

Complete rewrite as standalone page (no header/footer), imports `global.css` directly:
- Copied `404.png` image from webflow project
- Container: `max-w-container xl:max-w-page max-991:max-w-720 max-767:max-w-full`
- Image: `w-[400px] min-1920:w-full max-767:w-[350px] max-479:w-full`
- Button: rounded pill style with brand colors
- Fully responsive across all breakpoints including 1920px

### Completed — TeamThreeSection Slider Rewrite

Rewrote the team slider in [TeamThreeSection.astro](src/components/TeamThreeSection.astro) from scroll-snap to a proper **transform-based carousel** (like SwiperJS):
- **JS-calculated pixel widths**: Reads actual viewport container width, computes card widths as `(viewportWidth - (slidesPerView - 1) * gap) / slidesPerView`, applies via `card.style.width` — eliminates CSS `calc()` percentage issues in flex containers
- **Transform-based sliding**: `translateX()` on the track with `transition-transform duration-300 ease-out`
- **Responsive slides per view**: 4 (desktop) / 2 (tablet ≤991px) / 1 (mobile ≤767px)
- **Responsive gaps**: 24px (desktop) / 20px (tablet) / 15px (mobile)
- **Dynamic dots**: 5 dots rendered in HTML, JS shows/hides based on `maxIndex + 1` (e.g., 2 dots on desktop with 5 items)
- **Touch/swipe**: Horizontal swipe detection with 25% threshold, prevents vertical scroll hijacking
- **Mouse drag**: Click-and-drag with `cursor: grab/grabbing` states, prevents accidental link clicks
- **Resize handling**: Debounced (150ms) recalculation of widths, slides per view, and dot visibility
- **Hover effects**: Card bg change to brand-secondary, text/links/socials turn white, image scale + border color, all via scoped CSS

### Completed — Blog Detail Page (blog/[slug].astro)

- **footerVariant="light"**: Added light footer variant to PageLayout
- **Component swap**: Replaced `CtaTwoSection` → `CtaThreeSection`
- **MoreBlogSection.astro**: Complete rewrite — displays 3 related blog posts (excluding current post), responsive grid layout, shared BlogCard component

### Completed — Team Detail Pages (teams/[slug].astro)

- **footerVariant="light"**: Added light footer variant to PageLayout
- **Component swap**: Replaced `CtaTwoSection` → `CtaThreeSection`
- **BreadcrumbHero**: title="Team Details", crumb="Team Details"
- **Team member detail content** (all 7 members in [team.ts](src/data/team.ts)):
  - **Ana Carrillo**: detailImage `team-large-7.png`, bio, skills (Interior Design 85%, Consultant 75%, Machin Learning 90%, Visual Concept 50%)
  - **Lorena Doran**: detailImage `team-large-6.png`, bio, skills (Interior Design 95%, Consultant 55%, Machin Learning 85%, Visual Concept 70%)
  - **Charles Brown**: detailImage `team-large-5.png`, bio, skills (Interior Design 75%, Consultant 90%, Machin Learning 60%, Visual Concept 80%)
  - **Edward Gravitt**: detailImage `team-large-4.png`, bio, skills (Interior Design 95%, Consultant 85%, Machin Learning 75%, Visual Concept 65%)
  - **Robin Row**: detailImage `team-large-3.png`, bio, skills (Interior Design 55%, Consultant 65%, Machin Learning 75%, Visual Concept 85%)
  - **Kristen Craft & Ella West**: Bio and skills updated (no detailImage — uses default `image` fallback)
- **TeamDetailsSection.astro**: Uses `(member.detailImage || member.image).src` pattern for image fallback

### Completed — License Page (template-info/license.astro)

Complete rewrite with exact webflow Tailwind CSS:
- **footerVariant="light"**: Added light footer variant
- **Data-driven**: `licenseItems` array in frontmatter with 4 items (Images/Freepik, Fonts/Google Outfit, Illustrations/Blush, Icons/Flaticon)
- **license-area**: `pt-[90px] pb-100 max-991:pt-[70px] max-991:pb-80 max-767:pt-50 max-767:pb-60`
- **license-title**: `text-center mb-[45px]`
- **license-excerpt**: `mx-auto max-w-[700px] max-479:max-w-full`
- **license-wrapper**: `mt-60 grid grid-cols-[1fr_1fr] gap-30 max-767:mt-40 max-479:mt-30 max-479:grid-cols-[1fr]`
- **license-single-item**: `rounded-[10px] border border-solid border-[#ccc] bg-white p-[40px] shadow-[0_6px_15px_#0000001a] xl:px-50 max-767:px-30 max-479:p-20`
- **link-button**: `flex items-center gap-[10px] text-[16px] font-medium leading-[24px] tracking-[-0.16px] text-brand-secondary hover:text-brand-primary` with arrow SVG icon
- Fully responsive across all breakpoints

### Completed — Changelog Page (template-info/changelog.astro)

Complete rewrite with exact webflow Tailwind CSS:
- **footerVariant="light"**: Added light footer variant
- **changelog-area**: `pt-100 pb-100 max-991:pt-80 max-991:pb-80 max-767:pt-60 max-767:pb-60`
- **changelog-wrap**: `mx-auto max-w-[550px] rounded-[5px] bg-[#f5f5f5] px-30 pt-50 pb-[47px] text-center max-767:max-w-[450px] max-479:px-20 max-479:pt-[40px] max-479:pb-[37px]`
- **released-date-wrap**: `flex items-center justify-center gap-30 max-479:block`
- **initial-released**: `inline-block bg-brand-secondary px-20 py-[12px] text-[18px] font-medium text-white` (inline-block prevents full-width stretch when parent is block on mobile)
- **released-date**: `text-[18px] font-medium text-[#252525] max-479:mt-20`
- **Content**: Version 1.0, "Initial Released", 23 Jan 2024
- Fully responsive across all breakpoints

### Completed — Services Pages

- **ServicesGridSection**: Shows 6 card items (`allItems.slice(4, 10)`) on [services.astro](src/pages/services.astro)
- **services.astro**: `footerVariant="light"`, CtaThreeSection
- **services/[slug].astro**: `footerVariant="light"`, replaced `CtaTwoSection` → `CtaThreeSection`, passes `currentSlug` to MoreServicesSection
- **MoreServicesSection.astro**: Complete rewrite with exact webflow CSS:
  - Heading area: `grid grid-cols-[8fr_4fr]` with "All Services" outline button (rounded-50, border-1.5 border-ink-black, hover:bg-ink-black hover:text-white)
  - Card grid: `grid-cols-4 max-991:grid-cols-2 max-479:grid-cols-1` with gap-30
  - Cards: Uses ServiceCard component with `rounded-8 border border-solid border-[#e5e7eb] overflow-hidden` wrapper
  - Shows 4 items from services.items[0:4], excluding current service via `currentSlug` prop
  - `reveal-bottom` animation with staggered delays
  - Fully responsive heading: xl:mb-60, max-991:mb-40, max-767:mb-30, max-479:grid-cols-1 justify-items-center
- **services.ts**: Added 6 new home-two service entries (Design-Build Services, Renovations, General Construction, Industrial Construction, Commercial Construction, Residential Construction) with full richContent tabs and feedback
- **ServiceDetailsSection title**: Added `xl:text-[60px] xl:leading-[66px]` for large device font-size

### Completed — Terms & Conditions Page (terms-conditions.astro)

- **footerVariant="light"**: Added light footer variant
- **BreadcrumbHero**: Custom `sectionClass` with responsive padding for negative margin pull-up effect
- **LegalSection variant="terms"**: Complete rewrite with exact webflow CSS:
  - `terms-and-conditions-wrap`: `relative z-[1] -mt-[252px] ml-50 mr-50 rounded-16 border border-neutral-200 bg-white px-30 pt-[51px] pb-[54px]`
  - Responsive: `max-991:ml-100 mr-100 -mt-[150px]`, `max-767:-mt-[100px] ml-0 mr-0 pt-[41px] pb-[44px]`, `max-479:-mt-[50px] px-20 pt-[53px] pb-[53px]`
  - `terms-and-conditions-title`: `text-[32px] leading-[41.6px] tracking-[0.32px] mb-15`, responsive: `max-767:text-[28px] leading-[38px]`, `max-479:text-[24px] leading-[30px]`
  - `terms-and-conditions-excerpt`: `mb-[17px]`, last paragraph `mb-0`
  - Section spacing: `mb-[43px] max-479:mb-[36px]`, last section `mb-0`
  - Multi-paragraph support: `content` as string[] with proper paragraph spacing
- **legal.ts terms content**: Updated to multi-paragraph arrays matching webflow exactly (5 sections: Use of the Site, Intellectual Property, User Accounts, Limitation of Liability, Governing Law)

### Completed — Privacy Policy Page (privacy-policy.astro)

- **footerVariant="light"**: Added light footer variant
- **LegalSection variant="privacy"**: Complete rewrite with exact webflow CSS:
  - `section-padding-top-100 section-padding-bottom-100`: `pt-100 pb-100 max-991:pt-80 pb-80 max-767:pt-60 pb-60`
  - `privacy-policy-grid-wrap`: `grid grid-cols-2 gap-30 max-767:grid-cols-1`
  - `single-privacy-policy`: `rounded-8 pt-[23px] px-30 pb-25 shadow-[0_0_20px_#0000001a] max-479:px-20`
  - `privacy-policy-title`: `mb-10 max-479:mb-12`
  - `privacy-policy-excerpt`: `mb-0 text-body tracking-body text-ink-body`
  - `privacy-policy-list-wrap` (footer): `mt-30`, same card styling as sections
  - `reveal` animation on each card
- **legal.ts privacy content**: Updated all 10 sections with full webflow content, titles with colons, and extended footer text

### Completed — Marketplace Evaluation & Polish

**Critical fixes:**
- **BaseLayout.astro title**: Changed from test value `'Buildo tttt'` to `'Buildo - Construction Company Website Template'`
- **BaseLayout.astro description default**: Changed from `description = ''` to `description = site.description`
- **contact.ts encoding bug**: Fixed `'Let�s Build Your Vision Together'` → `"Let's Build Your Vision Together"`
- **footer.ts typo**: Fixed `'Trams & Conditions'` → `'Terms & Conditions'`
- **projects.ts / home-two.ts / home-three.ts typo**: Fixed `'Qualify Projects'` → `'Quality Projects'`
- **Canonical URL bug**: Removed `url={site.url}` from all 16 static pages — was causing all pages to share the same canonical URL. Now uses `Astro.url?.toString?.()` fallback in BaseLayout for page-specific URLs.

**Layout cleanup:**
- **Deleted Layout.astro**: Removed unused Astro boilerplate file (only BaseLayout + PageLayout are used)
- **PageLayout.astro**: Removed redundant default values and unused `resolveImage` import — BaseLayout handles all defaults
- **OG/Twitter image**: Fixed to use absolute URL: `rawImage.startsWith('http') ? rawImage : \`${site.url}${rawImage}\``

**Performance:**
- Fonts converted from TTF to WOFF2 (63-65% smaller): Regular 53KB→20KB, Medium 53KB→19KB, SemiBold 54KB→20KB
- Deleted unused Outfit-Bold.ttf and Outfit-ExtraBold.ttf
- Updated @font-face in global.css and preload links in BaseLayout to WOFF2
- Moved reveal.js and mouse-parallax.js from `public/scripts/` into BaseLayout inline `<script>` tags (bundled by Astro)
- Deleted `public/scripts/` directory

**SEO:**
- All 16 static pages now have unique page descriptions (was generic `site.description`)
- JSON-LD Organization schema added to BaseLayout.astro
- JSON-LD BreadcrumbList schema added to BreadcrumbHero.astro
- JSON-LD BlogPosting schema added to blog/[slug].astro
- RSS feed added via `@astrojs/rss` at `/rss.xml`
- `<link rel="canonical">` added using `canonicalUrl` in BaseLayout
- Font preload links for all 3 weights in BaseLayout

**Accessibility:**
- TeamSection/TeamTwoSection/TeamGridSection: modal open sets `aria-hidden="true"` on `<main>`, close removes it
- Header.astro: added Escape key handler, Arrow Up/Down/Home/End keyboard nav within dropdown menus
- Footer.astro: social icon touch targets increased to 44px
- ContactSection.astro: form inputs have `focus:ring-1 focus:ring-brand-secondary`, checkbox has `aria-label`
- 401.astro & 404.astro: changed `<h2>` to `<h1>` for proper heading hierarchy, added `<meta name="description">`
- 5 carousel components: added `focus-visible:outline` to pagination dots
- global.css: added `@media (prefers-reduced-motion: reduce)` — disables all reveal animations

**Marketplace compliance:**
- package.json: name `buildo-astro`, keywords `astro-component/withastro/astro-theme`, engines `>=18`
- LICENSE (MIT) file created at project root
- README.md created following marketplace template structure
- astro.config.mjs: added `site: 'https://example.com'` + `@astrojs/sitemap` integration
- Deleted static `public/sitemap.xml` — now auto-generated by `@astrojs/sitemap`
- robots.txt: updated sitemap URL to `sitemap-index.xml`

**Other fixes:**
- Removed duplicate `.reveal-top` CSS rule from global.css
- Replaced `favicon.ico` with `favicon.svg` + `webclip.svg` in BaseLayout, 401.astro, 404.astro
- Deleted `public/favicon.ico`
- Header dropdown box-shadow: `shadow-[0_4px_20px_rgba(0,0,0,0.1)]`
- index.astro title: `'Buildo - Construction Company Website Template'`

### Remaining / TODO

**Typo fix:**
- **"Machin" typo**: `team.ts` has "Machin Learning" (should be "Machine Learning") in 5 team member skill entries

**Home Three page ([home-three.astro](src/pages/home-three.astro)) — remaining sections:**
- **TestimonialsThreeSection**: Needs pixel-perfect audit and responsive implementation
- **BlogThreeSection**: Needs pixel-perfect audit and responsive implementation
- **CtaThreeSection**: Needs pixel-perfect audit and responsive implementation

**Pages needing responsive audit (pixel-perfect match to webflow):**
- [contact-us.astro](src/pages/contact-us.astro)
- [faq.astro](src/pages/faq.astro)
- [blog-grid.astro](src/pages/blog-grid.astro) / [blog-list.astro](src/pages/blog-list.astro)
- [projects.astro](src/pages/projects.astro)
- [teams.astro](src/pages/teams.astro)
- [testimonials.astro](src/pages/testimonials.astro)

**Before deployment:**
- **User must update**: `site: 'https://example.com'` in astro.config.mjs and `url` in site.ts to real domain

**Known team modal issues:**
- **Team modal at ≤479px**: The inner scroll wrapper (`max-479:h-[500px] max-479:overflow-auto`) uses Tailwind classes and may be redundant with the dialog's CSS `max-height: 90vh; overflow-y: auto` rule at ≤767px. Consider removing or consolidating.
- **Team modal padding**: Managed via Tailwind classes (`p-80`, `max-767:p-[50px_30px]`, `max-479:pb-30 max-479:pr-20`). Could be moved to CSS media queries for consistency with the width approach.
- **Team modal close button (≤991px)**: Still has Tailwind class `max-991:right-[-2%]` which may conflict with the CSS rule at ≤767px. The CSS rule wins at ≤767px due to higher specificity, but 768–991px still uses the Tailwind class.
- **Team modal grid layout**: Uses Tailwind classes `grid-cols-[4fr_8fr]`, `max-767:grid-cols-[5fr_7fr]`, `max-479:grid-cols-1`. Not yet moved to CSS media queries.

**Optional enhancements:**
- Consider migrating data files in `src/data/` to Astro content collections
- Consider adding `astro-compress` for additional minification
