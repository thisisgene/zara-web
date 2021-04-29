import React, { Component } from "react"

import { stepEleven } from "./step_data"

import styles from "../Steps.module.sass"

class StepA11 extends Component {
  state = {
    online:
      this.props.report.newReport &&
      this.props.report.newReport.stepA11 &&
      this.props.report.newReport.stepA11.online,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA11")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { online } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepEleven[lang].text }} />

        {stepEleven[lang].options.map((option) => (
          <div className={styles["radio-wrapper"]}>
            <input
              type="radio"
              name={stepEleven[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === online}
              onChange={this.onChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default StepA11
