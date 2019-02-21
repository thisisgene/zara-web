import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  saveContent,
  getAll,
  getById,
  deleteById,
  clearSingle
} from '../../../../../actions/adminActions'

import { toolbarConfig, toolbarExtConfig } from './newsContentData'

import RichTextEditor from 'react-rte'
import { confirmAlert } from 'react-confirm-alert' // Import

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import './rte.sass'
import commonStyles from '../../../common/Common.module.sass'
import styles from './NewsContent.module.sass'

class NewsContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blankItem: true,
      newsId: props.match.params.newsId,
      titleDE: '',
      titleEN: '',
      shortDescriptionDE: RichTextEditor.createEmptyValue(),
      shortDescriptionEN: RichTextEditor.createEmptyValue(),
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue()
    }
  }

  componentDidMount() {
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
        if (prevProps.match.params.newsId === 'neu') {
          this.setState({
            newsId: this.props.news.newsItem._id
          })
          this.props.getAll('news')
          this.props.history.push(
            `/admin/dashboard/news/${this.props.news.newsItem._id}`
          )
        }
        const item = this.props.news.newsItem
        this.setState({
          blankItem: false,
          id: item._id,
          titleDE: item.de.title && item.de.title,
          titleEN: item.en && item.en.title && item.en.title,
          shortDescriptionDE: RichTextEditor.createValueFromString(
            item.de.shortDescription,
            'html'
          ),
          shortDescriptionEN:
            item.en &&
            RichTextEditor.createValueFromString(
              item.en.shortDescription,
              'html'
            ),
          descriptionDE: RichTextEditor.createValueFromString(
            item.de.description,
            'html'
          ),
          descriptionEN:
            item.en &&
            RichTextEditor.createValueFromString(item.en.description, 'html')
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
            shortDescriptionDE: RichTextEditor.createEmptyValue(),
            shortDescriptionEN: RichTextEditor.createEmptyValue(),
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

  onShortDescriptionChange = (lang, value) => {
    lang === 'de'
      ? this.setState({ shortDescriptionDE: value })
      : this.setState({ shortDescriptionEN: value })
  }
  onDescriptionChange = (lang, value) => {
    lang === 'de'
      ? this.setState({ descriptionDE: value })
      : this.setState({ descriptionEN: value })
  }

  saveContent = () => {
    console.log(this.state.descriptionDE.toString('html'))
    const shortDescDE = this.state.shortDescriptionDE
    const shortDescEN = this.state.shortDescriptionEN
    const descDE = this.state.descriptionDE
    const descEN = this.state.descriptionEN
    const saveData = {
      category: 'news',
      id: this.state.newsId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      shortDescriptionDE: shortDescDE.toString('html'),
      shortDescriptionEN: shortDescEN.toString('html'),
      descriptionDE: descDE.toString('html'),
      descriptionEN: descEN.toString('html')
    }
    this.props.saveContent(saveData)
    // console.log(saveData)
  }

  deleteNews = () => {
    this.props.deleteById(this.state.newsId, 'news')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Beitrag löschen',
      message: 'Wollen Sie diesen Beitrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteNews()
        },
        {
          label: 'Abbrechen'
        }
      ]
    })
  }

  render() {
    return (
      <div
        className={cx(styles['news-content-container'], {
          [styles['blank-item']]: this.state.blankItem
        })}
      >
        <div className={styles['news-content']}>
          <div className={styles['news-content--box']}>
            <div>
              <input
                type="text"
                name="titleDE"
                value={this.state.titleDE}
                onChange={this.onChange}
              />
              {this.state.newsId === 'neu'
                ? 'Neuer Beitrag'
                : this.state.titleDE}
            </div>
            <div className={styles['news-content--box__short-description']}>
              <RichTextEditor
                className={styles['html-editor']}
                toolbarConfig={toolbarConfig}
                value={this.state.shortDescriptionDE}
                onChange={this.onShortDescriptionChange.bind(this, 'de')}
              />
            </div>
            <div className={styles['news-content--box__description']}>
              <RichTextEditor
                className={styles['html-editor']}
                toolbarConfig={toolbarExtConfig}
                value={this.state.descriptionDE}
                onChange={this.onDescriptionChange.bind(this, 'de')}
              />
            </div>
          </div>
          <div className={styles['news-content--box']}>
            <div>
              <input
                type="text"
                name="titleEN"
                value={this.state.titleEN}
                onChange={this.onChange}
              />
              {this.state.newsId === 'neu'
                ? 'Neuer Beitrag'
                : this.state.titleEN}
            </div>
            <div className={styles['news-content--box__short-description']}>
              <RichTextEditor
                className={styles['html-editor']}
                toolbarConfig={toolbarConfig}
                value={this.state.shortDescriptionEN}
                onChange={this.onShortDescriptionChange.bind(this, 'en')}
              />
            </div>
            <div className={styles['news-content--box__description']}>
              <RichTextEditor
                className={styles['html-editor']}
                toolbarConfig={toolbarExtConfig}
                value={this.state.descriptionEN}
                onChange={this.onDescriptionChange.bind(this, 'en')}
              />
            </div>
          </div>
        </div>
        <button
          className={cx(commonStyles['button'], commonStyles['button--save'])}
          onClick={this.saveContent}
        >
          Speichern
        </button>
        <button
          className={cx(commonStyles['button'], commonStyles['button--delete'])}
          onClick={this.confirmDelete.bind(this, this.deleteNews)}
        >
          Löschen
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

export default connect(
  mapStateToProps,
  { saveContent, getById, deleteById, clearSingle, getAll }
)(NewsContent)
