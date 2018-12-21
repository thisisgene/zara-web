import React, { Component } from 'react'

import ActIcon from '../../common/img/act.png'
import LockIcon from '../../common/img/lock.svg'

import ArrowIcon from '../../common/assets/icon/arrow/tertiary.svg'

import search from '../../common/assets/button/search.svg'

import fbLogo from '../../common/assets/icon/social/facebook.svg'
import instaLogo from '../../common/assets/icon/social/instagram.svg'
import newsletterLogo from '../../common/assets/icon/social/email.svg'
import twitterLogo from '../../common/assets/icon/social/twitter.svg'
import ytLogo from '../../common/assets/icon/social/youtube.svg'

class IconObject extends Component {
  render() {
    const { image } = this.props
    const imageSrc = image =>
      ({
        act: ActIcon,
        listArrow: ArrowIcon,
        LockIcon,
        search,
        fbLogo,
        instaLogo,
        twitterLogo,
        ytLogo,
        newsletterLogo
      }[image])
    return <img src={imageSrc(image)} alt={image} />
  }
}

export default IconObject
