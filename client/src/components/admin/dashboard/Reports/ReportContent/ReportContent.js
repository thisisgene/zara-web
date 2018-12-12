import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { getReportById } from '../../../../../actions/reportActions'

class ReportContent extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getReportById(id)
  }

  render() {
    const { report } = this.props.report
    return (
      <div>
        <p>content</p>
        {report && (
          <div>
            <p>{report.description} </p>
            <p>
              <Moment format="YYYY/MM/DD">{report.date}</Moment>
            </p>
            {report.images &&
              report.images.map((image, index) => (
                <img
                  key={index}
                  src={`/public/reports/${report._id}/${image.originalName}`}
                  alt=""
                />
              ))}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  report: state.report
})

export default connect(
  mapStateToProps,
  { getReportById }
)(ReportContent)
