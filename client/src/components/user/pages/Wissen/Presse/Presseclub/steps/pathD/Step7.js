import React, { Component } from "react"

import { stepSeven } from "./step_data"

import styles from "../Steps.module.sass"

class StepA7 extends Component {
  state = {
    racism:
      this.props.report.newReport &&
      this.props.report.newReport.stepA7 &&
      this.props.report.newReport.stepA7.racism,

    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA7 &&
      this.props.report.newReport.stepA7.msgValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA7")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { racism } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepSeven[lang].text }} />

        {stepSeven[lang].options.map((option) => (
          <div className={styles["radio-wrapper"]}>
            <input
              type="radio"
              name={stepSeven[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === racism}
              onChange={this.onChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}
        {racism === "yes" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: stepSeven[lang].textb }} />
            <textarea
              name={"msgValue"}
              value={this.state["msgValue"]}
              onChange={this.onChange}
            />
          </div>
        )}
      </div>
    )
  }
}

export default StepA7
