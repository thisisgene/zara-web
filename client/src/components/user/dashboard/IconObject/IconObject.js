import React, { Component } from 'react'

import ActIcon from '../../common/img/act.png'

class IconObject extends Component {
  render() {
    const { image } = this.props
    let imageSrc
    switch (image) {
      case 'act':
        imageSrc = ActIcon
    }

    return (
      <div>
        <img src={ActIcon} alt={image} />
      </div>
    )
  }
}

export default IconObject
