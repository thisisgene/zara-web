import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, NavLink } from 'react-router-dom'

import PrivateRoute from './common/PrivateRoute'

import { authLinks } from './layout/nav-links'

import Loading from './Loading/Loading'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Login from './auth/Login'
import Settings from './auth/Settings'
import Reports from './pages/Reports/Reports'
import Training from './pages/Training/Training'
import Dashboard from './pages/dashboard/Dashboard'
import Preview from './preview/Preview'
import RestrictedPage from './RestrictedPage/RestrictedPage'

// import News from './dashboard/news/News'

import './Admin.sass'

import styles from './pages/dashboard/Dashboard.module.sass'
import News from './pages/dashboard/news/News'

class Admin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {},
      timeUntilLogout: '',
      timeCheckInterval: 60000
    }
  }
  componentDidMount() {
    document.title = 'ZARA | Admin'
    setTimeout(this.setTimeUntilLogout, 1)
  }

  setTimeUntilLogout = () => {
    const timeLeft = Math.round(this.props.auth.user.exp - Date.now() / 1000)

    if (timeLeft <= 7200) {
      this.setState({
        timeUntilLogout: timeLeft
      })
    }
    if (timeLeft <= 300) {
      this.setState({
        timeCheckInterval: 1000,
        timeUntilLogout: timeLeft
      })
    }
    setTimeout(this.setTimeUntilLogout, this.state.timeCheckInterval)
  }

  render() {
    const { isAuthenticated, user } = this.props.auth
    // this.setTimeUntilLogout()

    const authRoutes = (
      <div className="Admin">
        <Loading />
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
          {user.securityLevel === 5 ||
          user.securityLevel <= 2 ||
          user.securityLevel === 16 ? (
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
        <Footer timeUntilLogout={this.state.timeUntilLogout} />
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
