import React, { Component } from 'react'

import styles from './ContactBox.module.sass'
import IconLinkBox from '../IconLinkBox/IconLinkBox'

class ContactBox extends Component {
  render() {
    const { content, contactIconLinks, lang } = this.props
    return (
      <div className={styles['contact-box']}>
        <div className={styles['contact-box--left']}>
          <div className={styles['contact-box--left__title']}>
            {content[lang].title}
          </div>
          <div
            className={styles['contact-box--left__address']}
            dangerouslySetInnerHTML={{ __html: content[lang].address }}
          />
          <div className={styles['contact-box--left__phone']}>
            {content[lang].phone}
          </div>
          <div className={styles['contact-box--left__email']}>
            <a href={`mailto:${content[lang].email}`}>{content[lang].email}</a>
          </div>
        </div>
        <div className={styles['contact-box--right']}>
          {contactIconLinks &&
            contactIconLinks.map(link => (
              <div className={styles['icon-link-box']}>
                <IconLinkBox content={link} lang={lang} />
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default ContactBox
