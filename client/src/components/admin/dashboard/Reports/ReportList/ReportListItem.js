import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { getReportById } from '../../../../../actions/reportActions'
import Moment from 'react-moment'

import styles from './ReportList.module.sass'

class ReportListItem extends Component {
  render() {
    const { report } = this.props
    return (
      <div className={styles['report-list-item']}>
        <NavLink
          activeClassName={styles['active']}
          to={`/admin/reports/${report._id}`}
          onClick={() => this.props.getReportById(report._id)}
        >
          <Moment format="YYYY/MM/DD - HH:MM">{report.date}</Moment>
        </NavLink>
      </div>
    )
  }
}

export default withRouter(
  connect(
    null,
    { getReportById }
  )(ReportListItem)
)
