import React, { Component } from "react"

import { stepTwo } from "./step_data"

import styles from "../Steps.module.sass"

class StepA2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text2:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.text2,
      facebook:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.facebook,
      twitter:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.twitter,
      instagram:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.instagram,
      youtube:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.youtube,
      website:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.website,
      email:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.email,
      other:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.other,
      otherValue:
        this.props.report.newReport &&
        this.props.report.newReport.stepA2 &&
        this.props.report.newReport.stepA2.otherValue,
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
      optionVal:
        data.facebook ||
        data.twitter ||
        data.instagram ||
        data.youtube ||
        data.website ||
        data.email ||
        data.other,
      otherValueVal:
        !data.other ||
        (data.other && data.otherValue !== undefined && data.otherValue !== ""),
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      optionValMsg: val.optionVal
        ? ""
        : "Bitte wählen Sie mindestens eine Option.",
      otherValueValMsg: val.otherValueVal ? "" : "Darf nicht leer bleiben.",
    }
    return errMsgs
  }

  render() {
    const { lang } = this.props
    const { directReaction } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepTwo[lang].text2 }} />

        {stepTwo[lang].options.map((option) => (
          <div>
            <input
              type="checkbox"
              name={option.value}
              id={option.value}
              value={option.value}
              checked={this.state[option.value]}
              onChange={this.onOptionChange}
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
        <input
          type="text"
          name="otherValue"
          value={this.state.otherValue}
          onChange={this.onChange}
          disabled={!this.state.other}
          onBlur={this.validationCheck}
        />
        {this.state.otherValueValMsg && (
          <span className={styles["error-msg"]}>
            {this.state.otherValueValMsg}
          </span>
        )}
      </div>
    )
  }
}

export default StepA2
