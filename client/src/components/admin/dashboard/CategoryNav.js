import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from './Dashboard.module.sass'

class Dashboard extends Component {
  render() {
    // const { user } = this.props.auth

    return (
      <div className={styles['category-nav']}>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['cat-active']}
          to="/admin/news"
        >
          News
        </NavLink>
        {/* <NavLink
          className={styles['category-nav--link']}
          activeClassName={styles['active']}
          to="/admin/reports"
        >
          Meldungen
        </NavLink> */}
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  {}
)(Dashboard)
