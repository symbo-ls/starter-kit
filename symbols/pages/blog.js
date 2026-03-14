export const blog = {
  extends: 'Flex',
  metadata: {
    title: 'ბლოგი | რჩევები და გზამკვლევები',
    description: 'გაეცანი რჩევებს ბავშვთა უსაფრთხოების ბადეების შესახებ. გაიგე თუ როგორ დაიცვა აივნები, კიბეები და ფანჯრები სანდო ბადეებით.',
    keywords: 'ბავშვთა უსაფრთხოების ბადე',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://blog.example.com/posts/better-web-apps-2024',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'ka_GE',
    robots: 'index, follow',
  },
  state: {
    articles: () => [{
      title: 'ყველაფერი, რაც უნდა იცოდე ბავშვის უსაფრთხოების ბადის შეძენამდე',
      description: 'როდესაც საქმე ბავშვის უსაფრთხოებას ეხება, შემთხვევითობას ადგილი არ აქვს. განსაკუთრებით მაღალსართულიან ბინებში მცხოვრები ოჯახებისთვის, მნიშვნელოვანია ისეთი გადაწყვეტილებების მიღება, რომლებიც რეალურად დაიცავს პატარებს ფანჯრების, აივნის ან კიბის საფრთხისგან. ამ სტატიაში განვიხილავთ ყველაფერს, რაც უნდა იცოდე ბავშვის უსაფრთხოების ბადის შეძენამდე.',
      href: '/blog/ra-unda-icodet-bavshvis-usafrtxoebis-badis-shedzenamde',
      poster: 'windows.png'
    }, {
      title: 'როგორ შევინარჩუნოთ უსაფრთხო გარემო მაღალსართულიან სახლში მცხოვრები ბავშვებისთვის?',
      description: 'მაღალსართულიან კორპუსებში მცხოვრები ოჯახებისთვის ბავშვის უსაფრთხოება ყოველდღიური საზრუნავია. განსაკუთრებით მაშინ, როცა სახლში არიან პატარები, რომლებიც აქტიურად იკვლევენ გარემოს და ჯერ კიდევ ვერ აფასებენ საფრთხეს. საბედნიეროდ, არსებობს პრაქტიკული და ეფექტური გზა, რომ სახლი გახდეს უსაფრთხო სივრცე — ბავშვის უსაფრთხოების ბადე.',
      poster: 'blog2.png',
      href: '/blog/rogor-shevinarchunot-usafrtxo-garemo-saxlshi-bavshvebistvis'
    }],
  },
  margin: '- auto',
  maxWidth: 'K',
  width: '100%',
  minHeight: '100%',
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
  Flex: {
    maxWidth: 'J',
    gap: 'C1',
    flow: 'y',
    padding: 'C1',
    childExtends: 'BlogSection',
    childrenAs: 'state',
    width: '100%',
    children: (el, s) => s.articles(),
  },
  Footer: {
    margin: 'auto - -',
    padding: 'F1 - B',
    Box: null,
  },
};