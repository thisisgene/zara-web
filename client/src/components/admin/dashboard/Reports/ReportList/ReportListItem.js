import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getReportById } from '../../../../../actions/reportActions'

class ReportListItem extends Component {
  render() {
    const { report } = this.props
    return (
      <div>
        <NavLink
          to={`/admin/reports/${report._id}`}
          onClick={() => this.props.getReportById(report._id)}
        >
          {report._id}
        </NavLink>
      </div>
    )
  }
}

export default connect(
  null,
  { getReportById }
)(ReportListItem)
