import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepFinal } from "./step_data"

import styles from "../Steps.module.sass"

class StepFinal extends Component {
  state = {
    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA11 &&
      this.props.report.newReport &&
      this.props.report.newReport.stepA11.msgValue,
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepFinal[lang].text }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepFinal)
