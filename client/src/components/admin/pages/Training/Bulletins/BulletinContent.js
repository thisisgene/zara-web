import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calendar from 'react-calendar'

import Select from 'react-select'

import RichTextEditor from 'react-rte-link-extended'
import TextFieldGroup from '../../../common/TextFieldGroup'
import TextareaFieldGroup from '../../../common/TextareaFieldGroup'
import ContentImageList from '../../dashboard/ContentImageList'

import { confirmAlert } from 'react-confirm-alert'
import {
  toolbarConfig,
  toolbarImgConfig,
} from '../../dashboard/news/NewsContent/newsContentData'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle,
} from '../../../../../actions/adminActions'
import { getImagesByCategory } from '../../../../../actions/imageActions'
import { getAllUsers } from '../../../../../actions/authActions'

import { trainingBoxData } from '../../../../user/pages/Training/training_data'

import cx from 'classnames'
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import globalStyles from '../../../common/Bootstrap.module.css'
import commonStyles from '../../../common/Common.module.sass'
import styles from './BulletinContent.module.sass'

class BulletinContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingCategories: trainingBoxData.de.categories,
      trainingCategory: { label: 'Für Schulklassen', value: 'schulklassen' },
      isOnline: false,
      blankItem: true,
      bulletinId: props.match.params.bulletinId,
      handle: '',
      category: 'bullletins',
      tag: '',
      titleDE: '',
      titleEN: '',
      date: new Date(),
      timeFrom: '11:00',
      timeUntil: '17:00',
      peopleMin: 1,
      peopleMax: 8,
      location: '',
      label: {},
      shortDescriptionDE: RichTextEditor.createEmptyValue(),
      shortDescriptionEN: RichTextEditor.createEmptyValue(),
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue(),
      titleImage: '',
      imageId: '',
      imageCategory: '',
      imageListOpen: false,
      errors: {},
    }
  }

  componentDidMount() {
    this.props.match.params.bulletinId !== 'neu' &&
      this.props.getById(this.props.match.params.bulletinId, 'bulletins')
    this.props.getAllUsers()
    this.props.getAll('label')
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.bulletin.bulletin) {
        if (prevProps.match.params.bulletinId === 'neu') {
          this.setState({
            bulletinId: this.props.bulletin.bulletin._id,
          })
          this.props.getAll('bulletins')
          this.props.history.push(
            `/admin/training/bulletins/${this.props.bulletin.bulletin._id}`
          )
        }
        if (prevProps.bulletin != this.props.bulletin) {
          const item = this.props.bulletin.bulletin
          this.props.getImagesByCategory(item.tag)
          this.setState({
            blankItem: false,
            isOnline: item.isOnline,
            bulletinId: item._id,
            handle: item.handle,
            tag: item.tag && item.tag,
            trainingCategory: item.category && item.category,
            titleDE: item.de.title,
            titleEN: item.en.title,
            date: item.date,
            timeFrom: item.timeFrom,
            timeUntil: item.timeUntil,
            peopleMin: item.peopleMin && item.peopleMin,
            peopleMax: item.peopleMax && item.peopleMax,
            location: item.location && item.location,
            label: item.label,
            titleImage: item.titleImage && item.titleImage.originalName,
            imageId: item.titleImage && item.titleImage.imageId,
            imageCategory: item.titleImage && item.titleImage.category,
            shortDescriptionDE: RichTextEditor.createValueFromString(
              item.de.shortDescription,
              'html'
            ),
            shortDescriptionEN:
              item.en &&
              RichTextEditor.createValueFromString(
                item.en.shortDescription,
                'html'
              ),
            descriptionDE: RichTextEditor.createValueFromString(
              item.de.description,
              'html'
            ),
            descriptionEN:
              item.en &&
              RichTextEditor.createValueFromString(item.en.description, 'html'),
          })
        }
      }
      if (
        prevProps.match.params.bulletinId !== this.props.match.params.bulletinId
      ) {
        if (this.props.match.params.bulletinId === 'neu') {
          // RESET!
          this.props.clearSingle('bulletins')
          this.setState({
            isOnline: false,
            blankItem: true,
            bulletinId: this.props.match.params.bulletinId,
            handle: '',
            category: 'bulletins',
            tag: '',
            trainingCategory: {
              label: 'Für Schulklassen',
              value: 'schulklassen',
            },
            titleDE: '',
            titleEN: '',
            date: new Date(),
            timeFrom: '11:00',
            timeUntil: '17:00',
            peopleMin: 1,
            peopleMax: 8,
            location: '',
            label: {},
            shortDescriptionDE: RichTextEditor.createEmptyValue(),
            shortDescriptionEN: RichTextEditor.createEmptyValue(),
            descriptionDE: RichTextEditor.createEmptyValue(),
            descriptionEN: RichTextEditor.createEmptyValue(),
            imageListOpen: false,
            titleImage: '',
            imageId: '',
            imageCategory: '',
            errors: {},
          })
        } else {
          this.props.getById(this.props.match.params.bulletinId, 'bulletins')
        }
      }
    }
  }

  toggleOnline = () => {
    this.props.toggleOnline(
      this.state.bulletinId,
      'bulletins',
      !this.state.isOnline
    )
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onTagSelectChange = e => {
    this.setState({ tag: e.target.value }, () => {
      if (this.state.bulletinId !== 'neu') {
        this.props.getImagesByCategory(this.state.tag)
      }
    })
  }

  onCategorySelectChange = selected => {
    this.setState({ trainingCategory: selected })
  }
  onLabelSelectChange = selected => {
    this.setState({ label: selected })
  }

  onImageOpen = () => {
    this.setState({ imageListOpen: !this.state.imageListOpen })
  }
  updateTitleImage = (originalName, id, category) => {
    this.setState({
      titleImage: originalName,
      imageId: id,
      imageCategory: category,
      imageListOpen: false,
    })
  }
  closeImageList = () => {
    this.setState({
      imageListOpen: false,
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
  onSelectChange = (lang, selected) => {
    this.setState({ selectedFiles: selected })
  }
  onDateChange = date => {
    this.setState({ date })
  }

  onCheckChange = e => {
    this.setState({
      [e.target.name]: e.target.checked,
    })
  }

  deleteBulletin = () => {
    this.props.deleteById(this.state.bulletinId, 'bulletins')
    this.props.history.push('/admin/training/bulletins/neu')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Eintrag löschen',
      message: 'Wollen Sie diesen Eintrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteBulletin(),
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
      category: 'bulletins',
      trainingCategory: this.state.trainingCategory,
      tag: this.state.tag,
      id: this.state.bulletinId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      date: this.state.date,
      timeFrom: this.state.timeFrom,
      timeUntil: this.state.timeUntil,
      peopleMin: this.state.peopleMin,
      peopleMax: this.state.peopleMax,
      location: this.state.location,
      label: this.state.label,
      titleImage: this.state.titleImage,
      imageId: this.state.imageId,
      imageCategory: this.state.imageCategory,
      imageSide: 'right',
      imageAlign: 'center',
      size: 'big-image',
      shortDescriptionDE: shortDescDE.toString('html'),
      shortDescriptionEN: shortDescEN.toString('html'),
      descriptionDE: descDE.toString('html'),
      descriptionEN: descEN.toString('html'),
    }
    this.props.saveContent(saveData)
  }

  render() {
    const { users } = this.props.auth
    const emptyLabel = {
      label: '',
      value: '',
    }

    let categoryList = []
    this.state.trainingCategories.map(cat => {
      categoryList.push({
        label: cat.text,
        value: cat.link,
      })
    })
    // categoryList.unshift(emptyLabel)

    let labelList
    if (this.props.label && this.props.label.labels) {
      labelList = this.props.label.labels.filter(label => !label.isDeleted)
      labelList.unshift(emptyLabel)
    }
    return (
      <div className={styles['bulletins-wrapper']}>
        <div
          className={cx(styles['bulletins-content-container'], {
            [styles['blank-item']]: this.state.blankItem,
          })}
        >
          <div className={styles['bulletins-content']}>
            <div className={styles['bulletins-content--main']}>
              <div className={styles['bulletins-content--text']}>
                <div className={styles['bulletins-content--text__content']}>
                  <div
                    className={cx(
                      styles['bulletins-content--text__content--top'],
                      styles['content-box']
                    )}
                  >
                    <div
                      className={cx(
                        styles['bulletins-content--text__content--top__side']
                      )}
                    >
                      <div
                        className={
                          styles[
                            'bulletins-content--text__content--top__labels'
                          ]
                        }
                      >
                        <Select
                          // isMulti
                          value={this.state.trainingCategory}
                          name={'category'}
                          options={categoryList}
                          className={styles['label-select']}
                          placeholder={'Kategorie auswählen'}
                          onChange={this.onCategorySelectChange}
                        />
                      </div>
                      <div
                        className={
                          styles[
                            'bulletins-content--text__content--top__labels'
                          ]
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
                          styles['bulletins-content--text__content--top__time']
                        }
                      >
                        <div
                          className={
                            styles[
                              'bulletins-content--text__content--top__time--side'
                            ]
                          }
                        >
                          <span>
                            <i className="fas fa-users" />
                          </span>
                          <input
                            className={commonStyles['input']}
                            type="number"
                            id="peopleMin"
                            onChange={this.onChange}
                            value={this.state.peopleMin}
                            name="peopleMin"
                          />
                          <span> - </span>
                          <input
                            className={commonStyles['input']}
                            type="number"
                            id="peopleMax"
                            onChange={this.onChange}
                            value={this.state.peopleMax}
                            name="peopleMax"
                          />
                        </div>
                        <div
                          className={
                            styles[
                              'bulletins-content--text__content--top__time--side'
                            ]
                          }
                        >
                          <span>
                            <i className="fas fa-clock" />
                          </span>
                          <input
                            className={commonStyles['input']}
                            type="time"
                            id="timeFrom"
                            onChange={this.onChange}
                            value={this.state.timeFrom}
                            name="timeFrom"
                          />
                          <span>Bis:</span>
                          <input
                            className={commonStyles['input']}
                            type="time"
                            id="timeUntil"
                            onChange={this.onChange}
                            value={this.state.timeUntil}
                            name="timeUntil"
                          />
                        </div>
                      </div>
                      <div></div>
                      <div
                        className={
                          styles[
                            'bulletins-content--text__content--top__location'
                          ]
                        }
                      >
                        <span>
                          <i className="fas fa-map-marker" />
                        </span>
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
                      </div>
                    </div>
                    <div
                      className={cx(
                        styles['bulletins-content--text__content--top__side']
                      )}
                    >
                      <div
                        className={
                          styles['bulletins-content--text__content--top__date']
                        }
                      >
                        <Calendar
                          onChange={this.onDateChange}
                          value={new Date(this.state.date)}
                          locale="de-DE"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={styles['bulletins-content--text__headline']}>
                  <div>Deutsch</div>
                  <div>Englisch</div>
                </div>

                <div className={styles['bulletins-content--text__title']}>
                  <TextFieldGroup
                    className={commonStyles['input']}
                    colorScheme="light"
                    placeholder="Titel deutsch"
                    type="text"
                    name="titleDE"
                    value={this.state.titleDE}
                    onChange={this.onChange}
                    error={this.state.errors.title}
                  />
                  <TextFieldGroup
                    className={commonStyles['input']}
                    colorScheme="light"
                    placeholder="Titel englisch"
                    type="text"
                    name="titleEN"
                    value={this.state.titleEN}
                    onChange={this.onChange}
                    error={this.state.errors.title}
                  />
                </div>
                <div
                  className={cx(styles['bulletins-content--text__description'])}
                >
                  <div
                    className={cx(
                      styles['bulletins-content--text__description--side']
                    )}
                  >
                    <div
                      className={
                        styles[
                          'bulletins-content--text__description--side__short'
                        ]
                      }
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
                    </div>
                    <RichTextEditor
                      placeholder="Beschreibung deutsch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarImgConfig}
                      value={this.state.descriptionDE}
                      onChange={this.onDescriptionChange.bind(this, 'de')}
                    />
                  </div>
                  <div
                    className={cx(
                      styles['bulletins-content--text__description--side']
                    )}
                  >
                    <div
                      className={
                        styles[
                          'bulletins-content--text__description--side__short'
                        ]
                      }
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
                    </div>
                    <RichTextEditor
                      placeholder="Beschreibung englisch"
                      className={styles['html-editor']}
                      toolbarConfig={toolbarImgConfig}
                      value={this.state.descriptionEN}
                      onChange={this.onDescriptionChange.bind(this, 'en')}
                    />
                  </div>
                </div>
              </div>
            </div>
            {this.props.bulletin.bulletin && (
              <div className={styles['bulletins-content--sidebar']}>
                <div
                  className={
                    styles['bulletins-content--sidebar__state-indicator']
                  }
                >
                  <div
                    className={cx(
                      styles[
                        'bulletins-content--sidebar__state-indicator--sphere'
                      ],
                      {
                        [styles['online']]: this.state.isOnline,
                      }
                    )}
                  />
                  <div
                    className={
                      styles[
                        'bulletins-content--sidebar__state-indicator--text'
                      ]
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div
                  className={
                    styles['bulletins-content--sidebar__section--publish']
                  }
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
                <div className={styles['bulletins-content--sidebar--buttons']}>
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
                  className={styles['title-image']}
                  onClick={this.onImageOpen}
                >
                  <div className={cx(styles['title-image--avatar'])}>
                    {this.state.titleImage ? (
                      <img
                        src={`/assets/media/${this.state.imageCategory}/${this.state.titleImage}`}
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
                      category={'training'}
                    />
                  )}
                </div>
                <hr />
                <div className={styles['bulletins-content--sidebar--buttons']}>
                  {this.props.bulletin.bulletin && (
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
          {this.props.match.params.bulletinId === 'neu' && (
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
  bulletin: state.bulletin,
  auth: state.auth,
  media: state.media,
  label: state.label,
  errors: state.errors,
})

export default connect(mapStateToProps, {
  saveContent,
  getById,
  toggleOnline,
  deleteById,
  clearSingle,
  getAll,
  getAllUsers,
  getImagesByCategory,
})(BulletinContent)
