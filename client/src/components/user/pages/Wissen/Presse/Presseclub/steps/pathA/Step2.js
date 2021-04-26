import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepTwo } from "./step_data"

import styles from "../Steps.module.sass"

class StepA2 extends Component {
  state = {
    text2: this.props.report.stepA2 && this.props.report.stepA2.text2,
    facebook: this.props.report.stepA2 && this.props.report.stepA2.facebook,
    twitter: this.props.report.stepA2 && this.props.report.stepA2.twitter,
    instagram: this.props.report.stepA2 && this.props.report.stepA2.instagram,
    youtube: this.props.report.stepA2 && this.props.report.stepA2.youtube,
    website: this.props.report.stepA2 && this.props.report.stepA2.website,
    email: this.props.report.stepA2 && this.props.report.stepA2.email,
    other: this.props.report.stepA2 && this.props.report.stepA2.other,
    otherValue: this.props.report.stepA2 && this.props.report.stepA2.otherValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA2")
        }
      )
    }
  }
  onOptionChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.checked,
        },
        () => {
          this.props.storeReportData(this.state, "stepA2")
        }
      )
    }
  }

  render() {
    const { directReaction } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepTwo.text2 }} />

        {stepTwo.options.map((option) => (
          <div>
            <input
              type="checkbox"
              name={option.value}
              id={option.value}
              value={option.value}
              checked={this.state[option.value]}
              onChange={this.onOptionChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}
        <input
          type="text"
          name="otherValue"
          value={this.state.otherValue}
          onChange={this.onChange}
          disabled={!this.state.other}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA2)
