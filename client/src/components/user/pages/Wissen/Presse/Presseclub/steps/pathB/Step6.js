import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepSix } from "./step_data"

import styles from "../Steps.module.sass"

class StepA6 extends Component {
  state = {
    jurid:
      this.props.report.newReport &&
      this.props.report.newReport.stepA6 &&
      this.props.report.newReport.stepA6.jurid,
    text6:
      this.props.report.newReport &&
      this.props.report.newReport.stepA6 &&
      this.props.report.newReport.stepA6.text6,
    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA6 &&
      this.props.report.newReport.stepA6.msgValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA6")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { jurid } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepSix[lang].text6 }} />

        {stepSix[lang].options.map((option) => (
          <div>
            <input
              type="radio"
              name={stepSix[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === jurid}
              onChange={this.onChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
            {option.value === "other" && (
              <>
                <br />
                <textarea
                  name="msgValue"
                  value={this.state.msgValue}
                  onChange={this.onChange}
                  disabled={jurid !== "other"}
                />
              </>
            )}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA6)
