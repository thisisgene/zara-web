export const heroData = {
  image: 'faq.png',
  imageSide: 'left',
  de: {
    title: 'Häufig gestellte Fragen',
    text:
      'Hier haben wir ein paar Fragen für Sie gesammelt, die uns häufig gestellt werden. Um sich diesbezüglich gut zurechtfinden zu können, haben wir die FAQs in unsere zwei Schwerpunkte sowie spezifische Fragen über ZARA gegliedert:'
  },
  en: {
    title: 'Häufig gestellte Fragen',
    text:
      'Hier haben wir ein paar Fragen für Sie gesammelt, die uns häufig gestellt werden. Um sich diesbezüglich gut zurechtfinden zu können, haben wir die FAQs in unsere zwei Schwerpunkte sowie spezifische Fragen über ZARA gegliedert:'
  }
}

export const oneLineAlert = {
  type: 'info',
  de: {
    title: 'Mehr Aktuelles',
    text: 'Finden Sie sämtliche Neuigkeiten rund um ZARA',
    button: {
      text: 'Mehr',
      type: 'default',
      link: 'wissen/aktuelles'
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
        image: 'scales.png',
        title: 'Kenne Deine Rechte',
        link: 'wissen/kenne_deine_rechte'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'book.png',
        title: 'Publikationen',
        link: 'wissen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'book.png',
        title: 'FAQs',
        link: 'wissen/faq'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'book.png',
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
