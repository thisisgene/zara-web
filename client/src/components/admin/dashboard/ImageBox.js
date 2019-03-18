import React, { Component } from 'react'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'

import styles from './ImageBox.module.sass'

export default class ImageBox extends Component {
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
              <div
                className={styles['image-box--item']}
                onClick={this.confirmDelete.bind(
                  this,
                  image._id,
                  this.deleteImage
                )}
              >
                <img
                  src={`/assets/media/${image.category}/${image.originalName}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}
