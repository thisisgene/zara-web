import React, { Component } from 'react'

import FaqItem from './FaqItem'

import cx from 'classnames'
import styles from './FaqBox.module.sass'

class FaqBox extends Component {
  constructor() {
    super()
    this.state = {
      activeTags: []
    }
  }
  onChange = e => {
    let activeTags = this.state.activeTags
    console.log('target: ', e.target)
    if (e.target.checked) {
      activeTags.push(e.target.name)
      this.setState({
        activeTags: activeTags
      })
    } else {
      this.setState({
        activeTags: activeTags.filter(tag => tag !== e.target.name)
      })
    }
  }

  filterFaq = e => {
    return this.indexOf(e) < 0
  }

  resetTags = () => {
    console.log('auuu')
    this.setState({
      activeTags: []
    })
  }

  render() {
    const { content, tags, lang } = this.props

    let filteredContent = []

    if (this.state.activeTags.length > 0) {
      filteredContent = content.filter(filteredFaq => {
        for (let tag of filteredFaq.tags) {
          if (this.state.activeTags.includes(tag) == true) return true
        }
        return false
      })
    } else {
      filteredContent = content
    }

    console.log('filtered: ', filteredContent)
    return (
      <div className={styles['faq-box']}>
        <div className={styles['faq-box--filter-bar']}>
          <div
            className={cx(styles['reset-button'], {
              [styles['active']]: this.state.activeTags.length === 0
            })}
          >
            <label onClick={this.resetTags} tabIndex="1">
              Alle FAQs
            </label>
          </div>
          <div className={styles['filter-box']}>
            {tags &&
              tags.map(tag => (
                <div className={styles['tag-item']}>
                  <input
                    name={tag.name}
                    type="checkbox"
                    id={`tag-${tag.name}`}
                    onChange={this.onChange}
                    checked={this.state.activeTags.includes(tag.name)}
                  />
                  <label htmlFor={`tag-${tag.name}`}>{tag[lang].title}</label>
                </div>
              ))}
          </div>
        </div>
        <div>
          {content &&
            lang &&
            filteredContent.map(faq => <FaqItem faq={faq[lang]} />)}
        </div>
      </div>
    )
  }
}

export default FaqBox
