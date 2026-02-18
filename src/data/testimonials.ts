import { resolveImage } from '../utils/resolveImage';

export const testimonials = {
  heading: {
    subtitle: 'Testimonials',
    title: 'What Our Customers Say About Us'
  },
  rating: {
    label: '90% Customer Satisfaction',
    detail: 'based on 750+ reviews and 6,154 Completed Projects.'
  },
  cta: { label: 'Discover More', href: '/testimonials' },
  items: [
    {
      quote:
        'Exceptional team, surpassed expectations with their professional approach and flawless execution. Highly recommended!',
      name: 'Renee Wells',
      role: 'Product Designer, Quotient',
      image: { src: resolveImage('/images/testimonial.png'), alt: 'Renee Wells' },
      rating: '4.5'
    },
    {
      quote:
        'Impeccable craftsmanship, and outstanding service! They delivered beyond expectations, a truly commendable team.',
      name: 'Lana Steiner',
      role: 'UX/UI Designer, HasTech',
      image: { src: resolveImage('/images/testimonial-2.png'), alt: 'Lana Steiner' }
    },
    {
      quote:
        'Flawless execution, top-tier construction! Their reliability and precision are unparalleled—a phenomenal experience!',
      name: 'Elena Park',
      role: 'Product Designer, Quotient',
      image: { src: resolveImage('/images/testimonial_1.png'), alt: 'Renee Wells' }
    }
  ]
};
