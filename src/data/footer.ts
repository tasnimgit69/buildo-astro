import { resolveImage } from '../utils/resolveImage';

export const footer = {
  logo: {
    src: resolveImage('/images/footer-logo.webp'),
    alt: 'Footer Logo',
    href: '/'
  },
  columns: [
    {
      title: 'Quick Links',
      variant: 'default',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Service Details', href: '/services/residential-construction' },
        { label: 'Projects', href: '/projects' },
        { label: 'Project Details', href: '/projects/peakcraft-modern-workspace' }
      ]
    },
    {
      title: 'Company',
      variant: 'ml-one',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Blog', href: '/blog-grid' },
        { label: 'Teams', href: '/teams' },
        { label: 'Contact Us', href: '/contact-us' }
      ]
    },
    {
      title: 'Utility Pages',
      variant: 'default',
      links: [
        { label: 'Password Protected', href: '/401' },
        { label: '404 Page', href: '/404' },
        { label: 'Style Guide', href: '/template-info/style-guide' },
        { label: 'Licenses', href: '/template-info/license' },
        { label: 'Changelog', href: '/template-info/changelog' }
      ]
    }
  ],
  newsletter: {
    title: 'Subscribe to Our Newsletter',
    inputPlaceholder: 'Enter your email address',
    submitLabel: 'Subscribe Now'
  },
  copyright: {
    text: 'Copyright © Buildo | Designed by',
    designerLabel: 'Hasthemes',
    designerHref: 'https://hasthemes.com/',
    poweredLabel: 'Astro',
    poweredHref: 'https://astro.build/'
  },
  legal: [
    { label: 'Terms & Conditions', href: '/terms-conditions' },
    { label: 'Privacy policy', href: '/privacy-policy' }
  ]
};
