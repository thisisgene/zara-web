import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import { jobTags } from './jobs_data'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
// import NewsList from './NewsList/NewsList'
import JobContent from './JobContent/JobContent'

import styles from './Jobs.module.sass'

class Jobs extends Component {
  componentDidMount() {
    this.props.getAll('jobs')
  }

  render() {
    return (
      <div className={styles['jobs']}>
        {this.props.jobs && (
          <ItemAddList
            tags={jobTags}
            content={this.props.jobs.jobs}
            baseCat={'dashboard'}
            category={'jobs'}
          />
        )}
        <PrivateRoute
          path="/admin/dashboard/jobs/:jobId"
          component={JobContent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs,
})

export default connect(mapStateToProps, { getAll })(Jobs)
