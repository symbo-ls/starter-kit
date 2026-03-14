export const ProductModal = {
  extends: 'ModalWindow',
  padding: 'B2 C1 B2 B2',
  gap: 'B',
  '@tabletM': {
    boxSize: 'H+D2 I2',
  },
  '@tabletS': {
    boxSize: 'H+D2 H3+B',
  },
  '@mobileL': {
    boxSize: 'fit-content 90%',
    padding: 'B B A B',
  },
  '@mobileM': {
    round: 'B',
    padding: 'B A A A',
    fontSize: 'Z1',
  },
  '@mobileS': {
    fontSize: 'Z',
  },
  Hgroup: {
    '@mobileL': {
      padding: '- 0 0 Z',
    },
    H: {
      tag: 'h6',
      text: el => el.call('isGeorgian') ? 'თქვენი არჩევანი:' : 'Your choice:',
      fontSize: 'A1',
      Span: {
        text: '{{ title }}',
        fontWeight: '700',
        padding: '- - - X',
      },
    },
    P: {
      text: '{{ caption }}',
      fontSize: 'Z1',
    },
  },
  Flex: {
    align: 'flex-start space-between',
    flex: '1',
    gap: 'B',
    '@tabletS': {
      align: 'flex-start flex-start',
      gap: 'C1',
    },
    '@mobileL': {
      flow: 'y',
      gap: 'B',
    },
    Img: {
      src: '{{ src }}',
      maxWidth: 'F3+B',
      '@mobileL': {
        boxSize: 'F1 100%',
        objectFit: 'cover',
        round: 'A2',
        border: 'solid, black .1',
      },
    },
    Flex: {
      flex: 1,
      flow: 'y',
      align: 'flex-start',
      minHeight: '100%',
      height: '100%',
      gap: 'C1',
      '@tabletS': {
        align: 'flex-start flex-start',
        gap: 'C1',
        padding: 'A - - -',
      },
      '@mobileL': {
        width: '100%',
        padding: '- A A A',
        gap: 'B',
      },
      '@mobileM': {
        padding: '- Z A Z',
      },
      Hgroup: {
        hide: (el, s) => !s.priceCaption,
        gap: '0',
        H: {
          tag: 'h6',
          fontSize: 'A',
          text: '{{ priceCaption }}',
          opacity: '.65',
        },
        P: {
          text: '{{ priceRange }}',
          fontWeight: '500',
        },
      },
      Calculate: {
        extends: 'Flex',
        hide: true,
        flow: 'y',
        gap: 'B',
        margin: '-A2 - -',
        '@mobileM': {
          width: '100%',
        },
        Flex: {
          align: 'flex-end flex-start',
          maxHeight: 'fit-content',
          gap: 'A',
          '@mobileXS': {
            flow: 'y',
            align: 'flex-start flex-start',
          },
          childProps: {
            '@mobileM': {
              flex: '1',
              width: '100%',
            },
            Caption: {},
            Input: {
              '@mobileM': {
                minWidth: '100%',
              },
            },
          },
          childExtends: 'MeasureField',
          children: [
            {
              Caption: {
                text: 'სიგანე',
              },
              Input: {
                placeholder: 'x სმ',
              },
            },
            {
              Caption: {
                text: 'სიგრძე',
              },
              Input: {
                placeholder: 'y სმ',
              },
            },
          ],
        },
        Button: {
          maxWidth: 'fit-content',
          gap: 'Y',
          padding: 'Z2 B',
          fontWeight: '400',
          theme: 'primary',
          margin: '- -X',
          Icon: {
            name: 'plus',
          },
          text: 'ფასის გამოთვლა',
        },
      },
      Flex: {
        gap: 'C1',
        flow: 'y',
        '@tabletS': {
          gap: 'B1',
        },
        '@mobileM': {
          alignSelf: 'flex-start',
        },
        childExtends: 'DataHgroup',
        children: [
          {
            H: {
              text: el => el.call('isGeorgian') ? 'მდებარეობა' : 'Location',
            },
            P: {
              text: el => el.call('isGeorgian') ? 'საქართველო, თბილისი' : 'Tbilisi, Georgia',
            },
          },
          {
            H: {
              text: el => el.call('isGeorgian') ? 'ინსტალაცია' : 'Installation',
            },
            P: {
              text: el => `1-3 ${el.call('isGeorgian') ? 'დღე' : 'Days' }`,
            },
          },
        ],
      },
    },
    Flex_2: {
      flow: 'y',
      gap: 'B1',
      align: 'flex-start flex-start',
      maxHeight: 'fit-content',
      '@tabletS': {
        display: 'none',
      },
      Hgroup: {
        H: {
          tag: 'h6',
          text: el => el.call('isGeorgian') ? 'შეგვიკვეთეთ' : 'Order now',
          fontWeight: '700',
          fontSize: 'A',
        },
        P: {
          text: el => el.call('isGeorgian') ? 'დამატებითი კითხვების დაზუსტების და ფასდაკლების შემთხვევაში დაგვიკავშირდით' : 'For additional questions, clarifications, or discounts, please contact us.',
          maxWidth: 'F3',
        },
      },
      IconText: {
        extends: [
          'Link',
          'IconText',
        ],
        href: 'tel:+995599011222',
        gap: 'Y',
        ':hover': {
          textDecoration: 'underline',
        },
        Icon: {
          name: 'phone',
        },
        text: '+995 599 01-12-22',
      },
    },
  },
  state: (el) => {
    const {
      product,
      activeProduct
    } = el.parent.state.root
    return product[activeProduct]
  },
};