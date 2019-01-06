import React, { Component } from 'react'

import cx from 'classnames'
import styles from './FaqBox.module.sass'

export default class FaqItem extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { faq, lang } = this.props
    // if (
    //   faq[lang].links &&
    //   faq[lang].links.map(link => {
    //     // {faq[lang].text.includes(link.text) &&
    //     // TODO: links inside FAQ text
    //   })
    // )
    return (
      <div className={styles['faq-item']}>
        <div className={styles['faq-item-top']} onClick={this.toggleOpen}>
          <div className={styles['faq-item-top--head']} tabIndex="2">
            <div className={styles['faq-item-top--head__icon']}>
              <i className="far fa-question-circle" />
            </div>
            <div className={styles['faq-item-top--head__title']}>
              {faq[lang].title}
            </div>
          </div>
          <div
            className={cx(styles['faq-item-top--arrow'], {
              [styles['flipped']]: this.state.isOpen
            })}
          >
            <i className="fa fa-angle-double-down" />
          </div>
        </div>
        <div
          className={cx(styles['faq-item--body'], {
            [styles['open']]: this.state.isOpen
          })}
          dangerouslySetInnerHTML={{ __html: faq[lang].text }}
        />
      </div>
    )
  }
}
