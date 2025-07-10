export const ProjectPreview = {
  Grid: {
    columnGap: 'B2',
    style: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    childProps: {
      minWidth: 'G3+B2',
      maxWidth: 'G3+B2',
      justifyItems: 'stretch',
      lineHeight: '1.25em'
    },
    childExtends: 'P',
    children: (el, s) => s.paragraphs
  }
}
