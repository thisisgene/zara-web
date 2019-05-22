import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

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
import { teamTags, teamSubTags } from '../team_data'

import RichTextEditor from 'react-rte'
import { confirmAlert } from 'react-confirm-alert'

import ContentImageList from '../../ContentImageList'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import '../../news/NewsContent/rte.sass'
import commonStyles from '../../../../common/Common.module.sass'
import styles from './TeamContent.module.sass'

class TeamContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      teamId: props.match.params.teamId,
      handle: '',
      category: 'zara',
      subCatecory: 'gok',
      date: moment(new Date()).format('YYYY-MM-DD'),
      titleDE: '',
      titleEN: '',
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue(),
      titleImage: '',
      imageId: '',
      imageCategory: '',
      isCategoryIntro: '',
      errors: {},
      imageListOpen: false
    }
  }

  componentDidMount() {
    this.props.match.params.teamId !== 'neu' &&
      this.props.getById(this.props.match.params.teamId, 'team')
  }

  componentWillUnmount() {
    this.props.clearSingle('team')
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.team.teamMember) {
        if (prevProps.match.params.teamId === 'neu') {
          this.setState({
            teamId: this.props.team.teamMember._id
          })
          this.props.getAll('team')
          this.props.history.push(
            `/admin/dashboard/team/${this.props.team.teamMember._id}`
          )
        }
        const item = this.props.team.teamMember
        this.setState({
          blankItem: false,

          teamId: item._id,
          handle: item.handle,
          isOnline: item.isOnline,
          category: item.tag,
          subCategory: item.subCategory ? item.subCategory : '',
          date: moment(item.date).format('YYYY-MM-DD'),
          titleDE: item.de.title && item.de.title,
          titleEN: item.en && item.en.title && item.en.title,

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
          isCategoryIntro: item.isCategoryIntro && item.isCategoryIntro
        })
      }
      if (prevProps.match.params.teamId !== this.props.match.params.teamId) {
        if (this.props.match.params.teamId === 'neu') {
          console.log('reset')
          this.props.clearSingle('team')
          this.setState({
            blankItem: true,
            teamId: this.props.match.params.teamId,
            handle: '',
            isOnline: false,
            category: 'zara',
            subCatecory: '',
            date: moment(new Date()).format('YYYY-MM-DD'),
            titleDE: '',
            titleEN: '',
            descriptionDE: RichTextEditor.createEmptyValue(),
            descriptionEN: RichTextEditor.createEmptyValue(),
            titleImage: '',
            imageId: '',
            imageCategory: '',
            isCategoryIntro: ''
          })
        } else {
          this.props.getById(this.props.match.params.teamId, 'team')
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
  onSubSelectChange = e => {
    this.setState({ subCategory: e.target.value })
  }

  onDateChange = e => {
    console.log(e.target.value)
    this.setState({ date: e.target.value })
  }

  onDescriptionChange = (lang, value) => {
    lang === 'de'
      ? this.setState({ descriptionDE: value })
      : this.setState({ descriptionEN: value })
  }

  onCheckChange = e => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  onImageOpen = () => {
    this.setState({ imageListOpen: !this.state.imageListOpen })
  }

  saveContent = () => {
    console.log(this.state.descriptionDE.toString('html'))
    const descDE = this.state.descriptionDE
    const descEN = this.state.descriptionEN
    const saveData = {
      category: 'team',
      tag: this.state.category,
      subCategory: this.state.subCategory,
      date: this.state.date,
      id: this.state.teamId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      descriptionDE: descDE.toString('html'),
      descriptionEN: descEN.toString('html'),
      titleImage: this.state.titleImage,
      imageId: this.state.imageId,
      imageCategory: this.state.imageCategory,
      isCategoryIntro: this.state.isCategoryIntro
    }
    this.props.saveContent(saveData)
    // console.log(saveData)
  }

  toggleOnline = () => {
    this.props.toggleOnline(this.state.teamId, 'team', !this.state.isOnline)
  }

  deleteTeam = () => {
    this.props.deleteById(this.state.teamId, 'team')
    this.props.history.push('/admin/dashboard/team/neu')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Beitrag löschen',
      message: 'Wollen Sie diesen Beitrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteTeam()
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
      <div className={styles['team-wrapper']}>
        <div
          className={cx(styles['team-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['team-content-main']}>
            <div className={styles['team-utilities']}>
              <div className={styles['team-utilities__category']}>
                <select
                  name="catSelect"
                  value={this.state.category}
                  onChange={this.onSelectChange}
                >
                  {teamTags &&
                    teamTags.map(tag => (
                      <option value={tag.name}>{tag.de.title}</option>
                    ))}
                </select>
              </div>
              <div className={styles['team-utilities__category']}>
                {this.state.category === 'zara' && (
                  <select
                    name="catSubSelect"
                    value={this.state.subCategory}
                    onChange={this.onSubSelectChange}
                  >
                    {teamSubTags &&
                      teamSubTags.map(tag => (
                        <option value={tag.name}>
                          {tag.de.shortTitle ? tag.de.shortTitle : tag.de.title}
                        </option>
                      ))}
                  </select>
                )}
              </div>
            </div>
            <div className={styles['team-content']}>
              <div className={styles['team-content--text']}>
                <div className={styles['team-content--text--box']}>
                  <div className={styles['team-content--text--box__title']}>
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
                    {/* {this.state.teamId === 'neu'
                  ? 'Neuer Beitrag'
                  : this.state.titleDE} */}
                  </div>

                  <div
                    className={styles['team-content--text--box__description']}
                  >
                    <RichTextEditor
                      handleReturn={this.swapSoftNewLineBehavior}
                      placeholder="Beschreibung deutsch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarExtConfig}
                      value={this.state.descriptionDE}
                      onChange={this.onDescriptionChange.bind(this, 'de')}
                    />
                  </div>
                </div>
                <div className={styles['team-content--text--box']}>
                  <div className={styles['team-content--text--box__title']}>
                    <TextFieldGroup
                      placeholder="Name englisch"
                      className={commonStyles['input']}
                      colorScheme="light"
                      type="text"
                      name="titleEN"
                      value={this.state.titleEN}
                      onChange={this.onChange}
                    />
                  </div>
                  <div
                    className={styles['team-content--text--box__description']}
                  >
                    <RichTextEditor
                      placeholder="Beschreibung englisch"
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
            {this.props.team.teamMember && (
              <div className={styles['team-content--sidebar']}>
                <div
                  className={styles['team-content--sidebar__state-indicator']}
                >
                  <div
                    className={cx(
                      styles['team-content--sidebar__state-indicator--sphere'],
                      {
                        [styles['online']]: this.state.isOnline
                      }
                    )}
                  />
                  <div
                    className={
                      styles['team-content--sidebar__state-indicator--text']
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div className={styles['team-content--sidebar--buttons']}>
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
                <div className={styles['team-content--sidebar__section']}>
                  <div
                    className={
                      styles['team-content--sidebar__section--publish']
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
                <hr />
                <div
                  className={styles['team-content--sidebar__section--options']}
                >
                  <input
                    type="checkbox"
                    name="isCategoryIntro"
                    id="categoryIntro"
                    checked={this.state.isCategoryIntro}
                    onClick={this.onCheckChange}
                  />{' '}
                  <label htmlFor="categoryIntro">Zwischenüberschrift</label>
                </div>

                <hr />
                <div
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
                  {this.state.imageListOpen && (
                    <ContentImageList
                      updateTitleImage={this.updateTitleImage}
                      closeImageList={this.closeImageList}
                      teamImageId={this.state.imageId}
                      category={'team'}
                    />
                  )}
                </div>

                <hr />
                <div className={styles['team-content--sidebar--buttons']}>
                  {this.props.team.teamMember && (
                    <button
                      className={cx(
                        commonStyles['button'],
                        commonStyles['button--delete']
                      )}
                      onClick={this.confirmDelete.bind(this, this.deleteTeam)}
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
  team: state.team,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { saveContent, getById, toggleOnline, deleteById, clearSingle, getAll }
)(TeamContent)
