export const Language = {
  extends: 'ButtonSet',
  gap: 'C2',
  childProps: {
    tag: 'a',
    padding: '0',
    theme: 'transparent',
    fontWeight: '400',
    onClick: (ev, el) => {
      ev.preventDefault()
      const path = window.location.pathname
      const href = el.props.href
      const root = path === '/' || path === '/en' ? '/en' : '/en/'
      if (href === '/en') {
        if (!path.startsWith('/en')) {
          el.call('setLang', 'en')
          el.call('router', path.replace('/', root), el.__ref.root)
        }
      } else {
        if (path.startsWith('/en')) {
          el.call('setLang', 'ka')
          el.call('router', path.replace(root, '/'), el.__ref.root)
        }
      }
    },
  },
  children: () => [{
    text: 'ENG',
    href: '/en',
  }, {
    text: 'ქარ',
    href: '/',
  }],
};
