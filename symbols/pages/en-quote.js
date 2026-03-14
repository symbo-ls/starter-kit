export const enQuote = {
  extends: '/quote',
  onInit: (el) => {
    el.call('setLang', 'en')
  },
  metadata: {
    title: 'Request a Quote | Child Safety Nets',
    description: 'Get instant quotes for child safety nets. Protect your kids at home with reliable balcony, window & stair solutions.',
    keywords: 'child safety net',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://blog.example.com/posts/better-web-apps-2024',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'en_US',
    robots: 'index, follow',
  },
};