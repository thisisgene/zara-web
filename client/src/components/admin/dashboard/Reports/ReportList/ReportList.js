import React, { Component } from 'react'
import ReportListItem from './ReportListItem'

export default class ReportList extends Component {
  render() {
    const { reports } = this.props
    return (
      <div>
        {reports &&
          reports.map((report, index) => (
            <ReportListItem key={index} report={report} />
          ))}
      </div>
    )
  }
}
