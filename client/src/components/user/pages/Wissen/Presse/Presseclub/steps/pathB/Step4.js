import React, { Component } from "react"

import { stepFour } from "./step_data"

import styles from "../Steps.module.sass"

class StepA4 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      privatemsg:
        this.props.report.newReport &&
        this.props.report.newReport.stepA4 &&
        this.props.report.newReport.stepA4.privatemsg,

      msgValue:
        this.props.report.newReport &&
        this.props.report.newReport.stepA4 &&
        this.props.report.newReport.stepA4.msgValue,
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
          this.props.storeReportData(this.state, "stepA4")
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
      optionVal: data.privatemsg !== undefined,
      msgValueVal:
        data.privatemsg === "no" ||
        (data.privatemsg === "yes" &&
          data.msgValue !== undefined &&
          data.msgValue !== ""),
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      optionValMsg: val.optionVal ? "" : "Bitte wählen Sie eine Option.",
      msgValueValMsg: val.msgValueVal ? "" : "Darf nicht leer bleiben.",
    }
    return errMsgs
  }

  render() {
    const { lang } = this.props
    const { privatemsg } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepFour[lang].text4a }} />

        {stepFour[lang].options.map((option) => (
          <div className={styles["radio-wrapper"]}>
            <input
              type="radio"
              name={stepFour[lang].optionName}
              id={option.value}
              value={option.value}
              checked={option.value === privatemsg}
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
        {privatemsg === "yes" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: stepFour[lang].text4b }} />
            <textarea
              name={"msgValue"}
              value={this.state["msgValue"]}
              onChange={this.onChange}
              onBlur={this.validationCheck}
            />
            {this.state.msgValueValMsg && (
              <span className={styles["error-msg"]}>
                {this.state.msgValueValMsg}
              </span>
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default StepA4
