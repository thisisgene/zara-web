import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepFour } from "./step_data"

import styles from "../Steps.module.sass"

class StepA4 extends Component {
  state = {
    privatemsg: this.props.report.stepA4 && this.props.report.stepA4.privatemsg,
    text4a: this.props.report.stepA4 && this.props.report.stepA4.text4a,
    text4b: this.props.report.stepA4 && this.props.report.stepA4.text4b,
    msgValue: this.props.report.stepA4 && this.props.report.stepA4.msgValue,
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
    const { privatemsg } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepFour[lang].text4a }} />

        {stepFour[lang].options.map((option) => (
          <div>
            <input
              type="radio"
              name={stepFour[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === privatemsg}
              onChange={this.onChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}

        {privatemsg === "yes" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: stepFour[lang].text4b }} />
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

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA4)
