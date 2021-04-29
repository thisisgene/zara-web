import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepThirteen } from "./step_data"

import styles from "../Steps.module.sass"

class StepA13 extends Component {
  state = {
    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA13 &&
      this.props.report.newReport.stepA13.msgValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA13")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepThirteen[lang].text }} />
        <br />
        <textarea
          name="msgValue"
          value={this.state.msgValue}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA13)
