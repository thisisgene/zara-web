import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import cx from 'classnames'
import styles from './ButtonObject.module.sass'

class ButtonObject extends Component {
  render() {
    const { button, lang } = this.props
    return (
      <div>
        {button.linkPath !== 'external' ? (
          <NavLink
            to={`/user/${lang}/${button.link}`}
            className={cx(styles['button'], styles[button.type])}
          >
            {button.text}
          </NavLink>
        ) : (
          <a
            className={cx(styles['button'], styles[button.type])}
            href={button.link}
            target="blank"
          >
            {button.text}
          </a>
        )}
      </div>
    )
  }
}

export default ButtonObject
