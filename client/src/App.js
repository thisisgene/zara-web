import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './actions/authActions'
import { logoutUser } from './actions/authActions'
import { clearProjects } from './actions/projectActions'
import { LocalizeProvider, withLocalize } from 'react-localize-redux'

import { Provider } from 'react-redux'
import store from './store'

import NotFound from './components/NotFound'
import User from './components/user/User'
import Admin from './components/admin/Admin'

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // Dedode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime && window.location.href.indexOf('admin') > -1) {
    // Logout user
    store.dispatch(logoutUser())
    // Clear current Project
    store.dispatch(clearProjects())
    // Redirect to login
    window.location.href = 'admin/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LocalizeProvider store={store}>
          <Router>
            <div className="App">
              <Switch>
                <Route exact path="/admin/*" component={Admin} />

                <div className="User">
                  <Route path="/*" component={User} />
                </div>
              </Switch>
            </div>
          </Router>
        </LocalizeProvider>
      </Provider>
    )
  }
}

export default withLocalize(App)
