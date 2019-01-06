import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import CarouselGroup from '../../dashboard/carousel/CarouselGroup'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import QuoteBox from '../../dashboard/QuoteBox/QuoteBox'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'
import BigNewsObject from '../../dashboard/BigNewsObject/BigNewsObject'

import styles from './Home.module.sass'

const fakeServerData = [
  {
    imageAsBackground: true,
    image: 'mixer_new.jpg',
    mainLink: 'mitmischen'
    // de: {
    //   lang: 'de',
    //   date: {
    //     month: 'Oktober',
    //     day: 20,
    //     time: {
    //       startTime: 10,
    //       endTime: 17
    //     }
    //   },
    //   category: 'Workshop',
    //   title: 'Digitale Zivilcourage',
    //   text:
    //     'Hetze, Diskriminierung und Rassismus sind Teil des digitalen Alltags, aber was kannst Du als User*in dagegen tun? Wie kann diesem Phänomen entgegentreten und anderen online zur Seite gestanden werden?',
    //   buttons: [
    //     {
    //       type: 'cta',
    //       text: 'Jetzt anmelden',
    //       link: 'training'
    //     },
    //     {
    //       type: 'secondary',
    //       text: 'Details & Termine',
    //       link: 'training'
    //     }
    //   ]
    // },
    // en: {
    //   lang: 'en',
    //   date: {
    //     month: 'Octobre',
    //     day: 20,
    //     time: {
    //       startTime: 10,
    //       endTime: 17
    //     }
    //   },
    //   category: 'Workshop',
    //   title: 'Digitale Zivilcourage',
    //   text: 'this is a text.',
    //   buttons: [
    //     {
    //       type: 'cta',
    //       text: 'Subscribe now',
    //       link: 'training'
    //     },
    //     {
    //       type: 'secondary',
    //       text: 'Details & Dates',
    //       link: 'training'
    //     }
    //   ],
    //   image: 'test_img2.png'
    // }
  },
  {
    imageAsBackground: true,
    image: 'baustein-digitale_zivilcourage.jpg',
    mainLink: 'wissen/aktuelles'
  },
  {
    imageAsBackground: true,
    image: 'sofa_hate_speech.jpg',
    mainLink: 'wissen/aktuelles'
  }
]

const quote = {
  text:
    "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
  author: 'Margaret Mead, Kulturantropologin'
}

