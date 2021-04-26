import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepThree } from "./step_data"

import styles from "../Steps.module.sass"

class StepA3 extends Component {
  state = {
    extent: this.props.report.stepA3 && this.props.report.stepA3.extent,
    text3: this.props.report.stepA3 && this.props.report.stepA3.text3,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA3")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { extent } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepThree[lang].text3 }} />

        {stepThree[lang].options.map((option) => (
          <div>
            <input
              type="radio"
              name={stepThree[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === extent}
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

export default connect(mapStateToProps, { storeReportData })(StepA3)
