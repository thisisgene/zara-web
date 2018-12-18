import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import ActIcon from '../../../common/img/act.png'

import cx from 'classnames'
import styles from './ActionBar.module.sass'

class ActionBar extends Component {
  render() {
    const { align } = this.props
    return (
      <div className={styles['action-bar']}>
        <div className={cx(styles['action-bar--menu'], styles[align])}>
          <NavLink activeClassName={styles.active} to="/user/melden">
            <img src={ActIcon} alt="" />
          </NavLink>
          <NavLink activeClassName={styles.active} to="/user/melden">
            Melden
          </NavLink>
          <NavLink activeClassName={styles.active} to="/user/spenden">
            Spenden
          </NavLink>
          <NavLink activeClassName={styles.active} to="/user/kontakt">
            Kontakt
          </NavLink>
        </div>
      </div>
    )
  }
}

export default withLocalize(ActionBar)
