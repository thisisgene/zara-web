import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import Select from 'react-select'

import TextFieldGroup from '../../../../common/TextFieldGroup'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../../actions/adminActions'

import {
  toolbarConfig,
  toolbarExtConfig
} from '../../news/NewsContent/newsContentData'
import { faqTags } from '../../../../../user/pages/Wissen/Faq/faq_data'

import RichTextEditor from 'react-rte'
import { confirmAlert } from 'react-confirm-alert'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import '../../news/NewsContent/rte.sass'
import commonStyles from '../../../../common/Common.module.sass'
import styles from './FaqContent.module.sass'

class FaqContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      faqId: props.match.params.faqId,
      handle: '',
      category: 'rassismus',
      title: '',
      questionDE: '',
      questionEN: '',
      answerDE: RichTextEditor.createEmptyValue(),
      answerEN: RichTextEditor.createEmptyValue(),
      errors: {},
      imageListOpen: false
    }
  }

  componentDidMount() {
    this.props.match.params.faqId !== 'neu' &&
      this.props.getById(this.props.match.params.faqId, 'faqs')
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.faq.faq) {
        if (prevProps.match.params.faqId === 'neu') {
          this.setState({
            faqId: this.props.faq.faq._id
          })
          this.props.getAll('faqs')
          this.props.history.push(
            `/admin/dashboard/faqs/${this.props.faq.faq._id}`
          )
        }
        const item = this.props.faq.faq
        this.setState({
          blankItem: false,

          faqId: item._id,
          handle: item.handle,
          isOnline: item.isOnline,
          category: item.tag,
          date: moment(item.date).format('YYYY-MM-DD'), // GET DATE TO WORK!!!!
          title: item.title && item.title,
          questionDE: item.de && item.de.question,
          questionEN: item.en && item.en.question,

          answerDE:
            item.de &&
            RichTextEditor.createValueFromString(item.de.answer, 'html'),
          answerEN:
            item.en &&
            RichTextEditor.createValueFromString(item.en.answer, 'html')
        })
      }
      if (prevProps.match.params.faqId !== this.props.match.params.faqId) {
        if (this.props.match.params.faqId === 'neu') {
          console.log('reset')
          this.props.clearSingle('faqs')
          this.setState({
            isOnline: false,
            blankItem: true,
            faqId: this.props.match.params.faqId,
            handle: '',
            category: 'rassismus',
            title: '',
            questionDE: '',
            questionEN: '',
            answerDE: RichTextEditor.createEmptyValue(),
            answerEN: RichTextEditor.createEmptyValue(),
            errors: {}
          })
        } else {
          this.props.getById(this.props.match.params.faqId, 'faqs')
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

  onQuestionChange = (lang, value) => {
    lang === 'de'
      ? this.setState({ questionDE: value })
      : this.setState({ questionEN: value })
  }
  onAnswerChange = (lang, value) => {
    lang === 'de'
      ? this.setState({ answerDE: value })
      : this.setState({ answerEN: value })
  }

  onImageOpen = () => {
    this.setState({ imageListOpen: !this.state.imageListOpen })
  }

  saveContent = () => {
    const answerDE = this.state.answerDE
    const answerEN = this.state.answerEN
    const saveData = {
      category: 'faqs',
      tag: this.state.category,
      date: this.state.date,
      id: this.state.faqId,
      title: this.state.title,
      questionDE: this.state.questionDE,
      questionEN: this.state.questionEN,
      answerDE: answerDE.toString('html'),
      answerEN: answerEN.toString('html')
    }
    this.props.saveContent(saveData)
    // console.log(saveData)
  }

  toggleOnline = () => {
    this.props.toggleOnline(this.state.faqId, 'faqs', !this.state.isOnline)
  }

  deleteNews = () => {
    this.props.deleteById(this.state.faqId, 'faqs')
    this.props.history.push('/admin/dashboard/faqs/neu')
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
      <div className={styles['faqs-wrapper']}>
        <div
          className={cx(styles['faqs-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['faqs-content-main']}>
            <div className={styles['faqs-utilities']}>
              <div className={styles['faqs-utilities__category']}>
                <select
                  name="catSelect"
                  value={this.state.category}
                  onChange={this.onSelectChange}
                >
                  {faqTags &&
                    faqTags.map(tag => (
                      <option value={tag.name}>{tag.de.title}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className={styles['faqs--title']}>
              <TextFieldGroup
                className={commonStyles['input']}
                colorScheme="light"
                placeholder="Titel"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                error={this.state.errors.title}
              />
            </div>
            <div className={styles['faqs-content']}>
              <div className={styles['faqs-content--text']}>
                <div className={styles['faqs-content--text--box']}>
                  <div className={styles['faqs-content--text--box__question']}>
                    <TextFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Frage deutsch"
                      type="text"
                      name="questionDE"
                      value={this.state.questionDE}
                      onChange={this.onChange}
                      error={this.state.errors.questionDE}
                    />
                    {/* <RichTextEditor
                      placeholder="Kurzbeschreibung deutsch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarConfig}
                      value={this.state.questionDE}
                      onChange={this.onQuestionChange.bind(this, 'de')}
                    /> */}
                  </div>
                  <div className={styles['faqs-content--text--box__answer']}>
                    <RichTextEditor
                      handleReturn={this.swapSoftNewLineBehavior}
                      placeholder="Antwort deutsch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarExtConfig && toolbarExtConfig}
                      value={this.state.answerDE}
                      onChange={this.onAnswerChange.bind(this, 'de')}
                    />
                  </div>
                </div>
                <div className={styles['faqs-content--text--box']}>
                  <div className={styles['faqs-content--text--box__question']}>
                    <TextFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Frage englisch"
                      type="text"
                      name="questionEN"
                      value={this.state.questionEN}
                      onChange={this.onChange}
                      error={this.state.errors.questionEN}
                    />
                    {/* <RichTextEditor
                      placeholder="Kurzbeschreibung englisch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarConfig}
                      value={this.state.questionEN}
                      onChange={this.onQuestionChange.bind(this, 'en')}
                    /> */}
                  </div>
                  <div className={styles['faqs-content--text--box__answer']}>
                    <RichTextEditor
                      handleReturn={this.swapSoftNewLineBehavior}
                      placeholder="Antwort englisch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarExtConfig && toolbarExtConfig}
                      value={this.state.answerEN}
                      onChange={this.onAnswerChange.bind(this, 'en')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.props.faq.faq && (
              <div className={styles['faqs-content--sidebar']}>
                <div
                  className={styles['faqs-content--sidebar__state-indicator']}
                >
                  <div
                    className={cx(
                      styles['faqs-content--sidebar__state-indicator--sphere'],
                      {
                        [styles['online']]: this.state.isOnline
                      }
                    )}
                  />
                  <div
                    className={
                      styles['faqs-content--sidebar__state-indicator--text']
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div className={styles['faqs-content--sidebar--buttons']}>
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
                <div className={styles['faqs-content--sidebar__section']}>
                  {/* <div
                    className={
                      styles['faqs-content--sidebar__section--preview']
                    }
                  >
                    <a
                      className={cx(
                        commonStyles['button'],
                        commonStyles['button--preview'],
                        commonStyles['button--fullwidth']
                      )}
                      // onClick={this.saveContent}
                      href={`/admin/preview/faqs/${this.state.faqId}`}
                      target="blank"
                    >
                      <i className="far fa-eye" />
                      <span>Preview</span>
                    </a>
                  </div> */}
                  <div
                    className={
                      styles['faqs-content--sidebar__section--publish']
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
                {/* <div className={styles['faqs-content--sidebar__links']}>
                  <p>Link</p>
                  <div className={styles['faqs-content--sidebar__links--box']}>
                    <p>{`https://zara.or.at/de/wissen/aktuelles/n/${
                      this.state.category
                    }/${this.state.faqId}/${this.state.handle}`}</p>
                  </div>
                </div> */}
                <hr />
                {/* <div
                  className={styles['title-image']}
                  onClick={this.onImageOpen}
                >
                  <div className={cx(styles['title-image--avatar'])}>
                    {this.state.titleImage ? (
                      <img
                        src={`/assets/media/${this.state.imageCategory}/${
                          this.state.titleImage
                        }`}
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
                </div>
                <div
                  className={styles['faqs-content--sidebar__image-checkbox']}
                >
                  <div
                    className={
                      styles['faqs-content--sidebar__image-checkbox--group']
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
                      styles['faqs-content--sidebar__image-checkbox--group']
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
                      styles['faqs-content--sidebar__image-checkbox--group']
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
                <hr /> */}
                <div className={styles['faqs-content--sidebar--buttons']}>
                  {this.props.faq.faq && (
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
          {this.props.match.params.faqId === 'neu' && (
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
  faq: state.faq,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { saveContent, getById, toggleOnline, deleteById, clearSingle, getAll }
)(FaqContent)
