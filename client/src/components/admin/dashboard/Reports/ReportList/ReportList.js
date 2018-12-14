import React, { Component } from 'react'
import FileBrowser from 'react-keyed-file-browser'
import Moment from 'moment'
import ReportListItem from './ReportListItem'

import styles from './ReportList.module.sass'

class ReportList extends Component {
  render() {
    const { reports } = this.props
    let files // TODO: Create working file/folder structure
    // files =
    //   reports &&
    //   reports.map(report => {
    //     const year = Moment(report.date).format('YYYY')
    //     const month = Moment(report.date).format('MM')
    //     const day = Moment(report.date).format('dd')
    //     console.log(year)
    //     return {
    //       key: `${year}/${month}/${day}/${report._id}`
    //     }
    //   })
    return (
      <div className={styles['report-list']}>
        {reports &&
          reports.map((report, index) => (
            <ReportListItem key={index} report={report} />
          ))}
      </div>
    )
  }
}

export default ReportList
