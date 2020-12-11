import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import { withLocalize } from 'react-localize-redux'

import styles from './LanguageToggle.module.sass'

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage, location }) => {
  // showLanguageAlert = () => {
  //   // languageAlert = true
  // }
  console.log('langToggle: ', location.pathname.substring(3))
  return (
    <div className={styles['language-toggle']}>
      {languages.map(lang => (
        <div key={lang.code} className={styles['language-toggle--link']}>
          <NavLink
            activeClassName={styles.active}
            // className={styles[getClass(lang.code)]}
            to={`/${lang.code}/${location.pathname.substring(4)}`}
            // data-tip
            // data-for={lang.code === 'en' && 'langTT'}
            onClick={e => {
              // e.preventDefault()
              setActiveLanguage(lang.code)
            }}
          // onMouseOver={lang.code === 'en' && languageAlert}
          >
            {lang.code}
          </NavLink>
          <ReactTooltip
            id="langTT"
            place="bottom"
            type="dark"
            delayHide={1000}
            effect="solid"
          >
            <span>
              Die ZARA Website wird in Kürze auch auf Englisch zur Verfügung
              gestellt werden.
              <br />
              Wir bitten um Ihr Verständnis.
              <br />
              <br />
              The ZARA website will also be available in English soon. <br />
              Thank you for your understanding.
            </span>
          </ReactTooltip>
        </div>
      ))}
    </div>
  )
}

export default withRouter(withLocalize(LanguageToggle))
