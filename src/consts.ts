import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Pham Quy Gia Phuc',
  description:
    'Portfolio and engineering notes for Pham Quy Gia Phuc, focused on full-stack and secure software systems.',
  href: 'https://github.com/DarkRepulser026',
  author: 'Pham Quy Gia Phuc',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/works',
    label: 'works',
  },
  {
    href: '/team',
    label: 'team',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/DarkRepulser026',
    label: 'GitHub',
  },
  {
    href: 'mailto:phucpham2911@outlook.com',
    label: 'Email',
  },
  {
    href: 'tel:+84348757406',
    label: 'Phone',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  About: 'lucide:user-round',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Phone: 'lucide:phone',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
