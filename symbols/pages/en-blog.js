export const enBlog = {
  extends: '/blog',
  metadata: {
    title: 'Blog | Tips & Guides About Safety Nets',
    description: 'Explore expert tips on kids safety nets, childproofing ideas and home safety solutions. Learn how to keep balconies, windows & stairs secure.',
    keywords: 'child safety net',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://blog.example.com/posts/better-web-apps-2024',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'en_US',
    robots: 'index, follow',
  },
  onInit: (el) => {
    el.call('setLang', 'en')
  },
  state: {
    articles: () => [{
      title: 'Everything You Need to Know Before Buying a Child Safety Net',
      description: 'When it comes to your little one’s safety, guesswork isn’t an option. Especially in high-rise living, choosing the right protection means peace of mind for you and a safe space for your child.',
      poster: 'windows.png',
      href: '/en/blog/everything-you-need-to-know-before-buying-child-safety-net'
    }, {
      title: 'Safe Living for Families in High-Rise Apartments',
      description: 'Raising kids in a high-rise building comes with great challenges and child safety is one of the biggest. When little explorers are crawling or running around the house, even a moment\'s distraction can lead to danger near windows or balconies.',
      poster: 'blog2.png',
      href: '/en/blog/how-to-make-your-apartment-safer-place-for-children'
    }],
  },
};