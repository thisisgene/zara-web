import React, { Component } from "react"

import { stepFive } from "./step_data"

import styles from "../Steps.module.sass"

class StepA5 extends Component {
  state = {
    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA5 &&
      this.props.report.newReport.stepA5.msgValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA5")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepFive[lang].text }} />
        <br />
        <textarea
          name="msgValue"
          value={this.state.msgValue}
          onChange={this.onChange}
          onBlur={this.validationCheck}
        />
        {this.state.msgValMsg && (
          <span className={styles["error-msg"]}>{this.state.msgValMsg}</span>
        )}
      </div>
    )
  }
}

export default StepA5
