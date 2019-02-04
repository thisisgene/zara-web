import React, { Component } from 'react'
import { connect } from 'react-redux'

import RichTextEditor from 'react-rte'
import ItemAddList from '../../../common/ItemAddList/ItemAddList'

import {
  saveContent,
  getById,
  clearSingle
} from '../../../../../actions/adminActions'

import { toolbarConfig } from './newsContentData'

import cx from 'classnames'
import './rte.sass'
import styles from './NewsContent.module.sass'

class NewsContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blankItem: true,
      newsId: props.match.params.newsId,
      titleDE: '',
      titleEN: '',
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue()
    }
  }

  componentDidMount() {
    console.log(this.state.newsId)
    this.props.match.params.newsId !== 'neu' &&
      this.props.getById(this.props.match.params.newsId, 'news')
    // RichTextEditor.createValueFromString(
    //   news.description,
    //   'html'
    // )
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.news.newsItem) {
        const item = this.props.news.newsItem
        this.setState({
          blankItem: false,
          id: item._id,
          titleDE: item.titleDE,
          titleEN: item.titleEN,
          descriptionDE: RichTextEditor.createValueFromString(
            item.descriptionDE,
            'html'
          ),
          descriptionEN: RichTextEditor.createValueFromString(
            item.descriptionEn,
            'html'
          )
        })
      }
      if (prevProps.match.params.newsId !== this.props.match.params.newsId) {
        if (this.props.match.params.newsId === 'neu') {
          console.log('reset')
          this.props.clearSingle('news')
          this.setState({
            blankItem: true,
            newsId: this.props.match.params.newsId,
            titleDE: '',
            titleEN: '',
            descriptionDE: RichTextEditor.createEmptyValue(),
            descriptionEN: RichTextEditor.createEmptyValue()
          })
        } else {
          this.props.getById(this.props.match.params.newsId, 'news')
        }
      }
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDescriptionChange = (lang, value) => {
    lang === 'de'
      ? this.setState({ descriptionDE: value })
      : this.setState({ descriptionEN: value })
  }

  saveContent = () => {
    console.log(this.state.descriptionDE.toString('html'))
    const descDE = this.state.descriptionDE
    const descEN = this.state.descriptionEN
    const saveData = {
      category: 'news',
      id: this.state.newsId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      descriptionDE: descDE.toString('html'),
      descriptionEN: descEN.toString('html')
    }
    this.props.saveContent(saveData)
    // console.log(saveData)
  }

  render() {
    return (
      <div
        className={cx(styles['news-content'], {
          [styles['blank-item']]: this.state.blankItem
        })}
      >
        <div>
          <input
            type="text"
            name="titleDE"
            value={this.state.titleDE}
            onChange={this.onChange}
          />
          {this.state.newsId === 'neu' ? 'Neuer Beitrag' : this.state.titleDE}
        </div>
        <div className={styles['news-content--description']}>
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            value={this.state.descriptionDE}
            onChange={this.onDescriptionChange.bind(this, 'de')}
          />
        </div>
        <button onClick={this.saveContent}>Speichern</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

export default connect(
  mapStateToProps,
  { saveContent, getById, clearSingle }
)(NewsContent)
