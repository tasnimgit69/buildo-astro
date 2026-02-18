import { resolveImage } from '../utils/resolveImage';

import { services } from './services';
import { about } from './about';
import { projects } from './projects';
import { team } from './team';
import { testimonials } from './testimonials';
import { blog } from './blog';

export const homeThreeHero = {
  title: 'Providing the Construction Solutions',
  highlight: 'Construction',
  description: services.heading.description,
  primaryCta: { label: 'Get a Quote', href: '/contact-us' },
  secondaryCta: { label: 'Call Now', href: 'tel:+14126356652' },
  image: { src: resolveImage('/images/hero-main-img-3.png'), alt: 'Hero Image' },
  reviewers: [
    { src: resolveImage('/images/hero-reviewer-img-1.png'), alt: 'Reviewer 1' },
    { src: resolveImage('/images/hero-reviewer-img-2.png'), alt: 'Reviewer 2' },
    { src: resolveImage('/images/hero-reviewer-img-3.png'), alt: 'Reviewer 3' },
    { src: resolveImage('/images/hero-reviewer-img-4.png'), alt: 'Reviewer 4' }
  ],
  stats: { value: '80K+', label: 'Positive Reviewer' },
  shapes: [
    { src: resolveImage('/images/hero-3-shape-img-1.png'), alt: 'Hero Shape Image' },
    { src: resolveImage('/images/hero-3-shape-img-2.png'), alt: 'Hero Shape Image' },
    { src: resolveImage('/images/hero-3-shape-img-3.png'), alt: 'Hero Shape Image' }
  ]
};

export const homeThreeBrands = [
  { src: resolveImage('/images/brand-logo-white-1.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-2.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-3.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-4.png'), alt: 'Brand Logo' },
  { src: resolveImage('/images/brand-logo-white-5.png'), alt: 'Brand Logo' }
];

export const homeThreeServices = {
  heading: services.heading,
  cta: { label: 'View All', href: services.cta.href },
  items: [
    {
      title: 'Interior Remodeling: Transforming Spaces',
      href: '/services/interior-remodeling-transforming-spaces',
      image: { src: resolveImage('/images/service-icon-img-9.png'), alt: 'Interior Remodeling' }
    },
    {
      title: 'Efficient Plumbing Services: Flow Mastery',
      href: '/services/efficient-plumbing-services-flow-mastery',
      image: { src: resolveImage('/images/service-icon-img-8.png'), alt: 'Plumbing Services' }
    },
    {
      title: 'Roofing Solutions: Elevated Excellence',
      href: '/services/roofing-solutions-elevated-excellence',
      image: { src: resolveImage('/images/service-icon-img-7.png'), alt: 'Roofing Solutions' }
    }
  ]
};

export const homeThreeAbout = {
  heading: about.heading,
  bullets: ['Review Credit Reports', 'Expert Engineers', '100% Better Results'],
  excerpt: about.excerpt,
  primaryCta: { label: 'Discover More', href: '/about-us' },
  secondaryCta: { label: 'Call Now', href: 'tel:+12065536556363' },
  image: { src: resolveImage('/images/about-us-main-img-3.png'), alt: 'About Image' },
  shapes: [
    { src: resolveImage('/images/about-us-3-shape-img-1.png'), alt: 'About Shape' },
    { src: resolveImage('/images/about-us-3-shape-img-2.png'), alt: 'About Shape' }
  ],
  experience: about.experience
};

export const homeThreeProjects = {
  heading: {
    subtitle: 'Completed Projects',
    title:
      'We Believe in Qualify Projects, More Clients, More Trust, and More Meaningful Moments.'
  },
  cta: { label: 'View All Projects', href: '/projects' },
  items: [
    {
      ...projects.items[0],
      image: { src: resolveImage('/images/project-thumb-2-7.png'), alt: projects.items[0].image.alt }
    },
    {
      ...projects.items[1],
      image: { src: resolveImage('/images/project-thumb-3-6.png'), alt: projects.items[1].image.alt }
    },
    {
      ...projects.items[2],
      image: { src: resolveImage('/images/project-thumb-3-5.png'), alt: projects.items[2].image.alt }
    }
  ],
  shape: { src: resolveImage('/images/project-shape-img-1.png'), alt: 'Project Shape Image' }
};

export const homeThreeTestimonials = {
  heading: testimonials.heading,
  rating: testimonials.rating,
  cta: { label: 'Read More Reviews', href: '/testimonials' },
  items: testimonials.items,
  shapes: [
    { src: resolveImage('/images/testimonial-shape-1.png'), alt: 'Testimonial Shape' },
    { src: resolveImage('/images/testimonial-shape-2.png'), alt: 'Testimonial Shape' }
  ]
};

