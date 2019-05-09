import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from 'react-calendar'

import TextFieldGroup from '../../../common/TextFieldGroup'
import TextareaFieldGroup from '../../../common/TextareaFieldGroup'
import FileSelectGroup from '../../../common/FileSelectGroup'
import TeamSelectGroup from '../../../common/TeamSelectGroup'

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
import { getAllUsers } from '../../../../../actions/authActions'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import globalStyles from '../../../common/Bootstrap.module.css'
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
      timeFrom: '',
      timeUntil: '',
      location: '',
      address1: '',
      fee: '',
      labels: [],
      assignedTrainer1: {},
      assignedTrainer2: {},
      emailSubject: '',
      pubContent: '',
      privContent: '',
      hasBeenSent: false,
      errors: {},
      imageListOpen: false
    }
  }

  componentDidMount() {
    this.props.match.params.trainingId !== 'neu' &&
      this.props.getById(this.props.match.params.trainingId, 'trainings')
    // this.props.getAll('trainingTeam')
    this.props.getAllUsers()
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
            title: item.title,
            date: item.date,
            timeFrom: item.timeFrom,
            timeUntil: item.timeUntil,
            location: item.location && item.location.title,
            address1: item.location && item.location.address1,
            fee: item.fee ? item.fee : '',
            labels: item.labels,
            assignedTrainer1: item.assignedTrainer1,
            assignedTrainer2: item.assignedTrainer2,
            emailSubject: item.emailSubject,
            pubContent: item.pubContent,
            privContent: item.privContent,
            hasBeenSent: item.hasBeenSent
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
            isOnline: false,
            blankItem: true,
            trainingId: this.props.match.params.trainingId,
            handle: '',
            category: 'trainings',
            tag: 'trainings',
            title: '',
            date: new Date(),
            timeFrom: '',
            timeUntil: '',
            location: '',
            address1: '',
            fee: '',
            labels: [],
            assignedTrainer1: {},
            assignedTrainer2: {},
            emailSubject: '',
            pubContent: '',
            privContent: '',
            hasBeenSent: false,
            errors: {},
            imageListOpen: false
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
  onAssignChange = e => {
    this.setState({ [e.target.name]: { id: e.target.value } })
  }
  onSelectChange = (lang, selected) => {
    console.log(lang, selected)

    this.setState({ selectedFiles: selected })
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
      title: this.state.title,
      date: this.state.date,
      timeFrom: this.state.timeFrom,
      timeUntil: this.state.timeUntil,
      location: this.state.location,
      address1: this.state.address1,
      fee: this.state.fee,
      labels: this.state.labels,
      assignedTrainer1: this.state.assignedTrainer1,
      assignedTrainer2: this.state.assignedTrainer2,
      emailSubject: this.state.emailSubject,
      pubContent: this.state.pubContent,
      privContent: this.state.privContent
    }
    this.props.saveContent(saveData)
  }

  render() {
    const { users } = this.props.auth
    return (
      <div className={styles['trainings-wrapper']}>
        <div
          className={cx(styles['trainings-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['trainings-content']}>
            <div className={styles['trainings-content--main']}>
              <div className={styles['trainings-content--text']}>
                <div className={styles['trainings-content--text__title']}>
                  <TextFieldGroup
                    className={commonStyles['input']}
                    colorScheme="light"
                    placeholder="Titel der Ausschreibung"
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
                        defaultValue={this.state.labels}
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
                          Von:
                        </span>
                        <input
                          type="time"
                          id="timeFrom"
                          onChange={this.onChange}
                          value={this.state.timeFrom}
                          name="timeFrom"
                        />
                        <span>Bis:</span>
                        <input
                          type="time"
                          id="timeUntil"
                          onChange={this.onChange}
                          value={this.state.timeUntil}
                          name="timeUntil"
                        />
                      </div>
                    </div>
                    <div>
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="Adresse Zeile 1"
                        type="text"
                        name="address1"
                        value={this.state.address1}
                        onChange={this.onChange}
                        error={this.state.errors.address1}
                      />
                      <div
                        className={
                          styles['trainings-content--text__content--left__fee']
                        }
                      >
                        <span>Honorar pro Trainer*in:</span>
                        <TextFieldGroup
                          className={cx(
                            commonStyles['input'],
                            styles['short-input']
                          )}
                          colorScheme="light"
                          placeholder=""
                          type="number"
                          name="fee"
                          value={this.state.fee}
                          onChange={this.onChange}
                          error={this.state.errors.fee}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        styles['trainings-content--text__content--left__date']
                      }
                    >
                      <Calendar
                        onChange={this.onDateChange}
                        value={new Date(this.state.date)}
                        locale="de-DE"
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
                      name="emailSubject"
                      value={this.state.emailSubject}
                      onChange={this.onChange}
                      error={this.state.errors.emailSubject}
                    />
                    <TextareaFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Beschreibungstext öffentlich (wird per Email verschickt)"
                      type="text"
                      name="pubContent"
                      value={this.state.pubContent}
                      onChange={this.onChange}
                      error={this.state.errors.pubContent}
                    />
                    <TextareaFieldGroup
                      className={cx(commonStyles['input'], styles['private'])}
                      colorScheme="light"
                      placeholder="Beschreibungstext geschützt (wird nur im Adminbereich angezeigt)"
                      type="text"
                      name="privContent"
                      value={this.state.privContent}
                      onChange={this.onChange}
                      error={this.state.errors.privContent}
                    />
                  </div>
                </div>
                <div className={styles['trainings-content--bottom-bar']}>
                  {/* <button
                    className={cx(
                      commonStyles['button'],
                      commonStyles['button--save'],
                      styles['button--save']
                    )}
                    onClick={this.saveContent}
                  >
                    Speichern
                  </button> */}
                  <button
                    className={cx(
                      commonStyles['button'],
                      commonStyles['button--yellow'],
                      styles['button--email']
                    )}
                    onClick={this.sendContentEmail}
                  >
                    E-mail senden
                  </button>
                </div>
                <div className={styles['trainings-content--team-select']}>
                  {/* {this.props.training.trainingTeam && (
                    <TeamSelectGroup
                      optionContent={this.props.training.trainingTeam}
                      defaultValue={this.state.assignedTrainers}
                      name="teamSelect"
                      onSelectChange={this.onSelectChange}
                      placeholder="Trainer*innen zuteilen"
                      lang="de"
                    />
                  )} */}
                  {users && (
                    <div>
                      <table
                        className={cx(
                          globalStyles['table'],
                          globalStyles['table-sm']
                        )}
                      >
                        {users
                          .filter(user => user.securityLevel === 16)
                          .map((user, index) => (
                            <tr key={index}>
                              <td>{user.name}</td>
                              <td>
                                <input
                                  type="radio"
                                  name="assignedTrainer1"
                                  value={user._id}
                                  onClick={this.onAssignChange}
                                  checked={
                                    this.state.assignedTrainer1 &&
                                    this.state.assignedTrainer1.id === user._id
                                  }
                                  disabled={
                                    this.state.assignedTrainer2 &&
                                    this.state.assignedTrainer2.id === user._id
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="radio"
                                  name="assignedTrainer2"
                                  value={user._id}
                                  onClick={this.onAssignChange}
                                  checked={
                                    this.state.assignedTrainer2 &&
                                    this.state.assignedTrainer2.id === user._id
                                  }
                                  disabled={
                                    this.state.assignedTrainer1 &&
                                    this.state.assignedTrainer1.id === user._id
                                  }
                                />
                              </td>
                            </tr>
                          ))}
                      </table>
                    </div>
                  )}
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
  auth: state.auth,
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
    getAllUsers,
    getImagesByCategory
  }
)(TrainingContent)
