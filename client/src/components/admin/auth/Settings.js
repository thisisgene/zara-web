import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllUsers } from '../../../actions/authActions'

import Register from './Register'
import UserList from './UserList/UserList'

import styles from './Settings.module.sass'

class Settings extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }
  render() {
    // const { users } = this.props.auth
    return (
      <div className={styles['settings-container']}>
        <h1>Settings</h1>
        <div className={styles['register-form']}>
          <h3>User hinzufügen</h3>
          <Register />
        </div>
        <div className={styles['user-list']}>
          <h3>User Liste</h3>
          {this.props.auth && this.props.auth.users && (
            <UserList
              users={this.props.auth.users.filter(
                user => user.securityLevel <= 15
              )}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { getAllUsers }
)(Settings)
