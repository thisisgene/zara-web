import React, { Component } from "react"

import ReportListItem from "./ReportListItem"

import styles from "./ReportList.module.sass"

class ReportList extends Component {
  state = {
    showArchive: false,
  }

  onArchivClick = () => {
    this.setState({
      showArchive: !this.state.showArchive,
    })
  }

  render() {
    const { reports } = this.props
    return (
      <div className={styles["report-list"]}>
        <div className={styles["archive-button"]}>
          <button onClick={this.onArchivClick}>
            {!this.state.showArchive
              ? "Zum Archiv"
              : "Zu den aktuellen Meldungen"}
          </button>
        </div>
        {reports &&
          reports
            // .filter((report) => report.archived == this.state.showArchive)
            .map((report, index) => (
              <ReportListItem key={index} report={report} />
            ))}
      </div>
    )
  }
}

export default ReportList
