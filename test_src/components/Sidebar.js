export const Sidebar = {
  display: 'flex',
  flow: 'y',
  background:
    'linear-gradient(to top, rgba(255, 255, 255, 1) 20%,rgba(255, 255, 255, 0) 80%)',
  backdropFilter: 'blur(15px)',
  width: '100%',
  height: '100%',
  align: 'center center',
  display: 'none',
  style: {
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 2px 2px'
  },
  '@tabletS': {
    display: 'flex'
  },
  '.activeMenu': {
    height: '100%',
    opacity: '1',
    transition: 'height .3s ease, opacity .3s ease'
  },
  '!activeMenu': {
    height: '0',
    opacity: '0',
    transition: 'height .3s ease, opacity .15s ease'
  },
  LinkSet: {
    flow: 'y',
    padding: 'D',
    childProps: {
      fontSize: 'E2',
      cursor: 'pointer',
      overflow: 'hidden',
      '.activeMenu': {
        opacity: '1',
        letterSpacing: '1px',
        transform: 'scale(1)',
        transition:
          'opacity .5s ease, letter-spacing .7s ease, transform .7s ease, height .4s ease',
        height: '67px'
      },
      '!activeMenu': {
        opacity: '0',
        transition: 'opacity .15s ease',
        letterSpacing: '5px',
        transform: 'scale(.8)',
        height: '0'
      },
      onClick: (event, el, state) => {
        state.update({
          activeMenu: false
        })

        const scrollElem = document.getElementById(el.props.href.slice(1))
        scrollElem.scrollIntoView()
      }
    },
    children: [
      {
        href: '#About',
        text: '{{ about }}'
      },
      {
        href: '#Projects',
        text: '{{ projects }}'
      },
      {
        href: '#Contact',
        text: '{{ contacts }}'
      }
    ]
  },
  ButtonSet: {
    gap: 'B',
    position: 'absolute',
    bottom: 'C1',
    left: 'initial',
    tarnsform: 'translate(-50%, -50%)',
    '.activeMenu': {
      opacity: '1',
      transition: 'opacity 1s ease'
    },
    '!activeMenu': {
      opacity: '0',
      transition: 'opacity .15s ease'
    },
    childProps: {
      padding: '0',
      theme: 'transparent',
      color: 'mediumBlue',
      fontSize: 'B'
    },
    children: [
      {
        text: 'ENG',
        onClick: (ev, el, s) =>
          s.root.update(
            {
              activeLanguage: 'en'
            },
            {
              execStateFunction: true,
              isHoisted: false
            }
          )
      },
      {
        text: 'ქარ',
        onClick: (ev, el, s) =>
          s.root.update(
            {
              activeLanguage: 'ge'
            },
            {
              execStateFunction: true,
              isHoisted: false
            }
          )
      }
    ]
  }
}
