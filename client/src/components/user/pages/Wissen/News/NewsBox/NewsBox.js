import React, { Component } from 'react'

import NewsItem from './NewsItem'

import cx from 'classnames'
import styles from '../News.module.sass'

class NewsBox extends Component {
  constructor() {
    super()
    this.state = {
      activeTags: []
    }
  }
  onChange = e => {
    let activeTags = this.state.activeTags
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

  filterNews = e => {
    return this.indexOf(e) < 0
  }

  resetTags = () => {
    this.setState({
      activeTags: []
    })
  }

  render() {
    const { content, tags, lang } = this.props

    let filteredContent = []

    if (this.state.activeTags.length > 0) {
      filteredContent = content.filter(filteredNews => {
        for (let tag of filteredNews.tags) {
          if (this.state.activeTags.includes(tag) === true) return true
        }
        return false
      })
    } else {
      filteredContent = content
    }

    // TODO: Pagination if more than 10 News items

    return (
      <div className={styles['news-box']}>
        <div className={styles['news-box--filter-bar']}>
          <div
            className={cx(styles['reset-button'], {
              [styles['active']]: this.state.activeTags.length === 0
            })}
          >
            <label onClick={this.resetTags} tabIndex="1">
              Alle Beiträge
            </label>
          </div>
          <div className={styles['filter-box']}>
            {tags &&
              tags.map((tag, index) => (
                <div key={index} className={styles['tag-item']}>
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
            filteredContent.map(news => <NewsItem news={news} lang={lang} />)}
        </div>
      </div>
    )
  }
}

export default NewsBox
