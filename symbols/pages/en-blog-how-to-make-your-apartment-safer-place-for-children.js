export const enBlogHowToMakeYourApartmentSaferPlaceForChildren = {
  extends: 'BlogArticle',
  metadata: {
    title: 'How to Make Your Apartment a Safer Place for Children',
    description: 'Learn how to childproof your apartment step by step and protect kids from falls, sharp corners, and everyday risks.',
    keywords: 'child safety nets',
    image: 'https://blog.example.com/images/web-dev-2024.jpg',
    url: 'https://childsafetynet.ge/en/blog/how-to-make-your-apartment-safer-place-for-children',
    siteName: 'ChildSafetyNet',
    type: 'article',
    locale: 'en_US',
    robots: 'index, follow',
  },
  onInit: (el) => {
    el.call('setLang', 'en')
  },
  state: {
    poster: 'blog2.png',
    title: 'Safe Living for Families in High-Rise Apartments',
    description: `Raising kids in a high-rise building comes with great challenges and child safety is one of the biggest. When little explorers are crawling or running around the house, even a moment's distraction can lead to danger near windows or balconies.`,
  },
};