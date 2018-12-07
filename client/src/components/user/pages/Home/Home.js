import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import CarouselGroup from '../../dashboard/carousel/CarouselGroup'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import QuoteBox from '../../dashboard/QuoteBox/QuoteBox'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'

import styles from './Home.module.sass'

const fakeServerData = [
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
  },
  {
    imageAsBackground: true,
    image: 'test_img2.png',
    de: {
      lang: 'de',
      date: {
        month: 'Dezember',
        day: 22,
        time: {
          startTime: 13,
          endTime: 19
        }
      },
      category: 'Netzwerktreffen',
      title: 'Anderer Titel',
      text: 'Das ist der Text. Der hat noch bisschen mehr Buchstaben.'
    },
    en: {
      lang: 'en',
      date: {
        month: 'December',
        day: 22,
        time: {
          startTime: 13,
          endTime: 19
        }
      },
      category: 'Network meeting',
      title: 'Other title',

      text: 'this is a text. It has more character.'
    }
  }
]

const quote = {
  text:
    "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
  author: 'Margaret Mead, Kulturantropologin'
}

const infoObj = {
  image: 'act',
  color: 'red',
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

class Home extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
      // console.log(activeLanguage)
      console.log(fakeServerData)
    }
    return (
      <div className={styles['main-content']}>
        <div className={styles['carousel-container']}>
          <CarouselGroup serverData={fakeServerData} lang={lang} />
          <OneLineAlert />
          <QuoteBox quote={quote} />
          <InfoBoxObject infoBox={infoObj} />
        </div>
      </div>
    )
  }
}

export default withLocalize(Home)
