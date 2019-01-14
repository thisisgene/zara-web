import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { getReportById } from '../../../../../actions/reportActions'

import styles from './ReportContent.module.sass'

class ReportContent extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getReportById(id)
  }

  render() {
    const { report } = this.props.report
    return (
      <div className={styles['report-content-container']}>
        {report && (
          <div>
            <div className={styles['report-message-container']}>
              <p>Vorname</p>
              <div className={styles['report-message']}>
                {report.firstName ? report.firstName : '[keine Angabe]'}
              </div>
              <p>Nachname</p>
              <div className={styles['report-message']}>
                {report.lastName ? report.lastName : '[keine Angabe]'}
              </div>
              <p>Email-Adresse</p>
              <div className={styles['report-message']}>
                {report.email ? report.email : '[keine Angabe]'}
              </div>
              <p>Telefonnummer</p>
              <div className={styles['report-message']}>
                {report.phone ? report.phone : '[keine Angabe]'}
              </div>
              <p>Datum & Uhrzeit</p>
              <div className={styles['report-message']}>
                <Moment format="YYYY/MM/DD - HH:MM">{report.date}</Moment>
              </div>
              <p>Nachricht</p>
              <div className={styles['report-message']}>
                {report.description}{' '}
              </div>
            </div>
            <p>Bilder</p>
            <div className={styles['image-container']}>
              {report.images ? (
                report.images.map((image, index) => (
                  <div
                    className={styles['thumb-container']}
                    key={image.originalName}
                  >
                    <div>
                      <div className={styles['thumb']}>
                        <div className={styles['thumbInner']}>
                          <img
                            src={`/assets/reports/${report._id}/${
                              image.originalName
                            }`}
                            className={styles['img']}
                            alt={`preview ${image.originalName}`}
                          />
                        </div>
                      </div>
                    </div>
                    <p>{image.originalName}</p>
                  </div>
                ))
              ) : (
                <h3>Keine Bilder vorhanden</h3>
              )}
            </div>
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
