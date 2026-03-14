export const Cart = {
  extends: [
    'CounterButton',
    'Flex',
  ],
  text: '',
  flow: 'x',
  gap: 'Z',
  align: 'center center',
  fontWeight: '400',
  theme: 'transparent',
  padding: '0',
  minWidth: 'fit-content',
  Icon: {
    name: 'cart',
    fontSize: 'B2',
  },
  Span: {
    text: el => el.call('isGeorgian') ? 'კალათი ცარიელია' : 'Basket is yet empty',
  },
  NotificationCounter: {
    display: 'none',
  },
};
