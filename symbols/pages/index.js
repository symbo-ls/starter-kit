export default {
  '/': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100dvh',
    padding: 'C',

    Dialog: {
      open: true,
      position: 'relative',
      padding: 'B2 C',
      gap: 'A',
      flow: 'column',
      width: '100%',
      maxWidth: 'H',
      outline: 'none',
      round: 'B',
      theme: 'none',

      '@dark': {
        background: 'surface',
        boxShadow: '0 8px 40px rgba(0,0,0,.55), 0 2px 8px rgba(0,0,0,.35)',
      },
      '@light': {
        background: 'white',
        boxShadow: '0 8px 40px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.12)',
      },

      H1: {
        text: 'Hello World',
        color: 'title',
        fontSize: 'F1',
        fontWeight: '700',
        lineHeight: 1,
        margin: '-'
      },

      P: {
        color: 'paragraph',
        lineHeight: 'D',
        margin: '-',

        Span_1: { text: 'This is a Symbols example app. To go further, check ' },
        Link_1: {
          text: 'symbols.app',
          href: 'https://symbols.app',
          target: '_blank',
          color: 'blue'
        },
        Span_2: { text: ' or ' },
        Link_2: {
          text: 'docs.symbols.app',
          href: 'https://docs.symbols.app',
          target: '_blank',
          color: 'blue'
        },
        Span_3: { text: ' for more docs.' }
      }
    }
  }
}
