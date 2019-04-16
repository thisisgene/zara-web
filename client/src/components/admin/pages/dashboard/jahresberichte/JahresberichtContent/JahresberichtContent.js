import React, { Component } from 'react'
import { connect } from 'react-redux'

import { jahresberichtTags } from '../jahresberichte_data'

import TextFieldGroup from '../../../../common/TextFieldGroup'
import FileSelectGroup from '../../FileSelectGroup'

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
      tag: 'jahresberichte',
      titleDE: '',
      titleEN: '',

      selectedFilesDE: [],
      selectedFilesEN: [],

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
            `/admin/dashboard/jahresberichte/${
              this.props.jahresberichte.jahresbericht._id
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
            titleDE: item.de.title && item.de.title,
            titleEN: item.en ? item.en.title : '',
            selectedFilesDE: item.files && item.files.de,
            selectedFilesEN: item.files && item.files.en
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
            selectedFilesEN: []
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
  onTagSelectChange = e => {
    this.setState({ tag: e.target.value }, () => {
      if (this.state.jahresberichtId !== 'neu') {
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
      filesEN: this.state.selectedFilesEN
    }
    this.props.saveContent(saveData)
  }

  render() {
    let defaultSelectedDE = []
    let defaultSelectedEN = []

    if (this.state.selectedFilesDE.length > 0) {
      defaultSelectedDE = this.state.selectedFilesDE
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
              {this.props.media && this.props.media.images && (
                <div className={styles['jahresbericht-content--select-box']}>
                  <div
                    className={
                      styles['jahresbericht-content--select-box__container']
                    }
                  >
                    <FileSelectGroup
                      optionContent={this.props.media.images}
                      defaultValue={this.state.selectedFilesDE}
                      name="fileSelectDE"
                      onSelectChange={this.onSelectChange}
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
                      defaultValue={this.state.selectedFilesEN}
                      name="fileSelectEN"
                      onSelectChange={this.onSelectChange}
                      lang="EN"
                    />
                  </div>
                </div>
              )}
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
