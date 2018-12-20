import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { withLocalize } from 'react-localize-redux'

import styles from './LanguageToggle.module.sass'

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
  return (
    <div className={styles['language-toggle']}>
      {languages.map(lang => (
        <div key={lang.code} className={styles['language-toggle--link']}>
          <NavLink
            activeClassName={styles.active}
            // className={styles[getClass(lang.code)]}
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

export default withRouter(withLocalize(LanguageToggle))
