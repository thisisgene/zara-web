const menuItems = [
  {
    name: 'Beratung',
    link: 'beratung',
    id: '1',
    subMenuList: [
      {
        name: 'Beratung & Melden',
        link: 'melden',
        id: '1.1',
        subMenuList: [
          {
            name: 'Rassismus',
            link: 'rassismus',
            id: '1.1.1'
          },
          {
            name: 'Hass im Netz',
            link: 'hassimnetz',
            id: '1.1.2'
          }
        ]
      },
      {
        name: 'Lass Uns was tun',
        link: 'lassunswastun',
        id: '1.2',
        subMenuList: [
          {
            name: 'Was Du tun kannst',
            link: 'wasdutunkannst',
            id: '1.2.1'
          },
          {
            name: 'Was Wir tun können',
            link: 'waswirtunkoennen',
            id: '1.2.2'
          },
          {
            name: 'Kenne Deine Rechte',
            link: 'kennedeinerechte',
            id: '1.2.3'
          }
        ]
      }
    ]
  },
  {
    name: 'Training',
    id: '2',
    subMenuList: [
      {
        name: 'Training für Kinder & Jugendliche',
        link: 'training/kinder_jugendliche',
        id: '2.1'
      },
      {
        name: 'Training für Erwachsene',
        link: 'training/erwachsene',
        id: '2.2'
      }
    ]
  },
  { name: 'Mitmischen', id: '3' },
  {
    name: 'Wissen',
    id: '4',
    link: 'wissen',
    subMenuList: [
      {
        name: 'Aktuelles',
        link: 'aktuelles',
        id: '4.1'
      },
      {
        name: 'FAQs',
        link: 'faq',
        id: '4.4'
      }
    ]
  },
  {
    name: 'Über ZARA',
    id: '5',
    link: 'ueber_ZARA',
    subMenuList: [
      {
        name: 'Was wir wollen',
        link: 'was_wir_wollen',
        id: '5.1'
      },
      {
        name: 'Wer wir sind',
        link: 'wer_wir_sind',
        id: '5.2',
        subMenuList: [
          {
            name: 'Team',
            link: 'team',
            id: '5.2.1'
          }
        ]
      }
    ]
  }
]

export default menuItems
