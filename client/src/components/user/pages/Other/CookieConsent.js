import React from 'react'

import styles from './CookieConsent.module.sass'

export default function CookieConsent({ handleClick }) {
  return (
    <div className={styles['cookie-consent']}>
      <div className={styles['cookie-consent--content']}>
        <div className={styles['cookie-consent--content__text']}>
          Um diese Website optimal zu gestalten und verbessern zu können,
          verwenden wir Cookies. Durch die weitere Nutzung unserer Website
          erklären Sie sich mit dem Einsatz von Cookies und unseren
          Datenschutzrichtlinien einverstanden.
        </div>
        <div className={styles['cookie-consent--content__button']}>
          <button onClick={handleClick}>Einverstanden</button>
        </div>
      </div>
    </div>
  )
}
