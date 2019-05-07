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
      handle: '',
      category: 'trainingTeam',
      tag: 'trainingTeam',
      titleDE: '',
      titleEN: '',
      email: '',
      selectedFilesDE: [],
      selectedFilesEN: [],

      errors: {},
      imageListOpen: false
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
            titleDE: item.de.title && item.de.title,
            titleEN: item.en ? item.en.title : '',
            email: item.email ? item.email : '',
            selectedFilesDE: item.files && item.files.de,
            selectedFilesEN: item.files && item.files.en
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
            titleDE: '',
            titleEN: '',
            email: '',
            selectedFilesDE: [],
            selectedFilesEN: []
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

  saveContent = () => {
    const saveData = {
      category: 'trainingTeam',
      tag: this.state.tag,
      id: this.state.teamId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      email: this.state.email
    }
    console.log(saveData)
    this.props.saveContent(saveData)
  }

  render() {
    return (
      <div className={styles['training-team-wrapper']}>
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
                      <option value={tag.name}>{tag.de.title}</option>
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
                      name="titleDE"
                      value={this.state.titleDE}
                      onChange={this.onChange}
                      error={this.state.errors.titleDE}
                    />
                  </div>
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
              {this.props.training.trainingTeam && (
                <div className={styles['training-team-content--sidebar']}>
                  <div
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
                  </div>
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
                      onClick={this.saveContent}
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
                    {this.props.training.trainingTeam && (
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
          )}
        </div>
        <div>
          {this.props.match.params.teamId === 'neu' && (
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
)(TrainingTeamContent)
