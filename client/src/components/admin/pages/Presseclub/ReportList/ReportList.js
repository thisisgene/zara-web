import React, { Component } from 'react'

import ReportListItem from './ReportListItem'
import ExportAllCsv from './ExportAllCsv'

import styles from './ReportList.module.sass'

class ReportList extends Component {
  state = {
    showArchive: false,
    A: true,
    B: true,
    C: true,
    D: true,
  }

  onArchivClick = () => {
    this.setState({
      showArchive: !this.state.showArchive,
    })
  }

  onCheckChange = e => {
    this.setState({
      [e.target.name]: e.target.checked,
    })
  }

  render() {
    const { reports } = this.props
    const pathArray = ['A', 'B', 'C', 'D']
    return (
      <div className={styles['report-list']}>
        <div className={styles['export-button']}>
          {reports && <ExportAllCsv reports={reports} />}
        </div>
        <hr />
        <div className={styles['archive-button']}>
          <button onClick={this.onArchivClick}>
            {!this.state.showArchive
              ? 'Zum Archiv'
              : 'Zu den aktuellen Meldungen'}
          </button>
        </div>
        <p>Pfade anzeigen:</p>
        <div className={styles['filter-section']}>
          {pathArray.map(path => (
            <div className={styles['filter-section--item']}>
              <input
                type="checkbox"
                id={path}
                name={path}
                checked={this.state[path]}
                onChange={this.onCheckChange}
              />
              <label for={path}>{path}</label>
            </div>
          ))}
        </div>
        {reports &&
          reports
            .filter(report => report.archived == this.state.showArchive)
            .filter(
              report =>
                (this.state.A &&
                  report.category == 'online' &&
                  report.perspective == 'first') ||
                (this.state.B &&
                  report.category == 'online' &&
                  report.perspective == 'third') ||
                (this.state.C &&
                  report.category == 'public' &&
                  report.perspective == 'first') ||
                (this.state.D &&
                  report.category == 'public' &&
                  report.perspective == 'third')
            )
            // .filter(
            //   report =>
            //     this.state.C &&
            //     report.category === 'public' &&
            //     report.perspective === 'first'
            // )
            // .filter(
            //   report =>
            //     this.state.D &&
            //     report.category === 'public' &&
            //     report.perspective === 'third'
            // )
            .map((report, index) => (
              <ReportListItem key={index} report={report} />
            ))}
      </div>
    )
  }
}

export default ReportList
