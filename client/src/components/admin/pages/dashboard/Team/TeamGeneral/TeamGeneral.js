import React, { Component } from 'react'

import ContentImageList from '../../ContentImageList'

import cx from 'classnames'
import styles from './TeamGeneral'

export default class TeamGeneral extends Component {
  constructor() {
    super()
    this.state = {
      imageId: '',
      titleImage: '',
      imageCategory: '',
      imageListOpen: false
    }
  }
  onImageOpen = () => {
    this.setState({ imageListOpen: !this.state.imageListOpen })
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

  saveContent = () => {
    const saveData = {
      category: 'teamGeneral',
      titleImage: this.state.titleImage,
      imageId: this.state.imageId,
      imageCategory: this.state.imageCategory
    }
    this.props.saveContent(saveData)
    // console.log(saveData)
  }

  render() {
    return (
      <div className={styles['title-image']} onClick={this.onImageOpen}>
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
    )
  }
}