export const homeThreeTeam = {
  heading: team.heading,
  cta: { label: 'View All', href: '/teams' },
  items: [
    {
      name: 'Ana Carrillo',
      slug: 'ana-carrillo',
      role: 'Architects',
      image: { src: resolveImage('/images/team-3-7.png'), alt: 'Ana Carrillo' },
      bio: 'Ana architects modern, sustainable structures with a focus on longevity and craft.',
      socials: { facebook: '#', instagram: '#', twitter: '#' }
    },
    {
      name: 'Lorena Doran',
      slug: 'lorena-doran',
      role: 'Craftsmen',
      image: { src: resolveImage('/images/team-3-6.png'), alt: 'Lorena Doran' },
      bio: 'Lorena oversees multi-site delivery and ensures every project meets Buildo quality standards.',
      socials: { facebook: '#', instagram: '#', twitter: '#' }
    },
    {
      name: 'Charles Brown',
      slug: 'charles-brown',
      role: 'Masons',
      image: { src: resolveImage('/images/team-3-5.png'), alt: 'Charles Brown' },
      bio: 'Charles leads masonry work across the studio, shaping thoughtful structures.',
      socials: { facebook: '#', instagram: '#', twitter: '#' }
    },
    {
      name: 'Edward Gravitt',
      slug: 'edward-gravitt',
      role: 'Builders',
      image: { src: resolveImage('/images/team-3-4.png'), alt: 'Edward Gravitt' },
      bio: 'Edward brings building precision to every project, ensuring structural integrity.',
      socials: { facebook: '#', instagram: '#', twitter: '#' }
    },
    {
      name: 'Robin Row',
      slug: 'robin-row',
      role: 'In-charge',
      image: { src: resolveImage('/images/team-3-3.png'), alt: 'Edward Gravitt' },
      bio: 'Edward brings building precision to every project, ensuring structural integrity.',
      socials: { facebook: '#', instagram: '#', twitter: '#' }
    },
  ],
  shape: { src: resolveImage('/images/team-three-shape-img-1.png'), alt: 'Team Shape' }
};

export const homeThreeBlog = {
  heading: blog.heading,
  cta: { label: 'View More', href: '/blog-grid' },
  grid: [
    {
      title: 'Improve Workflow With Agile Construction',
      slug: 'improve-workflow-with-agile-construction',
      date: 'January 12, 2026',
      image: { src: resolveImage('/images/thumbnail-image-1.png'), alt: 'Agile Construction' },
      href: '/blog/improve-workflow-with-agile-construction'
    }
  ],
  list: [
    {
      title: 'Accessible Design: Creating Spaces for Everyone',
      slug: 'accessible-design-creating-spaces-for-everyone',
      date: 'January 10, 2026',
      image: { src: resolveImage('/images/thumbnail-list-thumbnail-2.png'), alt: 'Accessible Design' },
      href: '/blog/accessible-design-creating-spaces-for-everyone'
    },
    {
      title: 'Efficient Project Planning: Strategies for Success',
      slug: 'efficient-project-planning-strategies-for-success',
      date: 'January 08, 2026',
      image: { src: resolveImage('/images/thumbnail-list-thumbnail-3.png'), alt: 'Project Planning' },
      href: '/blog/efficient-project-planning-strategies-for-success'
    },
    {
      title: 'Women Build: Breaking Barriers, Shaping Futures',
      slug: 'women-build-breaking-barriers-shaping-futures',
      date: 'January 05, 2026',
      image: { src: resolveImage('/images/thumbnail-list-thumbnail-4.png'), alt: 'Women Build' },
      href: '/blog/women-build-breaking-barriers-shaping-futures'
    }
  ],
  shape: { src: resolveImage('/images/blog-shape-1.png'), alt: 'Blog Shape' }
};

export const homeThreeCta = {
  subtitle: 'Contact Us',
  title: 'Contact Us Today for a Free Consultation',
  excerpt:
    "We're a small team that loves to create great experiences and make meaningful connections between builders and customers. Join our remote team!",
  primary: { label: 'Discover More', href: '/contact-us' },
  secondary: { label: 'Call Now', href: 'tel:+1425555378' },
  shapes: [
    { src: resolveImage('/images/cta-shape-img-3.png'), alt: 'CTA Shape Image' },
    { src: resolveImage('/images/cta-shape-img-4.png'), alt: 'CTA Shape Image' }
  ]
};

