export const Features = {
  extends: 'Flex',
  flow: 'y',
  align: 'center flex-start',
  gap: 'D+X',
  padding: '- B',
  Grid: {
    columns: 'repeat(3, auto)',
    columnGap: 'D+X',
    rowGap: 'D3',
    '@tabletL': {
      columns: 'repeat(2, auto)',
    },
    '@tabletS': {
      columns: 'repeat(1, auto)',
    },
    childProps: {
      gap: 'A1+V',
      align: 'center flex-start',
      H: {
        tag: 'h6',
        text: '{{ title }}',
        fontWeight: '700',
      },
      P: {
        textAlign: 'center',
        text: '{{ description }}',
        maxWidth: 'G1',
      },
    },
    childExtends: 'Hgroup',
    childrenAs: 'state',
    children: el => el.call('isGeorgian') ? [{
      title: 'გამძლე',
      description: `დამზადებულია მაქსიმუმ 250 კგ-ის დატვირთვისა
        და ზეწოლის გაძლებისთვის. ტესტირებულია სტამბოლის
        ტექნიკურ უნივერსიტეტში (ITU).`
    }, {
      title: 'დაზღვევა',
      description: `WinBlock®-ის ფანჯრის უსაფრთხოების სისტემები
        დამზადებულია თქვენი ბავშვების უსაფრთხოებისთვის,
        რათა თავიდან აიცილოს შესაძლო უბედური შემთხვევები.`
    }, {
      title: 'ესთეტიური',
      description: `ეს არ გიქმნით გრძნობას, თითქოს გისოსებს უკან იყოთ,
        რადგან შეიცავს 2.5 მმ სისქის თხელ მავთულებს და
        შესაბამისად ესთეტიკურად ლამაზ პროდუქტს წარმოადგენს.`
    }, {
      title: 'მოქნილი',
      description: `ეს ერგება ყველა ტიპის და ზომის ფანჯარასა და აივანს.
      დიზაინში გათვალისწინებულია ნებისმიერი ზომის ფანჯარა.`
    }, {
      title: 'უსაფრთხო',
      description: `PVC-ით დაფარული ფოლადის მავთულები ბავშვისთვის
        არც მაკრატლით და არც დანით არ იჭრება. თუმცა, მოზრდილს
        შეუძლია მათი გაჭრა პინცეტით, რის შემდეგაც ფანჯარა
        შეიძლება გამოყენებულ იქნას გადაუდებელი ევაკუაციისთვის.`
    }, {
      title: 'მარტივი წმენდა',
      description: `მავთულებს შორის დაშორება საკმარისად ფართოა,
        რომ ხელი გადის, რაც გვერდითა ფანჯრების ადვილად
        გაწმენდას შესაძლებელს ხდის.`
    }] : [{
      title: 'Durable',
      description: `Built to withstand up to 250 kg of load
    and pressure. Tested at Istanbul Technical
    University (ITU).`
    }, {
      title: 'Protection',
      description: `WinBlock® window safety systems are
    designed to keep your children safe and
    prevent potential accidents.`
    }, {
      title: 'Aesthetic',
      description: `It doesn't make you feel like you're
    behind bars, since it uses thin 2.5 mm wires,
    resulting in a visually pleasing product.`
    }, {
      title: 'Flexible',
      description: `It fits all types and sizes of windows
    and balconies. The design accommodates
    any window size.`
    }, {
      title: 'Safe',
      description: `The PVC-coated steel wires cannot be cut
    by a child using scissors or a knife. However,
    an adult can cut them with pliers, allowing
    the window to be used for emergency evacuation.`
    }, {
      title: 'Easy to Clean',
      description: `The spacing between the wires is wide
    enough for a hand to pass through, making
    it easy to clean side windows.`
    }],
  },
};
