import React from 'react'

import cx from 'classnames'
import globalStyles from '../common/Bootstrap.module.css'
import styles from './Footer.module.sass'

export default props => {
  function secondsToHms(d) {
    d = Number(d)
    const h = Math.floor(d / 3600)
    const m = Math.floor((d % 3600) / 60)
    const s = Math.floor((d % 3600) % 60)

    const hDisplay = h > 0 ? h + ' std ' : ''
    const mDisplay = m > 0 ? m + ' min ' : '0 min '
    const sDisplay = s > 0 ? s + ' sek ' : '0 sek '
    const display =
      d < 3600 ? hDisplay + mDisplay + sDisplay : hDisplay + mDisplay
    return 'Zeit bis Logout: ' + display
  }
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
      {props.timeUntilLogout && (
        <small
          className={cx(styles['footer--time-logout'], {
            [styles['red']]: props.timeUntilLogout < 300000
          })}
        >
          {secondsToHms(props.timeUntilLogout)}
        </small>
      )}
    </footer>
  )
}
