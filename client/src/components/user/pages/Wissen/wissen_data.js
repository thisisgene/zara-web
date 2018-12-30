export const carouselData = [
  {
    image: 'test_img2.png',
    de: {
      lang: 'de',
      date: {
        month: 'Oktober',
        day: 20,
        time: {
          startTime: 10,
          endTime: 17
        }
      },
      category: 'Workshop',
      title: 'Digitale Zivilcourage',
      text:
        'Hetze, Diskriminierung und Rassismus sind Teil des digitalen Alltags, aber was kannst Du als User*in dagegen tun? Wie kann diesem Phänomen entgegentreten und anderen online zur Seite gestanden werden?',
      buttons: [
        {
          type: 'cta',
          text: 'Jetzt anmelden',
          link: 'de/subscribe'
        },
        {
          type: 'secondary',
          text: 'Details & Termine',
          link: 'de/details'
        }
      ]
    },
    en: {
      lang: 'en',
      date: {
        month: 'Octobre',
        day: 20,
        time: {
          startTime: 10,
          endTime: 17
        }
      },
      category: 'Workshop',
      title: 'Digitale Zivilcourage',
      text: 'this is a text.',
      buttons: [
        {
          type: 'cta',
          text: 'Subscribe now',
          link: 'en/subscribe'
        },
        {
          type: 'secondary',
          text: 'Details & Dates',
          link: 'en/details'
        }
      ],
      image: 'test_img2.png'
    }
  }
]

export const cardGridObject = {
  de: {
    title: 'Mehr Wissen',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'scales.png',
        title: 'Kenne Deine Rechte',
        link: 'beratung/lassunswastun/kennedeinerechte'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'book.png',
        text: 'Publikationen',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'faq-bubble.png',
        text: 'FAQs',
        link: 'wissen/faq'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'press.png',
        text: 'Presse',
        link: 'wissen/faq'
      }
    ]
  },
  en: {
    title: 'More Knowledge',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'scale.png',
        title: 'Kenne Deine Rechte',
        link: 'beratung/lassunswastun/kennedeinerechte'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'books.png',
        text: 'Publikationen',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'qna.png',
        text: 'FAQs',
        link: 'wissen/faq'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'list.png',
        text: 'Presse',
        link: 'wissen/faq'
      }
    ]
  }
}
