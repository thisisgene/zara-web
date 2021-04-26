import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepOne } from "./step_data"

import styles from "../Steps.module.sass"

class StepA1 extends Component {
  state = {
    directReaction:
      this.props.report.stepA1 && this.props.report.stepA1.directReaction,
    text1a1: this.props.report.stepA1 && this.props.report.stepA1.text1a1,
    text1a2a: this.props.report.stepA1 && this.props.report.stepA1.text1a2a,
    text1a2b: this.props.report.stepA1 && this.props.report.stepA1.text1a2b,
    text1a2c: this.props.report.stepA1 && this.props.report.stepA1.text1a2c,
    text1b1: this.props.report.stepA1 && this.props.report.stepA1.text1b1,
    text1b2: this.props.report.stepA1 && this.props.report.stepA1.text1b2,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA1")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { directReaction } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepOne[lang].text1 }} />

        {stepOne[lang].options.map((option) => (
          <div>
            <input
              type="radio"
              name={stepOne[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === this.state.directReaction}
              onChange={this.onChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}
        {directReaction === "yes" && (
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: stepOne[lang].text1A1.text }}
            />
            <input
              type="text"
              name={stepOne[lang].text1A1.name}
              value={this.state[stepOne[lang].text1A1.name]}
              onChange={this.onChange}
            />

            <p
              dangerouslySetInnerHTML={{ __html: stepOne[lang].text1A2.text }}
            />
            <input
              type="text"
              name={stepOne[lang].text1A2.name}
              value={this.state[stepOne[lang].text1A2.name]}
              onChange={this.onChange}
            />
            <input
              type="text"
              name={stepOne[lang].text1A2.name2}
              value={this.state[stepOne[lang].text1A2.name2]}
              onChange={this.onChange}
            />
            <input
              type="text"
              name={stepOne[lang].text1A2.name3}
              value={this.state[stepOne[lang].text1A2.name3]}
              onChange={this.onChange}
            />
          </div>
        )}
        {directReaction === "no" && (
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: stepOne[lang].text1B1.text }}
            />
            <textarea
              name={stepOne[lang].text1B1.name}
              value={this.state[stepOne[lang].text1B1.name]}
              onChange={this.onChange}
            />
            <p
              dangerouslySetInnerHTML={{ __html: stepOne[lang].text1B2.text }}
            />
            <input
              type="text"
              name={stepOne[lang].text1B2.name}
              value={this.state[stepOne[lang].text1B2.name]}
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

export default connect(mapStateToProps, { storeReportData })(StepA1)
