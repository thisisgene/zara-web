import React, { Component } from './react'
import { connect } from './react-redux'
import { Route } from './react-router-dom'

import { getAllReports, getReportById } from '../../../../actions/reportActions'

import ReportList from './ReportList/ReportList'
import ReportContent from './ReportContent/ReportContent'

import styles from './Reports.module.sass'

class Reports extends Component {
  componentDidMount() {
    this.props.getAllReports()
    // this.props.getReportById()
  }
  render() {
    const { reports } = this.props.report
    return (
      <div className={styles['reports']}>
        <p>Reports</p>
        <div className={styles['reports-container']}>
          <ReportList reports={reports} />
          <Route path="/admin/reports/:id" component={ReportContent} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  report: state.report,
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { getAllReports, getReportById }
)(Reports)
