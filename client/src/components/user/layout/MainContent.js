import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize, Translate } from 'react-localize-redux'

import CarouselGroup from '../dashboard/carousel/CarouselGroup'
import styles from './MainContent.module.sass'

class MainContent extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
      console.log(activeLanguage)
    }
    return (
      <div className={styles['main-content']}>
        <div className={styles['carousel-container']}>
          <p />
          <CarouselGroup lang={lang} />
        </div>
      </div>
    )
  }
}

export default withLocalize(MainContent)
// export default MainContent
