import React, { Component } from 'react'

import act from '../../common/assets/icon/act/act.svg'
import alert from '../../common/assets/icon/act/important.svg'
import spenden from '../../common/assets/icon/act/donate-text.svg'
import donate_hand from '../../common/assets/icon/various/donate.png'
import group from '../../common/assets/icon/various/group.png'
import LockIcon from '../../common/img/lock.svg'

import ArrowIcon from '../../common/assets/icon/arrow/tertiary.svg'
import arrowRight from '../../common/assets/icon/arrow/right.svg'
import arrowButtonRight from '../../common/assets/icon/arrow-button/right.svg'

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

import participants from '../../common/assets/icon/workshop/participants.svg'
import duration from '../../common/assets/icon/workshop/duration.svg'

class IconObject extends Component {
  render() {
    const { image } = this.props
    const imageSrc = image =>
      ({
        act,
        alert,
        donate_hand,
        spenden,
        arrowRight,
        arrowButtonRight,
        group,
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
        newsletterLogo,
        participants,
        duration
      }[image])
    return <img src={imageSrc(image)} alt={image} />
  }
}

export default IconObject
