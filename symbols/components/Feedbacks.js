export const Feedbacks = {
  extends: 'Flex',
  flow: 'y',
  align: 'center flex-start',
  gap: 'D+X2',
  padding: 'D',
  color: 'white',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  margin: '- D1',
  background: 'blue',
  round: 'B',
  '@tabletL': {
    padding: '- 0',
    gap: '0',
    align: 'center flex-start',
  },
  '@mobileM': {
    margin: 'E2 0 D1 0',
  },
  ':before': {
    content: '""',
    boxSize: '100% D',
    background: 'linear-gradient(to right, var(--color-blue) 0%,rgba(255, 255, 255, 0) 100%)',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'none',
    pointerEvents: 'none',
    '@tabletL': {
      display: 'block',
    },
  },
  ':after': {
    content: '""',
    boxSize: '100% E',
    background: 'linear-gradient(to left, var(--color-blue) 0%,rgba(255, 255, 255, 0) 100%)',
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'none',
    pointerEvents: 'none',
    '@tabletL': {
      display: 'block',
    },
  },
  H6: {
    fontWeight: 'bold',
    text: el => el.call('isGeorgian') ? 'ჩვენი მომხმარებლები Facebook-ზე' : 'Our users from Facebook',
    margin: '- auto',
    zIndex: '2',
    textAlign: 'center',
    '@tabletL': {
      padding: '- - C -',
    },
    '@mobileS': {
      maxWidth: 'F2',
    },
  },
  Grid: {
    columns: 'repeat(3, auto)',
    childExtends: 'Feedback',
    columnGap: 'D2',
    rowGap: 'D',
    '@tabletL': {
      display: 'flex',
      justifyContent: 'flex-start',
      overflowX: 'auto',
      padding: 'A D A D',
      width: '100%',
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '@mobileL': {
      padding: 'A B2 A B2',
      gap: 'C',
    },
    '@mobileS': {
      gap: 'B',
      padding: 'A B A B',
    },
    childProps: {
      '@mobileS': {
        flow: 'y',
        align: 'center flex-start',
        minWidth: '100%',
      },
      Avatar: {
        src: '{{ src }}',
      },
      Hgroup: {
        gap: 'X',
        '@mobileS': {
          align: 'center flex-start',
          textAlign: 'center',
          gap: 'A1',
        },
        H: {
          tag: 'strong',
          text: '{{ title }}',
        },
        P: {
          text: '{{ message }}',
          color: 'white .8',
          '@tabletL': {},
          '@mobileL': {
            maxWidth: 'G',
          },
        },
      },
    },
    childrenAs: 'state',
    children: el => el.call('isGeorgian') ? [{
    src: 'avatar.svg',
    name: 'Nika kokhodze',
    message: 'ძალიან ხარისხიანი სერვისი აქვთ, კმაყოფილი ვარ! კარგი კომუნიკაბელური ხალხია',
  },
  {
    src: 'avatar2.svg',
    name: 'Keti Khitarishvili',
    message: 'პასუხისმგებლიანი და საიმედო გუნდი 😊😊❤️❤️',
  },
  {
    src: 'avatar3.svg',
    name: 'Kote Kakulia',
    message: 'მადლობა მომსახურებისთვის ❤️❤️❤️👍',
  },
  {
    src: 'avatar4.svg',
    name: 'Nika Mkheidze',
    message: 'საუკეთესო დაცვა თქვენი ფანჯრებისა და აივნებისთვის',
  },
  {
    src: 'avatar5.svg',
    name: 'Manana Nanuna',
    message: `სუპერ დამცავი ბადეები მწერებისაგან და ფანჯარაზე დამცავი ვინბლოკის ბადეები ბავშვის გადავარდნის საწინააღმდეგო`
  },
  {
    src: 'avatar6.svg',
    name: 'Irakli Chikava',
    message: '........................👍',
  },
] : [{
  src: 'avatar.svg',
  name: 'Nika Kokhodze',
  message: 'They offer very high-quality service, I’m satisfied! Very communicative and friendly people.'
},
{
  src: 'avatar2.svg',
  name: 'Keti Khitarishvili',
  message: 'Responsible and reliable team 😊😊❤️❤️'
},
{
  src: 'avatar3.svg',
  name: 'Kote Kakulia',
  message: 'Thank you for the service ❤️❤️❤️👍'
},
{
  src: 'avatar4.svg',
  name: 'Nika Mkheidze',
  message: 'The best protection for your windows and balconies.'
},
{
  src: 'avatar5.svg',
  name: 'Manana Nanuna',
  message: `Excellent insect screens and WinBlock safety nets to prevent children from falling out of windows.`
},
{
  src: 'avatar6.svg',
  name: 'Irakli Chikava',
  message: '........................👍'
}],
  },
  Link: {
    extends: [
      'Link',
      'IconText',
    ],
    background: 'white',
    color: 'black',
    cursor: 'pointer',
    padding: 'Z2 B1',
    lineHeight: '.8em',
    href: 'https://www.facebook.com/WinblockGeorgia',
    target: '_blank',
    border: '1px solid black',
    round: 'C1',
    gap: 'X2',
    transition: 'letter-spacing, B, defaultBezier',
    ':hover': {
      letterSpacing: '.35px',
      textDecoration: 'underline',
    },
    Img: {
      src: 'facebook.svg',
    },
    Span: {
      text: el => el.call('isGeorgian') ? 'გამოგვყევით' : 'Follow us',
      padding: '- - W',
      margin: '- - - Y',
    },
  },
  IconText: {
    gap: 'Z',
    alignSelf: 'center',
    display: 'none',
    padding: 'B - - -',
    '@tabletL': {
      display: 'flex',
    },
    Icon: {
      name: 'chevronLeft',
    },
    text: 'scroll',
    Icon_2: {
      name: 'chevronRight',
    },
  },
};