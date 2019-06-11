import React, { Component } from 'react'
import { connect } from 'react-redux'

import { confirmAlert } from 'react-confirm-alert'

import { deleteById } from '../../../../actions/adminActions'

import cx from 'classnames'
import globalStyles from '../../common/Bootstrap.module.css'
import styles from './UserList.module.sass'

class UserList extends Component {
  constructor(props) {
    super(props)
  }
  deleteTeamMember = id => {
    this.props.deleteById(id, 'trainingTeam')
    // this.props.history.push('/admin/settings')
    // console.log(id)
  }

  confirmDelete = id => {
    confirmAlert({
      title: 'Eintrag löschen',
      message: 'Wollen Sie diesen Eintrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteTeamMember(id)
        },
        {
          label: 'Abbrechen'
        }
      ]
    })
  }
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
              <td>Löschen</td>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.securityLevel}</td>
                  <td>
                    <div
                      className={styles['delete-button']}
                      onClick={this.confirmDelete.bind(this, user._id)}
                    >
                      <i className={'fas fa-minus-circle'} />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { deleteById }
)(UserList)
