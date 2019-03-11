import React, { Component } from 'react'

export default class ImageBox extends Component {
  render() {
    const { images } = this.props
    return (
      <div>
        {images && (
          <div>
            {images.map(image => (
              <img
                src={`/assets/media/${image.category}/${image.originalName}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}
