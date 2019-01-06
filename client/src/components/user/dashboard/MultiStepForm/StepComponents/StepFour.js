import React, { Component } from 'react'
import PropTypes from 'prop-types'
import validation from 'react-validation-mixin'
import strategy from 'joi-validation-strategy'
import Joi from 'joi'

import styles from '../MultiStepForm.module.sass'

class Step4 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: props.getStore().email,
      userName: props.getStore().userName,
      phone: props.getStore().phone,
      selectedOption: props.getStore().selectedOption
    }

    this._validateOnDemand = true // this flag enables onBlur validation as user fills forms

    this.isValidated = this.isValidated.bind(this)
  }
  isValidated() {
    let isDataValid = true
    if (this.props.getStore().selectedOption !== 'anonym') {
      const userInput = this._grabUserInput()
      if (
        this.props.getStore().email !== userInput.email ||
        this.props.getStore().userName !== userInput.userName ||
        this.props.getStore().phone !== userInput.phone
      ) {
        // only update store of something changed
        this.props.updateStore({
          ...userInput,
          savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        }) // Update store here (this is just an example, in reality you will do it via redux or flux)
      }
    }

    isDataValid = true
    // } else {
    //   // if anything fails then update the UI validation state but NOT the UI Data State
    //   this.setState(
    //     Object.assign(
    //       userInput,
    //       validateNewInput,
    //       this._validationErrors(validateNewInput)
    //     )
    //   )
    // }

    return isDataValid
  }
  _grabUserInput() {
    return {
      email: this.refs.email.value,
      userName: this.refs.userName.value,
      phone: this.refs.phone.value
    }
  }

  onChange = e => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  optionChange = e => {
    this.setState({
      selectedOption: e.target.value
    })
    this.props.updateStore({
      selectedOption: e.target.value,
      savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
    })
    // if (e.target.option === 'anonym') {
    //   this.setState({
    //     userName: '',
    //     email: ''
    //   })
    // }
  }

  render() {
    return (
      <div className={styles['step']}>
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-md-12 ">
                <h1>Wie können wir Sie erreichen (optional)?</h1>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="anonym"
                  checked={this.state.selectedOption === 'anonym'}
                  onChange={this.optionChange}
                />
                Ich will lieber anonym bleiben
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="contactInfo"
                  checked={this.state.selectedOption === 'contactInfo'}
                  onChange={this.optionChange}
                />
                Ich möchte schriftlich und/oder telefonisch beraten werden.
              </label>
            </div>
            {this.state.selectedOption === 'contactInfo' ? (
              <div>
                <div className="form-group col-md-12 content form-block-holder">
                  <p>E-mail Adresse</p>
                  <input
                    ref="email"
                    autoComplete="off"
                    type="email"
                    className="form-control"
                    defaultValue={this.state.email}
                  />
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <div>
                    <p>Name</p>
                    <input
                      ref="userName"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      defaultValue={this.state.userName}
                    />
                  </div>
                </div>
                <div className="form-group col-md-12 content form-block-holder">
                  <div>
                    <p>Telefonnummer</p>
                    <input
                      ref="phone"
                      autoComplete="off"
                      type="text"
                      className="form-control"
                      defaultValue={this.state.phone}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p style={{ fontWeight: 'bold' }}>
                  Sie können selbstverständlich auch anonym melden!
                </p>
                <p>
                  Ohne Kontaktdaten ist es uns allerding nicht möglich, Sie über
                  den weiteren Verlauf des Vorfalls zu informieren und am
                  Laufenden zu halten.
                  <br />
                  <br />
                  Ebenso können wir zur genaueren Klärung des Vorfalls nicht
                  mehr nachfragen. Wir bitten um Ihr Verständnis, dass wir bei
                  Unklarheiten nicht tätig werden können.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    )
  }
}

Step4.propTypes = {
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  handleValidation: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func,
  getStore: PropTypes.func,
  updateStore: PropTypes.func
}

export default Step4
