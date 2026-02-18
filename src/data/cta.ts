import { resolveImage } from '../utils/resolveImage';

export const cta = {
  title: 'Contact Us Today for a Free Consultation',
  primary: { label: 'Get in Touch', href: '/contact-us' },
  secondary: { label: 'Call Now', href: 'tel:+142555364656' },
  shapes: [
    { src: resolveImage('/images/cta-shape-img-1.png'), alt: 'CTA shape 1' },
    { src: resolveImage('/images/cta-shape-img-2.png'), alt: 'CTA shape 2' }
  ]
};

