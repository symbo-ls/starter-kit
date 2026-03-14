export const Contact = {
  extends: 'Flex',
  flow: 'y',
  align: 'flex-start flex-start',
  '@mobileL': {
    alignItems: 'center',
  },
  Img: {
    src: 'window3.png',
    boxSize: 'G2+Z F3+A',
  },
  Hgroup: {
    padding: 'A A',
    '@mobileL': {
      align: 'center flex-start',
      textAlign: 'center',
      padding: 'A 0',
      width: '100%',
    },
    H: {
      tag: 'h6',
      fontWeight: '700',
      fontSize: 'A',
      text: el => el.call('isGeorgian') ? 'შეგვიკვეთეთ' : 'Order now',
    },
    P: {
      text: el => 'Winblock + ' + (el.call('isGeorgian') ? 'ინსტალაცია' : 'Installation'),
    },
  },
  P: {
    margin: '0',
    text: el => el.call('isGeorgian') ? 'დამატებითი კითხვების, დაზუსტების და ფასდაკლების შემთხვევაში დაგვიკავშირდით' : 'For additional questions, clarifications, or discounts, please contact us.',
    maxWidth: 'G',
    padding: '- A',
    '@mobileL': {
      textAlign: 'center',
      padding: '- 0',
    },
  },
  IconText: {
    extends: [
      'Link',
      'IconText',
    ],
    gap: 'Y',
    padding: 'B1 - - A',
    href: 'tel:+995599011222',
    '@mobileL': {
      align: 'center center',
      textAlign: 'center',
      padding: 'B1 - - 0',
      width: '100%',
    },
    ':hover': {
      textDecoration: 'underline',
    },
    Icon: {
      name: 'phone',
    },
    text: '+995 599 01 12 22',
  },
};
