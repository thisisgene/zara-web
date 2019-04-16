import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
import TrainingTeamContent from './TrainingTeamContent'

import styles from './TrainingTeam.module.sass'

class TrainingTeam extends Component {
  componentDidMount() {
    this.props.getAll('trainingTeam')
  }

  render() {
    return (
      <div className={styles['training-team']}>
        {this.props.training && (
          <ItemAddList
            content={this.props.training.trainingTeam}
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
  training: state.training
})

export default connect(
  mapStateToProps,
  { getAll }
)(TrainingTeam)
