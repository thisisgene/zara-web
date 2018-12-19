import React, { Component } from 'react'

import InfoCardObject from '../InfoCardObject/InfoCardObject'
import IconObject from '../IconObject/IconObject'

import cx from 'classnames'
import styles from './InfoBoxObject.module.sass'

class InfoBoxObject extends Component {
  render() {
    const { infoBox, lang } = this.props
    return (
      <div>
        {infoBox && lang && (
          <div
            className={cx(styles['info-box-container'], {
              [styles[infoBox.color]]: infoBox.color
            })}
          >
            <div className={styles['info-box']}>
              <div className={styles['info-box--header']}>
                <div className={styles['info-box--title-box']}>
                  {infoBox.image && <IconObject image={infoBox.image} />}
                  {infoBox[lang].title && <h1>{infoBox[lang].title}</h1>}
                </div>
                <div className={styles['info-box--body']}>
                  {infoBox[lang].text}
                </div>
              </div>
              {infoBox[lang].cards && (
                <div className={styles['info-box--card-section']}>
                  {infoBox[lang].cards.map((card, index) => (
                    <InfoCardObject key={index} card={card} />
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
