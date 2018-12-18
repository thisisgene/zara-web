import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import ActIcon from '../../../common/img/act.png'

import styles from './ActionBar.module.sass'

class ActionBar extends Component {
  render() {
    return (
      <div className={styles['action-bar']}>
        <div className={styles['action-bar--menu']}>
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
