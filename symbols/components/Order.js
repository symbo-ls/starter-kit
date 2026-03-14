export const Order = {
  extends: 'Grid',
  columns: 'repeat(3, auto)',
  gap: 'E3',
  '@tabletM': {
    columns: 'repeat(2, auto)',
  },
  '@mobileL': {
    columns: 'repeat(1, auto)',
    gap: 'E',
  },
  childProps: {
    Img: {
      onClick: (event, element, state) => {
        state.root.update({
          activeModal: 'ProductModal',
          activeProduct: element.parent.key
        })
      },
    },
    Hgroup: {
      onClick: (event, element, state) => {
        state.root.update({
          activeModal: 'ProductModal',
          activeProduct: element.parent.key
        })
      },
    },
    IconTextSet: {},
    Button: {
      onClick: (event, element, state) => {
        state.root.update({
          activeModal: 'ProductModal',
          activeProduct: element.parent.key
        })
      },
    },
  },
  children: el => {
    const products = el.call('polyglot', 'product') || []
    return products.map(product => ({
      extends: 'Product',
      state: product,
    })).concat([{
      extends: 'Contact',
      ignoreChildProps: true,
    }])
  },
};
