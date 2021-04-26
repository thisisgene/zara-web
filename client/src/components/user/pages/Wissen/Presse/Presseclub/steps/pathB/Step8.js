import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepEight } from "./step_data"

import styles from "../Steps.module.sass"

class StepA8 extends Component {
  state = {
    solidarity:
      this.props.report.newReport &&
      this.props.report.newReport.stepA8 &&
      this.props.report.newReport.stepA8.solidarity,
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
    const { solidarity } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepEight[lang].text8 }} />

        {stepEight[lang].options.map((option) => (
          <div>
            <input
              type="radio"
              name={stepEight[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === solidarity}
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

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA8)
