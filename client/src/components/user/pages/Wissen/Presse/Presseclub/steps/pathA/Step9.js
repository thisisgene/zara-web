import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepNine } from "./step_data"

import styles from "../Steps.module.sass"

class StepA9 extends Component {
  state = {
    gender: this.props.report.stepA9 && this.props.report.stepA9.gender,
    msgValue: this.props.report.stepA9 && this.props.report.stepA9.msgValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA9")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { gender } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepNine[lang].text9 }} />

        {stepNine[lang].options.map((option) => (
          <div>
            <input
              type="radio"
              name={stepNine[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === gender}
              onChange={this.onChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
            {option.value === "other" && (
              <>
                {" "}
                <input
                  type="text"
                  name="msgValue"
                  value={this.state.msgValue}
                  onChange={this.onChange}
                  disabled={gender !== "other"}
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

export default connect(mapStateToProps, { storeReportData })(StepA9)
