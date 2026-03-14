export const quote = {
  extends: 'Flex',
  metadata: {
    title: 'შეუკვეთე ბავშვის უსაფრთხოების ბადე',
    description: 'შეიძინე ბავშვის უსაფრთხოების ბადე ონლაინ. შეუკვეთე და მიიღე სწრაფი მომსახურება და პროფესიონალური მონტაჟი.',
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
  onInit: (el) => {
    el.call('helmet', el.metadata)
  },
  Header: {
    order: '-3',
  },
  WelcomeHgroup: {
    margin: 'D1 -',
    order: '-1',
  },
  Order: {},
  Modal: {},
  Footer: {
    margin: 'F1 - B',
    Box: null,
  },
};