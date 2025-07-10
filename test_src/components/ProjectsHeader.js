export const ProjectsHeader = {
  display: 'flex',
  flow: 'y',
  align: 'center flex-start',
  gap: 'B1',
  position: 'sticky',
  padding: 'B1 B1',
  top: '-A+W',
  zIndex: 6,
  margin: '- auto',
  width: '100%',
  minWidth: '100%',
  maxWidth: '100%',
  background:
    'linear-gradient(rgba(255, 255, 255, 0.97) 65%, rgba(255, 255, 255, 0) 100%)',
  style: {
    width: 'max-content'
  },
  '@tabletS': {
    pointerEvents: 'none',
    background: 'transparent'
  },
  H6: {
    text: (el, s) => s.ourProject.title,
    color: 'mediumBlue',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 'Z2',
    margin: '-B2 - - -'
  },
  ButtonSet: {
    props: {
      zIndex: 6,
      padding: 'B1 X1 B2 X1',
      background:
        'linear-gradient(rgba(255, 255, 255, 0.97) 65%, rgba(255, 255, 255, 0) 100%)',
      margin: '-B - - -',
      minWidth: '100%',
      maxWidth: '100%',
      justifyContent: 'center',
      gap: 'D+W',
      '@tabletS': {
        display: 'none'
      },
      isGeorgian: (el, s) => s.root.activeLanguage === 'ge',
      '.isGeorgian': {
        '@tabletL': {
          gap: 'B2',
          fontSize: 'Z2'
        },
        '@tabletS': {
          display: 'none'
        }
      },
      childProps: {
        padding: '0',
        background: 'white',
        text: '{{ value }}',
        theme: 'transparent',
        isActive: (el, s) => s.root.activeCategory === s.value,
        '.isActive': {
          textDecoration: 'underline',
          fontWeight: 'bold'
        },
        onClick: (ev, el, s) => {
          s.root.update({
            activeCategory: s.value
          })
          el.lookup('Projects').node.scrollIntoView()
        }
      },
      childrenAs: 'state',
      children: (el, s) =>
        [s.root.activeLanguage === 'en' ? 'All' : 'ყველა'].concat(
          s.projects.map(v => v.title)
        )
    }
  }
}
