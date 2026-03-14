export const contact = {
  extends: 'Flex',
  metadata: {
    title: 'საკონტაქტო ინფორმაცია',
    description: 'გჭირდება ბავშვთა უსაფრთხოების ბადე? მოგვწერე ან დაგვირეკე დღესვე და მიიღე სწრაფი შეთავაზება და სანდო მომსახურება.',
    keywords: 'ბავშვთა უსაფრთხოების ბადე',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://blog.example.com/posts/better-web-apps-2024',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'ka_GE',
    robots: 'index, follow',
  },
  margin: '- auto',
  maxWidth: 'K',
  width: '100%',
  flow: 'y',
  align: 'center flex-start',
  overflowX: 'hidden',
  onRender: (el) => {
    el.call('gTag')
  },
  Header: {
    order: '-3',
  },
  Flex: {
    align: 'start',
    maxWidth: 'J+F1',
    gap: 'C1',
    margin: 'E1 auto',
    padding: 'C1',
    width: '100%',
    '@tabletS': {
      flow: 'y',
    },
    Flex: {
      flow: 'y',
      gap: 'B',
      flex: 1,
      H6: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 'Z2',
        state: 'nav',
        text: el => el.call('isGeorgian') ? 'დაგვიკავშირდით' : 'Contact us',
      },
      P: {
        maxWidth: 'G3',
        text: el => el.call('isGeorgian') ? 'თუ გაქვთ კითხვები, წინადადებები ან დახმარება გჭირდებათ, სიამოვნებით მოვისმენთ თქვენგან. დაგვიკავშირდით ელფოსტით, ტელეფონით ან ქვემოთ მოცემული ფორმის საშუალებით. ChildSafetyNet.ge-ს გუნდი ყოველთვის მზად არის დაგეხმაროთ.' : 'If you have any questions, suggestions, or need assistance, we’d love to hear from you. Please don’t hesitate to get in touch via email, phone, or using the contact form below. Our team at ChildSafetyNet.ge is here to help.',
      },
      Flex: {
        flow: 'y',
        gap: 'B',
        align: 'start',
        childExtends: 'Hgroup',
        childProps: {
          align: 'start',
          textAlign: 'center',
          H: {
            tag: 'strong',
            text: null,
            order: 2,
            Link: {
              fontSize: 'Z2',
              text: '{{ value }}',
              href: '{{ href }}',
              target: '_blank',
              fontWeight: 'bold',
              ':hover': {
                textDecoration: 'underline',
              },
            },
          },
          P: {
            text: '{{ caption }}',
            maxWidth: 'F3+A1',
            lineHeight: '1.25em',
          },
        },
        childrenAs: 'state',
        children: el => el.call('isGeorgian') ? [{
            caption: 'დაგვირეკეთ',
            value: '(+995) 599 011 222',
            href: 'tel:+995599011222',
          },
          {
            caption: 'მოგვწერეთ',
            value: 'winblock1tbilisi@gmail.com',
            href: 'mailto:winblock1tbilisi@gmail.com',
          },
          {
            caption: 'გამოგვყევით',
            value: 'Facebook  ̇ Winblock Georgia',
            href: 'https://www.facebook.com/WinblockGeorgia',
          },
          {
            caption: 'ინსტაგრამი',
            value: '@winblock.tbilisi',
            href: 'https://www.instagram.com/winblock.tbilisi',
          },
        ] : [{
            caption: 'Call us',
            value: '(+995) 599 011 222',
            href: 'tel:+995599011222',
          },
          {
            caption: 'Text us',
            value: 'winblock1tbilisi@gmail.com',
            href: 'mailto:winblock1tbilisi@gmail.com',
          },
          {
            caption: 'Follow us',
            value: 'Facebook  ̇ Winblock Georgia',
            href: 'https://www.facebook.com/WinblockGeorgia',
          },
          {
            caption: 'Instagram',
            value: '@winblock.tbilisi',
            href: 'https://www.instagram.com/winblock.tbilisi',
          },
        ],
      },
    },
    MapIframe: {
      if: () => false,
      width: '100%',
      round: 'A',
      flex: 1,
    },
  },
  Footer: {
    margin: 'F1 - B',
    Box: null,
  },
};