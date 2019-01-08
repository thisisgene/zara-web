import React, { Component } from 'react'

import NewsItem from './NewsItem'

import cx from 'classnames'
import styles from '../News.module.sass'

class NewsBox extends Component {
  constructor() {
    super()
    this.state = {
      activeTag: ''
    }
  }
  onChange = e => {
    // let activeTags = this.state.activeTags
    // if (e.target.checked) {
    //   activeTags.push(e.target.name)
    //   this.setState({
    //     activeTags: activeTags
    //   })
    // } else {
    //   this.setState({
    //     activeTags: activeTags.filter(tag => tag !== e.target.name)
    //   })
    // }
    this.setState({
      activeTag: e.target.value
    })
  }

  filterNews = e => {
    return this.indexOf(e) < 0
  }

  resetTags = () => {
    this.setState({
      activeTag: ''
    })
  }

  render() {
    const { content, tags, lang } = this.props

    let filteredContent = []

    if (this.state.activeTag !== '') {
      filteredContent = content.filter(filteredNews => {
        if (this.state.activeTag === filteredNews.tag) return true

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
              [styles['active']]: this.state.activeTag === ''
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
                    value={tag.name}
                    type="radio"
                    id={`tag-${tag.name}`}
                    onChange={this.onChange}
                    checked={this.state.activeTag === tag.name}
                  />
                  <label htmlFor={`tag-${tag.name}`}>{tag[lang].title}</label>
                </div>
              ))}
          </div>
        </div>
        {/* ADD PAGEINATION! */}
        <div className={styles['news-item-container']}>
          {content && lang && (
            <div>
              {filteredContent.length > 0 ? (
                filteredContent.map((news, index) => (
                  <NewsItem
                    key={index}
                    news={news}
                    newsTags={tags}
                    lang={lang}
                  />
                ))
              ) : (
                <div className={styles['no-entries']}>
                  {lang === 'de'
                    ? 'Zur Zeit keine Einträge'
                    : 'No entries at the moment'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default NewsBox
