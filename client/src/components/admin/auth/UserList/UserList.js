import React, { Component } from 'react'

class UserList extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>email</td>
              <td>Admin</td>
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
