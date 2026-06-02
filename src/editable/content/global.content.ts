import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Article publishing desk',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Articles', href: '/article' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Article publishing desk',
    description: 'A focused article platform for publishing clear ideas, helpful guides, opinion pieces, industry updates, and reader-friendly long-form posts.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Latest Articles', href: '/article' },
          { label: 'Search Articles', href: '/search' },
          { label: 'Submit a Topic', href: '/contact' },
          { label: 'Reader Support', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Login', href: '/login' },
          { label: 'Sign up', href: '/signup' },
        ],
      },
    ],
    bottomNote: 'Built for clean reading, useful discovery, and thoughtful publishing.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
