import { resolveImage } from '../utils/resolveImage';

export const homeHero = {
  title: 'Your Trusted Construction Partner Here',
  titleHighlight: 'Construction',
  description:
    'Involves building or renovating homes, apartments, and other residential structures.',
  primaryCta: { label: 'Get a Quote', href: '/contact-us' },
  secondaryCta: { label: 'Call Now', href: 'tel:456789' },
  stats: { value: '80K', label: 'Positive Reviewer' },
  brandLogos: [
    { src: resolveImage('/images/brand-logo-1.webp'), alt: 'Brand Logo 1' },
    { src: resolveImage('/images/brand-logo-2.webp'), alt: 'Brand Logo 2' },
    { src: resolveImage('/images/brand-logo-3.webp'), alt: 'Brand Logo 3' },
    { src: resolveImage('/images/brand-logo-4.webp'), alt: 'Brand Logo 4' },
    { src: resolveImage('/images/brand-logo-5.webp'), alt: 'Brand Logo 5' }
  ],
  images: {
    hero: {
      src: resolveImage('/images/hero-main-img.webp'),
      alt: 'Hero main image'
    },
    shapes: [
      { src: resolveImage('/images/hero-shape-img-1.png'), alt: 'Hero shape 1' },
      { src: resolveImage('/images/hero-shape-img-2.webp'), alt: 'Hero shape 2' },
      { src: resolveImage('/images/hero-shape-img-3.webp'), alt: 'Hero shape 3' }
    ],
    reviewers: [
      { src: resolveImage('/images/hero-reviewer-img-1.webp'), alt: 'Reviewer 1' },
      { src: resolveImage('/images/hero-reviewer-img-2.webp'), alt: 'Reviewer 2' },
      { src: resolveImage('/images/hero-reviewer-img-3.webp'), alt: 'Reviewer 3' },
      { src: resolveImage('/images/hero-reviewer-img-4.webp'), alt: 'Reviewer 4' }
    ]
  }
};

