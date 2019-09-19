import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextFieldGroup from '../../../../common/TextFieldGroup'

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../../actions/adminActions'

import { confirmAlert } from 'react-confirm-alert'

import ContentImageList from '../../ContentImageList'

import cx from 'classnames'

import commonStyles from '../../../../common/Common.module.sass'
import styles from './CarouselContent.module.sass'

class CarouselContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      carouselId: props.match.params.carouselId,
      link: '',
      linkIsExternal: false,
      title: '',
      titleImage: '',
      imageId: '',
      imageCategory: '',
      isCategoryIntro: '',
      errors: {},
      imageListOpen: false
    }
  }

  componentDidMount() {
    this.props.match.params.carouselId !== 'neu' &&
      this.props.getById(this.props.match.params.carouselId, 'carousel')
  }

  componentWillUnmount() {
    this.props.clearSingle('carousel')
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.carousel.carousel) {
        if (prevProps.match.params.carouselId === 'neu') {
          this.setState({
            carouselId: this.props.carousel.carousel._id
          })
          this.props.getAll('carousel')
          this.props.history.push(
            `/admin/dashboard/carousel/${this.props.carousel.carousel._id}`
          )
        }
        const item = this.props.carousel.carousel
        this.setState({
          blankItem: false,

          carouselId: item._id,
          isOnline: item.isOnline,
          link: item.mainLink,
          linkIsExternal: item.linkIsExternal,
          title: item.title && item.title,

          titleImage: item.titleImage && item.titleImage.originalName,
          imageId: item.titleImage && item.titleImage.imageId,
          imageCategory: item.titleImage && item.titleImage.category,
          isCategoryIntro: item.isCategoryIntro && item.isCategoryIntro
        })
      }
      if (
        prevProps.match.params.carouselId !== this.props.match.params.carouselId
      ) {
        if (this.props.match.params.carouselId === 'neu') {
          console.log('reset')
          this.props.clearSingle('carousel')
          this.setState({
            blankItem: true,
            carouselId: this.props.match.params.carouselId,
            isOnline: false,
            link: '',
            linkIsExternal: false,
            title: '',
            titleImage: '',
            imageId: '',
            imageCategory: '',
            isCategoryIntro: ''
          })
        } else {
          this.props.getById(this.props.match.params.carouselId, 'carousel')
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

  onCheckChange = e => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  onImageOpen = () => {
    this.setState({ imageListOpen: !this.state.imageListOpen })
  }

  saveContent = () => {
    const saveData = {
      category: 'carousel',
      id: this.state.carouselId,
      mainLink: this.state.link,
      linkIsExternal: this.state.linkIsExternal,
      title: this.state.title,
      titleImage: this.state.titleImage,
      imageId: this.state.imageId,
      imageCategory: this.state.imageCategory,
      isCategoryIntro: this.state.isCategoryIntro
    }
    console.log('save Data: ', saveData)
    this.props.saveContent(saveData)
    // console.log(saveData)
  }

  toggleOnline = () => {
    this.props.toggleOnline(
      this.state.carouselId,
      'carousel',
      !this.state.isOnline
    )
  }

  deleteCarousel = () => {
    this.props.deleteById(this.state.carouselId, 'carousel')
    this.props.history.push('/admin/dashboard/carousel/neu')
  }

  confirmDelete = callback => {
    confirmAlert({
      title: 'Beitrag löschen',
      message: 'Wollen Sie diesen Beitrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteCarousel()
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

  render() {
    return (
      <div className={styles['carousel-wrapper']}>
        <div
          className={cx(styles['carousel-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['carousel-content-main']}>
            <div className={styles['carousel-content--title']}>
              <p>Titel</p>
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
          </div>
          <div>
            {this.props.carousel.carousel && (
              <div className={styles['carousel-content--sidebar']}>
                <div className={styles['sidebar-left']}>
                  <div
                    className={
                      styles['carousel-content--sidebar__section--options']
                    }
                  >
                    <p>Link</p>
                    <TextFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Link"
                      type="text"
                      name="link"
                      value={this.state.link}
                      onChange={this.onChange}
                      error={this.state.errors.link}
                    />
                    <input
                      type="checkbox"
                      name="linkIsExternal"
                      id="linkIsExternal"
                      checked={this.state.isCategoryIntro}
                      onClick={this.onCheckChange}
                    />{' '}
                    <label htmlFor="linkIsExternal">Externer Link</label>
                  </div>
                  <div className={commonStyles['info-text']}>
                    <b>Interner Link:</b> Alles nach <code>zara.or.at/de/</code>{' '}
                    zb:{' '}
                    <i>
                      <code>wissen/aktuelles/...</code>
                    </i>
                    <br />
                    <b>Externer Link:</b> kompletter Link, inkusive{' '}
                    <code>http://</code>
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
                        carouselImageId={this.state.imageId}
                        category={'carousel'}
                      />
                    )}
                  </div>
                </div>
                <div className={styles['sidebar-right']}>
                  <div
                    className={
                      styles['carousel-content--sidebar__state-indicator']
                    }
                  >
                    <div
                      className={cx(
                        styles[
                          'carousel-content--sidebar__state-indicator--sphere'
                        ],
                        {
                          [styles['online']]: this.state.isOnline
                        }
                      )}
                    />
                    <div
                      className={
                        styles[
                          'carousel-content--sidebar__state-indicator--text'
                        ]
                      }
                    >
                      {this.state.isOnline ? 'Online' : 'Offline'}
                    </div>
                  </div>
                  <div className={styles['carousel-content--sidebar--buttons']}>
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
                  <div className={styles['carousel-content--sidebar__section']}>
                    <div
                      className={
                        styles['carousel-content--sidebar__section--publish']
                      }
                    >
                      <button
                        className={cx(
                          commonStyles['button'],
                          {
                            [commonStyles['button--update']]: !this.state
                              .isOnline
                          },
                          {
                            [commonStyles['button--offline']]: this.state
                              .isOnline
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
                  <div className={styles['carousel-content--sidebar--buttons']}>
                    {this.props.carousel.carousel && (
                      <button
                        className={cx(
                          commonStyles['button'],
                          commonStyles['button--delete']
                        )}
                        onClick={this.confirmDelete.bind(
                          this,
                          this.deleteCarousel
                        )}
                      >
                        Beitrag Löschen
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          {this.props.match.params.carouselId === 'neu' && (
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
  carousel: state.carousel,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { saveContent, getById, toggleOnline, deleteById, clearSingle, getAll }
)(CarouselContent)
