import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getAllReports, getReportById } from '../../../../actions/reportActions'

import ReportList from './ReportList/ReportList'
import ReportContent from './ReportContent/ReportContent'

class Reports extends Component {
  componentDidMount() {
    this.props.getAllReports()
    // this.props.getReportById()
  }
  render() {
    const { reports } = this.props.report
    return (
      <div>
        <p>Reports</p>
        <ReportList reports={reports} />
        <Route path="/admin/reports/:id" component={ReportContent} />
        {/* <ReportContent reports={reports} /> */}
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
