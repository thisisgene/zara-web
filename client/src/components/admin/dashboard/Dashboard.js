import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PrivateRoute from '../common/PrivateRoute'

import CategoryNav from './CategoryNav'
import Projects from './projects/Projects'

import styles from './Dashboard.module.sass'

class Dashboard extends Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <CategoryNav />

        <div className={styles['dashboard-content']}>
          <PrivateRoute path="/admin/dashboard/projects" component={Projects} />
          {/* <PrivateRoute path="/admin/reports" component={Reports} /> */}
          {/* <PrivateRoute path="/admin/news" component={News} /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  {}
)(Dashboard)
