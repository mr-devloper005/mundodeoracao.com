import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Fresh articles, useful ideas, and reader-first publishing',
      description: 'Explore recent articles, thoughtful guides, opinion pieces, and industry updates in a cleaner reading-first experience.',
      openGraphTitle: 'Fresh articles, useful ideas, and reader-first publishing',
      openGraphDescription: 'Discover recent articles, helpful guides, opinion pieces, and topic-led reading through a calmer article platform.',
      keywords: ['article platform', 'article site', 'long-form articles', 'content discovery'],
    },
    hero: {
      badge: 'Reader-first article platform',
      title: ['Read sharper articles', 'without the clutter.'],
      description: 'Browse recent articles, practical guides, thoughtful opinions, and topic-led posts in a layout built for comfortable reading instead of noisy browsing.',
      primaryCta: { label: 'Read latest articles', href: '/article' },
      secondaryCta: { label: 'Contact editorial desk', href: '/contact' },
      searchPlaceholder: 'Search articles, topics, authors, and guides',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Recent articles shape the homepage rhythm.',
      featureCardDescription: 'Fresh posts stay easy to scan, while featured reads get enough space for titles, summaries, and reading intent.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for readers who want useful articles without visual noise.',
      paragraphs: [
        'This site is shaped around article discovery: clear headlines, readable excerpts, useful topic filters, and pages that keep attention on the writing.',
        'The design gives recent posts a steady editorial rhythm, so visitors can move from trending reads to deeper articles without feeling dropped into a generic feed.',
        'Every page is tuned for the same task: help someone find a relevant article, understand why it matters, and keep reading comfortably.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Narrower article layouts that avoid stretched lines.',
        'Clear topic browsing for fresh and archived articles.',
        'Reader-friendly cards with title, excerpt, and context.',
        'Simple navigation for reading, searching, and account access.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore the latest articles through one focused reading experience.',
      description: 'Move from new posts to related reads through a calmer visual system built around articles, not generic content blocks.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A calmer, clearer way to publish and read articles.',
    description: `${slot4BrandConfig.siteName} is built to make article discovery feel useful, focused, and easy to follow.`,
    paragraphs: [
      'The platform exists for readers who want helpful writing without fighting through a loud, stretched, or cluttered interface.',
      'Every page is designed around article behavior: scan a headline, understand the context, open the story, and continue to a related read when the moment is right.',
      'Writers and contributors get a presentation that respects their titles and summaries, while readers get enough structure to browse by topic, search by intent, and return later through a simple account experience.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize comfortable line lengths, clear hierarchy, and a steady editorial rhythm so articles feel worth reading.',
      },
      {
        title: 'Topic-led discovery',
        description: 'Fresh posts, archives, search, and related reads are arranged so visitors can keep finding useful articles.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We keep navigation, account access, and article actions direct so the reading experience stays trustworthy.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to the editorial desk.',
    description: 'Send article ideas, publishing questions, correction requests, partnership notes, or reader feedback. The contact page is shaped around article work, not a generic support inbox.',
    formTitle: 'Send an article inquiry',
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
