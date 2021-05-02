import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getAllPresseclubReportsQuick } from '../../../../actions/reportActions'

import ReportList from './ReportList/ReportList'
import ReportContent from './ReportContent/ReportContent'

import styles from './Reports.module.sass'
import Spinner from '../../common/Spinner'

class Presseclub extends Component {
  componentDidMount() {
    this.props.getAllPresseclubReportsQuick()
  }
  render() {
    const { reports } = this.props.report
    return (
      <div className={styles['reports']}>
        <div className={styles['reports-container']}>
          {reports ? <ReportList reports={reports} /> : <Spinner />}
          <Route path="/admin/presseclub/:id" component={ReportContent} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  report: state.report,
  auth: state.auth,
})

export default connect(mapStateToProps, {
  getAllPresseclubReportsQuick,
})(Presseclub)
