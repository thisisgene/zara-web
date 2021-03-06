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
              <div className={styles['logo-box--item']}>
                <div>Photos Pressekonferenz 28.06.2019</div>
                <div style={{ fontSize: '.8rem' }}>
                  Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_1.jpg
                </div>
                <a
                  target="blank"
                  href={
                    'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_1.jpg'
                  }
                >
                  <img
                    src={
                      'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_1.jpg'
                    }
                    alt="Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_1.jpg"
                  />
                </a>
                <div style={{ fontSize: '.8rem' }}>
                  Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_2.jpg
                </div>
                <a
                  target="blank"
                  href={
                    'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_2.jpg'
                  }
                >
                  <img
                    src={
                      'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_2.jpg'
                    }
                    alt="Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_2.jpg"
                  />
                </a>
                <div style={{ fontSize: '.8rem' }}>
                  Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_3.jpg
                </div>
                <a
                  target="blank"
                  href={
                    'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_3.jpg'
                  }
                >
                  <img
                    src={
                      'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_3.jpg'
                    }
                    alt="Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_3.jpg"
                  />
                </a>
                <div style={{ fontSize: '.8rem' }}>
                  Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_4.jpg
                </div>
                <a
                  target="blank"
                  href={
                    'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_4.jpg'
                  }
                >
                  <img
                    src={
                      'https://assets.zara.or.at/download/img/Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_4.jpg'
                    }
                    alt="Pressekonferenz_Lena Jager_ ZARA_Maria Windhager_4.jpg"
                  />
                </a>
                <p style={{ fontSize: '.8rem' }}>Photo Credit: Carl Dewald</p>
              </div>

              <div className={styles['logo-box--item']}>
                <div>Caroline Kerschbaumer</div>
                <div style={{ fontSize: '.8rem' }}>
                  Caroline Kerschbaumer_ZARA HiRes.jpg
                </div>
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
                <p style={{ fontSize: '.8rem' }}>
                  Photo Credit: Johannes Zinner
                </p>
              </div>
              <div className={styles['logo-box--item']}>
                <div>Dieter Schindlauer</div>
                <div style={{ fontSize: '.8rem' }}>
                  Dieter Schindlauer_ZARA HiRes.jpg
                </div>
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
                <p style={{ fontSize: '.8rem' }}>
                  Photo Credit: Johannes Zinner
                </p>
              </div>
              <div className={styles['logo-box--item']}>
                <div>Lena Jäger</div>
                <div style={{ fontSize: '.8rem' }}>Lena_Jaeger_HiRes.jpeg</div>
                <a
                  target="blank"
                  href={
                    'https://assets.zara.or.at/download/img/Lena_Jaeger_HiRes.jpeg'
                  }
                >
                  <img
                    src={
                      'https://assets.zara.or.at/download/img/Lena_Jaeger_HiRes.jpeg'
                    }
                    alt="Lena_Jaeger_HiRes.jpeg"
                  />
                </a>
                <p style={{ fontSize: '.8rem' }}>Photo Credit: Carl Dewald</p>
              </div>
              <div className={styles['logo-box--item']}>
                <div>Maria Windhager</div>
                <div style={{ fontSize: '.8rem' }}>Maria Windhager.jpg</div>
                <a
                  target="blank"
                  href={
                    'https://assets.zara.or.at/download/img/Maria Windhager.jpg'
                  }
                >
                  <img
                    src={
                      'https://assets.zara.or.at/download/img/Maria Windhager.jpg'
                    }
                    alt="Maria Windhager.jpg"
                  />
                </a>
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
                            href={`https://assets.zara.or.at/download/logos/${
                              logo.image
                            }`}
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
                    RR18-Kontextualisierungen PDFs als zip herunterladen
                  </div>
                  <div className={styles['download-container']}>
                    <span>
                      <a
                        className={styles['download-link']}
                        href="https://assets.zara.or.at/download/zip/rr18-kontextualisierungen.zip"
                        download="rr18-kontextualisierungen.zip"
                      >
                        <i
                          className={cx(
                            'far fa-file-archive',
                            styles['zip-icon']
                          )}
                        />
                        <div className={styles['download-info']}>
                          <span className={styles['file-name']}>
                            rr18-kontextualisierungen.zip
                          </span>
                          <span className={styles['file-size']}>216 KB</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(PressematerialLogos)
