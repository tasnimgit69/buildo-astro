import { resolveImage } from '../utils/resolveImage';

import { services } from './services';
import { projects } from './projects';
import { team } from './team';
import { testimonials } from './testimonials';
import { blog } from './blog';
import { cta } from './cta';

export const homeTwoHero = {
  title: 'Providing the Construction Solutions for You',
  primaryCta: {
    label: 'Get a Quote',
    href: '/contact-us'
  },
  secondaryCta: {
    label: 'Call Now',
    href: 'tel:+141555554155'
  },
  image: {
    src: resolveImage('/images/hero-main-img-2.png'),
    alt: 'Hero Image'
  },
  shapes: [
    {
      src: resolveImage('/images/hero-two-shape-img.png'),
      alt: 'Hero Shape Image'
    },
    {
      src: resolveImage('/images/hero-text-shape-img.png'),
      alt: 'Hero Text Shape Image'
    }
  ]
};

export const homeTwoBrands = [
  { src: resolveImage('/images/brand-logo-white-1.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-2.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-3.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-4.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-5.png'), alt: 'Brand Logo' }
];

export const homeTwoServices = {
  heading: services.heading,
  cta: { label: 'View More', href: services.cta.href },
  items: [
    {
      title: 'Design-Build Services',
      href: '/services/design-build-services',
      image: { src: resolveImage('/images/service-icon-img-6.png'), alt: 'Design-Build Services' },
      excerpt:
        'Streamline your project with our design-build approach, ensuring seamless coordination from concept to completion.'
    },
    {
      title: 'Renovations',
      href: '/services/renovations',
      image: { src: resolveImage('/images/service-icon-img-5.png'), alt: 'Renovations' },
      excerpt:
        'Transform and rejuvenate existing spaces with our renovation expertise, adding value and functionality to your property.'
    },
    {
      title: 'General Construction',
      href: '/services/general-construction',
      image: { src: resolveImage('/images/service-icon-img-4.png'), alt: 'General Construction' },
      excerpt:
        "Whether you're building your dream home, remodeling, or adding an extension, we bring your vision to life with style and precision."
    },
    {
      title: 'Industrial Construction',
      href: '/services/industrial-construction',
      image: { src: resolveImage('/images/service-icon-img-3.png'), alt: 'Industrial Construction' },
      excerpt:
        'We specialize in designing and constructing industrial facilities that meet the highest safety and operational standards.'
    },
    {
      title: 'Commercial Construction',
      href: '/services/commercial-construction',
      image: { src: resolveImage('/images/service-icon-img-2.png'), alt: 'Commercial Construction' },
      excerpt:
        'Our portfolio includes office buildings, retail spaces, and more. We understand the unique needs of businesses and deliver functional.'
    },
    {
      title: 'Residential Construction',
      href: '/services/residential-construction',
      image: { src: resolveImage('/images/service-icon-img-1.png'), alt: 'Residential Construction' },
      excerpt:
        "Whether you're building your dream home, remodeling, or adding an extension, we bring your vision to life with style and precision."
    }
  ]
};

export const homeTwoAbout = {
  heading: {
    title: 'We Create Buildings That Meet Your Needs.',
    description:
      'Welcome to Builder, where your vision becomes our mission. We are a premier construction company dedicated to transforming your ideas into stunning reality.'
  },
  body:
    'Established in 1995, StoneHaven Builders has been the cornerstone of landmark projects across New York. We blend traditional craftsmanship with modern techniques to create lasting edifices.',
  bullets: ['Review Credit Reports', 'Expert Engineers', '100% Better Results'],
  excerpt: "Explore the possibilities with Buildo and let's embark on a journey to build a future.",
  ctas: [
    { label: 'Get a Quote', href: '/contact-us', variant: 'primary' },
    { label: 'Call Now', href: 'tel:+14156255423', variant: 'outline' }
  ],
  image: {
    src: resolveImage('/images/about-us-main-img-2.png'),
    alt: 'About Us Main Image'
  },
  experience: {
    years: '25',
    label: 'Years',
    description: 'Of Experience in\nThis Company.'
  }
};

export const homeTwoProjects = {
  heading: {
    title:
      'We Believe in Quality Projects, More Clients, More Trust, and More Meaningful Moments.'
  },
  cta: { label: 'View All Projects', href: '/projects' },
  items: [
    {
      ...projects.items[0],
      image: { src: resolveImage('/images/project-thumb-2-7.png'), alt: 'Modern workspace project' }
    },
    {
      ...projects.items[1],
      image: {
        src: resolveImage('/images/project-thumb-3-6.png'),
        alt: 'Residential construction project'
      }
    },
    {
      ...projects.items[2],
      image: { src: resolveImage('/images/project-thumb-3-5.png'), alt: 'Urban renewal project' }
    }
  ]
};

export const homeTwoTeam = {
  heading: {
    title: 'Meet the Team Behind the Company',
    description: team.heading.description
  },
  cta: { label: 'View All Members', href: '/teams' },
  items: [
    {
      ...team.items[0],
      name: 'Kristen craft',
      role: 'Planner',
      image: { src: resolveImage('/images/team-2-1.png'), alt: 'Kristen craft' }
    },
    {
      ...team.items[1],
      name: 'Ella West',
      role: 'Engineer',
      image: { src: resolveImage('/images/team-2-2.png'), alt: 'Ella West' }
    },
    {
      ...team.items[2],
      name: 'Robin Row',
      role: 'In-charge',
      image: { src: resolveImage('/images/team-2-3.png'), alt: 'Robin Row' }
    }
  ]
};

export const homeTwoTestimonials = {
  heading: {
    title: 'What Our Customers Say<br />About Us'
  },
  cta: { label: 'View All Reviews', href: '/testimonials' },
  item: {
    ...testimonials.items[0],
    quote:
      "We hired XYZ Construction for our home renovation project, and we couldn't be happier with the results. The attention to detail & craftsmanship they displayed was truly exceptional. Our home now looks better than we ever imagined.",
    image: { src: resolveImage('/images/client-img-1.png'), alt: 'Testimonial Image' }
  }
};

const homeTwoListImages = [
  resolveImage('/images/thumbnail-list-thumbnail-2.png'),
  resolveImage('/images/thumbnail-list-thumbnail-3.png'),
  resolveImage('/images/thumbnail-list-thumbnail-4.png')
];

export const homeTwoBlog = {
  heading: blog.heading,
  cta: { label: 'View More', href: '/blog-grid' },
  grid: blog.grid,
  list: blog.list.slice(0, 3).map((post, index) => ({
    ...post,
    image: { ...post.image, src: homeTwoListImages[index] }
  }))
};

export const homeTwoCta = {
  subtitle: 'Contact Us',
  title: cta.title,
  excerpt:
    "We're a small team that loves to create great experiences and make meaningful connections between builders and customers. Join our remote team!",
  primary: {
    label: 'Discover More',
    href: '/contact-us'
  },
  secondary: {
    label: 'Call Now',
    href: 'tel:+1425555378'
  },
  shapes: [
    { src: resolveImage('/images/cta-shape-img-3.png'), alt: 'CTA Shape Image' },
    { src: resolveImage('/images/cta-shape-img-4.png'), alt: 'CTA Shape Image' }
  ]
};

