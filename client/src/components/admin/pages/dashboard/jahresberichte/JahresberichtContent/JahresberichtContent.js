import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { jahresberichtTags } from '../jahresberichte_data'

import TextFieldGroup from '../../../../common/TextFieldGroup'
import FileSelectGroup from '../../../../common/FileSelectGroup'

import { confirmAlert } from 'react-confirm-alert'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../../actions/adminActions'
import { getImagesByCategory } from '../../../../../../actions/imageActions'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import commonStyles from '../../../../common/Common.module.sass'
import styles from './JahresberichtContent.module.sass'

class JahresberichtContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      jahresberichtId: props.match.params.jahresberichtId,
      handle: '',
      category: 'jahresberichte',
      tag: 'rassismusreport',
      titleDE: '',
      titleEN: '',

      selectedFilesDE: [],
      selectedFilesEN: [],
      selectedImagesDE: [],
      selectedImagesEN: [],

      toOrder: true,
      isRR: false,
      errors: {},
      imageListOpen: false
    }
  }

  componentDidMount() {
    this.props.match.params.jahresberichtId !== 'neu' &&
      this.props.getById(
        this.props.match.params.jahresberichtId,
        'jahresberichte'
      )
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.jahresberichte.jahresbericht) {
        if (prevProps.match.params.jahresberichtId === 'neu') {
          this.setState({
            jahresberichtId: this.props.jahresberichte.jahresbericht._id
          })
          this.props.getAll('jahresberichte')
          this.props.history.push(
            `/admin/dashboard/jahresberichte/${this.props.jahresberichte.jahresbericht._id
            }`
          )
        }
        if (prevProps.jahresberichte != this.props.jahresberichte) {
          const item = this.props.jahresberichte.jahresbericht
          this.props.getImagesByCategory(item.tag || 'jahresberichte')
          this.setState({
            blankItem: false,
            isOnline: item.isOnline,
            jahresberichtId: item._id,
            handle: item.handle,
            tag: item.tag && item.tag,
            titleDE: item.de && item.de.title && item.de.title,
            titleEN: item.en ? item.en.title : '',
            selectedFilesDE: item.files && item.files.de,
            selectedFilesEN: item.files && item.files.en,
            selectedImagesDE: item.images && item.images.de,
            selectedImagesEN: item.images && item.images.en,
            toOrder: item.toOrder,
            isRR: item.tag === 'rassismusreport' || item.tag === 'ghinbericht'
          })
        }
      }
      if (
        prevProps.match.params.jahresberichtId !==
        this.props.match.params.jahresberichtId
      ) {
        if (this.props.match.params.jahresberichtId === 'neu') {
          console.log('reset')
          this.props.clearSingle('jahresberichte')
          this.setState({
            blankItem: true,
            isOnline: false,
            jahresberichtId: this.props.match.params.jahresberichtId,
            handle: '',
            category: 'jahresberichte',
            tag: 'jahresberichte',
            titleDE: '',
            titleEN: '',
            selectedFilesDE: [],
            selectedFilesEN: [],
            selectedImagesDE: [],
            selectedImagesEN: [],
            toOrder: true
          })
        } else {
          this.props.getById(
            this.props.match.params.jahresberichtId,
            'jahresberichte'
          )
        }
      }
    }
  }

  toggleOnline = () => {
    this.props.toggleOnline(
      this.state.jahresberichtId,
      'jahresberichte',
      !this.state.isOnline
    )
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onCheckClick = e => {
    this.setState({ [e.target.name]: e.target.checked });
  }
  onTagSelectChange = e => {
    this.setState({ tag: e.target.value }, () => {
      if (this.state.jahresberichtId !== 'neu') {
        this.props.getImagesByCategory(this.state.tag)
      }
    })
  }
  onFilesSelectChange = (lang, selected) => {
    if (lang === 'de') {
      this.setState({ selectedFilesDE: selected })
    }
    if (lang === 'en') {
      this.setState({ selectedFilesEN: selected })
    }
  }
  onImagesSelectChange = (lang, selected) => {
    if (lang === 'de') {
      this.setState({ selectedImagesDE: selected })
    }
    if (lang === 'en') {
      this.setState({ selectedImagesEN: selected })
    }
  }
  deleteJahresbericht = () => {
    this.props.deleteById(this.state.jahresberichtId, 'jahresberichte')
    this.props.history.push('/admin/dashboard/jahresberichte/neu')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Beitrag löschen',
      message: 'Wollen Sie diesen Beitrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteJahresbericht()
        },
        {
          label: 'Abbrechen'
        }
      ]
    })
  }

  saveContent = () => {
    const saveData = {
      category: 'jahresberichte',
      tag: this.state.tag,
      id: this.state.jahresberichtId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      filesDE: this.state.selectedFilesDE,
      filesEN: this.state.selectedFilesEN,
      imagesDE: this.state.selectedImagesDE,
      imagesEN: this.state.selectedImagesEN,
      toOrder: this.state.toOrder
    }
    this.props.saveContent(saveData)
  }

  render() {
    let defaultSelectedDE = []
    let defaultSelectedImageDE = []
    let defaultSelectedEN = []
    let defaultSelectedImageEN = []

    if (this.state.selectedFilesDE && this.state.selectedFilesDE.length > 0) {
      defaultSelectedDE = this.state.selectedFilesDE
    }
    if (this.state.selectedImagesDE && this.state.selectedImagesDE.length > 0) {
      defaultSelectedImageDE = this.state.selectedImagesDE
    }

    return (
      <div className={styles['jahresbericht-wrapper']}>
        <div
          className={cx(styles['jahresbericht-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['jahresbericht-content']}>
            <div className={styles['jahresbericht-content--main']}>
              <div className={styles['jahresbericht-content--main__category']}>
                <select
                  name="catSelect"
                  value={this.state.tag}
                  onChange={this.onTagSelectChange}
                >
                  {jahresberichtTags &&
                    jahresberichtTags.map(tag => (
                      <option value={tag.name}>{tag.de.title}</option>
                    ))}
                </select>
              </div>
              <div className={styles['jahresbericht-content--text']}>
                <div className={styles['jahresbericht-content--text__title']}>
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

                <div className={styles['jahresbericht-content--text__title']}>
                  <TextFieldGroup
                    className={commonStyles['input']}
                    colorScheme="light"
                    placeholder="Titel englisch"
                    type="text"
                    name="titleEN"
                    value={this.state.titleEN}
                    onChange={this.onChange}
                    error={this.state.errors.titleEN}
                  />
                </div>
              </div>
              {this.props.media && this.props.media.images && this.state.jahresberichtId !== 'neu' && (
                <Fragment>
                  {jahresberichtTags &&
                    jahresberichtTags.map(tag =>
                      <Fragment>
                        {tag.name === this.state.tag && tag.fileOptions &&
                          tag.fileOptions.map(option =>
                            <Fragment>
                              <h3>{option.title}</h3>
                              <div className={styles['jahresbericht-content--select-box']}>
                                <div
                                  className={
                                    styles['jahresbericht-content--select-box__container']
                                  }
                                >
                                  <FileSelectGroup
                                    optionContent={this.props.media.images}
                                    defaultValue={this.state[`selected${option.slug}DE`]}
                                    name={`${option.type}SelectDE`}
                                    onSelectChange={this[`on${option.slug}SelectChange`]}
                                    lang="de"
                                  />
                                </div>
                                <div
                                  className={
                                    styles['jahresbericht-content--select-box__container']
                                  }
                                >
                                  <FileSelectGroup
                                    optionContent={this.props.media.images}
                                    defaultValue={this.state[`selected${option.slug}EN`]}
                                    name={`${option.type}SelectEN`}
                                    onSelectChange={this[`on${option.slug}SelectChange`]}
                                    lang="en"
                                  />
                                </div>

                              </div>
                            </Fragment>
                          )
                        }
                      </Fragment>

                    )}
                </Fragment>

              )
              }
              {/* {
                this.props.media && this.props.media.images && this.state.isRR && this.state.jahresberichtId !== 'neu' && (
                  <Fragment>
                    <h3>Titelbild</h3>
                    <div className={styles['jahresbericht-content--select-box']}>
                      <div
                        className={
                          styles['jahresbericht-content--select-box__container']
                        }
                      >
                        <FileSelectGroup
                          optionContent={this.props.media.images}
                          defaultValue={this.state.selectedImagesDE}
                          name="imageSelectDE"
                          onSelectChange={this.onImageSelectChange}
                          lang="DE"
                        />
                      </div>
                      <div
                        className={
                          styles['jahresbericht-content--select-box__container']
                        }
                      >
                        <FileSelectGroup
                          optionContent={this.props.media.images}
                          defaultValue={this.state.selectedImagesEN}
                          name="imageSelectEN"
                          onSelectChange={this.onImageSelectChange}
                          lang="EN"
                        />
                      </div>

                    </div>
                  </Fragment>
                )
              } */}
            </div>
            {this.props.jahresberichte.jahresbericht && (
              <div className={styles['jahresbericht-content--sidebar']}>
                <div
                  className={
                    styles['jahresbericht-content--sidebar__state-indicator']
                  }
                >
                  <div
                    className={cx(
                      styles[
                      'jahresbericht-content--sidebar__state-indicator--sphere'
                      ],
                      {
                        [styles['online']]: this.state.isOnline
                      }
                    )}
                  />
                  <div
                    className={
                      styles[
                      'jahresbericht-content--sidebar__state-indicator--text'
                      ]
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div
                  className={
                    styles['jahresbericht-content--sidebar__section--publish']
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
                    {this.state.isOnline ? 'Offline nehmen' : 'Online stellen'}
                  </button>
                </div>
                <div
                  className={styles['jahresbericht-content--sidebar--buttons']}
                >
                  {this.state.isRR && (
                    <Fragment>
                      <input
                        id="toOrder"
                        type="checkbox"
                        onClick={this.onCheckClick}
                        checked={this.state.toOrder}
                        name="toOrder"
                      />
                      <label htmlFor="toOrder">Bestellbar</label>
                    </Fragment>
                  )}{' '}
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

                <hr />
                <div
                  className={styles['jahresbericht-content--sidebar--buttons']}
                >
                  {this.props.jahresberichte.jahresbericht && (
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
          {this.props.match.params.jahresberichtId === 'neu' && (
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
  jahresberichte: state.jahresberichte,
  media: state.media,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  {
    saveContent,
    getById,
    toggleOnline,
    deleteById,
    clearSingle,
    getAll,
    getImagesByCategory
  }
)(JahresberichtContent)
