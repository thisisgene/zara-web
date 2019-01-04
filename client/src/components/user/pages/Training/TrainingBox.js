import React, { Component } from 'react'

import TrainingItemBox from '../../dashboard/TrainingItemBox/TrainingItemBox'

import styles from './Training.module.sass'

export default class TrainingBox extends Component {
  constructor() {
    super()
    this.state = {
      activeCat: '1'
    }
  }

  onChange = e => {
    this.setState({
      activeCat: e.target.value
    })
  }

  render() {
    const { content, trainingItems, lang } = this.props
    return (
      <div>
        {content && trainingItems && lang && (
          <div className={styles['training-box']}>
            <div className={styles['training-box--text']}>
              <p>{content[lang].text}</p>
              <p>{content[lang].text2}</p>
            </div>
            <h1>{content[lang].title}</h1>
            <a
              className={styles['training-box--privacy-link']}
              href={content[lang].privacyPolicyLink}
              target="blank"
            >
              {content[lang].privacyPolicyText}
            </a>
            <div className={styles['training-box--categories']}>
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
            <TrainingItemBox
              content={trainingItems}
              category={this.state.activeCat}
              lang={lang}
            />
          </div>
        )}
      </div>
    )
  }
}
