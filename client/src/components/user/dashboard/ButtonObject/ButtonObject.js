import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import cx from 'classnames'
import commonStyles from '../../common/Common.module.sass'

class ButtonObject extends Component {
  render() {
    const { button } = this.props
    return (
      <div>
        <NavLink
          to={`/user/${button.link}`}
          className={cx(commonStyles['button'], commonStyles[button.type])}
        >
          {button.text}
        </NavLink>
      </div>
    )
  }
}

export default ButtonObject
