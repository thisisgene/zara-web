import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroData,
  jobData,
  longTextPraktikum,
  longTextZivildienst,
  longText
} from './jobs_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import JobItem from '../../../../dashboard/JobItem/JobItem'
// import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import LongText from '../../../../dashboard/LongText/LongText'
// import CardCollectionGridObject from '../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

import styles from './Jobs.module.sass'

class RechtUndOrdnung extends Component {
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
            <HeroUnit data={heroData} lang={lang} />
            <LongText content={longTextPraktikum} lang={lang} />
            <div className={styles['job-container']}>
              {jobData &&
                jobData.map((job, index) => (
                  <JobItem
                    key={index}
                    index={index}
                    content={job}
                    lang={lang}
                  />
                ))}
            </div>
            {/* <NewsletterOneLineObject lang={lang} /> */}
            <LongText content={longText} lang={lang} />
            <LongText content={longTextZivildienst} lang={lang} />
            {/* <CardCollectionGridObject cardObject={cardGridObject} lang={lang} /> */}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(RechtUndOrdnung)