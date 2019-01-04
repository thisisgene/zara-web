import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import menuItems from '../../../layout/Header/menuItems'

import ContactBox from '../../../dashboard/ContactBox/ContactBox'

import styles from './Kontact.module.sass'

class Kontakt extends Component {
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div className={styles['contact-box']}>
        {lang &&
          menuItems &&
          menuItems.map(item => (
            <div id={item.link} className={styles['contact-item']}>
              <div className={styles['contact-item--inner']}>
                <ContactBox
                  content={item.contact}
                  contactIconLinks={item.contactIconLinks}
                  lang={lang}
                />
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default withLocalize(Kontakt)
