import React, { Component } from 'react'

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
      <div>
        <div className={styles['reset-button']}>
          <button onClick={this.resetTags}>Alle FAQs</button>
        </div>
        <div className={styles['filter-box']}>
          {tags &&
            tags.map(tag => (
              <div className={styles['tag-item']}>
                <label htmlFor={`tag-${tag.name}`}>{tag[lang].title}</label>
                <input
                  name={tag.name}
                  type="checkbox"
                  id={`tag-${tag.name}`}
                  onChange={this.onChange}
                  checked={this.state.activeTags.includes(tag.name)}
                />
              </div>
            ))}
        </div>
        <div>
          {content &&
            lang &&
            filteredContent.map(faq => (
              <div>
                <h2>{faq[lang].title}</h2>
                <p>{faq[lang].text}</p>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default FaqBox
