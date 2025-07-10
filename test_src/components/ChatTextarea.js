export const ChatTextarea = {
  tag: 'form',
  gap: 'B1',
  Textarea: {
    round: 'A2',
    padding: 'A1 A2',
    theme: 'field',
    placeholder: 'Ask me anything',
    minWidth: 'H',
    maxWidth: 'none',
    minHeight: 'D1',
    onInput: function temp () {
      return fn.apply(win, arguments)
    }
  },
  SquareButton: {
    props: {
      round: 'A2',
      type: 'submit',
      theme: 'primary',
      onClick: function temp () {
        return fn.apply(win, arguments)
      }
    }
  }
}
