import React, { Component } from 'react'

import styles from './QuoteBox.module.sass'

class QuoteBox extends Component {
  render() {
    const { quote } = this.props
    return (
      <div className={styles['quote-box']}>
        <div className={styles['quote-text']}>"{quote.text}"</div>
        <div className={styles['quote-author']}>{quote.author}</div>
      </div>
    )
  }
}

export default QuoteBox
