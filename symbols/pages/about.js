export const about = {
  extends: 'Flex',
  metadata: {
    title: 'ჩვენ შესახებ | ბავშვის უსაფრთხოების ბადეები',
    description: 'ბავშვთა უსაფრთხოების ბადეების პიონერი კომპანია. ჩვენი მისიაა აივნებისა და ფანჯრების დაცვა სანდო ბადეებით, რათა ბავშვები უსაფრთხოდ იყვნენ.',
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
  About: {},
  Footer: {
    margin: 'F1 - B',
    Box: null,
  },
  Modal: {},
};