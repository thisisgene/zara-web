import React, { Component } from 'react'

import ArrowIcon from '../../common/img/list_arrow.png'
import ActIcon from '../../common/img/act.png'

import fbLogo from '../../common/social media/facebook.svg'
import instaLogo from '../../common/social media/instagram.svg'
import newsletterLogo from '../../common/social media/newsletter.svg'
import twitterLogo from '../../common/social media/twitter.svg'
import ytLogo from '../../common/social media/youtube.svg'

class IconObject extends Component {
  render() {
    const { image } = this.props
    const imageSrc = image =>
      ({
        act: ActIcon,
        listArrow: ArrowIcon,
        fbLogo,
        instaLogo,
        twitterLogo,
        ytLogo,
        newsletterLogo
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
