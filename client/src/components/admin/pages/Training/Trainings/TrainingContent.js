import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from 'react-calendar'

import TextFieldGroup from '../../../common/TextFieldGroup'
import TextareaFieldGroup from '../../../common/TextareaFieldGroup'
import FileSelectGroup from '../../../common/FileSelectGroup'

import { confirmAlert } from 'react-confirm-alert'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../actions/adminActions'
import { getImagesByCategory } from '../../../../../actions/imageActions'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import commonStyles from '../../../common/Common.module.sass'
import styles from './TrainingContent.module.sass'

class TrainingContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      trainingId: props.match.params.trainingId,
      handle: '',
      category: 'trainings',
      tag: 'trainings',
      title: '',
      date: new Date(),

      selectedFilesDE: [],
      selectedFilesEN: [],

      errors: {},
      imageListOpen: false
    }
  }

  componentDidMount() {
    this.props.match.params.trainingId !== 'neu' &&
      this.props.getById(this.props.match.params.trainingId, 'trainings')
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.training.training) {
        if (prevProps.match.params.trainingId === 'neu') {
          this.setState({
            trainingId: this.props.training.training._id
          })
          this.props.getAll('trainings')
          this.props.history.push(
            `/admin/training/trainings/${this.props.training.training._id}`
          )
        }
        if (prevProps.training != this.props.training) {
          const item = this.props.training.training
          this.props.getImagesByCategory(item.tag)
          this.setState({
            blankItem: false,
            isOnline: item.isOnline,
            trainingId: item._id,
            handle: item.handle,
            tag: item.tag && item.tag,
            titleDE: item.de.title && item.de.title,
            titleEN: item.en ? item.en.title : ''
          })
        }
      }
      if (
        prevProps.match.params.trainingId !== this.props.match.params.trainingId
      ) {
        if (this.props.match.params.trainingId === 'neu') {
          console.log('reset')
          this.props.clearSingle('trainings')
          this.setState({
            blankItem: true,
            isOnline: false,
            trainingId: this.props.match.params.trainingId,
            handle: '',
            category: 'trainings',
            tag: 'trainings',
            titleDE: '',
            titleEN: ''
          })
        } else {
          this.props.getById(this.props.match.params.trainingId, 'trainings')
        }
      }
    }
  }

  toggleOnline = () => {
    this.props.toggleOnline(
      this.state.trainingId,
      'trainings',
      !this.state.isOnline
    )
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onTagSelectChange = e => {
    this.setState({ tag: e.target.value }, () => {
      if (this.state.trainingId !== 'neu') {
        this.props.getImagesByCategory(this.state.tag)
      }
    })
  }
  onSelectChange = (lang, selected) => {
    console.log(lang, selected)
    if (lang === 'DE') {
      this.setState({ selectedFilesDE: selected })
    }
    if (lang === 'EN') {
      this.setState({ selectedFilesEN: selected })
    }
  }

  onDateChange = date => {
    console.log(date)
    this.setState({ date })
  }

  deleteTraining = () => {
    this.props.deleteById(this.state.trainingId, 'trainings')
    this.props.history.push('/admin/training/trainings/neu')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Eintrag löschen',
      message: 'Wollen Sie diesen Eintrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteTraining()
        },
        {
          label: 'Abbrechen'
        }
      ]
    })
  }

  saveContent = () => {
    const saveData = {
      category: 'trainings',
      tag: this.state.tag,
      id: this.state.trainingId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN
    }
    this.props.saveContent(saveData)
  }

  render() {
    return (
      <div className={styles['trainings-wrapper']}>
        <div
          className={cx(styles['trainings-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['trainings-content']}>
            <div className={styles['trainings-content--main']}>
              {/* <div className={styles['trainings-content--main__category']}>
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
              </div> */}
              <div className={styles['trainings-content--text']}>
                <div className={styles['trainings-content--text__title']}>
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
                <div className={styles['trainings-content--text__content']}>
                  <div
                    className={cx(
                      styles['trainings-content--text__content--left'],
                      styles['content-box']
                    )}
                  >
                    <div
                      className={
                        styles['trainings-content--text__content--left__labels']
                      }
                    >
                      <FileSelectGroup
                        optionContent={['schule', 'haus']}
                        defaultValue={this.state.selectedLabels}
                        name="labelSelect"
                        onSelectChange={this.onSelectChange}
                        lang="DE"
                        placeholder="Labels wählen ..."
                      />
                    </div>
                    <div
                      className={
                        styles[
                          'trainings-content--text__content--left__location'
                        ]
                      }
                    >
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="Ort"
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.onChange}
                        error={this.state.errors.location}
                      />
                      <div
                        className={
                          styles[
                            'trainings-content--text__content--left__location--time'
                          ]
                        }
                      >
                        <span>
                          {/* <i className="fas fa-clock" /> */}
                          Uhrzeit:
                        </span>
                        <input type="time" id="appt" name="appt" required />
                      </div>
                    </div>
                    <div
                      className={
                        styles['trainings-content--text__content--left__date']
                      }
                    >
                      <Calendar
                        onChange={this.onDateChange}
                        value={this.state.date}
                      />
                    </div>
                  </div>

                  <div
                    className={cx(
                      styles['trainings-content--text__description'],
                      styles['content-box']
                    )}
                  >
                    <TextFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Betreff"
                      type="text"
                      name="subject"
                      value={this.state.subject}
                      onChange={this.onChange}
                      error={this.state.errors.subject}
                    />
                    <TextareaFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Beschreibungstext öffentlich (wird per Email verschickt)"
                      type="text"
                      name="pubDesc"
                      value={this.state.pubDesc}
                      onChange={this.onChange}
                      error={this.state.errors.pubDesc}
                    />
                    <TextareaFieldGroup
                      className={cx(commonStyles['input'], styles['private'])}
                      colorScheme="light"
                      placeholder="Beschreibungstext geschützt (wird nur im Adminbereich angezeigt)"
                      type="text"
                      name="privDesc"
                      value={this.state.privDesc}
                      onChange={this.onChange}
                      error={this.state.errors.privDesc}
                    />
                  </div>
                </div>
              </div>
              {this.props.media && this.props.media.images && (
                <div className={styles['trainings-content--select-box']}>
                  <div
                    className={
                      styles['trainings-content--select-box__container']
                    }
                  >
                    {/* <FileSelectGroup
                      optionContent={this.props.media.images}
                      defaultValue={this.state.selectedFilesDE}
                      name="fileSelectDE"
                      onSelectChange={this.onSelectChange}
                      lang="DE"
                    /> */}
                  </div>
                  <div
                    className={
                      styles['trainings-content--select-box__container']
                    }
                  >
                    {/* <FileSelectGroup
                      optionContent={this.props.media.images}
                      defaultValue={this.state.selectedFilesEN}
                      name="fileSelectEN"
                      onSelectChange={this.onSelectChange}
                      lang="EN"
                    /> */}
                  </div>
                </div>
              )}
            </div>
            {this.props.training.training && (
              <div className={styles['trainings-content--sidebar']}>
                <div
                  className={
                    styles['trainings-content--sidebar__state-indicator']
                  }
                >
                  <div
                    className={cx(
                      styles[
                        'trainings-content--sidebar__state-indicator--sphere'
                      ],
                      {
                        [styles['online']]: this.state.isOnline
                      }
                    )}
                  />
                  <div
                    className={
                      styles[
                        'trainings-content--sidebar__state-indicator--text'
                      ]
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div
                  className={
                    styles['trainings-content--sidebar__section--publish']
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
                <div className={styles['trainings-content--sidebar--buttons']}>
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
                <div className={styles['trainings-content--sidebar--buttons']}>
                  {this.props.training.training && (
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
          {this.props.match.params.trainingId === 'neu' && (
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
  training: state.training,
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
)(TrainingContent)
