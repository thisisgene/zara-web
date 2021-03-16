import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'

import {
  saveContent,

} from '../../../../actions/adminActions'

import CopyToClipboard from 'react-copy-to-clipboard'
import TextFieldGroup from '../../common/TextFieldGroup'

import cx from 'classnames'
import commonStyles from '../../common/Common.module.sass'
import styles from './ImageBox.module.sass'

class ImageBox extends Component {
  state = {
    category: this.props.category,
    copied: false,
    showInfoBox: false,
    activeImage: [],
    activeImageId: '',
    titleDE: '',
    titleEN: '',
    secondTitleDE: '',
    secondTitleEN: '',
    subtitleDE: '',
    subtitleEN: '',
    errors: []
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.props.images.filter(image => image._id === this.state.activeImageId).map(image => {
        this.setState({
          category: this.props.category,
          activeImage: image,
          activeImageId: image._id,
          titleDE: image.de ? image.de.title : '',
          titleEN: image.en ? image.en.title : '',
          secondTitleDE: image.de ? image.de.secondTitle : '',
          secondTitleEN: image.en ? image.en.secondTitle : '',
          subtitleDE: image.de ? image.de.subtitle : '',
          subtitleEN: image.en ? image.en.subtitle : '',
          errors: []
        })
      })


    }
  }

  checkFiletype = filename => {
    const imageext = ['jpg', 'jpeg', 'png', 'gif']
    const re = /(?:\.([^.]+))?$/
    let ext = re.exec(filename)[1]
    if (imageext.includes(ext)) {
      return 'image'
    }
    return
  }

  toggleInfoBox = (image) => {
    this.setState({
      showInfoBox: this.state.activeImage === image ? false : true
    }, () => {
      this.setState({
        activeImage: this.state.activeImage === image ? [] : image,
        activeImageId: this.state.activeImage === image ? '' : image._id,
        titleDE: image.de ? image.de.title : '',
        titleEN: image.en ? image.en.title : '',
        secondTitleDE: image.de ? image.de.secondTitle : '',
        secondTitleEN: image.en ? image.en.secondTitle : '',
        subtitleDE: image.de ? image.de.subtitle : '',
        subtitleEN: image.en ? image.en.subtitle : '',
        errors: []

      })
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  saveContent = () => {

    console.log('CATE: ', this.state.category)
    const saveData = {
      category: 'media',
      tag: this.state.category,
      id: this.state.activeImageId,

      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      secondTitleDE: this.state.secondTitleDE,
      secondTitleEN: this.state.secondTitleEN,
      subtitleDE: this.state.subtitleDE,
      subtitleEN: this.state.subtitleEN,

    };
    this.props.saveContent(saveData);
    // console.log(saveData)
  };

  confirmDelete = (id, callback) => {
    confirmAlert({
      title: 'Bild löschen',
      message: 'Wollen Sie dieses Bild wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.props.deleteImage(id)
        },
        {
          label: 'Abbrechen'
        }
      ]
    })
  }

  render() {
    const { images } = this.props
    const { showInfoBox, activeImage } = this.state
    return (
      <div className={styles['image-container']}>
        {images && (
          <div className={styles['image-box']}>
            {images.map(image => (
              <div className={cx(styles['image-box--item'], {
                [styles['active-image']]: showInfoBox && activeImage === image,
                [styles['inactive-image']]: showInfoBox && activeImage != image
              })}>
                <CopyToClipboard
                  className={styles['image-box--item__copy']}
                  text={`https://assets.zara.or.at/media/${image.category}/${image.originalName
                    }`}
                >
                  <span>
                    <i className={'fa fa-copy'} />
                  </span>
                </CopyToClipboard>
                <div className={styles['image-box--item__image']}>
                  {this.checkFiletype(image.originalName) === 'image' &&
                    <img
                      src={`/assets/media/${image.category}/${image.originalName
                        }`}
                      alt=""
                    />}
                </div>
                <div
                  className={styles['image-box--item__backdrop']}
                  // onClick={this.confirmDelete.bind(
                  //   this,
                  //   image._id,
                  //   this.deleteImage
                  // )}
                  onClick={this.toggleInfoBox.bind(this, image)}
                >
                  <div className={styles['image-box--item__backdrop--text']}>
                    {image.originalName.substring(
                      image.originalName.lastIndexOf('.') + 1
                    )}
                  </div>
                  <span>{image.originalName}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {showInfoBox &&
          <Fragment>
            <div className={styles["image-info"]}>
              <p>hallo{activeImage.originalName}</p>
              <TextFieldGroup
                className={commonStyles['input']}
                colorScheme="dark"
                placeholder="Titel DE"
                type="text"
                name="titleDE"
                value={this.state.titleDE}
                onChange={this.onChange}
                error={this.state.errors.titleDE}
              />
              <TextFieldGroup
                className={commonStyles['input']}
                colorScheme="dark"
                placeholder="Titel EN"
                type="text"
                name="titleEN"
                value={this.state.titleEN}
                onChange={this.onChange}
                error={this.state.errors.titleEN}
              />
              <br />
              <TextFieldGroup
                className={commonStyles['input']}
                colorScheme="dark"
                placeholder="Zweiter Titel DE"
                type="text"
                name="secondTitleDE"
                value={this.state.secondTitleDE}
                onChange={this.onChange}
                error={this.state.errors.secondTitleDE}
              />
              <TextFieldGroup
                className={commonStyles['input']}
                colorScheme="dark"
                placeholder="Zweiter Titel EN"
                type="text"
                name="secondTitleEN"
                value={this.state.secondTitleEN}
                onChange={this.onChange}
                error={this.state.errors.secondTitleEN}
              />
              <br />
              <TextFieldGroup
                className={commonStyles['input']}
                colorScheme="dark"
                placeholder="Bildunterschrift DE"
                type="text"
                name="subtitleDE"
                value={this.state.subtitleDE}
                onChange={this.onChange}
                error={this.state.errors.subtitleDE}
              />
              <TextFieldGroup
                className={commonStyles['input']}
                colorScheme="dark"
                placeholder="Bildunterschrift EN"
                type="text"
                name="subtitleEN"
                value={this.state.subtitleEN}
                onChange={this.onChange}
                error={this.state.errors.subtitleEN}
              />
              <hr />
              <div>
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
              <br />
              <div>
                <button
                  className={cx(
                    commonStyles['button'],
                    commonStyles['button--delete']
                  )}
                  onClick={this.confirmDelete.bind(
                    this,
                    activeImage._id,
                    this.deleteImage
                  )}
                >
                  File Löschen
                    </button>
              </div>
            </div>
          </Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news,
  errors: state.errors
});

export default connect(mapStateToProps, {
  saveContent
})(ImageBox);