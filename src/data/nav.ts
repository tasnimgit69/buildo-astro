export const nav = {
  primaryCta: {
    label: 'Get a Quote',
    href: '/contact-us'
  },
  items: [
    {
      label: 'Home',
      children: [
        { label: 'Home Version 1', href: '/' },
        { label: 'Home Version 2', href: '/home-two' },
        { label: 'Home Version 3', href: '/home-three' }
      ]
    },
    {
      label: 'Pages',
      children: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Services', href: '/services' },
        {
          label: 'Service Details',
          href: '/services/residential-construction'
        },
        { label: 'Projects', href: '/projects' },
        {
          label: 'Project Details',
          href: '/projects/peakcraft-modern-workspace'
        },
        { label: 'Teams', href: '/teams' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Testimonials', href: '/testimonials' }
      ]
    },
    {
      label: 'Utility Pages',
      children: [
        { label: 'Password Protected', href: '/401' },
        { label: '404 Page', href: '/404' },
        { label: 'Style Guide', href: '/template-info/style-guide' },
        { label: 'Licenses', href: '/template-info/license' },
        { label: 'Changelog', href: '/template-info/changelog' }
      ]
    },
    {
      label: 'Blog',
      children: [
        { label: 'Blog Grid', href: '/blog-grid' },
        { label: 'Blog List', href: '/blog-list' },
        {
          label: 'Blog Details',
          href: '/blog/improve-workflow-with-agile-construction'
        }
      ]
    },
    {
      label: 'Contact Us',
      href: '/contact-us'
    }
  ]
};


