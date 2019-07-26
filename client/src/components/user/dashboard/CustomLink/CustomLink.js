import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import styles from './CustomLink.module.sass'

export default class CustomLink extends Component {
  render() {
    const { to, inside, isExternal } = this.props
    return (
      <div>
        {isExternal ? (
          <a target="blank" href={to}>
            {inside && inside}
          </a>
        ) : (
          <Link to={to}>{inside && inside}</Link>
        )}
      </div>
    )
  }
}
