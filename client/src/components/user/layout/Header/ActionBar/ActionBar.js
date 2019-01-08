import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import IconObject from '../../../dashboard/IconObject/IconObject'
import ActIcon from '../../../common/img/act.png'

import cx from 'classnames'
import styles from './ActionBar.module.sass'

class ActionBar extends Component {
  render() {
    const { lang, align, onClick } = this.props
    return (
      <div className={styles['action-bar']}>
        <div className={cx(styles['action-bar--menu'], styles[align])}>
          <NavLink
            activeClassName={styles.active}
            to={`/user/${lang}/beratung/#melden`}
            onClick={onClick ? onClick : null}
          >
            <IconObject image="act" />
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            to={`/user/${lang}/beratung/#melden`}
            onClick={onClick ? onClick : null}
          >
            <Translate id={`menu.item0.1`} />
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            to={`/user/${lang}/mitmischen/unterstuetzen`}
            onClick={onClick ? onClick : null}
          >
            <Translate id={`menu.item0.2`} />
          </NavLink>
          <NavLink
            activeClassName={styles.active}
            to={`/user/${lang}/kontakt`}
            onClick={onClick ? onClick : null}
          >
            <Translate id={`menu.item0.3`} />
          </NavLink>
        </div>
      </div>
    )
  }
}

export default withLocalize(ActionBar)
