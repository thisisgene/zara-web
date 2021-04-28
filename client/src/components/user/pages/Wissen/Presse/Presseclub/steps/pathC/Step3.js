import React, { Component } from "react"

import { stepThree } from "./step_data"

import styles from "../Steps.module.sass"

class StepA3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msgValue:
        this.props.report.newReport &&
        this.props.report.newReport.stepA3 &&
        this.props.report.newReport.stepA3.msgValue,
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
      msgVal: data.msgValue && data.msgValue !== "",
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      msgValMsg: val.msgVal ? "" : "Darf nicht leer bleiben.",
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
          this.props.storeReportData(this.state, "stepA3")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepThree[lang].text }} />
        <br />
        <textarea
          name="msgValue"
          value={this.state.msgValue}
          onChange={this.onChange}
          onBlur={this.validationCheck}
        />
        {this.state.msgValMsg && (
          <span className={styles["error-msg"]}>{this.state.msgValMsg}</span>
        )}
      </div>
    )
  }
}

export default StepA3
