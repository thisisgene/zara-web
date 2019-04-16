import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, NavLink } from 'react-router-dom'

import PrivateRoute from './common/PrivateRoute'

import { authLinks } from './layout/nav-links'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Login from './auth/Login'
import Settings from './auth/Settings'
import Reports from './pages/dashboard/Reports/Reports'
import Training from './pages/Training/Training'
import Dashboard from './pages/dashboard/Dashboard'
import Preview from './preview/Preview'
import RestrictedPage from './RestrictedPage/RestrictedPage'

// import News from './dashboard/news/News'

import './Admin.css'

import styles from './dashboard/Dashboard.module.sass'
import News from './pages/dashboard/news/News'

class Admin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }
  componentDidMount() {
    document.title = 'ZARA | Admin'
  }
  render() {
    const { isAuthenticated, user } = this.props.auth

    const authRoutes = (
      <div className="Admin">
        <Header />
        <Route exact path="/admin/login" component={Login} />

        <Switch>
          {user.securityLevel <= 4 ? (
            <PrivateRoute exact path="/admin/settings" component={Settings} />
          ) : (
            <PrivateRoute
              exact
              path="/admin/settings"
              component={RestrictedPage}
            />
          )}
          {user.securityLevel === 4 || user.securityLevel <= 2 ? (
            <PrivateRoute path="/admin/reports" component={Reports} />
          ) : (
            <PrivateRoute path="/admin/reports" component={RestrictedPage} />
          )}
          {user.securityLevel === 4 || user.securityLevel <= 2 ? (
            <PrivateRoute path="/admin/training" component={Training} />
          ) : (
            <PrivateRoute path="/admin/training" component={RestrictedPage} />
          )}
          {user.securityLevel <= 3 ? (
            <Switch>
              <PrivateRoute path="/admin/dashboard" component={Dashboard} />
              <PrivateRoute
                path="/admin/preview/:category/:newsId"
                component={Preview}
              />
            </Switch>
          ) : (
            <Switch>
              <PrivateRoute
                path="/admin/dashboard"
                component={RestrictedPage}
              />
              <PrivateRoute path="/admin/preview" component={RestrictedPage} />
            </Switch>
          )}
        </Switch>
        <Footer />
      </div>
    )
    const guestRoutes = (
      <div>
        <Header />
        <div className={styles['dashboard']}>
          <Login />
        </div>
        <Footer />
      </div>
    )
    return <div>{isAuthenticated ? authRoutes : guestRoutes}</div>
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

Admin.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  {}
)(Admin)
