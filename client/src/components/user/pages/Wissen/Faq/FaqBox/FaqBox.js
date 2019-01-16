import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import FaqItem from './FaqItem'

import cx from 'classnames'
import styles from './FaqBox.module.sass'

class FaqBox extends Component {
  constructor() {
    super()
    this.state = {
      activeTag: '',
      searchValue: '',
      faqToggle: []
    }
  }

  componentDidMount() {
    let thisId
    if (this.props.location.hash) {
      thisId = this.props.location.hash
      thisId = thisId.replace('#', '')
    }
    let faqToggleArray = []
    const lang = this.props.lang
    this.props.content.map(item => {
      faqToggleArray.push({ id: item.id, open: false })
    })
    this.setState(
      {
        faqToggle: faqToggleArray
      },
      () => this.toggleOpen(thisId)
    )
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      let thisId = this.props.location.hash
      thisId = thisId.replace('#', '')
      this.toggleOpen(thisId)
    }
  }

  toggleOpen = id => {
    let faqToggleArray = this.state.faqToggle
    console.log('id:', this.state.faqToggle)

    faqToggleArray
      .filter(item => item.id === id)
      .map(item => (item.open = !item.open))
    this.setState({
      faqToggle: faqToggleArray
    })
    console.log(faqToggleArray)
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

  searchContent = e => {
    this.setState({ searchValue: e.target.value })
  }

  filterFaq = e => {
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
      filteredContent = content.filter(filteredFaq => {
        for (let tag of filteredFaq.tags) {
          if (this.state.activeTag === tag) return true
        }
        return false
      })
    } else {
      filteredContent = content
    }

    // TODO: Pagination if more than 10 faq items

    return (
      <div className={styles['faq-box']}>
        <div className={styles['faq-box--filter-bar']}>
          <div
            className={cx(styles['reset-button'], {
              [styles['active']]: this.state.activeTag === ''
            })}
          >
            <label onClick={this.resetTags} tabIndex="1">
              Alle FAQs
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
          <div className={styles['search-box']}>
            <input
              type="text"
              onChange={this.searchContent}
              placeholder={lang === 'de' ? 'Hass im netz...' : 'Online hate'}
            />
          </div>
        </div>
        <div>
          {content &&
            lang &&
            this.state.faqToggle &&
            this.state.faqToggle.length > 0 &&
            filteredContent
              .filter(
                faq =>
                  faq[lang].title
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase()) ||
                  faq[lang].text
                    .toLowerCase()
                    .includes(this.state.searchValue.toLowerCase())
              )
              .map(faq => (
                <div>
                  <FaqItem
                    open={this.state.faqToggle
                      .filter(item => item.id === faq.id)
                      .map(item => item.open)}
                    faq={faq}
                    lang={lang}
                    toggleOpen={this.toggleOpen}
                  />
                </div>
              ))}
        </div>
      </div>
    )
  }
}

export default withRouter(FaqBox)
