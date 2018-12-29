import React, { Component } from 'react'

import TrainingItem from './TrainingItem'

import styles from './Training.module.sass'

export default class TrainingBox extends Component {
  constructor() {
    super()
    this.state = {
      activeCat: '1'
    }
  }

  onChange = e => {
    console.log(e.target.value)
    this.setState({
      activeCat: e.target.value
    })
  }

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
                  <div key={index} className={styles['cat-item']}>
                    <input
                      name="category"
                      value={cat.index}
                      type="radio"
                      id={`cat-${cat.index}`}
                      onChange={this.onChange}
                      checked={this.state.activeCat === cat.index}
                    />
                    <label htmlFor={`cat-${cat.index}`}>{cat.text}</label>
                  </div>
                  // <div key={index}>{cat.text}</div>
                ))}
            </div>
            <div className={styles['training-box--content']}>
              {content.items &&
                content.items
                  .filter(item => item.category === this.state.activeCat)
                  .map((item, index) => (
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
