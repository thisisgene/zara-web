import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { zaraHeroData } from './publikationen_data'
import { pubData } from './zara_pub_data'

// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import PubItem from './PubItem'

import styles from './Publikationen.module.sass'

class ZaraPublikationen extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            <HeroUnit data={zaraHeroData} lang={lang} />
            <NewsletterOneLineObject lang={lang} />
            <div className={styles['pub-container']}>
              {pubData &&
                pubData.map((item, index) => (
                  <div key={index}>
                    <PubItem content={item} lang={lang} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(ZaraPublikationen)
