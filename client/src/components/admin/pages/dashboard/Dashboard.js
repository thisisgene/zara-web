import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PrivateRoute from '../../common/PrivateRoute'

import CategoryNav from './CategoryNav'

import Media from './media/Media'
import News from './news/News'
import Jahresberichte from './jahresberichte/Jahresberichte'

import styles from './Dashboard.module.sass'

class Dashboard extends Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <CategoryNav />

        <div className={styles['dashboard-content']}>
          {/* <PrivateRoute path="/admin/dashboard/projects" component={Projects} /> */}
          <PrivateRoute path="/admin/dashboard/media" component={Media} />
          <PrivateRoute path="/admin/dashboard/news" component={News} />
          <PrivateRoute
            path="/admin/dashboard/jahresberichte"
            component={Jahresberichte}
          />
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