const infoObj_default = {
  color: 'default',
  de: {
    cards: [
      {
        color: 'default',
        title: 'Kostenlose, persönliche Beratung',
        text:
          'In der Beratungsstelle erhalten jährlich über 1.000 Betroffene und Zeug*innen von Rassismus rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.',
        link: 'beratung',
        linkText: 'Mehr zu Beratung',
        listItems: [
          {
            text: 'Persönliche Beratung'
          },
          {
            text: 'Melden in Social Media'
          },
          {
            text: 'Rassissmus FAQs'
          }
        ]
      },
      {
        color: 'default',
        title: 'Workshops & Trainings',
        text:
          'ZARA Training gemeinnützige GmbH bietet in ganz Österreich zielgruppengerechte und individuell gestaltbare Aus- und Fortbildungen, Workshops und Projekte in den Bereichen Diversity, Bewusstseins- bildung, Anti-Rassismus und Zivilcourage an.',
        link: 'training',
        linkText: 'Mehr zu Trainings'
      },
      {
        color: 'default',
        title: 'Öffentlichkeitsarbeit & Sensibilisierung',
        text:
          'Kontinuierliche Medienarbeit ist ein zentraler Bestandteil der Präventionsarbeit von ZARA. Denn das Sichtbarmachen von Rassismus in Österreich steigert das Problembewusstsein und trägt zur Sensibilisierung für die Themen Rassismus/Anti-Rassismus bei.',
        link: 'oeffentlichkeit',
        linkText: 'Mehr zu Öffentlichkeitsarbeit'
      }
    ]
  },
  en: {
    cards: [
      {
        color: 'default',
        title: 'Kostenlose, persönliche Beratung',
        text:
          'In der Beratungsstelle erhalten jährlich über 1.000 Betroffene und Zeug*innen von Rassismus rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.',
        link: 'beratung',
        linkText: 'Mehr zu Beratung',
        listItems: [
          {
            text: 'Persönliche Beratung'
          },
          {
            text: 'Melden in Social Media'
          },
          {
            text: 'Rassissmus FAQs'
          }
        ]
      },
      {
        color: 'default',
        title: 'Workshops & Trainings',
        text:
          'ZARA Training gemeinnützige GmbH bietet in ganz Österreich zielgruppengerechte und individuell gestaltbare Aus- und Fortbildungen, Workshops und Projekte in den Bereichen Diversity, Bewusstseins- bildung, Anti-Rassismus und Zivilcourage an.',
        link: 'training',
        linkText: 'Mehr zu Trainings'
      },
      {
        color: 'default',
        title: 'Öffentlichkeitsarbeit & Sensibilisierung',
        text:
          'Kontinuierliche Medienarbeit ist ein zentraler Bestandteil der Präventionsarbeit von ZARA. Denn das Sichtbarmachen von Rassismus in Österreich steigert das Problembewusstsein und trägt zur Sensibilisierung für die Themen Rassismus/Anti-Rassismus bei.',
        link: 'oeffentlichkeit',
        linkText: 'Mehr zu Öffentlichkeitsarbeit'
      }
    ]
  }
}
const infoObj_red = {
  image: 'act',
  color: 'red',
  de: {
    title: 'Wie ich aktiv werden kann!',
    text:
      'ZARA – Zivilcourage und Anti-Rassismus-Arbeit wurde im Jahr 1999 mit dem Ziel gegründet, Zivilcourage und eine rassismusfreie Gesellschaft in Österreich zu fördern sowie alle Formen von Rassismus zu bekämpfen.',
    cards: [
      {
        image: 'alert',
        color: 'red',
        title: 'Rassismus melden',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad soluta saepe ab magnam minus! Eveniet, libero. Recusandae aliquam, ut temporibus numquam dolores pariatur qui esse. Quisquam rerum porro aut!',
        link: 'de/melden',
        linkText: "Los geht's!"
      },
      {
        image: 'donate_hand',
        color: 'red',
        title: '(Online) Spenden',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad soluta saepe ab magnam minus! Eveniet, libero. Recusandae aliquam, ut temporibus numquam dolores pariatur qui esse. Quisquam rerum porro aut!',
        link: 'de/melden',
        linkText: "Los geht's!"
      },
      {
        image: 'group',
        color: 'red',
        title: 'Ehrenamtlich mitmischen',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad soluta saepe ab magnam minus! Eveniet, libero. Recusandae aliquam, ut temporibus numquam dolores pariatur qui esse. Quisquam rerum porro aut!',
        link: 'de/melden',
        linkText: "Los geht's!"
      }
    ]
  },
  en: {
    title: 'Wie ich aktiv werden kann!',
    text:
      'ZARA – Zivilcourage und Anti-Rassismus-Arbeit wurde im Jahr 1999 mit dem Ziel gegründet, Zivilcourage und eine rassismusfreie Gesellschaft in Österreich zu fördern sowie alle Formen von Rassismus zu bekämpfen.',
    cards: [
      {
        image: 'act',
        color: 'red',
        title: 'Rassismus melden',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad soluta saepe ab magnam minus! Eveniet, libero. Recusandae aliquam, ut temporibus numquam dolores pariatur qui esse. Quisquam rerum porro aut!',
        link: 'de/melden',
        linkText: "Los geht's!"
      },
      {
        image: 'act',
        color: 'red',
        title: '(Online) Spenden',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad soluta saepe ab magnam minus! Eveniet, libero. Recusandae aliquam, ut temporibus numquam dolores pariatur qui esse. Quisquam rerum porro aut!',
        link: 'de/melden',
        linkText: "Los geht's!"
      },
      {
        image: 'act',
        color: 'red',
        title: 'Ehrenamtlich mitmischen',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ad soluta saepe ab magnam minus! Eveniet, libero. Recusandae aliquam, ut temporibus numquam dolores pariatur qui esse. Quisquam rerum porro aut!',
        link: 'de/melden',
        linkText: "Los geht's!"
      }
    ]
  }
}

