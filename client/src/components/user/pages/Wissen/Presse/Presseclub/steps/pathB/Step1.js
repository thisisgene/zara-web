import React, { Component } from "react"
// import { connect } from "react-redux"

// import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepOne } from "./step_data"

import styles from "../Steps.module.sass"

class StepA1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      directReaction:
        this.props.report.newReport &&
        this.props.report.newReport.stepA1 &&
        this.props.report.newReport.stepA1.directReaction,
      text1a1:
        this.props.report.newReport &&
        this.props.report.newReport.stepA1 &&
        this.props.report.newReport.stepA1.text1a1,
      text1a2a:
        this.props.report.newReport &&
        this.props.report.newReport.stepA1 &&
        this.props.report.newReport.stepA1.text1a2a,
      text1a2b:
        this.props.report.newReport &&
        this.props.report.newReport.stepA1 &&
        this.props.report.newReport.stepA1.text1a2b,
      text1a2c:
        this.props.report.newReport &&
        this.props.report.newReport.stepA1 &&
        this.props.report.newReport.stepA1.text1a2c,
      text1b1:
        this.props.report.newReport &&
        this.props.report.newReport.stepA1 &&
        this.props.report.newReport.stepA1.text1b1,
      text1b2:
        this.props.report.newReport &&
        this.props.report.newReport.stepA1 &&
        this.props.report.newReport.stepA1.text1b2,
    }
    this._validateOnDemand = true // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this)
    this.isValidated = this.isValidated.bind(this)
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

  isValidated() {
    const userInput = this.state // grab user entered vals
    const validateNewInput = this._validateData(userInput) // run the new input against the validator
    let isDataValid = false

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewInput).every((k) => {
        return validateNewInput[k] === true
      })
    ) {
      isDataValid = true
    } else {
      // if anything fails then update the UI validation state but NOT the UI Data State

      this.setState(
        Object.assign(
          userInput,
          validateNewInput,
          this._validationErrors(validateNewInput)
        )
      )
    }

    return isDataValid
  }

  validationCheck() {
    if (!this._validateOnDemand) return

    const userInput = this.state // grab user entered vals
    const validateNewInput = this._validateData(userInput) // run the new input against the validator

    this.setState(
      Object.assign(
        userInput,
        validateNewInput,
        this._validationErrors(validateNewInput)
      )
    )
  }

  _validateData(data) {
    return {
      optionVal: data.directReaction !== undefined,
      text1a1Val:
        data.directReaction === "no" ||
        (data.directReaction === "yes" &&
          data.text1a1 !== undefined &&
          data.text1a1 !== ""),
      text1b1Val:
        data.directReaction === "yes" ||
        (data.directReaction === "no" &&
          data.text1b1 !== undefined &&
          data.text1b1 !== ""),
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      optionValMsg: val.optionVal ? "" : "Bitte wählen Sie eine Option.",
      text1a1ValMsg: val.text1a1Val ? "" : "Darf nicht leer bleiben.",
      text1b1ValMsg: val.text1b1Val ? "" : "Darf nicht leer bleiben.",
    }
    return errMsgs
  }

  render() {
    const { lang } = this.props
    const { directReaction } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepOne[lang].text1 }} />

        {stepOne[lang].options.map((option) => (
          <div className={styles["radio-wrapper"]}>
            <input
              type="radio"
              name={stepOne[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === this.state.directReaction}
              onChange={this.onChange}
              onBlur={this.validationCheck}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}
        {this.state.optionValMsg && (
          <span className={styles["error-msg"]}>{this.state.optionValMsg}</span>
        )}
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
              onBlur={this.validationCheck}
            />
            {this.state.text1a1ValMsg && (
              <span className={styles["error-msg"]}>
                {this.state.text1a1ValMsg}
              </span>
            )}
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
              onBlur={this.validationCheck}
            />
            {this.state.text1b1ValMsg && (
              <span className={styles["error-msg"]}>
                {this.state.text1b1ValMsg}
              </span>
            )}
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

// export default connect(mapStateToProps, { storeReportData })(StepA1)
export default StepA1
