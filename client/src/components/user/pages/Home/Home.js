import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import CarouselGroup from '../../dashboard/carousel/CarouselGroup'

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
        </div>
      </div>
    )
  }
}

export default withLocalize(Home)
