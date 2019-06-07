import React, { Component } from 'react'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'

import CopyToClipboard from 'react-copy-to-clipboard'

import styles from './ImageBox.module.sass'

export default class ImageBox extends Component {
  state = {
    copied: false
  }

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
    return (
      <div>
        {images && (
          <div className={styles['image-box']}>
            {images.map(image => (
              <div className={styles['image-box--item']}>
                <CopyToClipboard
                  className={styles['image-box--item__copy']}
                  text={`https://assets.zara.or.at/media/${image.category}/${
                    image.originalName
                  }`}
                >
                  <span>
                    <i className={'fa fa-copy'} />
                  </span>
                </CopyToClipboard>
                {/* </div> */}
                <div className={styles['image-box--item__image']}>
                  <img
                    src={`/assets/media/${image.category}/${
                      image.originalName
                    }`}
                    alt=""
                  />
                </div>
                <div
                  className={styles['image-box--item__backdrop']}
                  onClick={this.confirmDelete.bind(
                    this,
                    image._id,
                    this.deleteImage
                  )}
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
      </div>
    )
  }
}
