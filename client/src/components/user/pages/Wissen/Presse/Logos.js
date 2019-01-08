import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData, logoData } from './logos_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'

import styles from './Logos.module.sass'

class Logos extends Component {
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
            {/* <LongText content={longText} lang={lang} /> */}
            <div className={styles['logo-box-container']}>
              {logoData &&
                logoData.map(logoItem => (
                  <div className={styles['logo-box']}>
                    <h1>{logoItem.title}</h1>
                    <p>{logoItem.text}</p>
                    {logoItem.logos &&
                      logoItem.logos.map(logo => (
                        <div className={styles['logo-box--item']}>
                          <div>{logo.title}</div>
                          <a
                            target="blank"
                            href={`/download/logos/${logo.image}`}
                          >
                            <img
                              src={`/download/logos/${logo.image}`}
                              alt={logo.image}
                            />
                          </a>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Logos)
