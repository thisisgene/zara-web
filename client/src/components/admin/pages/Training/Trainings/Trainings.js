import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
import TrainingContent from './TrainingContent'

import styles from './Trainings.module.sass'

class TrainingTeam extends Component {
  componentDidMount() {
    this.props.getAll('trainings')
  }

  render() {
    return (
      <div className={styles['trainings']}>
        {this.props.training && (
          <ItemAddList
            content={this.props.training.trainings}
            baseCat="training"
            category="trainings"
          />
        )}
        <PrivateRoute
          path="/admin/training/trainings/:trainingId"
          component={TrainingContent}
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
