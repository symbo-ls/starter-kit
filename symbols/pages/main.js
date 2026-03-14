export const main = {
  extends: 'Flex',
  metadata: {
    title: 'ბავშვის უსაფრთხოების ბადეები | WinBlock® ფანჯრის დაცვა',
    description: 'შეუკვეთეთ გამძლე ბავშვთა უსაფრთხოების ბადეები ფანჯრებისთვის, აივნებისთვის და კიბეებისთვის. WinBlock® სისტემები იტანს 250კგ-მდე დატვირთვას, მარტივი დასამონტაჟებელია, უსაფრთხოა, მოქნილი და ესთეტიკური.',
    keywords: 'ბავშვის უსაფრთხოების ბადე',
    image: 'https://api.symbols.app/core/files/public/68785edf77e29c66116ea366/download',
    canonical: 'https://childsafetynet.ge/',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'ka_GE',
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
    'og:title': 'ბავშვთა უსაფრთხოების ბადეები | WinBlock® ფანჯრის დაცვა',
    'og:description': 'შეუკვეთეთ გამძლე ბავშვთა უსაფრთხოების ბადეები ფანჯრებისთვის, აივნებისთვის და კიბეებისთვის. WinBlock® სისტემები იტანს 250კგ-მდე დატვირთვას, მარტივი დასამონტაჟებელია, უსაფრთხოა, მოქნილი და ესთეტიკური.',
    'og:type': 'website',
    'og:url': 'https://childsafetynet.ge/',
    'og:image': [
      'https://api.symbols.app/core/files/public/68785edf77e29c66116ea366/download',
    ],
    'og:site_name': 'ბავშვთა უსაფრთხოების ბადე',
    'og:locale': 'ka_GE',
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