import React, { Component } from 'react'

import InfoCardObject from '../InfoCardObject/InfoCardObject'
import IconObject from '../IconObject/IconObject'

import cx from 'classnames'
import styles from './InfoBoxObject.module.sass'
import cardStyles from '../InfoCardObject/InfoCardObject.module.sass'
import ButtonObject from '../ButtonObject/ButtonObject'

class InfoBoxObject extends Component {
  render() {
    const { infoBox, lang } = this.props
    return (
      <div>
        {infoBox && lang && (
          <div
            className={cx(styles['info-box-container'], {
              [styles[infoBox.color]]: infoBox.color,
              [styles[infoBox.direction]]: infoBox.direction
            })}
          >
            <div
              className={cx(styles['info-box'], {
                [styles[infoBox.size]]: infoBox.size
              })}
            >
              <div className={styles['info-box--header']}>
                <div className={styles['info-box--title-box']}>
                  {infoBox.image && <IconObject image={infoBox.image} />}
                  {infoBox[lang].title && <h1>{infoBox[lang].title}</h1>}
                </div>
                {infoBox[lang].text && (
                  <div
                    className={styles['info-box--body']}
                    dangerouslySetInnerHTML={{ __html: infoBox[lang].text }}
                  />
                )}
                {infoBox[lang].listItems && (
                  <ul className={cardStyles['info-card--body__list']}>
                    {infoBox[lang].listItems &&
                      infoBox[lang].listItems.map((item, index) => (
                        <li key={index}>
                          <IconObject image="listArrow" />
                          <span>{item.text}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
              {infoBox[lang].buttons && (
                <div className={styles['info-box--buttons']}>
                  {infoBox[lang].buttons.map((button, index) => (
                    <ButtonObject key={index} button={button} lang={lang} />
                  ))}
                </div>
              )}

              {infoBox[lang].cards && (
                <div
                  className={cx(
                    styles['info-box--card-section'],
                    styles[infoBox.count]
                  )}
                >
                  {infoBox[lang].cards.map((card, index) => (
                    <InfoCardObject direction={infoBox.direction} key={index} card={card} lang={lang} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default InfoBoxObject
