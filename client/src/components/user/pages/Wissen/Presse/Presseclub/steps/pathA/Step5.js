import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepFive } from "./step_data"

import styles from "../Steps.module.sass"

class StepA5 extends Component {
  state = {
    text2: this.props.report.stepA5 && this.props.report.stepA5.text5a,
    sexism: this.props.report.stepA5 && this.props.report.stepA5.sexism,
    racism: this.props.report.stepA5 && this.props.report.stepA5.racism,
    heteronormativism:
      this.props.report.stepA5 && this.props.report.stepA5.heteronormativism,
    ableism: this.props.report.stepA5 && this.props.report.stepA5.ableism,
    ageism: this.props.report.stepA5 && this.props.report.stepA5.ageism,
    politics: this.props.report.stepA5 && this.props.report.stepA5.politics,
    other: this.props.report.stepA5 && this.props.report.stepA5.other,
    otherValue: this.props.report.stepA5 && this.props.report.stepA5.otherValue,
    textarea1: this.props.report.stepA5 && this.props.report.stepA5.textarea1,
    textarea2: this.props.report.stepA5 && this.props.report.stepA5.textarea2,
    textarea3: this.props.report.stepA5 && this.props.report.stepA5.textarea3,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA5")
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
          this.props.storeReportData(this.state, "stepA5")
        }
      )
    }
  }

  render() {
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepFive.text5a }} />

        {stepFive.options.map((option) => (
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
        <p dangerouslySetInnerHTML={{ __html: stepFive.text5b }} />
        <input
          type="text"
          name="textarea1"
          value={this.state.textarea1}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="textarea2"
          value={this.state.textarea2}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="textarea3"
          value={this.state.textarea3}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA5)
