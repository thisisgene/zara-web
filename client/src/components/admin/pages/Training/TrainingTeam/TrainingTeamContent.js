import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { jahresberichtTags } from '../jahresberichte_data'

import TextFieldGroup from '../../../common/TextFieldGroup'
import Register from '../../../auth/Register'

import { confirmAlert } from 'react-confirm-alert'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../actions/adminActions'

import { updateUserPassword } from '../../../../../actions/authActions'

import { getImagesByCategory } from '../../../../../actions/imageActions'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import commonStyles from '../../../common/Common.module.sass'
import styles from './TrainingTeamContent.module.sass'

class TrainingTeamContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      teamId: props.match.params.teamId,
      category: 'trainingTeam',
      tag: 'trainingTeam',
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }

  componentDidMount() {
    this.props.match.params.teamId !== 'neu' &&
      this.props.getById(this.props.match.params.teamId, 'trainingTeam')
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.training.trainingTeamMember) {
        if (prevProps.match.params.teamId === 'neu') {
          this.setState({
            teamId: this.props.training.trainingTeamMember._id
          })
          this.props.getAll('trainingTeam')
          this.props.history.push(
            `/admin/training/team/${this.props.training.trainingTeamMember._id}`
          )
        }
        if (prevProps.training != this.props.training) {
          const item = this.props.training.trainingTeamMember
          this.props.getImagesByCategory(item.tag)
          this.setState({
            blankItem: false,
            isOnline: item.isOnline,
            teamId: item._id,
            handle: item.handle,
            tag: item.tag && item.tag,
            name: item.name && item.name,
            email: item.email ? item.email : '',
            password: '',
            password2: ''
          })
        }
      }
      if (prevProps.match.params.teamId !== this.props.match.params.teamId) {
        if (this.props.match.params.teamId === 'neu') {
          console.log('reset')
          this.props.clearSingle('trainingTeam')
          this.setState({
            blankItem: true,
            isOnline: false,
            teamId: this.props.match.params.teamId,
            handle: '',
            category: 'trainingTeam',
            tag: 'trainingTeam',

            email: '',
            password: '',
            password2: ''
          })
        } else {
          this.props.getById(this.props.match.params.teamId, 'trainingTeam')
        }
      }
    }
  }

  toggleOnline = () => {
    this.props.toggleOnline(
      this.state.teamId,
      'trainingTeam',
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
      if (this.state.teamId !== 'neu') {
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
  deleteTeamMember = () => {
    this.props.deleteById(this.state.teamId, 'trainingTeam')
    this.props.history.push('/admin/training/team/neu')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Eintrag löschen',
      message: 'Wollen Sie diesen Eintrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteTeamMember()
        },
        {
          label: 'Abbrechen'
        }
      ]
    })
  }

  updateContent = () => {
    const saveData = {
      id: this.state.teamId,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    this.props.updateUserPassword(saveData)
  }

  render() {
    return (
      <div className={styles['training-team-wrapper']}>
        {/* <input type="hidden" value="password" /> */}
        <div
          className={cx(styles['training-team-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          {this.state.teamId === 'neu' ? (
            <div className={styles['training-team-content']}>
              <Register category="trainer" />
            </div>
          ) : (
              <div className={styles['training-team-content']}>
                <div className={styles['training-team-content--main']}>
                  {/* <div className={styles['training-team-content--main__category']}>
                <select
                  name="catSelect"
                  value={this.state.tag}
                  onChange={this.onTagSelectChange}
                >
                  {jahresberichtTags &&
                    jahresberichtTags.map(tag => (
                      <option value={tag.name}>{tag.name}</option>
                    ))}
                </select>
              </div> */}

                  <div className={styles['training-team-content--text']}>
                    <div className={styles['training-team-content--text__title']}>
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="Name deutsch"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={this.state.errors.name}
                      />
                    </div>

                    <div className={styles['training-team-content--text__email']}>
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="E-mail Adresse"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={this.state.errors.email}
                      />
                    </div>
                    <div
                      className={styles['training-team-content--text__password']}
                    >
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.errors.password}
                      />
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="password"
                        type="password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={this.state.errors.password2}
                      />
                    </div>
                  </div>
                </div>
                {this.props.auth.user && (
                  <div className={styles['training-team-content--sidebar']}>
                    {/* <div
                    className={
                      styles['training-team-content--sidebar__state-indicator']
                    }
                  >
                    <div
                      className={cx(
                        styles[
                          'training-team-content--sidebar__state-indicator--sphere'
                        ],
                        {
                          [styles['online']]: this.state.isOnline
                        }
                      )}
                    />
                    <div
                      className={
                        styles[
                          'training-team-content--sidebar__state-indicator--text'
                        ]
                      }
                    >
                      {this.state.isOnline ? 'Online' : 'Offline'}
                    </div>
                  </div>
                  <div
                    className={
                      styles['training-team-content--sidebar__section--publish']
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
                  </div> */}
                    <div
                      className={
                        styles['training-team-content--sidebar--buttons']
                      }
                    >
                      <button
                        className={cx(
                          commonStyles['button'],
                          commonStyles['button--save'],
                          styles['button--save']
                        )}
                        onClick={this.updateContent}
                      >
                        Speichern
                    </button>
                    </div>

                    <hr />
                    <div
                      className={
                        styles['training-team-content--sidebar--buttons']
                      }
                    >
                      <button
                        className={cx(
                          commonStyles['button'],
                          commonStyles['button--delete']
                        )}
                        onClick={this.confirmDelete.bind(this, this.deleteNews)}
                      >
                        Beitrag Löschen
                    </button>
                    </div>
                  </div>
                )}
              </div>
            )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  training: state.training,
  media: state.media,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  {
    updateUserPassword,
    getById,
    toggleOnline,
    deleteById,
    clearSingle,
    getAll,
    getImagesByCategory
  }
)(TrainingTeamContent)
