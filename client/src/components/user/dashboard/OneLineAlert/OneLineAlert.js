import React, { Component } from 'react'

import ButtonObject from '../ButtonObject/ButtonObject'

import cx from 'classnames'
import styles from './OneLineAlert.module.sass'
import AlertIcon from './img/alert_icon.png'

class OneLineAlert extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div
        className={cx(styles['alert'], {
          [styles[content.type]]: content.type
        })}
      >
        <div className={styles['alert-wrapper']}>
          <div className={styles['alert--left']}>
            {content.icon && content.icon === 'alert' && (
              <img src={AlertIcon} alt="" />
            )}
            {lang && (
              <div className={styles['alert-body']}>
                {content[lang].title && (
                  <div className={styles['alert-title']}>
                    {content[lang].title}
                  </div>
                )}
                <div
                  className={styles['alert-text']}
                  dangerouslySetInnerHTML={{ __html: content[lang].text }}
                />
              </div>
            )}
          </div>

          {lang && content[lang].button && (
            <div className={styles['alert--right']}>
              <ButtonObject button={content[lang].button} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default OneLineAlert
