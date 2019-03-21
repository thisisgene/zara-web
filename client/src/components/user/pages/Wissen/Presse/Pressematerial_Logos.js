import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import MetaTags from 'react-meta-tags'

import { heroData, logoData } from './logos_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'

import cx from 'classnames'
import styles from './Logos.module.sass'
import ContactBox from '../../../dashboard/ContactBox/ContactBox'

class PressematerialLogos extends Component {
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
            <MetaTags>
              <title>ZARA | Pressematerial & Logos</title>
              {/* <meta name="robots" content="noindex" /> */}
            </MetaTags>
            <HeroUnit data={heroData} lang={lang} />
            {/* <LongText content={longText} lang={lang} /> */}
            <div className={styles['logo-box-container']}>
              <div className={styles['logo-box']}>
                <h1>Datenvisualisierungen Rassismus Report 2018</h1>
                <h2>
                  Hier finden Sie sämtliche Grafiken aus dem RR 2018,
                  <br /> die durch die Unterstützung von Fabian Lang (
                  <a target="blank" href="http://www.dergestalt.at/">
                    dergestalt
                  </a>
                  ) realisiert werden konnten.
                </h2>
                <div className={styles['logo-box--item']}>
                  <div>Datenanalyse RR 2018 Doppelseite</div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/grafiken/Datenanalyse 2018_ZARA RR2018-page-001.jpg'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/grafiken/Datenanalyse 2018_ZARA RR2018-page-001.jpg'
                      }
                      alt="Datenanalyse RR 2018 Doppelseite"
                    />
                  </a>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>Grafiken RR 2018 All-in-one</div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/grafiken/Grafiken RR 2018 All-in-one.jpg'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/grafiken/Grafiken RR 2018 All-in-one.jpg'
                      }
                      alt="Grafiken RR 2018 All-in-one"
                    />
                  </a>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>
                    RR18-Datenvisualisierungen PDFs als zip herunterladen
                  </div>
                  <div className={styles['download-container']}>
                    <span>
                      <a
                        className={styles['download-link']}
                        href="https://assets.zara.or.at/download/zip/rr18-datenvisualisierungen.zip"
                        download="rr18-datenvisualisierungen.zip"
                      >
                        <i
                          className={cx(
                            'far fa-file-archive',
                            styles['zip-icon']
                          )}
                        />
                        <div className={styles['download-info']}>
                          <span className={styles['file-name']}>
                            rr18-datenvisualisierungen.zip
                          </span>
                          <span className={styles['file-size']}>198 KB</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>Caroline Kerschbaumer_ZARA HiRes.jpg</div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/img/Caroline Kerschbaumer_ZARA HiRes.jpg'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/img/Caroline Kerschbaumer_ZARA HiRes.jpg'
                      }
                      alt="Kerschbaumer_ZARA HiRes"
                    />
                  </a>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>Dieter Schindlauer_ZARA HiRes.jpg</div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/img/Dieter Schindlauer_ZARA HiRes.jpg'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/img/Dieter Schindlauer_ZARA HiRes.jpg'
                      }
                      alt="Dieter Schindlauer_ZARA HiRes"
                    />
                  </a>
                </div>
              </div>
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
                            href={
                              'https://assets.zara.or.at/download/logos/Grafiken RR 2018 All-in-one.jpg'
                            }
                          >
                            <img
                              src={`https://assets.zara.or.at/download/logos/${
                                logo.image
                              }`}
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

export default withLocalize(PressematerialLogos)
