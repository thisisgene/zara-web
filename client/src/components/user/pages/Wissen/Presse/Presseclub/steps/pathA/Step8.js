import React, { Component } from "react"

import { stepEight } from "./step_data"

import styles from "../Steps.module.sass"

class StepA8 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solidarity:
        this.props.report.newReport &&
        this.props.report.newReport.stepA8 &&
        this.props.report.newReport.stepA8.solidarity,
    }
    this._validateOnDemand = true // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this)
    this.isValidated = this.isValidated.bind(this)
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
      optionVal: data.solidarity !== undefined,
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      optionValMsg: val.optionVal ? "" : "Bitte wählen Sie eine Option.",
    }
    return errMsgs
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
          <div className={styles["radio-wrapper"]}>
            <input
              type="radio"
              name={stepEight[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === solidarity}
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
      </div>
    )
  }
}

export default StepA8
