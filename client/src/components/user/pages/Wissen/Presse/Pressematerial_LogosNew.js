import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import MetaTags from 'react-meta-tags'

import { getAllByProps } from '../../../../../actions/adminActions'

import { heroData, logoData } from './logos_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'

import cx from 'classnames'
import styles from './Logos.module.sass'
import faqStyles from '../Faq/FaqBox/FaqBox.module.sass'
import ContactBox from '../../../dashboard/ContactBox/ContactBox'

class PressematerialLogos extends Component {

  constructor() {
    super()
    this.state = {
      boxToShow: ''
    }
  }

  componentDidMount() {
    this.props.getAllByProps('jahresberichte', 'pressematerial')
  }

  onBoxClick = id => {
    this.setState({ boxToShow: this.state.boxToShow === id ? '' : id })
  }

  render() {
    const { activeLanguage, jahresberichte } = this.props
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
            <div className={cx(styles['logo-box-container'], faqStyles['faq-box'])}>
              {/* DB content goes here    */}
              {jahresberichte && jahresberichte.jahresberichte && jahresberichte.jahresberichte.map(collection => (
                <div className={cx(styles['logo-box'], faqStyles['faq-item'], {
                  [styles['box-is-active']]: this.state.boxToShow == collection._id
                })}>
                  <div
                    className={faqStyles['faq-item-top']}
                    onClick={this.onBoxClick.bind(this, collection._id)}
                  >
                    <div className={faqStyles['faq-item-top--head']} tabIndex="2">
                      <div className={faqStyles['faq-item-top--head__title']}>
                        <h1 className={faqStyles['logo-box--title']}>{collection[lang].title} </h1>
                      </div>
                    </div>
                    <div
                      className={cx(faqStyles['faq-item-top--arrow'], styles['faq-item-top--arrow'])}
                    >
                      <i className="fa fa-angle-double-down" />
                    </div>
                  </div>

                  <div className={styles['logo-box--content']}>
                    <h2>{collection[lang].description}</h2>
                    {
                      collection.images && collection.images[lang] && collection.images[lang].map(image => (
                        <div className={styles['logo-box--item']}>
                          <div>{image.title}</div>
                          <div style={{ fontSize: '.8rem', fontWeight: 'bold' }}>{image.secondTitle}</div>
                          <div style={{ fontSize: '.8rem' }}>
                            {image.value}
                          </div>
                          <a
                            target="blank"
                            href={
                              `https://assets.zara.or.at/media/pressematerial/${image.value}`
                            }
                          >
                            <img
                              src={
                                `https://assets.zara.or.at/media/pressematerial/${image.value}`
                              }
                              alt={image.title || image.value}
                            />
                          </a>
                          <p style={{ fontSize: '.8rem' }}>{image.subtitle}</p>
                        </div>
                      ))
                    }
                    {
                      collection.files && collection.files[lang] && collection.files[lang].map(file => (
                        <div className={styles['logo-box--item']}>
                          <div>{file.title}</div>
                          <div className={styles['download-container']}>
                            <span>
                              <a
                                target="blank"
                                className={styles['download-link']}
                                href={`https://assets.zara.or.at/media/pressematerial/${file.value}`}
                                download={file.value}
                              >
                                <i
                                  className={cx(
                                    'far fa-file-archive',
                                    styles['zip-icon']
                                  )}
                                />
                                <div className={styles['download-info']}>
                                  <span className={styles['file-name']}>
                                    {file.value}
                                  </span>
                                  {/* <span className={styles['file-size']}>971 KB</span> */}
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      ))
                    }</div>
                </div>
              ))

              }

              <div className={cx(styles['logo-box'], faqStyles['faq-item'], {
                [styles['box-is-active']]: this.state.boxToShow == 'item-1'
              })}>
                <div
                  className={faqStyles['faq-item-top']}
                  onClick={this.onBoxClick.bind(this, 'item-1')}
                >
                  <div className={faqStyles['faq-item-top--head']} tabIndex="2">
                    <div className={faqStyles['faq-item-top--head__title']}>
                      <h1>Datenvisualisierung 3. #GegenHassimNetz-Bericht</h1>
                    </div>
                  </div>
                  <div
                    className={cx(faqStyles['faq-item-top--arrow'], styles['faq-item-top--arrow'])}
                  >
                    <i className="fa fa-angle-double-down" />
                  </div>
                </div>

                <div className={styles['logo-box--content']}>
                  <h2>
                    Hier finden Sie sämtliche Grafiken aus dem 3. #GegenHassimNetz-Bericht,
                  <br /> die durch die Unterstützung von Fabian Lang (
                  <a target="blank" href="http://www.dergestalt.at/">
                      dergestalt
                  </a>
                  ) realisiert werden konnten.
                </h2>
                  <div className={styles['logo-box--item']}>
                    <div>Bericht zum 3. Beratungsjahr</div>
                    <a
                      target="blank"
                      href={
                        'https://assets.zara.or.at/download/grafiken/Bericht zum 3 Beratungsjahr.jpg'
                      }
                    >
                      <img
                        src={
                          'https://assets.zara.or.at/download/grafiken/Bericht zum 3 Beratungsjahr.jpg'
                        }
                        alt="Bericht zum 3. Beratungsjahr"
                      />
                    </a>
                  </div>
                  <div className={styles['logo-box--item']}>
                    <div>Gemeinsam gegen Hass im Netz</div>
                    <a
                      target="blank"
                      href={
                        'https://assets.zara.or.at/download/grafiken/Gemeinsam gegen Hass im Netz.jpg'
                      }
                    >
                      <img
                        src={
                          'https://assets.zara.or.at/download/grafiken/Gemeinsam gegen Hass im Netz.jpg'
                        }
                        alt="Gemeinsam gegen Hass im Netz"
                      />
                    </a>
                  </div>
                  <div className={styles['logo-box--item']}>
                    <div>Ideologische Quellen von Hass im Netz</div>
                    <a
                      target="blank"
                      href={
                        'https://assets.zara.or.at/download/grafiken/Ideologische Quellen von Hass im Netz.jpg'
                      }
                    >
                      <img
                        src={
                          'https://assets.zara.or.at/download/grafiken/Ideologische Quellen von Hass im Netz.jpg'
                        }
                        alt="Ideologische Quellen von Hass im Netz"
                      />
                    </a>
                  </div>
                  <div className={styles['logo-box--item']}>
                    <div>Rechtliche Ersteinschaetzung der Meldungen durch die ZARA-Beratungsstelle #GegenHassimNetz</div>
                    <a
                      target="blank"
                      href={
                        'https://assets.zara.or.at/download/grafiken/Rechtliche Ersteinschaetzung der Meldungen durch die ZARA-Beratungsstelle GegenHassimNetz.jpg'
                      }
                    >
                      <img
                        src={
                          'https://assets.zara.or.at/download/grafiken/Rechtliche Ersteinschaetzung der Meldungen durch die ZARA-Beratungsstelle GegenHassimNetz.jpg'
                        }
                        alt="Rechtliche Ersteinschaetzung der Meldungen durch die ZARA-Beratungsstelle #GegenHassimNetz"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className={cx(styles['logo-box'], faqStyles['faq-item'], {
                [styles['box-is-active']]: this.state.boxToShow == 'item-2'
              })}>
                <div
                  className={faqStyles['faq-item-top']}
                  onClick={this.onBoxClick.bind(this, 'item-2')}
                >
                  <div className={faqStyles['faq-item-top--head']} tabIndex="2">
                    <div className={faqStyles['faq-item-top--head__title']}>
                      <h1>Datenvisualisierungen Rassismus Report 2019</h1>
                    </div>
                  </div>
                  <div
                    className={cx(faqStyles['faq-item-top--arrow'], styles['faq-item-top--arrow'])}
                  >
                    <i className="fa fa-angle-double-down" />
                  </div>
                </div>

                <div className={styles['logo-box--content']}>

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
                    <div>
                      Corona-bezogener Rassismus
                        </div>
                    <div className={styles['download-container']}>
                      <span>
                        <a
                          target="blank"
                          className={styles['download-link']}
                          href="https://assets.zara.or.at/download/zip/Corona-bezogener_Rassismus.zip"
                          download="Corona-bezogener Rassismus.zip"
                        >
                          <i
                            className={cx(
                              'far fa-file-archive',
                              styles['zip-icon']
                            )}
                          />
                          <div className={styles['download-info']}>
                            <span className={styles['file-name']}>
                              Corona-bezogener Rassismus.zip
                            </span>
                            <span className={styles['file-size']}>531 KB</span>
                          </div>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx(styles['logo-box'], faqStyles['faq-item'], {
                [styles['box-is-active']]: this.state.boxToShow == 'item-3'
              })}>
                <div
                  className={faqStyles['faq-item-top']}
                  onClick={this.onBoxClick.bind(this, 'item-3')}
                >
                  <div className={faqStyles['faq-item-top--head']} tabIndex="2">
                    <div className={faqStyles['faq-item-top--head__title']}>
                      <h1>Team</h1>
                    </div>
                  </div>
                  <div
                    className={cx(faqStyles['faq-item-top--arrow'], styles['faq-item-top--arrow'])}
                  >
                    <i className="fa fa-angle-double-down" />
                  </div>
                </div>

