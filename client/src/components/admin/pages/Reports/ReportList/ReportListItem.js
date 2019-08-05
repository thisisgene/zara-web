import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import {
  getReportById,
  sendToArchive
} from '../../../../../actions/reportActions'
import Moment from 'react-moment'

import Archive from '../../../common/assets/archive.png'

import styles from './ReportList.module.sass'

class ReportListItem extends Component {
  onSendToArchiveClick = id => {
    this.props.sendToArchive(id)
  }

  render() {
    const { report } = this.props
    return (
      <div className={styles['report-list-item']}>
        <NavLink
          activeClassName={styles['active']}
          to={`/admin/reports/${report._id}`}
          onClick={() => this.props.getReportById(report._id)}
        >
          <Moment format="YYYY/MM/DD - HH:mm">{report.date}</Moment>
        </NavLink>
        {!report.archived && (
          <div
            className={styles['report-list-item--archive']}
            onClick={this.onSendToArchiveClick.bind(this, report._id)}
          >
            <img src={Archive} title="Archivieren" />
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(
  connect(
    null,
    { getReportById, sendToArchive }
  )(ReportListItem)
)
