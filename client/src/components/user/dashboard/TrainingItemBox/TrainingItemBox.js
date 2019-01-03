import React, { Component } from 'react'

import TrainingItem from './TrainingItem'

import styles from './TrainingItemBox.module.sass'

export default class TrainingItemBox extends Component {
  render() {
    const { content, category, lang } = this.props
    return (
      <div>
        <div className={styles['training-box--content']}>
          {content.items &&
            content.items
              .filter(item => item.category === category)
              .map((item, index) => (
                <div key={index}>
                  <TrainingItem content={item} lang={lang} />
                </div>
              ))}
        </div>
      </div>
    )
  }
}
