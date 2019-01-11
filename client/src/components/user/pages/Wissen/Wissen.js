import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import { carouselData, cardGridObject } from './wissen_data'

import CarouselGroup from '../../dashboard/carousel/CarouselGroup'
import NewsletterOneLineObject from '../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

import styles from './Wissen.module.sass'

class Wissen extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && carouselData && cardGridObject && (
          <div className={styles['wissen']}>
            <CarouselGroup data={carouselData} lang={lang} />
            <div className={styles['more-link']}>
              <Link to={`/${lang}/wissen/aktuelles`}>
                {lang === 'de'
                  ? 'Weitere News, Veranstaltungen und Mehr'
                  : 'More news, events, ...'}
              </Link>
            </div>
            <NewsletterOneLineObject lang={lang} />
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Wissen)
