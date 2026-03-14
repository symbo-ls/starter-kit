export const enAbout = {
  extends: '/about',
  onInit: (el) => {
    el.call('setLang', 'en')
  },
  metadata: {
    title: 'About Us | Child Safety Nets',
    description: 'Learn about us, a pioneer in kids safety solutions. Discover our mission to keep homes safe with trusted balcony & window safety nets for children.',
    keywords: 'child safety net',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://blog.example.com/posts/better-web-apps-2024',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'en_US',
    robots: 'index, follow',
  },
};