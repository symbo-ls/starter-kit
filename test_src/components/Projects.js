export const Projects = {
  display: 'flex',
  flow: 'y',
  gap: 'C',
  padding: 'F - E2 -',
  width: '100%',
  ProjectsHeader: {},
  Flex: {
    flow: 'y',
    gap: 'D',
    align: 'center flex-start',
    childExtends: 'ProjectType',
    childrenAs: 'state',
    children: (el, s) => {
      const { activeCategory } = s.root
      return activeCategory && !['All', 'ყველა'].includes(activeCategory)
        ? s.projects.filter(v => v.title === activeCategory)
        : s.projects
    }
  },
  Button: {
    hide: (el, s) =>
      !s.root.activeCategory ||
      ['All', 'ყველა'].includes(s.root.activeCategory),
    text: (el, s) => s.ourProject.more,
    flow: 'row-reverse',
    padding: '0',
    maxWidth: 'fit-content',
    alignSelf: 'center',
    theme: 'transparent',
    gap: 'Z',
    onClick: (ev, el, s) => {
      s.root.update({
        activeCategory: 'All'
      })
      el.lookup('Projects').node.scrollIntoView()
    },
    Icon: {
      name: (el, s) => (s.root.activeCategory ? 'chevronDown' : 'chevronUp')
    }
  }
}
