import React, { Component } from 'react'

import cx from 'classnames'
import globalStyles from '../../common/Bootstrap.module.css'
import styles from './UserList.module.sass'

class UserList extends Component {
  render() {
    const { users } = this.props
    return (
      <div className={styles['user-list-container']}>
        <table
          className={cx(
            globalStyles['table'],
            globalStyles['table-dark'],
            globalStyles['table-striped']
          )}
        >
          <thead>
            <tr>
              <td>Name</td>
              <td>email</td>
              <td>Sicherheits-Level</td>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.securityLevel}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserList
