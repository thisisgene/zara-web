import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from 'react-calendar'

import Select from 'react-select'

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
  clearSingle,
  sendInitialTrainingEmail
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
      timeFrom: '11:00',
      timeUntil: '17:00',
      location: '',
      address1: '',
      fee: 0,
      label: {},
      interestedTrainers: [],
      assignedTrainer1: {},
      assignedTrainer2: {},
      emailSubject: '',
      pubContent: '',
      privContent: '',
      emailSent: false,
      addMessage: '',
      addMessageTo: 'chosen',
      includeOriginalMessage: false,
      errors: {},
      imageListOpen: false
    }
  }

  componentDidMount() {
    this.props.match.params.trainingId !== 'neu' &&
      this.props.getById(this.props.match.params.trainingId, 'trainings')
    // this.props.getAll('trainingTeam')
    this.props.getAllUsers()
    this.props.getAll('label')
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
            fee: item.fee ? item.fee : 0,
            label: item.label,
            interestedTrainers: item.interestedTrainers,
            assignedTrainer1: item.assignedTrainer1,
            assignedTrainer2: item.assignedTrainer2,
            emailSubject: item.emailSubject,
            pubContent: item.pubContent,
            privContent: item.privContent,
            emailSent: item.emailSent
          })
        }
      }
      if (
        prevProps.match.params.trainingId !== this.props.match.params.trainingId
      ) {
        if (this.props.match.params.trainingId === 'neu') {
          // RESET!
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
            timeFrom: '11:00',
            timeUntil: '17:00',
            location: '',
            address1: '',
            fee: 0,
            label: {},
            interestedTrainers: [],
            assignedTrainer1: {},
            assignedTrainer2: {},
            emailSubject: '',
            pubContent: '',
            privContent: '',
            emailSent: false,
            addMessage: '',
            addMessageTo: 'chosen',
            includeOriginalMessage: false,
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

  onLabelSelectChange = selected => {
    console.log(selected)
    this.setState({ label: selected }, () => {
      console.log('LABEL: ', this.state.label)
    })
  }

  onAssignChange = (state, id, name) => {
    this.setState({ [state]: { id: id, name: name } })
  }

  onAddMessageToChange = e => {
    this.setState(
      {
        addMessageTo: e.target.value
      },
      () => console.log(this.state.addMessageTo)
    )
  }

  onSelectChange = (lang, selected) => {
    console.log(lang, selected)

    this.setState({ selectedFiles: selected })
  }
  onDateChange = date => {
    console.log(date)
    this.setState({ date })
  }

  onCheckChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    })
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

  sendContentEmail = () => {
    const emailData = {
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
      label: this.state.label,
      assignedTrainer1: this.state.assignedTrainer1,
      assignedTrainer2: this.state.assignedTrainer2,
      emailSubject: this.state.emailSubject,
      pubContent: this.state.pubContent,
      includeOriginalMessage: true,
      recipients: 'all'
    }
    this.props.sendInitialTrainingEmail(emailData)
  }
  sendAddMessageEmail = () => {
    const emailData = {
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
      label: this.state.label,
      assignedTrainer1: this.state.assignedTrainer1,
      assignedTrainer2: this.state.assignedTrainer2,
      emailSubject: this.state.emailSubject,
      pubContent: this.state.pubContent,
      addMessage: this.state.addMessage,
      recipients: this.state.addMessageTo,

      includeOriginalMessage: this.state.includeOriginalMessage
    }
    this.props.sendInitialTrainingEmail(emailData)
  }
  sendTrainerConfirmation = () => {
    const confirmMessage = `<p>
    Liebe Trainer*innen,
    <br /><br />
    vielen Dank für Eure Rückmeldungen. Eingeteilt für den Workshop wurden 
    <br /><br />
    <b>${this.state.assignedTrainer1.name}</b> und <b>${
      this.state.assignedTrainer2.name
    }</b>
    <br /> <br />
    Mit besten Grüßen,
    Bianca & Alice
    </p>`
    const emailData = {
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
      label: this.state.label,
      assignedTrainer1: this.state.assignedTrainer1,
      assignedTrainer2: this.state.assignedTrainer2,
      emailSubject: `Trainer*innen für ${this.state.title}`,
      pubContent: this.state.pubContent,
      addMessage: confirmMessage,
      recipients: 'interestedAndChosen',
      includeOriginalMessage: true
    }
    this.props.sendInitialTrainingEmail(emailData)
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
      label: this.state.label,
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
    const emptyLabel = {
      label: '',
      value: ''
    }
    let labelList
    if (this.props.label && this.props.label.labels) {
      labelList = this.props.label.labels.filter(label => !label.isDeleted)
      labelList.unshift(emptyLabel)
    }
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
                      {this.props.label && this.props.label.labels && (
                        <Select
                          // isMulti
                          value={this.state.label}
                          name={'label'}
                          options={labelList}
                          className={styles['label-select']}
                          placeholder={'Label auswählen'}
                          onChange={this.onLabelSelectChange}
                        />
                      )}
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
                {this.state.trainingId !== 'neu' && (
                  <div className={styles['trainings-content--bottom-bar']}>
                    <div>
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
                        {this.state.emailSent
                          ? 'E-mail erneut an ALLE senden'
                          : 'E-mail senden'}
                      </button>
                    </div>

                    <div>
                      {users && (
                        <div
                          className={styles['trainings-content--team-select']}
                        >
                          <table
                            className={cx(
                              globalStyles['table'],
                              globalStyles['table-sm'],
                              styles['user-table']
                            )}
                          >
                            <thead>
                              <tr>
                                <th />
                                <th>interessiert</th>
                                <th>zugeteilt 1</th>
                                <th>zugeteilt 2</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users
                                .filter(user => user.securityLevel === 16)
                                .map((user, index) => (
                                  <tr key={index}>
                                    <td>{user.name}</td>
                                    <td
                                      className={cx(styles['td-interest'], {
                                        [styles['interested']]:
                                          this.state.interestedTrainers &&
                                          this.state.interestedTrainers.includes(
                                            user._id
                                          )
                                      })}
                                    >
                                      <img className={'fas fa-fire'} />
                                    </td>
                                    <td>
                                      <input
                                        type="radio"
                                        id={`at1${user._id}`}
                                        name="assignedTrainer1"
                                        value={user._id}
                                        onClick={this.onAssignChange.bind(
                                          this,
                                          'assignedTrainer1',
                                          user._id,
                                          user.name
                                        )}
                                        checked={
                                          this.state.assignedTrainer1 &&
                                          this.state.assignedTrainer1.id ===
                                            user._id
                                        }
                                        disabled={
                                          this.state.assignedTrainer2 &&
                                          this.state.assignedTrainer2.id ===
                                            user._id
                                        }
                                      />
                                      <label htmlFor={`at1${user._id}`}>
                                        <i className={'fa fa-user'} />
                                      </label>
                                    </td>
                                    <td>
                                      <input
                                        type="radio"
                                        id={`at2${user._id}`}
                                        name="assignedTrainer2"
                                        value={user._id}
                                        onClick={this.onAssignChange.bind(
                                          this,
                                          'assignedTrainer2',
                                          user._id,
                                          user.name
                                        )}
                                        checked={
                                          this.state.assignedTrainer2 &&
                                          this.state.assignedTrainer2.id ===
                                            user._id
                                        }
                                        disabled={
                                          this.state.assignedTrainer1 &&
                                          this.state.assignedTrainer1.id ===
                                            user._id
                                        }
                                      />
                                      <label htmlFor={`at2${user._id}`}>
                                        <i className={'fa fa-user'} />
                                      </label>
                                    </td>
                                  </tr>
                                ))}
                              <tr>
                                <td />
                                <td />
                                <td>
                                  <input
                                    type="radio"
                                    id="at1none"
                                    name="assignedTrainer1"
                                    onClick={this.onAssignChange.bind(
                                      this,
                                      'assignedTrainer1',
                                      'none',
                                      ''
                                    )}
                                    checked={
                                      this.state.assignedTrainer1 &&
                                      this.state.assignedTrainer1.id === 'none'
                                    }
                                  />
                                  <label htmlFor={`at1none`}>
                                    <i className={'fa fa-user-slash'} />
                                  </label>
                                </td>
                                <td>
                                  <input
                                    type="radio"
                                    id="at2none"
                                    name="assignedTrainer2"
                                    onClick={this.onAssignChange.bind(
                                      this,
                                      'assignedTrainer2',
                                      'none',
                                      ''
                                    )}
                                    checked={
                                      this.state.assignedTrainer2 &&
                                      this.state.assignedTrainer2.id === 'none'
                                    }
                                  />
                                  <label htmlFor={`at2none`}>
                                    <i className={'fa fa-user-slash'} />
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <div className={styles['confirm-button']}>
                            <button
                              disabled={
                                this.props.training.training
                                  .assignedTrainer1 !==
                                  this.state.assignedTrainer1 ||
                                this.props.training.training
                                  .assignedTrainer2 !==
                                  this.state.assignedTrainer2 ||
                                this.state.assignedTrainer1 === null ||
                                this.state.assignedTrainer2 === null ||
                                this.state.assignedTrainer1.id === 'none' ||
                                this.state.assignedTrainer2.id === 'none' ||
                                !this.state.assignedTrainer1.id ||
                                !this.state.assignedTrainer2.id
                              }
                              onClick={this.sendTrainerConfirmation}
                            >
                              Bestätigung senden
                            </button>
                            <div>
                              <p>
                                {!(
                                  this.props.training.training
                                    .assignedTrainer1 ===
                                    this.state.assignedTrainer1 &&
                                  this.props.training.training
                                    .assignedTrainer2 ===
                                    this.state.assignedTrainer2
                                ) &&
                                  'Änderungen müssen zuerst gespeichert werden!'}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        styles['trainings-content--additional-message']
                      }
                    >
                      <TextareaFieldGroup
                        className={cx(commonStyles['input'], styles['private'])}
                        colorScheme="light"
                        placeholder="Zusätzliche Nachricht"
                        type="text"
                        name="addMessage"
                        value={this.state.addMessage}
                        onChange={this.onChange}
                        error={this.state.errors.addMessage}
                      />
                      <div>
                        <div>An: </div>
                        <input
                          type="radio"
                          id={`opt_chosen`}
                          name="addMessageTo"
                          value={'chosen'}
                          onClick={this.onAddMessageToChange}
                          checked={this.state.addMessageTo === 'chosen'}
                        />{' '}
                        <label htmlFor="opt_chosen">Zugeteilte</label>
                        <input
                          type="radio"
                          id={`opt_interested`}
                          name="addMessageTo"
                          value={'interested'}
                          onClick={this.onAddMessageToChange}
                          checked={this.state.addMessageTo === 'interested'}
                        />{' '}
                        <label htmlFor="opt_interested">Interessierte</label>
                        <input
                          type="radio"
                          id={`opt_all`}
                          name="addMessageTo"
                          value={'all'}
                          onClick={this.onAddMessageToChange}
                          checked={this.state.addMessageTo === 'all'}
                        />{' '}
                        <label htmlFor="opt_all">Alle</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="includeOriginalMessage"
                          name="includeOriginalMessage"
                          value={'includeOriginalMessage'}
                          onClick={this.onCheckChange}
                          checked={this.state.includeOriginalMessage}
                        />{' '}
                        <label htmlFor="includeOriginalMessage">
                          Original Nachricht mitsenden
                        </label>
                      </div>
                      <button
                        className={cx(
                          commonStyles['button'],
                          commonStyles['button--yellow'],
                          styles['button--email']
                        )}
                        onClick={this.sendAddMessageEmail}
                      >
                        E-mail senden
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
  label: state.label,
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
    getImagesByCategory,
    sendInitialTrainingEmail
  }
)(TrainingContent)
