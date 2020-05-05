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
              {/* <div className={styles['logo-box--item']}>
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
              </div> */}

              {/* <div className={styles['logo-box--item']}>
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
              </div> */}

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
                <h1>Datenvisualisierungen Rassismus Report 2019</h1>
                <h2>
                  Hier finden Sie sämtliche Grafiken aus dem RR 2019,
                  <br /> die durch die Unterstützung von Fabian Lang (
                  <a target="blank" href="http://www.dergestalt.at/">
                    dergestalt
                  </a>
                  ) realisiert werden konnten.
                </h2>
                <div className={styles['logo-box--item']}>
                  <div>Datenanalyse RR 2019</div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/grafiken/ZARA-Rassimus_Report-Datenanalyse%202019.pdf'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/grafiken/ZARA-Rassimus_Report-Datenanalyse%202019.jpg'
                      }
                      alt="Datenanalyse RR 2019"
                    />
                  </a>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>Falldaten aus 20 Jahren Beratung</div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/grafiken/ZARA-Rassimus_Report-Falldaten%20aus%2020%20Jahren%20Beratung.pdf'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/grafiken/ZARA-Rassimus_Report-Falldaten%20aus%2020%20Jahren%20Beratung.jpg'
                      }
                      alt="Falldaten aus 20 Jahren Beratung"
                    />
                  </a>
                </div>

                <div className={styles['logo-box--item']}>
                  <div>
                    Datenanalyse aus den Lebensbereichen
                  </div>
                  <div className={styles['download-container']}>
                    <span>
                      <a
                        target="blank"
                        className={styles['download-link']}
                        href="https://assets.zara.or.at/download/pdf/ZARA Lebensbereiche.pdf"
                        download="ZARA Lebensbereiche.pdf"
                      >
                        <i
                          className={cx(
                            'far fa-file-archive',
                            styles['zip-icon']
                          )}
                        />
                        <div className={styles['download-info']}>
                          <span className={styles['file-name']}>
                            ZARA Lebensbereiche.pdf
                          </span>
                          <span className={styles['file-size']}>971 KB</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>
                    ZARA Forderungen
                  </div>
                  <div className={styles['download-container']}>
                    <span>
                      <a
                        target="blank"
                        className={styles['download-link']}
                        href="https://assets.zara.or.at/download/pdf/ZARA Forderungen.pdf"
                        download="ZARA Forderungen.pdf"
                      >
                        <i
                          className={cx(
                            'far fa-file-archive',
                            styles['zip-icon']
                          )}
                        />
                        <div className={styles['download-info']}>
                          <span className={styles['file-name']}>
                            ZARA Forderungen.pdf
                          </span>
                          <span className={styles['file-size']}>127 KB</span>
                        </div>
                      </a>
                    </span>
                  </div>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>Caroline Kerschbaumer</div>
                  <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>ZARA Geschäftsführerin</div>
                  <div style={{ fontSize: '.8rem' }}>
                    Caroline Kerschbaumer_ZARA HiRes.jpg
                </div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/img/Caroline%20Kerschbaumer_ZARA%20HiRes.jpg'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/img/Caroline%20Kerschbaumer_ZARA%20HiRes.jpg'
                      }
                      alt="Caroline Kerschbaumer_ZARA HiRes"
                    />
                  </a>
                  <p style={{ fontSize: '.8rem' }}>
                    Photo Credit: Johannes Zinner
                </p>
                </div>
                <div className={styles['logo-box--item']}>
                  <div>Dilber Dikme</div>
                  <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>Leiterin der ZARA Beratungsstellen</div>
                  <div style={{ fontSize: '.8rem' }}>
                    Dilber Dikme_ZARA HiRes.jpg
                </div>
                  <a
                    target="blank"
                    href={
                      'https://assets.zara.or.at/download/img/Dilber%20Dikme_ZARA%20HiRes.jpg'
                    }
                  >
                    <img
                      src={
                        'https://assets.zara.or.at/download/img/Dilber%20Dikme_ZARA%20HiRes.jpg'
                      }
                      alt="Dilber Dikme_ZARA HiRes"
                    />
                  </a>
                  <p style={{ fontSize: '.8rem' }}>
                    Photo Credit: Johannes Zinner
                </p>
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
