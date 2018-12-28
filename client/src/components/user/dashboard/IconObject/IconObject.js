import React, { Component } from 'react'

import act from '../../common/assets/icon/act/act.svg'
import spenden from '../../common/assets/icon/act/donate-text.svg'
import LockIcon from '../../common/img/lock.svg'

import ArrowIcon from '../../common/assets/icon/arrow/tertiary.svg'

import search from '../../common/assets/button/search.svg'

import email from '../../common/assets/icon/contact/email.svg'
import hours from '../../common/assets/icon/contact/hours.svg'
import location from '../../common/assets/icon/contact/location.svg'
import phone from '../../common/assets/icon/contact/phone.svg'
import check from '../../common/assets/icon/contact/check.svg'

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
        act,
        spenden,
        listArrow: ArrowIcon,
        LockIcon,
        search,
        check,
        email,
        hours,
        location,
        phone,
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
