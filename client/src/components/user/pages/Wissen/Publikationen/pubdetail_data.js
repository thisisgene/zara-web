export const oneLineAlert = {
  type: 'info',
  de: {
    title: 'Mehr Publikationen',
    text: 'Finden Sie sämtliche Publikationen rund um ZARA',
    button: {
      text: 'Mehr',
      type: 'default',
      link: 'wissen/publikationen/zara'
    }
  },
  en: {
    title: 'Mehr Aktuelles',
    text: 'Finden Sie sämtliche Neuigkeiten rund um ZARA',
    button: {
      text: 'Mehr',
      type: 'default',
      link: 'wissen/aktuelles'
    }
  }
}

export const cardGrid = {
  de: {
    title: 'Mehr Wissen',
    // link: 'test',
    // linkText: 'Alle News & Presseaussendungen',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/rechte.png',
        title: 'Eigene Rechte kennen',
        link: 'wissen/eigene_rechte_kennen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/presse.png',
        title: 'Aktuelles',
        link: 'wissen/aktuelles'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/faq.png',
        title: 'FAQs',
        link: 'wissen/faq'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/presse.png',
        title: 'Presse',
        link: 'wissen/presse'
      }
    ]
  },
  en: {
    title: 'Aktuell',
    link: 'test',
    linkText: 'Alle News & Presseaussendungen',
    cards: [
      {
        size: 'default',
        type: 'titleCard',
        text:
          'Rassismus Report 2017: Weitere Zunahme rassistischer Vorfälle - Online Hass und Hetze auf neuem Höchststand',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        title: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        text: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        text: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      }
    ]
  }
}
