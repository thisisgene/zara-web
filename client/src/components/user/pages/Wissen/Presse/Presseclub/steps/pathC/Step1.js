import React, { Component } from "react"

import { stepOne } from "./step_data"

import styles from "../Steps.module.sass"

class StepA1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typeOfAbuse: {
        verbal:
          this.props.report.newReport &&
          this.props.report.newReport.stepA1 &&
          this.props.report.newReport.stepA1.typeOfAbuse &&
          this.props.report.newReport.stepA1.typeOfAbuse.verbal,
        physical:
          this.props.report.newReport &&
          this.props.report.newReport.stepA1 &&
          this.props.report.newReport.stepA1.typeOfAbuse &&
          this.props.report.newReport.stepA1.typeOfAbuse.physical,
        damage:
          this.props.report.newReport &&
          this.props.report.newReport.stepA1 &&
          this.props.report.newReport.stepA1.typeOfAbuse &&
          this.props.report.newReport.stepA1.typeOfAbuse.damage,

        other:
          this.props.report.newReport &&
          this.props.report.newReport.stepA1 &&
          this.props.report.newReport.stepA1.typeOfAbuse &&
          this.props.report.newReport.stepA1.typeOfAbuse.other,
        otherValue:
          this.props.report.newReport &&
          this.props.report.newReport.stepA1 &&
          this.props.report.newReport.stepA1.typeOfAbuse &&
          this.props.report.newReport.stepA1.typeOfAbuse.otherValue,
      },
    }
    this._validateOnDemand = true // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this)
    this.isValidated = this.isValidated.bind(this)
  }
  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          typeOfAbuse: {
            ...this.state.typeOfAbuse,
            [e.target.name]: e.target.value,
          },
        },
        () => {
          this.props.storeReportData(this.state, "stepA1")
        }
      )
    }
  }
  onOptionChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          typeOfAbuse: {
            ...this.state.typeOfAbuse,
            [e.target.name]: e.target.checked,
          },
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
      optionVal:
        data.typeOfAbuse.verbal ||
        data.typeOfAbuse.physical ||
        data.typeOfAbuse.damage ||
        data.typeOfAbuse.other,
      otherValueVal:
        !data.typeOfAbuse.other ||
        (data.typeOfAbuse.other &&
          data.typeOfAbuse.otherValue !== undefined &&
          data.typeOfAbuse.otherValue !== ""),
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
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepOne[lang].text }} />

        {stepOne[lang].options.map((option) => (
          <div className={styles["radio-wrapper"]}>
            <input
              type="checkbox"
              name={option.value}
              id={option.value}
              value={option.value}
              checked={this.state.typeOfAbuse[option.value]}
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
          value={this.state.typeOfAbuse.otherValue}
          onChange={this.onChange}
          disabled={!this.state.typeOfAbuse.other}
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

export default StepA1