                <div className={styles['logo-box--content']}>
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
              {logoData &&
                logoData.map(logoItem => (
                  <div className={cx(styles['logo-box'], faqStyles['faq-item'], {
                    [styles['box-is-active']]: this.state.boxToShow == logoItem.id
                  })}>
                    <div
                      className={faqStyles['faq-item-top']}
                      onClick={this.onBoxClick.bind(this, logoItem.id)}
                    >
                      <div className={faqStyles['faq-item-top--head']} tabIndex="2">
                        <div className={faqStyles['faq-item-top--head__title']}>
                          <h1>{logoItem.title}</h1>
                        </div>
                      </div>
                      <div
                        className={cx(faqStyles['faq-item-top--arrow'], styles['faq-item-top--arrow'])}
                      >
                        <i className="fa fa-angle-double-down" />
                      </div>
                    </div>

                    <div className={styles['logo-box--content']}>

                      <p>{logoItem.text}</p>
                      {logoItem.logos &&
                        logoItem.logos.map(logo => (
                          <div className={styles['logo-box--item']}>
                            <div>{logo.title}</div>
                            <a
                              target="blank"
                              href={`https://assets.zara.or.at/download/logos/${logo.image
                                }`}
                            >
                              <img
                                src={`https://assets.zara.or.at/download/logos/${logo.image
                                  }`}
                                alt={logo.image}
                              />
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>



        )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jahresberichte: state.jahresberichte,
})

export default withLocalize(connect(
  mapStateToProps, {
  getAllByProps
})(PressematerialLogos))
