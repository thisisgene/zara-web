const menuItems = [
  {
    name: 'Beratung',
    link: 'beratung',
    id: '1',
    contactIconLinks: [
      {
        de: {
          icon: 'act',
          color: 'red',
          text: 'Kostenlose Beratung',
          link: 'beratung/beratung_rassismus_hassimnetz',
        },
        en: {
          icon: 'act',
          color: 'red',
          text: 'Kostenlose Beratung',
          link: 'beratung/beratung_rassismus_hassimnetz',
        },
      },
      {
        de: {
          icon: 'LockIcon',
          color: 'petrol',
          text: 'Verschlüsselte Email an ZARA',
          link: 'verschluesselte_email',
        },
        en: {
          icon: 'LockIcon',
          color: 'petrol',
          text: 'Verschlüsselte Email an ZARA',
          link: 'verschluesselte_email',
        },
      },
    ],
    contact: {
      de: {
        title: 'Kontakt Beratung',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'beratung@zara.or.at',
      },
      en: {
        title: 'Kontakt Beratung',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'beratung@zara.or.at',
      },
    },
    subMenuList: [
      {
        name: 'Beratung & Melden',
        link: null,
        id: '1.1',

        subMenuList: [
          {
            name: 'Rassismus / Hass im Netz Beratung',
            link: 'beratung_rassismus_hassimnetz',
            id: '1.1.3',
          },
          {
            name: 'Rassismus',
            link: 'melden/rassismus',
            id: '1.1.1',
          },
          {
            name: 'Hass im Netz',
            link: 'melden/hassimnetz',
            id: '1.1.2',
          },
        ],
      },
      {
        name: 'Lass Uns was tun',
        id: '1.2',
        link: null,
        subMenuList: [
          {
            name: 'Was Sie tun können',
            link: 'wassietunkoennen',
            id: '1.2.1',
          },
          {
            name: 'Was Wir tun können',
            link: 'waswirdanntun',
            id: '1.2.2',
          },
          {
            name: 'Eigene Rechte kennen',
            redirect: true,
            redirectLink: 'wissen/eigene_rechte_kennen',
            id: '1.2.3',
          },
        ],
      },
    ],
  },
  {
    name: 'Training',
    link: 'training',
    id: '2',
    contact: {
      de: {
        title: 'Kontakt Training',
        address:
          'ZARA Training<br>gemeinnützige GmbH<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99 19',
        email: 'info@zara-training.at',
      },
      en: {
        title: 'Kontakt Training',
        address:
          'ZARA Training<br>gemeinnützige GmbH<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99 19',
        email: 'info@zara-training.at',
      },
    },
    subMenuList: [
      {
        name: 'Trainingsangebote',
        link: null,
        id: '2.1',
        subMenuList: [
          {
            name: 'Offene Workshops & Vorträge',
            link: 'angebote/workshops_vortraege',
            id: '2.1.1',
          },
          {
            name: 'Für Schulklassen',
            link: 'angebote/schulklassen',
            id: '2.1.2',
          },
          {
            name: 'Für Erwachsenengruppen',
            link: 'angebote/erwachsenengruppen',
            id: '2.1.3',
          },
          {
            name: 'Für Unternehmen',
            link: 'angebote/unternehmen',
            id: '2.1.4',
          },
        ],
      },
      {
        name: 'Training & mehr',
        link: null,
        id: '2.2',
        subMenuList: [
          {
            name: 'Aktuelle Trainingsprojekte',
            link: 'angebote/aktuelle_trainingsprojekte',
            id: '2.2.1',
          },
          {
            name: 'Workshop schenken',
            link: 'workshop_schenken',
            id: '2.2.2',
          },
          {
            name: 'Unsere Trainer*innen',
            link: 'trainer_innen',
            id: '2.2.3',
          },
        ],
      },
    ],
  },
  {
    name: 'Mitmischen',
    link: 'mitmischen',
    id: '3',
    contactIconLinks: [
      {
        de: {
          icon: 'act',
          text: 'Kostenlose Beratung',
          link: 'beratung/beratung_rassismus_hassimnetz',
        },
        en: {
          icon: 'act',
          text: 'Kostenlose Beratung',
          link: 'beratung/beratung_rassismus_hassimnetz',
        },
      },
      {
        de: {
          icon: 'LockIcon',
          color: 'petrol',
          text: 'Verschlüsselte Email an ZARA',
          link: 'verschluesselte_email',
        },
        en: {
          icon: 'LockIcon',
          color: 'petrol',
          text: 'Verschlüsselte Email an ZARA',
          link: 'verschluesselte_email',
        },
      },
    ],
    contact: {
      de: {
        title: 'Kontakt ZARA Büro',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'mitmischen@zara.or.at',
      },
      en: {
        title: 'Kontakt ZARA Büro',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'mitmischen@zara.or.at',
      },
    },
    subMenuList: [
      {
        name: 'Zeigen Sie Zivilcourage',
        id: '3.1',
        link: null,
        subMenuList: [
          {
            name: 'Counter Narratives',
            id: '3.1.1',
            link: 'counternarratives',
          },
          {
            name: 'Hashtags',
            id: '3.1.2',
            link: 'hashtags',
          },
          {
            name: 'Hasspostings melden',
            id: '3.1.3',
            link: 'hasspostings_melden',
          },
        ],
      },
      {
        name: 'Werden Sie ein*e ZARAista',
        id: '3.2',
        link: null,
        subMenuList: [
          {
            name: 'Community',
            id: '3.2.1',
            link: 'community',
          },
          {
            name: 'Unterstützen',
            id: '3.2.2',
            link: 'unterstuetzen',
          },
        ],
      },
    ],
  },
  {
    name: 'Wissen',
    id: '4',
    link: 'wissen',
    secondRow: true,
    contact: {
      de: {
        title: 'Kontakt Presse & Wissen',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'presse@zara.or.at',
      },
      en: {
        title: 'Kontakt Presse & Wissen',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'presse@zara.or.at',
      },
    },
    subMenuList: [
      {
        name: 'Aktuelles',
        link: 'aktuelles',
        id: '4.1',
        subMenuList: [{ name: 'ZARA Kolumne', link: 'kolumne', id: '4.1.1' }, { name: 'pressemeldungen', link: 'pressemeldungen', id: '4.1.2' }],
      },
      {
        name: 'Publikationen',
        link: 'publikationen',
        id: '4.3',
        subMenuList: [
          {
            name: 'Rassismusreport',
            link: 'rassismusreport',
            id: '4.3.2',
          },
          {
            name: 'GegenHassimNetz-Berichte',
            link: 'GegenHassimNetz_Berichte',
            id: '4.3.1',
          },
          {
            name: 'ZARA Publikationen',
            link: 'zara',
            id: '4.3.3',
          },
          {
            name: 'Jahres- und Finanzberichte',
            link: 'jahres_und_finanzberichte',
            id: '4.3.4',
          },
        ],
      },
      {
        name: 'FAQs',
        link: 'faq',
        id: '4.4',

      },
      {
        name: 'Eigene Rechte kennen',
        link: 'eigene_rechte_kennen',
        id: '4.2',
        gridRow: 'two',
        subMenuList: [
          // {
          //   name: 'Recht & Ordnung',
          //   link: 'recht_und_ordnung',
          //   id: '4.2.1'
          // },
          {
            name: 'Glossar',
            link: 'glossar',
            id: '4.2.2',
          },
        ],
      },

      // {
      //   name: 'Presse',
      //   link: 'presse',
      //   id: '4.5',
      //   gridRow: 'two',
      //   subMenuList: [
      //     {
      //       name: 'Pressespiegel',
      //       link: 'pressespiegel',
      //       id: '4.5.1',
      //     },
      //     {
      //       name: 'Pressematerial & Logos',
      //       link: 'pressematerial_und_logos',
      //       id: '4.5.2',
      //     },
      //     {
      //       name: 'Fotos',
      //       link: 'fotos',
      //       id: '4.5.3',
      //     },
      //   ],
      // },
    ],
  },
  {
    name: 'Über ZARA',
    id: '5',
    link: 'ueber_ZARA',
    contact: {
      de: {
        title: 'Kontakt ZARA Büro',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'office@zara.or.at',
      },
      en: {
        title: 'Kontakt ZARA Büro',
        address:
          'ZARA<br>Zivilcourage und Anti-Rassismus-Arbeit<br>Schönbrunner Straße 119/13<br>Eingang: Am Hundsturm 7<br>1050 Wien',
        phone: '+43 (0) 1 929 13 99',
        email: 'office@zara.or.at',
      },
    },
    subMenuList: [
      {
        name: 'Was wir wollen',
        link: 'was_wir_wollen',
        id: '5.1',
        subMenuList: [
          {
            name: 'Mission',
            link: 'mission',
            id: '5.1.1',
          },
          {
            name: 'Die ZARA Story',
            link: 'geschichte',
            id: '5.1.2',
          },
          {
            name: 'ZARA Grundsätze',
            link: 'grundsaetze',
            id: '5.1.3',
          },
        ],
      },
      {
        name: 'Wer wir sind',
        link: 'wer_wir_sind',
        id: '5.2',
        subMenuList: [
          {
            name: 'Team',
            link: 'team',
            id: '5.2.1',
          },
          {
            name: 'Jobs',
            link: 'jobs',
            id: '5.2.3',
          },
          {
            name: 'Volontariat & Zivildienst',
            link: 'jobs',
            id: '5.2.4',
          },
        ],
      },
      {
        name: 'Projekte & Kooperation',
        link: 'projekte_und_kooperation',
        id: '5.3',
        subMenuList: [
          {
            name: 'Netzwerke & Initiativen',
            link: 'netzwerke_und_initiativen',
            id: '5.3.1',
          },
          {
            name: 'Projekte',
            link: 'projekte',
            id: '5.3.2',
          },
          {
            name: 'Befreundete Organisationen',
            link: 'befreundete_organisationen',
            id: '5.3.3',
          },
        ],
      },
    ],
  },
]

export default menuItems
