const menuItems = [
  {
    name: 'Beratung',
    link: 'beratung',
    id: '1',
    subMenuList: [
      {
        name: 'Beratung & Melden',
        link: null,
        id: '1.1',
        subMenuList: [
          {
            name: 'Rassismus',
            link: 'melden/rassismus',
            id: '1.1.1'
          },
          {
            name: 'Hass im Netz',
            link: 'melden/hassimnetz',
            id: '1.1.2'
          },
          {
            name: 'Rassismus / Hass im Netz Beratung',
            link: 'beratung_rassismus_hassimnetz',
            id: '1.1.3'
          }
        ]
      },
      {
        name: 'Lass Uns was tun',
        id: '1.2',
        link: null,
        subMenuList: [
          {
            name: 'Was Sie tun können',
            link: 'wassietunkoennen',
            id: '1.2.1'
          },
          {
            name: 'Was Wir tun können',
            link: 'waswirtunkoennen',
            id: '1.2.2'
          },
          {
            name: 'Kenne Deine Rechte',
            redirect: true,
            redirectLink: 'wissen/kennedeinerechte',
            id: '1.2.3'
          }
        ]
      }
    ]
  },
  {
    name: 'Training',
    link: 'training',
    id: '2',
    subMenuList: [
      {
        name: 'Training für Kinder & Jugendliche',
        link: 'kinder_jugendliche',
        id: '2.1'
      },
      {
        name: 'Training für Erwachsene',
        link: 'erwachsene',
        id: '2.2'
      }
    ]
  },
  { name: 'Mitmischen', link: 'mitmischen', id: '3' },
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
