import React, { Component } from "react"

import { stepFour } from "./step_data"

import styles from "../Steps.module.sass"

class StepA4 extends Component {
  state = {
    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA4 &&
      this.props.report.newReport.stepA4.msgValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA4")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepFour[lang].text }} />
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

export default StepA4
