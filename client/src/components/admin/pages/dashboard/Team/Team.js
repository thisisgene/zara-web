import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
// import NewsList from './NewsList/NewsList'
import TeamContent from './TeamContent/TeamContent'

import styles from './Team.module.sass'
import { teamTags } from './team_data'

class Team extends Component {
  componentDidMount() {
    this.props.getAll('team')
  }

  render() {
    return (
      <div className={styles['team']}>
        {this.props.team && (
          <ItemAddList
            tags={teamTags}
            content={this.props.team.team}
            baseCat={'dashboard'}
            category={'team'}
          />
        )}
        <PrivateRoute
          path="/admin/dashboard/team/:teamId"
          component={TeamContent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  team: state.team
})

export default connect(
  mapStateToProps,
  { getAll }
)(Team)
