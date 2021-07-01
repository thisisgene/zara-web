import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import RichTextEditor from 'react-rte-link-extended'
import moment from 'moment'

import { jobTags } from '../jobs_data'
import { toolbarConfig, toolbarImgConfig } from './rte_toolbar_config'

import TextFieldGroup from '../../../../common/TextFieldGroup'
import TextareaFieldGroup from '../../../../common/TextareaFieldGroup'
import FileSelectGroup from '../../../../common/FileSelectGroup'

import { confirmAlert } from 'react-confirm-alert'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle,
} from '../../../../../../actions/adminActions'
import { getImagesByCategory } from '../../../../../../actions/imageActions'

import cx from 'classnames'
import '../../news/NewsContent/rte.sass'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import commonStyles from '../../../../common/Common.module.sass'
import styles from './JobContent.module.sass'

class JobContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      jobId: props.match.params.jobId,
      handle: '',
      date: moment(new Date()).format('YYYY-MM-DD'),
      category: 'jobs',
      tag: 'job',
      titleDE: '',
      titleEN: '',
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue(),
      shortDescriptionDE: RichTextEditor.createEmptyValue(),
      shortDescriptionEN: RichTextEditor.createEmptyValue(),

      selectedFilesDE: [],
      selectedFilesEN: [],
      selectedImagesDE: [],
      selectedImagesEN: [],

      toOrder: true,
      isRR: false,
      errors: {},
      imageListOpen: false,
    }
  }

  componentDidMount() {
    this.props.match.params.jobId !== 'neu' &&
      this.props.getById(this.props.match.params.jobId, 'jobs')
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.jobs.job) {
        if (prevProps.match.params.jobId === 'neu') {
          this.setState({
            jobId: this.props.jobs.job._id,
          })
          this.props.getAll('jobs')
          this.props.history.push(
            `/admin/dashboard/jobs/${this.props.jobs.job._id}`
          )
        }
        if (prevProps.jobs != this.props.jobs) {
          const item = this.props.jobs.job
          this.props.getImagesByCategory(item.tag || 'jobs')
          this.setState({
            blankItem: false,
            isOnline: item.isOnline,
            jobId: item._id,
            handle: item.handle,
            date: moment(item.date).format('YYYY-MM-DD'),
            tag: item.tag && item.tag,
            titleDE: item.de && item.de.title && item.de.title,
            titleEN: item.en ? item.en.title && item.en.title : '',
            descriptionDE:
              item.de &&
              item.de.description &&
              RichTextEditor.createValueFromString(item.de.description, 'html'),
            descriptionEN: item.en
              ? item.en.description &&
                RichTextEditor.createValueFromString(
                  item.en.description,
                  'html'
                )
              : RichTextEditor.createEmptyValue(),
            shortDescriptionDE:
              item.de &&
              item.de.shortDescription &&
              RichTextEditor.createValueFromString(
                item.de.shortDescription,
                'html'
              ),
            shortDescriptionEN: item.en
              ? item.en.shortDescription &&
                RichTextEditor.createValueFromString(
                  item.en.shortDescription,
                  'html'
                )
              : RichTextEditor.createEmptyValue(),
            selectedFilesDE: item.files && item.files.de,
            selectedFilesEN: item.files && item.files.en,
            selectedImagesDE: item.images && item.images.de,
            selectedImagesEN: item.images && item.images.en,
          })
        }
      }
      if (prevProps.match.params.jobId !== this.props.match.params.jobId) {
        if (this.props.match.params.jobId === 'neu') {
          console.log('reset')
          this.props.clearSingle('jobs')
          this.setState({
            blankItem: true,
            isOnline: false,
            jobId: this.props.match.params.jobId,
            handle: '',
            date: moment(new Date()).format('YYYY-MM-DD'),
            category: 'jobs',
            tag: 'job',
            titleDE: '',
            titleEN: '',
            descriptionDE: RichTextEditor.createEmptyValue(),
            descriptionEN: RichTextEditor.createEmptyValue(),
            shortDescriptionDE: RichTextEditor.createEmptyValue(),
            shortDescriptionEN: RichTextEditor.createEmptyValue(),
            selectedFilesDE: [],
            selectedFilesEN: [],
            selectedImagesDE: [],
            selectedImagesEN: [],
          })
        } else {
          this.props.getById(this.props.match.params.jobId, 'jobs')
        }
      }
    }
  }

  toggleOnline = () => {
    this.props.toggleOnline(this.state.jobId, 'jobs', !this.state.isOnline)
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
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

  onCheckClick = e => {
    this.setState({ [e.target.name]: e.target.checked })
  }
  onTagSelectChange = e => {
    this.setState({ tag: e.target.value }, () => {
      if (this.state.jobId !== 'neu') {
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
  deleteJob = () => {
    this.props.deleteById(this.state.jobId, 'jobs')
    this.props.history.push('/admin/dashboard/jobs/neu')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Beitrag löschen',
      message: 'Wollen Sie diesen Beitrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteJob(),
        },
        {
          label: 'Abbrechen',
        },
      ],
    })
  }

  saveContent = () => {
    const shortDescDE = this.state.shortDescriptionDE
    const shortDescEN = this.state.shortDescriptionEN
    const descDE = this.state.descriptionDE
    const descEN = this.state.descriptionEN
    const saveData = {
      category: 'jobs',
      date: this.state.date,
      tag: this.state.tag,
      id: this.state.jobId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      shortDescriptionDE: shortDescDE.toString('html'),
      shortDescriptionEN: shortDescEN.toString('html'),
      descriptionDE: descDE.toString('html'),
      descriptionEN: descEN.toString('html'),
      filesDE: this.state.selectedFilesDE,
      filesEN: this.state.selectedFilesEN,
      imagesDE: this.state.selectedImagesDE,
      imagesEN: this.state.selectedImagesEN,
    }
    console.log('desc ', saveData)
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
      <div className={styles['job-wrapper']}>
        <div
          className={cx(styles['job-content-container'], {
            [styles['blank-item']]: this.state.blankItem,
          })}
        >
          <div className={styles['job-content']}>
            <div className={styles['job-content--main']}>
              <div className={styles['job-content--main__category']}>
                <select
                  name="catSelect"
                  value={this.state.tag}
                  onChange={this.onTagSelectChange}
                >
                  {jobTags &&
                    jobTags.map(tag => (
                      <option value={tag.name}>{tag.de.title}</option>
                    ))}
                </select>
              </div>
              <div className={styles['job-content--text']}>
                <div className={styles['job-content--text__title']}>
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

                <div className={styles['job-content--text__title']}>
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
              {this.props.media &&
                this.props.media.images &&
                this.state.jobId !== 'neu' && (
                  <Fragment>
                    {jobTags &&
                      jobTags.map(tag => (
                        <Fragment>
                          {tag.name === this.state.tag &&
                            tag.hasShortDescription && (
                              <div className={styles['job-content--text']}>
                                <div
                                  className={styles['job-content--text__title']}
                                >
                                  <RichTextEditor
                                    placeholder="Kurzbeschreibung deutsch"
                                    className={styles['html-editor']}
                                    toolbarConfig={toolbarConfig}
                                    value={this.state.shortDescriptionDE}
                                    onChange={this.onShortDescriptionChange.bind(
                                      this,
                                      'de'
                                    )}
                                  />
                                  {/* <TextareaFieldGroup
                                    className={commonStyles['input']}
                                    colorScheme="light"
                                    placeholder="Kurzbeschreibung deutsch"
                                    type="textarea"
                                    name="shortDescriptionDE"
                                    value={this.state.shortDescriptionDE}
                                    onChange={this.onChange}
                                    error={this.state.errors.shortDescriptionDE}
                                  /> */}
                                </div>

                                <div
                                  className={styles['job-content--text__title']}
                                >
                                  <RichTextEditor
                                    placeholder="Kurzbeschreibung englisch"
                                    className={styles['html-editor']}
                                    toolbarConfig={toolbarConfig}
                                    value={this.state.shortDescriptionEN}
                                    onChange={this.onShortDescriptionChange.bind(
                                      this,
                                      'en'
                                    )}
                                  />
                                  {/* <TextareaFieldGroup
                                    className={commonStyles['input']}
                                    colorScheme="light"
                                    placeholder="Kurzbeschreibung englisch"
                                    type="textarea"
                                    name="shortDescriptionEN"
                                    value={this.state.shortDescriptionEN}
                                    onChange={this.onChange}
                                    error={this.state.errors.shortDescriptionEN}
                                  /> */}
                                </div>
                              </div>
                            )}
                          {tag.name === this.state.tag && tag.hasDescription && (
                            <div className={styles['job-content--text']}>
                              <div
                                className={styles['job-content--text__title']}
                              >
                                <RichTextEditor
                                  handleReturn={this.swapSoftNewLineBehavior}
                                  placeholder="Hauptbeschreibung deutsch"
                                  className={styles['html-editor']}
                                  toolbarConfig={toolbarImgConfig}
                                  value={this.state.descriptionDE}
                                  onChange={this.onDescriptionChange.bind(
                                    this,
                                    'de'
                                  )}
                                />
                              </div>

                              <div
                                className={styles['job-content--text__title']}
                              >
                                <RichTextEditor
                                  placeholder="Hauptinhalt englisch"
                                  className={styles['html-editor']}
                                  toolbarConfig={toolbarImgConfig}
                                  value={this.state.descriptionEN}
                                  onChange={this.onDescriptionChange.bind(
                                    this,
                                    'en'
                                  )}
                                />
                              </div>
                            </div>
                          )}
                          {tag.name === this.state.tag &&
                            tag.fileOptions &&
                            tag.fileOptions.map(option => (
                              <Fragment>
                                <h3>{option.title}</h3>
                                <div
                                  className={styles['job-content--select-box']}
                                >
                                  <div
                                    className={
                                      styles[
                                        'job-content--select-box__container'
                                      ]
                                    }
                                  >
                                    <FileSelectGroup
                                      optionContent={this.props.media.images}
                                      defaultValue={
                                        this.state[`selected${option.slug}DE`]
                                      }
                                      name={`${option.type}SelectDE`}
                                      onSelectChange={
                                        this[`on${option.slug}SelectChange`]
                                      }
                                      lang="de"
                                    />
                                  </div>
                                  <div
                                    className={
                                      styles[
                                        'job-content--select-box__container'
                                      ]
                                    }
                                  >
                                    <FileSelectGroup
                                      optionContent={this.props.media.images}
                                      defaultValue={
                                        this.state[`selected${option.slug}EN`]
                                      }
                                      name={`${option.type}SelectEN`}
                                      onSelectChange={
                                        this[`on${option.slug}SelectChange`]
                                      }
                                      lang="en"
                                    />
                                  </div>
                                </div>
                              </Fragment>
                            ))}
                        </Fragment>
                      ))}
                  </Fragment>
                )}
            </div>
            {this.props.jobs.job && (
              <div className={styles['job-content--sidebar']}>
                <div
                  className={styles['job-content--sidebar__state-indicator']}
                >
                  <div
                    className={cx(
                      styles['job-content--sidebar__state-indicator--sphere'],
                      {
                        [styles['online']]: this.state.isOnline,
                      }
                    )}
                  />
                  <div
                    className={
                      styles['job-content--sidebar__state-indicator--text']
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div
                  className={styles['job-content--sidebar__section--publish']}
                >
                  <button
                    className={cx(
                      commonStyles['button'],
                      {
                        [commonStyles['button--update']]: !this.state.isOnline,
                      },
                      {
                        [commonStyles['button--offline']]: this.state.isOnline,
                      },
                      commonStyles['button--fullwidth']
                    )}
                    onClick={this.toggleOnline}
                  >
                    {this.state.isOnline ? 'Offline nehmen' : 'Online stellen'}
                  </button>
                </div>
                <div className={styles['job-content--sidebar--buttons']}>
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
                <div className={styles['job-content--sidebar--buttons']}>
                  {this.props.jobs.job && (
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
          {this.props.match.params.jobId === 'neu' && (
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
  jobs: state.jobs,
  media: state.media,
  errors: state.errors,
})

export default connect(mapStateToProps, {
  saveContent,
  getById,
  toggleOnline,
  deleteById,
  clearSingle,
  getAll,
  getImagesByCategory,
})(JobContent)
