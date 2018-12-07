import React from 'react'
import { NavLink } from 'react-router-dom'

import { withLocalize } from 'react-localize-redux'

import cx from 'classnames'
import styles from './Header.module.sass'

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
  const getClass = languageCode => {
    return languageCode === activeLanguage.code ? 'active' : ''
  }

  return (
    <div>
      {languages.map(lang => (
        <div key={lang.code} className={styles['language-box--link']}>
          <NavLink
            activeClassName={cx(styles.active)}
            className={styles[getClass(lang.code)]}
            to={`/user/${lang.code}`}
            onClick={() => setActiveLanguage(lang.code)}
          >
            {lang.code}
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default withLocalize(LanguageToggle)
