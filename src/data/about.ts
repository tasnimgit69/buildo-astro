import { resolveImage } from '../utils/resolveImage';

export const about = {
  heading: {
    subtitle: 'About Us',
    title: 'We Create Buildings That Meet Your Needs.',
    description:
      'Established in 1995, StoneHaven Builders has been the cornerstone of landmark projects across New York. We blend traditional craftsmanship with modern techniques to create lasting edifices.'
  },
  bullets: [
    'Certified Engineers',
    'Expert Engineers',
    'Certified Engineers',
    '100% Better Results'
  ],
  excerpt:
    "Explore the possibilities with Buildo and let's embark on a journey to build a future.",
  ctas: [
    { label: 'Discover More', href: '/about-us', variant: 'primary' },
    { label: 'Call Now', href: 'tel:+12458625', variant: 'outline' }
  ],
  image: {
    src: resolveImage('/images/about-us-main-img.webp'),
    alt: 'About Us main image'
  },
  shape: {
    src: resolveImage('/images/about-us-shape-img.png'),
    alt: 'About Us shape'
  },
  experience: {
    years: '25',
    label: 'Years',
    description: 'Of Experience in\nThis Company.'
  }
};

