export const en = {
  extends: 'Flex',
  onInit: (el) => {
    el.call('setLang', 'en')
  },
  metadata: {
    title: 'Child Safety Nets | WinBlock® Window Protection',
    description: 'Order durable kids safety nets for windows, balconies, and stairs. WinBlock® systems hold up to 250kg, easy to install, safe, flexible, and aesthetic.',
    keywords: 'child safety net',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://blog.example.com/posts/better-web-apps-2024',
    canonical: 'https://childsafetynet.ge/en',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'en_US',
    robots: 'index, follow',
    alternate: [
      {
        hreflang: 'ka',
        href: 'https://childsafetynet.ge/',
      },
      {
        hreflang: 'en',
        href: 'https://childsafetynet.ge/en/',
      },
      {
        hreflang: 'x-default',
        href: 'https://childsafetynet.ge/',
      },
    ],
    'og:title': 'Child Safety Nets | WinBlock® Window Protection',
    'og:description': 'Order durable child safety nets for windows, balconies, and stairs. WinBlock® systems hold up to 250kg, easy to install, safe, flexible, and aesthetic.',
    'og:type': 'website',
    'og:url': 'https://childsafetynet.ge/en',
    'og:image': [
      'https://api.symbols.app/core/files/public/68785edf77e29c66116ea366/download',
    ],
    'og:site_name': 'child safety nets',
    'og:locale': 'en_US',
  },
  margin: '- auto',
  maxWidth: 'K',
  width: '100%',
  flow: 'y',
  align: 'center flex-start',
  overflowX: 'hidden',
  onRender: (el) => {
    el.call('gTag')
  },
  Header: {
    order: '-3',
  },
  Banner: {
    order: '-2',
  },
  WelcomeHgroup: {
    order: '-1',
  },
  Order: {},
  Carousel: {},
  Modal: {},
  Features: {},
  About: {},
  Feedbacks: {},
  Footer: {},
};