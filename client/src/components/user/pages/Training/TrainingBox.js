import React, { Component } from 'react'

import TrainingItem from './TrainingItem'

import styles from './Training.module.sass'

export default class TrainingBox extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div>
        {content && lang && (
          <div className={styles['training-box']}>
            <div className={styles['training-box--text']}>
              {content[lang].text}
            </div>
            <h1>{content[lang].title}</h1>
            <div className="training-box--categories">
              {content[lang].categories &&
                content[lang].categories.map((cat, index) => (
                  <div key={index}>{cat.text}</div>
                ))}
            </div>
            <div className={styles['training-box--content']}>
              {content.items &&
                content.items.map((item, index) => (
                  <div key={index}>
                    <TrainingItem content={item} lang={lang} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}
