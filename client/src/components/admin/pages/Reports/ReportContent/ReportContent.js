import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import {
  getReportById,
  sendToArchive
} from '../../../../../actions/reportActions'
import { clearSingle } from '../../../../../actions/adminActions'

import styles from './ReportContent.module.sass'

class ReportContent extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    description: '',
    links: '',
    images: [],
    archived: false
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getReportById(id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.report != this.props.report) {
      if (this.props.report.report) {
        const report = this.props.report.report
        this.setState({
          archived: report.archived
          // firstName: report.firstName,
          // lastName: report.lastName,
          // email: report.email,
          // phone: report.phone,
          // date: report.date,
          // description: report.description,
          // links: report.links,
          // images: report.images
        })
      }
    }
  }

  componentWillUnmount() {
    this.props.clearSingle('report')
  }

  onSendToArchiveClick = id => {
    this.props.sendToArchive(id)
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
                <Moment format="YYYY/MM/DD - HH:mm">{report.date}</Moment>
              </div>
              <p>Nachricht</p>
              <div className={styles['report-message']}>
                {report.description}
              </div>
              <p>Links</p>
              <div className={styles['report-links']}>
                {report.links &&
                  report.links.split(',').map(link => (
                    <div>
                      <a
                        target="_blank"
                        href={
                          link.indexOf('://') !== -1 ? link : `http://${link}`
                        }
                      >
                        {link}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
            <p>Bilder</p>
            <div className={styles['image-container']}>
              {report.images ? (
                report.images.map((image, index) => (
                  <div className={styles['thumb-container']} key={index}>
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
            {/* <div className={styles['archive-button']}>
              <button
                onClick={this.onSendToArchiveClick.bind(this, report._id)}
              >
                {this.state.archived ? 'Aus Archiv holen' : 'Archivieren'}
              </button>
            </div> */}
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
  { getReportById, sendToArchive, clearSingle }
)(ReportContent)
