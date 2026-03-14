export const WelcomeHgroup = {
  extends: 'Hgroup',
  align: 'center center',
  gap: 'A2',
  margin: '- - C1',
  H: {
    tag: 'h4',
    text: el => el.call('isGeorgian') ? 'უსაფრთხოების ბადე თქვენი ბავშვისთვის' : 'Safety net for your child',
    fontSize: 'C1',
    textAlign: 'center',
    padding: '- B',
    '@tabletS': {
      fontSize: 'C',
    },
    '@mobileS': {
      fontSize: 'B1',
      padding: '- 0',
    },
  },
  P: {
    text: el => el.call('isGeorgian') ? 'Winblock დამცავი ბადეები თქვენი სახლისთვის' : 'WinBlock Nets for a Safer Home',
    textAlign: 'center',
    '@mobileM': {
      maxWidth: 'G',
    },
  },
};