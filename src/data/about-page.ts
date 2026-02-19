import { resolveImage } from '../utils/resolveImage';

export const aboutPage = {
  heading: {
    subtitle: 'About Us',
    title: 'We Create Buildings That Meet Your Needs.',
    description:
      'Established in 1995, StoneHaven Builders has been the cornerstone of landmark projects across New York. We blend traditional craftsmanship with modern techniques to create lasting edifices. We have a long and proud history giving emphasis to environment, social, and economic outcomes to deliver places that respond.'
  },
  bullets: [
    'Review Credit Reports',
    'Expert Engineers',
    '100% Better Results'
  ],
  excerpt:
    "Explore the possibilities with Buildo and let's embark on a journey to build a future where architecture meets innovation, and dreams become enduring realities.",
  image: {
    src: resolveImage('/images/about-us-main-img-3.webp'),
    alt: 'About image'
  },
  shapes: [
    { src: resolveImage('/images/about-us-3-shape-img-1.webp'), alt: 'About shape 1' },
    { src: resolveImage('/images/about-us-3-shape-img-2.webp'), alt: 'About shape 2' }
  ],
  experience: {
    years: '25',
    label: 'Years',
    description: 'Of Experience in\nThis Company.'
  }
};

