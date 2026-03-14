export const Header = {
  tag: 'header',
  extends: 'Flex',
  position: 'sticky',
  fontSize: 'Z2',
  top: '0',
  theme: 'document',
  align: 'start space-between',
  width: '100%',
  maxWidth: '100%',
  padding: 'A1 B2',
  '@mobileL': {
    padding: 'A B',
  },
  childProps: {
    flex: '1',
    '@mobileL': {
      flex: '0',
    },
  },
  Cart: {
    flexAlign: 'center start',
    alignSelf: 'start',
    Icon: {},
    NotificationCounter: {},
    Span: {
      '@mobileL': {
        display: 'none',
      },
    },
  },
  Nav: {
    extends: 'Flex',
    childExtends: 'Link',
    gap: 'C1',
    align: 'center center',
    childProps: {
      isActive: el => el.props.href === window.location.pathname,
      fontWeight: '500',
      '.isActive': {
        fontWeight: '700',
      },
      ':hover': {
        textDecoration: 'underline',
      },
    },
    children: (el) => el.call('isGeorgian') ? [{
      text: 'მთავარი',
      href: '/'
    }, {
      text: 'შეკვეთა',
      href: '/quote'
    }, {
      text: 'ჩვენს შესახებ',
      href: '/about'
    }, {
      text: 'კონტაქტი',
      href: '/contact'
    }, {
      text: 'ბლოგი',
      href: '/blog'
    }] : [{
      text: 'Main',
      href: '/en'
    }, {
      text: 'Get Quote',
      href: '/en/quote'
    }, {
      text: 'About',
      href: '/en/about'
    }, {
      text: 'Contact',
      href: '/en/contact'
    }, {
      text: 'Blog',
      href: '/en/blog'
    }],
  },
  Link: {
    hide: true,
    flexFlow: 'y',
    flexAlign: 'center',
    href: '/',
    text: 'childsafetynet.ge',
    fontSize: 'A',
    textAlign: 'center',
    fontWeight: '600',
    ':hover': {
      textDecoration: 'underline',
    },
    Img: {
      src: 'winblock.svg',
      width: 'D3',
      margin: '- auto',
      '@mobileS': {
        boxSize: 'D',
      },
    },
  },
  Language: {
    flexAlign: 'center end',
    alignSelf: 'end',
    '@screenS': {
      gap: 'B',
    },
    '@mobileL': {
      display: 'none',
    },
  },
  LanguageSelect: {
    display: 'none',
    '@mobileL': {
      display: 'flex',
    },
  },
};