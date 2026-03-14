export const enContact = {
  extends: '/contact',
  onInit: (el) => {
    el.call('setLang', 'en')
  },
  metadata: {
    title: 'Contact Us | Child Safety Nets',
    description: 'Contact us for kids safety nets. Get answers, quotes, and support for balcony, window, and stair safety solutions to keep your children safe at home.',
    keywords: 'child safety net',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://blog.example.com/posts/better-web-apps-2024',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'en_US',
    robots: 'index, follow',
  },
};