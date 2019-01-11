import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconObject from '../../dashboard/IconObject/IconObject'

import cx from 'classnames'
import styles from './Footer.module.sass'
// import { footerContent } from './footer_data'

export default class FooterContent extends Component {
  render() {
    const { content, sponsorLogos, lang, type } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={styles['footer-content-container']}>
        <div className={styles['footer-content']}>
          <div
            className={cx(
              styles['footer-content--left'],
              styles['footer-content--child']
            )}
          >
            {(!type || type !== 'small') && (
              <div className={styles['footer-content--header']}>
                {content.left.header}
              </div>
            )}
            <div className={styles['footer-content--left__body']}>
              {content.left.items &&
                content.left.items.map((item, index) => (
                  <div
                    key={index}
                    className={styles['footer-content--left__body__item']}
                  >
                    <IconObject image={item.icon} />
                    <div
                      className={
                        styles['footer-content--left__body__item--text']
                      }
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                ))}
            </div>
          </div>
          {(!type || type !== 'small') && (
            <div
              className={cx(
                styles['footer-content--right'],
                styles['footer-content--child']
              )}
            >
              <div className={styles['footer-content--right__top']}>
                <div className={styles['footer-content--right__top--left']}>
                  <div className={styles['footer-content--header']}>
                    {content.right.top.left.header}
                  </div>
                  <div
                    className={styles['footer-content--right__top--left__body']}
                  >
                    {content.right.top.left.items &&
                      content.right.top.left.items.map((item, index) => (
                        <div key={index}>
                          <Link to={`/${lang}/${item.link}`}>
                            {item.linkText}
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                <div className={styles['footer-content--right__top--right']}>
                  <div
                    className={
                      styles['footer-content--right__top--right--header']
                    }
                  >
                    {content.right.top.right.header}
                  </div>
                  <div
                    className={
                      styles['footer-content--right__top--right__body']
                    }
                  >
                    <div className={styles['donate-box']}>
                      <IconObject image={content.right.top.right.icon} />
                      <div className={styles['donate-box--list']}>
                        {content.right.top.right.items &&
                          content.right.top.right.items.map((item, index) => (
                            <div
                              key={index}
                              className={styles['donate-box--list__item']}
                            >
                              <IconObject image={item.icon} />
                              <span>{item.text}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div
                      className={styles['bank-data']}
                      dangerouslySetInnerHTML={{
                        __html: content.right.top.right.text
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles['footer-content--right__bottom']}>
                <div className={styles['footer-content--header']}>
                  {content.right.bottom.header}
                </div>
                <div className={styles['sponsor-box']}>
                  {sponsorLogos &&
                    sponsorLogos.map(logo => (
                      <div
                        className={cx(styles['sponsor-box--image'], {
                          [styles['wide']]: logo.size === 'wide'
                        })}
                      >
                        <img
                          src={`/assets/img/sponsor/${logo.image}`}
                          alt={logo.image}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles['bottom-bar']}>
          {(!type || type !== 'small') && (
            <div className={styles['bottom-bar--left']}>
              <div>
                <img src="/assets/img/assets/logo/plain.svg" alt="ZARA Logo" />
              </div>
              <div>
                © ZARA - Zivilcourage und Anti-Rassismus-Arbeit {currentYear}
              </div>
            </div>
          )}
          <div
            className={cx(styles['bottom-bar--right'], {
              [styles['inMobileMenu']]: type === 'small'
            })}
          >
            <Link to={`/${lang}/impressum`}>Impressum</Link>
            <Link to={`/${lang}/datenschutzerklaerung`}>
              {lang === 'de'
                ? 'Datenschutzerklärung'
                : 'Data Privacy Statement'}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
