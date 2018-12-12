import React from 'react'

import cx from 'classnames'
import globalStyles from '../common/Bootstrap.module.css'
import styles from './Footer.module.sass'

export default () => {
  return (
    <footer
      className={cx(
        globalStyles['bg-dark'],
        globalStyles['text-white'],
        globalStyles['p-2'],
        globalStyles['text-center'],
        styles['footer']
      )}
    >
      <small>&copy; {new Date().getFullYear()} Serious Pigeon</small>
    </footer>
  )
}
