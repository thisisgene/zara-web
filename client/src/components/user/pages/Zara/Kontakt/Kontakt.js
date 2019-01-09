import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { heroData } from './kontakt_data'
import menuItems from '../../../layout/Header/menuItems'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
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
      <div>
        <HeroUnit data={heroData} lang={lang} />
        <div className={styles['contact-box']}>
          {lang &&
            menuItems &&
            menuItems.map((item, index) => (
              <div>
                {item.id !== '3' && (
                  <div
                    id={item.link}
                    key={index}
                    className={styles['contact-item']}
                  >
                    <div className={styles['contact-item--inner']}>
                      <ContactBox
                        content={item.contact}
                        contactIconLinks={item.contactIconLinks}
                        lang={lang}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default withLocalize(Kontakt)
