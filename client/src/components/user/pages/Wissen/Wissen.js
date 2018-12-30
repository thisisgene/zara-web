import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux'

import { carouselData, cardGridObject } from './wissen_data'

import CarouselGroup from '../../dashboard/carousel/CarouselGroup'
import IconObject from '../../dashboard/IconObject/IconObject'
import InputButtonBox from '../../dashboard/InputButtonBox/InputButtonBox'
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
              <Link to="/user/${lang}/wissen/news">
                {lang === 'de'
                  ? 'Weitere News, Veranstaltungen und Mehr'
                  : 'More news, events, ...'}
              </Link>
            </div>
            <div className={styles['newsletter-container']}>
              <div>
                <IconObject image="newsletterLogo" />
                <span>
                  {lang === 'de'
                    ? 'Melden Sie sich für den ZARA Newsletter an'
                    : 'Subscribe to the ZARA newsletter'}
                </span>
              </div>
              <InputButtonBox
                content={{
                  inputPlaceholder:
                    lang === 'de' ? 'E-Mail Adresse' : 'E-mail Address',
                  button: {
                    type: 'default',
                    text:
                      lang === 'de'
                        ? 'Newsletter abonnieren'
                        : 'Subscribe to newsletter'
                  }
                }}
              />
            </div>
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Wissen)
