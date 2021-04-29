import React, { Component } from "react"

import { stepTen } from "./step_data"

import styles from "../Steps.module.sass"

class StepA10 extends Component {
  state = {
    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA10 &&
      this.props.report.newReport.stepA10.msgValue,
    msgValue2:
      this.props.report.newReport &&
      this.props.report.newReport.stepA10 &&
      this.props.report.newReport.stepA10.msgValue2,
    msgValue3:
      this.props.report.newReport &&
      this.props.report.newReport.stepA10 &&
      this.props.report.newReport.stepA10.msgValue3,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA10")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepTen[lang].text }} />

        <input
          type="text"
          name="msgValue"
          value={this.state.msgValue}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="msgValue2"
          value={this.state.msgValue2}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="msgValue3"
          value={this.state.msgValue3}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default StepA10
