import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import TextFieldGroup from '../../../common/TextFieldGroup'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../actions/adminActions'

import { toolbarConfig, toolbarExtConfig } from './newsContentData'
import { newsTags } from '../../../../user/pages/Wissen/News/news_data'

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
      isOnline: false,
      blankItem: true,
      newsId: props.match.params.newsId,
      category: 'news',
      date: moment(new Date()).format('YYYY-MM-DD'),
      titleDE: '',
      titleEN: '',
      shortDescriptionDE: RichTextEditor.createEmptyValue(),
      shortDescriptionEN: RichTextEditor.createEmptyValue(),
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue(),
      errors: {}
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
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
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
        console.log('date: ', item.dateUnformatted)
        this.setState({
          blankItem: false,

          newsId: item._id,
          isOnline: item.isOnline,
          category: item.tag,
          date: moment(item.dateUnformatted).format('YYYY-MM-DD'), // GET DATE TO WORK!!!!
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
            isOnline: false,
            category: 'news',
            date: new Date(),
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
  onSelectChange = e => {
    this.setState({ category: e.target.value })
  }

  onDateChange = e => {
    console.log(e.target.value)
    this.setState({ date: e.target.value })
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
      tag: this.state.category,
      date: this.state.date,
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

  toggleOnline = () => {
    this.props.toggleOnline(this.state.newsId, 'news', !this.state.isOnline)
  }

  deleteNews = () => {
    this.props.deleteById(this.state.newsId, 'news')
    this.props.history.push('/admin/dashboard/news/neu')
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
      <div className={styles['news-wrapper']}>
        <div
          className={cx(styles['news-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['news-content-main']}>
            <div className={styles['news-utilities']}>
              <div className={styles['news-utilities__category']}>
                <select
                  name="catSelect"
                  value={this.state.category}
                  onChange={this.onSelectChange}
                >
                  {newsTags &&
                    newsTags.map(tag => (
                      <option value={tag.name}>{tag.de.title}</option>
                    ))}
                </select>
              </div>
              <div className={styles['news-utilities__date']}>
                <input
                  type="date"
                  className={styles['date-picker']}
                  value={this.state.date}
                  onChange={this.onDateChange}
                />
                {/* <DatePicker
                  className={styles['date-picker']}
                  value={this.state.date}
                  onChange={this.onDateChange}
                  // dateFormat={'dd/MM/YYYY'}
                  locale={'de-DE'}
                /> */}
              </div>
            </div>
            <div className={styles['news-content']}>
              <div className={styles['news-content--text']}>
                <div className={styles['news-content--text--box']}>
                  <div className={styles['news-content--text--box__title']}>
                    <TextFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Titel deutsch"
                      type="text"
                      name="titleDE"
                      value={this.state.titleDE}
                      onChange={this.onChange}
                      error={this.state.errors.titleDE}
                    />
                    {/* {this.state.newsId === 'neu'
                  ? 'Neuer Beitrag'
                  : this.state.titleDE} */}
                  </div>
                  <div
                    className={
                      styles['news-content--text--box__short-description']
                    }
                  >
                    <RichTextEditor
                      placeholder="Kurzbeschreibung deutsch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarConfig}
                      value={this.state.shortDescriptionDE}
                      onChange={this.onShortDescriptionChange.bind(this, 'de')}
                    />
                  </div>
                  <div
                    className={styles['news-content--text--box__description']}
                  >
                    <RichTextEditor
                      placeholder="Hauptinhalt deutsch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarExtConfig}
                      value={this.state.descriptionDE}
                      onChange={this.onDescriptionChange.bind(this, 'de')}
                    />
                  </div>
                </div>
                <div className={styles['news-content--text--box']}>
                  <div className={styles['news-content--text--box__title']}>
                    <TextFieldGroup
                      placeholder="Titel englisch"
                      className={commonStyles['input']}
                      colorScheme="light"
                      type="text"
                      name="titleEN"
                      value={this.state.titleEN}
                      onChange={this.onChange}
                    />
                  </div>
                  <div
                    className={
                      styles['news-content--text--box__short-description']
                    }
                  >
                    <RichTextEditor
                      placeholder="Kurzbeschreibung englisch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarConfig}
                      value={this.state.shortDescriptionEN}
                      onChange={this.onShortDescriptionChange.bind(this, 'en')}
                    />
                  </div>
                  <div
                    className={styles['news-content--text--box__description']}
                  >
                    <RichTextEditor
                      placeholder="Hauptinhalt englisch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarExtConfig}
                      value={this.state.descriptionEN}
                      onChange={this.onDescriptionChange.bind(this, 'en')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.props.news.newsItem && (
              <div className={styles['news-content--sidebar']}>
                <div
                  className={styles['news-content--sidebar__state-indicator']}
                >
                  <div
                    className={cx(
                      styles['news-content--sidebar__state-indicator--sphere'],
                      {
                        [styles['online']]: this.state.isOnline
                      }
                    )}
                  />
                  <div
                    className={
                      styles['news-content--sidebar__state-indicator--text']
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div
                  className={cx(
                    styles['news-content--sidebar__preview'],
                    styles['news-content--sidebar__section']
                  )}
                >
                  <a
                    className={cx(
                      commonStyles['button'],
                      commonStyles['button--preview'],
                      commonStyles['button--fullwidth']
                    )}
                    // onClick={this.saveContent}
                    href={`/admin/preview/news/${this.state.newsId}`}
                    target="blank"
                  >
                    <i className="far fa-eye" />
                    Preview
                  </a>
                </div>
                <div
                  className={cx(
                    styles['news-content--sidebar__publish'],
                    styles['news-content--sidebar__section']
                  )}
                >
                  <button
                    className={cx(
                      commonStyles['button'],
                      {
                        [commonStyles['button--update']]: !this.state.isOnline
                      },
                      {
                        [commonStyles['button--offline']]: this.state.isOnline
                      },
                      commonStyles['button--fullwidth']
                    )}
                    onClick={this.toggleOnline}
                  >
                    {this.state.isOnline ? 'Offline nehmen' : 'Online stellen'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className={styles['news-content--buttons']}>
            <button
              className={cx(
                commonStyles['button'],
                commonStyles['button--save']
              )}
              onClick={this.saveContent}
            >
              Speichern
            </button>
            {this.props.news.newsItem && (
              <button
                className={cx(
                  commonStyles['button'],
                  commonStyles['button--delete']
                )}
                onClick={this.confirmDelete.bind(this, this.deleteNews)}
              >
                Löschen
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { saveContent, getById, toggleOnline, deleteById, clearSingle, getAll }
)(NewsContent)
