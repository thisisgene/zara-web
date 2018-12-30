import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import cx from 'classnames'
import styles from './ButtonObject.module.sass'

class ButtonObject extends Component {
  render() {
    const { button, lang } = this.props
    return (
      <div>
        <NavLink
          to={`/user/${lang}/${button.link}`}
          className={cx(styles['button'], styles[button.type])}
        >
          {button.text}
        </NavLink>
      </div>
    )
  }
}

export default ButtonObject
