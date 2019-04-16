import React, { Component } from './react'
import { connect } from './react-redux'

import { getImagesByCategory } from '../../../../actions/imageActions'

import cx from './classnames'
import styles from './ContentImageList.module.sass'

class ContentImageList extends Component {
  componentDidMount() {
    if (this.props.category) {
      this.props.getImagesByCategory(this.props.category)
    }
  }

  onImageClick = image => {
    this.props.updateTitleImage(image.originalName, image._id, image.category)
  }
  onNullClick = () => {
    this.props.updateTitleImage(null, null, null)
  }
  render() {
    const { newsImageId } = this.props
    return (
      <div className={styles['content-image-list']}>
        <div
          className={styles['content-image-list--null']}
          onClick={this.onNullClick}
        >
          Kein Bild wählen
        </div>
        {this.props.media.images &&
          this.props.media.images.map(image => (
            <div
              className={cx(styles['content-image-list--item'], {
                [styles['used-by-news']]: image._id === newsImageId
              })}
              onClick={this.onImageClick.bind(this, image)}
            >
              <img
                src={`/assets/media/${image.category}/${image.originalName}`}
                alt=""
              />
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  media: state.media,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { getImagesByCategory }
)(ContentImageList)
