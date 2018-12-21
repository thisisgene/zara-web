import React, { Component } from 'react'

import ActIcon from '../../common/img/act.png'
import LockIcon from '../../common/img/lock.svg'

// import fbLogo from '../../common/social media/facebook.svg'
// import instaLogo from '../../common/social media/instagram.svg'
// import newsletterLogo from '../../common/social media/newsletter.svg'
// import twitterLogo from '../../common/social media/twitter.svg'
// import ytLogo from '../../common/social media/youtube.svg'
import ArrowIcon from '../../common/assets/icon/arrow/tertiary.svg'

import fbLogo from '../../common/assets/icon/social/facebook.svg'
import instaLogo from '../../common/assets/icon/social/instagram.svg'
import newsletterLogo from '../../common/assets/icon/social/email.svg'
import twitterLogo from '../../common/assets/icon/social/twitter.svg'
import ytLogo from '../../common/assets/icon/social/youtube.svg'

// const ArrowIcon = '/assets/img/assets/icon/arrow/tertiary.svg'

// const fbLogo = '/assets/img/assets/icon/social/facebook.svg'
// const instaLogo = '/assets/img/assets/icon/social/instagram.svg'
// const newsletterLogo = '/assets/img/assets/icon/social/email.svg'
// const twitterLogo = '/assets/img/assets/icon/social/twitter.svg'
// const ytLogo = '/assets/img/assets/icon/social/youtube.svg'

class IconObject extends Component {
  render() {
    const { image } = this.props
    const imageSrc = image =>
      ({
        act: ActIcon,
        listArrow: ArrowIcon,
        LockIcon,
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
