import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize, Translate } from 'react-localize-redux'

import CarouselGroup from '../dashboard/carousel/CarouselGroup'
import styles from './MainContent.module.sass'

const fakeServerData = [
  {
    imageAsBackground: true,
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

      text: 'Das ist der Text'
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
      title: 'Digital Courage',

      text: 'this is a text.'
    }
  },
  {
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

class MainContent extends Component {
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
          <p />
          <CarouselGroup serverData={fakeServerData} lang={lang} />
        </div>
      </div>
    )
  }
}

export default withLocalize(MainContent)
// export default MainContent
