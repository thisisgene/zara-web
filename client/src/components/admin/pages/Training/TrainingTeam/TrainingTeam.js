import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

// import { getAll } from '../../../../../actions/adminActions'
import { getAllUsers } from '../../../../../actions/authActions'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
import TrainingTeamContent from './TrainingTeamContent'

import styles from './TrainingTeam.module.sass'

class TrainingTeam extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }

  render() {
    return (
      <div className={styles['training-team']}>
        {this.props.auth && (
          <ItemAddList
            content={
              this.props.auth.users &&
              this.props.auth.users.filter(user => user.securityLevel == 16)
            }
            baseCat="training"
            category="team"
          />
        )}
        <PrivateRoute
          path="/admin/training/team/:teamId"
          component={TrainingTeamContent}
        />
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
)(TrainingTeam)
