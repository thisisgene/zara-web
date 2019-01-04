import React, { Component } from 'react'

import IconObject from '../IconObject/IconObject'
import InputButtonBox from '../InputButtonBox/InputButtonBox'

import styles from './NewsletterOneLineObject.module.sass'

export default class NewsletterOneLineObject extends Component {
  render() {
    const { lang } = this.props
    return (
      <div>
        <div className={styles['newsletter-container']}>
          <div>
            <IconObject image="newsletterLogo" />
            <span>
              {lang === 'de'
                ? 'Melden Sie sich für den ZARA Newsletter an'
                : 'Subscribe to the ZARA newsletter'}
            </span>
          </div>
          <InputButtonBox
            content={{
              inputPlaceholder:
                lang === 'de' ? 'E-Mail Adresse' : 'E-mail Address',
              button: {
                type: 'default',
                text:
                  lang === 'de'
                    ? 'Newsletter abonnieren'
                    : 'Subscribe to newsletter'
              }
            }}
          />
        </div>
      </div>
    )
  }
}
