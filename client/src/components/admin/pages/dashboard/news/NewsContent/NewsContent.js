import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import TextFieldGroup from '../../../../common/TextFieldGroup'

import EmbedPopUp from '../../../../common/EmbedPopUp/EmbedPopUp'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../../actions/adminActions'

import { toolbarConfig, toolbarExtConfig } from './newsContentData'
import { newsTags } from '../../../../../user/pages/Wissen/News/news_data'

import RichTextEditor from 'react-rte'
import { confirmAlert } from 'react-confirm-alert'

import ContentImageList from '../../ContentImageList'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import './rte.sass'
import commonStyles from '../../../../common/Common.module.sass'
import styles from './NewsContent.module.sass'

class NewsContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      onNewsBox: false,
      firstOnNewsBox: false,
      blankItem: true,
      newsId: props.match.params.newsId,
      handle: '',
      category: 'news',
      date: moment(new Date()).format('YYYY-MM-DD'),
      titleDE: '',
      titleEN: '',
      shortDescriptionDE: RichTextEditor.createEmptyValue(),
      shortDescriptionEN: RichTextEditor.createEmptyValue(),
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue(),
      titleImage: '',
      imageId: '',
      imageCategory: '',
      imageSide: '',
      imageAlign: '',
      bigImage: false,
      errors: {},
      imageListOpen: false,
      showEmbedPopUp: true // should be false
    }
  }

  componentDidMount() {
    this.props.match.params.newsId !== 'neu' &&
      this.props.getById(this.props.match.params.newsId, 'news')
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
        this.setState({
          blankItem: false,

          newsId: item._id,
          handle: item.handle,
          onNewsBox: item.onNewsBox,
          firstOnNewsBox: item.firstOnNewsBox,
          isOnline: item.isOnline,
          category: item.tag,
          date: moment(item.date).format('YYYY-MM-DD'), // GET DATE TO WORK!!!!
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
            RichTextEditor.createValueFromString(item.en.description, 'html'),
          titleImage: item.titleImage && item.titleImage.originalName,
          imageId: item.titleImage && item.titleImage.imageId,
          imageCategory: item.titleImage && item.titleImage.category,
          imageSide: item.imageSide,
          imageAlign: item.imageAlign,
          size: item.size
        })
      }
      if (prevProps.match.params.newsId !== this.props.match.params.newsId) {
        if (this.props.match.params.newsId === 'neu') {
          console.log('reset')
          this.props.clearSingle('news')
          this.setState({
            blankItem: true,
            newsId: this.props.match.params.newsId,
            handle: '',
            isOnline: false,
            onNewsBox: false,
            firstOnNewsBox: false,
            category: 'news',
            date: moment(new Date()).format('YYYY-MM-DD'),
            titleDE: '',
            titleEN: '',
            shortDescriptionDE: RichTextEditor.createEmptyValue(),
            shortDescriptionEN: RichTextEditor.createEmptyValue(),
            descriptionDE: RichTextEditor.createEmptyValue(),
            descriptionEN: RichTextEditor.createEmptyValue(),
            titleImage: '',
            imageId: '',
            imageCategory: '',
            imageSide: '',
            imageAlign: '',
            size: ''
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

  onImageOpen = () => {
    this.setState({ imageListOpen: !this.state.imageListOpen })
  }

  onCheckClick = e => {
    this.setState({ [e.target.name]: e.target.checked })
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
      onNewsBox: this.state.onNewsBox,
      firstOnNewsBox: this.state.firstOnNewsBox,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      shortDescriptionDE: shortDescDE.toString('html'),
      shortDescriptionEN: shortDescEN.toString('html'),
      descriptionDE: descDE.toString('html'),
      descriptionEN: descEN.toString('html'),
      titleImage: this.state.titleImage,
      imageId: this.state.imageId,
      imageCategory: this.state.imageCategory,
      imageSide: this.state.imageSide,
      imageAlign: this.state.imageAlign,
      size: this.state.size
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

  updateTitleImage = (originalName, id, category) => {
    this.setState({
      titleImage: originalName,
      imageId: id,
      imageCategory: category,
      imageListOpen: false
    })
  }
  closeImageList = () => {
    this.setState({
      imageListOpen: false
    })
  }
  onImageSideChange = e => {
    this.setState({
      imageSide: e.target.checked ? 'left' : 'right'
    })
  }

  onImageAlignChange = e => {
    this.setState({
      imageAlign: e.target.checked ? 'center' : ''
    })
  }
  onImageBigChange = e => {
    this.setState({
      size: e.target.checked ? 'big-image' : ''
    })
  }

  swapSoftNewLineBehavior(event) {
    let isSoftKeyPressed = e => {
      return (
        e.which === 13 &&
        (e.getModifierState('Shift') ||
          e.getModifierState('Alt') ||
          e.getModifierState('Control'))
      )
    }

    if (!isSoftKeyPressed(event)) {
      event.getModifierState = _ => {
        return true
      }
    } else {
      event.getModifierState = _ => {
        return false
      }
    }
  }

  render() {
    return (
      <div className={styles['news-wrapper']}>
        {this.state.showEmbedPopUp && (
          <div className={styles['embed-popup-container']}>
            <EmbedPopUp />
          </div>
        )}
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
                      handleReturn={this.swapSoftNewLineBehavior}
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
                <div className={styles['news-content--sidebar--buttons']}>
                  <button
                    className={cx(
                      commonStyles['button'],
                      commonStyles['button--save'],
                      styles['button--save']
                    )}
                    onClick={this.saveContent}
                  >
                    Speichern
                  </button>
                </div>
                <div className={styles['news-content--sidebar__section']}>
                  <div
                    className={
                      styles['news-content--sidebar__section--preview']
                    }
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
                      <span>Preview</span>
                    </a>
                  </div>

                  <div
                    className={
                      styles['news-content--sidebar__section--publish']
                    }
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
                      {this.state.isOnline
                        ? 'Offline nehmen'
                        : 'Online stellen'}
                    </button>
                  </div>
                </div>
                <div className={styles['news-content--sidebar__links']}>
                  <p>Link</p>
                  <div className={styles['news-content--sidebar__links--box']}>
                    <p>{`https://zara.or.at/de/wissen/aktuelles/n/${this.state.category}/${this.state.newsId}/${this.state.handle}`}</p>
                  </div>
                  {/* <p>Shortlink</p>
                  <div className={styles['news-content--sidebar__links--box']}>
                    <p>{`https://zara.or.at/de/n/${this.state.newsId}`}</p>
                  </div> */}
                </div>
                <hr />
                <div>
                  <button
                    className={commonStyles['button']}
                    onClick={() =>
                      this.setState({
                        showEmbedPopUp: !this.state.showEmbedPopUp
                      })
                    }
                  >
                    Embed ...
                  </button>
                </div>
                <hr />
                <div>
                  <input
                    id="onNewsBox"
                    type="checkbox"
                    onClick={this.onCheckClick}
                    checked={this.state.onNewsBox}
                    name="onNewsBox"
                  />{' '}
                  <label htmlFor="onNewsBox">Newsbox auf Startseite</label>
                  <br />
                  <input
                    id="firstOnNewsBox"
                    type="checkbox"
                    onClick={this.onCheckClick}
                    checked={this.state.firstOnNewsBox}
                    name="firstOnNewsBox"
                  />{' '}
                  <label htmlFor="firstOnNewsBox">1. Platz</label>
                </div>
                <hr />
                <div
                  className={styles['title-image']}
                  onClick={this.onImageOpen}
                >
                  <div className={cx(styles['title-image--avatar'])}>
                    {this.state.titleImage ? (
                      <img
                        src={`/assets/media/${this.state.imageCategory}/${this.state.titleImage}`}
                        alt=""
                      />
                    ) : (
                      <div>
                        Titelbild
                        <br />
                        zum auswählen klicken
                      </div>
                    )}
                  </div>
                  {this.state.imageListOpen && (
                    <ContentImageList
                      updateTitleImage={this.updateTitleImage}
                      closeImageList={this.closeImageList}
                      newsImageId={this.state.imageId}
                      category={'news'}
                    />
                  )}
                </div>
                <div
                  className={styles['news-content--sidebar__image-checkbox']}
                >
                  <div
                    className={
                      styles['news-content--sidebar__image-checkbox--group']
                    }
                  >
                    <div>
                      <input
                        id="image-side"
                        type="checkbox"
                        onClick={this.onImageSideChange}
                        checked={this.state.imageSide === 'left'}
                        name="imageSide"
                      />
                      <label htmlFor="image-side">Bild Links</label>
                    </div>
                  </div>
                  <div
                    className={
                      styles['news-content--sidebar__image-checkbox--group']
                    }
                  >
                    <input
                      id="image-big"
                      type="checkbox"
                      onClick={this.onImageBigChange}
                      checked={this.state.size === 'big-image'}
                      name="imageBig"
                    />
                    <label htmlFor="image-big">Großes Bild</label>
                  </div>
                  <div
                    className={
                      styles['news-content--sidebar__image-checkbox--group']
                    }
                  >
                    <input
                      id="image-align"
                      type="checkbox"
                      onClick={this.onImageAlignChange}
                      checked={this.state.imageAlign === 'center'}
                      disabled={this.state.size === 'big-image'}
                      name="imageAlign"
                    />
                    <label htmlFor="image-align">Text vertikal mittig</label>
                  </div>
                </div>
                <hr />
                <div className={styles['news-content--sidebar--buttons']}>
                  {this.props.news.newsItem && (
                    <button
                      className={cx(
                        commonStyles['button'],
                        commonStyles['button--delete']
                      )}
                      onClick={this.confirmDelete.bind(this, this.deleteNews)}
                    >
                      Beitrag Löschen
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          {this.props.match.params.newsId === 'neu' && (
            <button
              className={cx(
                commonStyles['button'],
                commonStyles['button--save'],
                styles['button--save']
              )}
              onClick={this.saveContent}
            >
              Speichern
            </button>
          )}
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
