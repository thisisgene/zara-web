import React, { Component } from 'react'

import ArrowIcon from '../../common/img/list_arrow.png'
import ActIcon from '../../common/img/act.png'

class IconObject extends Component {
  render() {
    const { image } = this.props
    const imageSrc = image =>
      ({
        act: ActIcon,
        listArrow: ArrowIcon
      }[image])
    console.log(imageSrc[image])
    return (
      <div>
        <img src={imageSrc(image)} alt={image} />
      </div>
    )
  }
}

export default IconObject