const cardGridObject = {
  de: {
    title: '',
    link: '',
    linkText: '',
    cards: [
      {
        size: 'wide',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        title: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        category: '',
        date: '',
        title: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      }
    ]
  },
  en: {
    title: '',
    link: '',
    linkText: '',
    cards: [
      {
        size: '',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        title: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        category: '',
        date: '',
        title: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      },
      {
        size: '',
        type: '',
        text: '',
        link: ''
      }
    ]
  }
}

// const cardGridObject = {
//   de: {
//     title: 'Aktuell',
//     link: 'test',
//     linkText: 'Alle News & Presseaussendungen',
//     cards: [
//       {
//         size: 'wide',
//         type: 'titleCard',
//         text:
//           'Rassismus Report 2017: Weitere Zunahme rassistischer Vorfälle - Online Hass und Hetze auf neuem Höchststand',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         title: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'newsCard',
//         category: 'News',
//         date: '24. Juni 2018',
//         title:
//           'ZARA-Forderung für besseren Schutz bei grober sexueller Belästigung',
//         text:
//           'Der Fall von Sigi Maurer hat gezeigt, dass es einen besseren rechtlichen Schutz bei grober sexueller Belästigung durch Privatnachrichten benötigt. Laut Barbara Unterlerchner, Leiterin der Beratungsstelle #GegenHassimNetz, haben wir “immer wieder Fälle …',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       }
//     ]
//   },
//   en: {
//     title: 'Aktuell',
//     link: 'test',
//     linkText: 'Alle News & Presseaussendungen',
//     cards: [
//       {
//         size: 'wide',
//         type: 'titleCard',
//         text:
//           'Rassismus Report 2017: Weitere Zunahme rassistischer Vorfälle - Online Hass und Hetze auf neuem Höchststand',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         title: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'newsCard',
//         category: 'News',
//         date: '24. Juni 2018',
//         title:
//           'ZARA-Forderung für besseren Schutz bei grober sexueller Belästigung',
//         text:
//           'Der Fall von Sigi Maurer hat gezeigt, dass es einen besseren rechtlichen Schutz bei grober sexueller Belästigung durch Privatnachrichten benötigt. Laut Barbara Unterlerchner, Leiterin der Beratungsstelle #GegenHassimNetz, haben wir “immer wieder Fälle …',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       },
//       {
//         size: 'default',
//         type: 'imageCard',
//         text: 'Der Klagsverband ist vom Zusperren bedroht',
//         link: 'test'
//       }
//     ]
//   }
// }

const mainInfo = {
  text:
    'ZARA – Zivilcourage und Anti-Rassismus-Arbeit wurde im Jahr 1999 mit dem Ziel gegründet, Zivilcourage und eine rassismusfreie Gesellschaft in Österreich zu fördern sowie alle Formen von Rassismus zu bekämpfen.',
  link: 'ueber_ZARA/was_wir_wollen/mission',
  linkText: 'Mehr zur Mission'
}

const oneLineAlert = {
  type: 'red',
  icon: 'alert',
  de: {
    text:
      'Ich bin Betroffene*r oder Zeug*in eines rassistischen Vorfalls geworden',
    button: {
      text: 'Jetzt melden',
      type: 'alert',
      link: 'beratung/melden/rassismus'
    }
  },
  en: {
    text:
      'Ich bin Betroffene oder Zeug*in eines rassistischen Vorfalls geworden',
    button: {
      text: 'Jetzt melden',
      type: 'alert',
      link: 'beratung/melden/rassismus'
    }
  }
}

class Home extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div className={styles['main-content']}>
        <CarouselGroup data={fakeServerData} lang={lang} />
        <OneLineAlert content={oneLineAlert} lang={lang} />
        <BigNewsObject content={mainInfo} lang={lang} />
        <InfoBoxObject infoBox={infoObj_default} lang={lang} />
        <div style={{ margin: '3rem auto' }}>
          <QuoteBox quote={quote} />
        </div>
        <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
        <InfoBoxObject infoBox={infoObj_red} lang={lang} />
      </div>
    )
  }
}

export default withLocalize(Home)
