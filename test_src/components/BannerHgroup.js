export const BannerHgroup = {
  tag: 'hgroup',
  display: 'flex',
  flow: 'y',
  gap: 'Z',
  childrenAs: 'props',
  H: {
    tag: 'h1',
    text: '{{ title }}',
    lineHeight: '1em',
    fontSize: 'F2+Y2'
  },
  P: {
    text: '{{ description }}',
    fontWeight: '200',
    margin: '0',
    color: 'paragraph',
    fontSize: 'Z2',
    maxWidth: 'G2',
    lineHeight: '1.5em'
  }
}
