import React, { Component } from 'react'

import ReportListItem from './ReportListItem'

import styles from './ReportList.module.sass'

class ReportList extends Component {
  render() {
    const { reports } = this.props
    return (
      <div className={styles['report-list']}>
        <p>{reports && reports.length}</p>
        {reports &&
          reports.map((report, index) => (
            <ReportListItem key={index} report={report} />
          ))}
      </div>
    )
  }
}

export default ReportList
