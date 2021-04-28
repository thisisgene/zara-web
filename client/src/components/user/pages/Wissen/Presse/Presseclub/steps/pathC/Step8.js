import React, { Component } from "react"

import { stepEight } from "./step_data"

import styles from "../Steps.module.sass"

class StepA8 extends Component {
  state = {
    witness:
      this.props.report.newReport &&
      this.props.report.newReport.stepA8 &&
      this.props.report.newReport.stepA8.witness,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA8")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { witness } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepEight[lang].text }} />

        {stepEight[lang].options.map((option) => (
          <div className={styles["radio-wrapper"]}>
            <input
              type="radio"
              name={stepEight[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === witness}
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

export default StepA8
