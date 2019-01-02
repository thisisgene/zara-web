import React, { Component } from 'react'

import cx from 'classnames'
import styles from './QuoteBox.module.sass'

class QuoteBox extends Component {
  render() {
    const { quote } = this.props
    return (
      <div
        className={cx(styles['quote-box'], {
          [styles[quote.type]]: quote.type
        })}
      >
        <div className={styles['quote-text']}>"{quote.text}"</div>
        <div className={styles['quote-author']}>{quote.author}</div>
      </div>
    )
  }
}

export default QuoteBox
