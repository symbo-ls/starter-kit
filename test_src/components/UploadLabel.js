export const UploadLabel = {
  extends: ['Flex'],
  flow: 'column',
  align: 'center flex-start',
  boxSize: 'fit-content fit-content',
  padding: 'C2 D2',
  round: 'A',
  theme: 'field',
  '@mobileM': {
    fontSize: 'Z2',
    padding: 'C1 D'
  },
  '@mobileS': {
    padding: 'B2 C'
  },
  Icon: {
    icon: 'upload',
    fontSize: 'E',
    '@dark': {
      color: 'paragraph'
    }
  },
  PBtn: {
    props: {
      margin: 'B2 - Y -',
      whiteSpace: 'nowrap',
      '@mobileM': {
        margin: 'B - X1 -'
      }
    },
    P: {
      color: 'paragraph',
      text: 'Drag & drop your files here or'
    },
    UploadBtn: {},
    Btn: null
  },
  P: {
    text: '50 MB max file size',
    margin: '0',
    color: 'paragraph'
  }
}
