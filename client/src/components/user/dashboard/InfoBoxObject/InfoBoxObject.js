import React, { Component } from 'react'

import InfoCardObject from '../InfoCardObject/InfoCardObject'
import IconObject from '../IconObject/IconObject'

import cx from 'classnames'
import styles from './InfoBoxObject.module.sass'

class InfoBoxObject extends Component {
  render() {
    const { infoBox } = this.props
    return (
      <div
        className={cx(styles['info-box-container'], {
          [styles[infoBox.color]]: infoBox.color
        })}
      >
        <div className={styles['info-box']}>
          <div className={styles['info-box--header']}>
            <div className={styles['info-box--title-box']}>
              {infoBox.image && <IconObject image={infoBox.image} />}
              <h1>{infoBox.title}</h1>
            </div>
            <div className={styles['info-box--body']}>{infoBox.text}</div>
          </div>
          {infoBox.cards && (
            <div className={styles['info-box--card-section']}>
              {infoBox.cards.map((card, index) => (
                <InfoCardObject key={index} card={card} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default InfoBoxObject
