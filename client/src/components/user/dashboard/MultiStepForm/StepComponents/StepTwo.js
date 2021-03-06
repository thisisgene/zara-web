import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { stepTwo } from './step_data'

import styles from '../MultiStepForm.module.sass';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.getStore().description
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() { }

  componentWillUnmount() { }

  isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewInput).every(k => {
        return validateNewInput[k] === true;
      })
    ) {
      if (this.props.getStore().description !== userInput.description) {
        // only update store of something changed
        this.props.updateStore({
          ...userInput,
          savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        }); // Update store here (this is just an example, in reality you will do it via redux or flux)
      }

      isDataValid = true;
    } else {
      // if anything fails then update the UI validation state but NOT the UI Data State
      this.setState(
        Object.assign(
          userInput,
          validateNewInput,
          this._validationErrors(validateNewInput)
        )
      );
    }

    return isDataValid;
  }
  _grabUserInput() {
    return {
      description: this.refs.description.value
    };
  }
  validationCheck() {
    if (!this._validateOnDemand) return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    this.setState(
      Object.assign(
        userInput,
        validateNewInput,
        this._validationErrors(validateNewInput)
      )
    );
  }

  _validateData(data) {
    return {
      descriptionVal: data.description !== ''
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      descriptionValMsg: val.descriptionVal ? '' : stepTwo[this.props.lang].emptyError
    };
    return errMsgs;
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles['step']}>
        <div className="row">
          <form id="Form" className="form-horizontal">
            <h1>{stepTwo[lang].title}</h1>
            <p>
              {stepTwo[lang].text}
            </p>

            <div>
              <textarea
                ref="description"
                autoComplete="off"
                className="form-control"
                required
                defaultValue={this.state.description}
                onBlur={this.validationCheck}
                onChange={this.validationCheck}
              />
              <div style={{ 'color': 'red' }}>{this.state.descriptionValMsg}</div>
              <p>
                <span dangerouslySetInnerHTML={{ __html: stepTwo[lang].disclaimer }} />
                {' '}
                <Link
                  style={{ color: '#111' }}
                  to={stepTwo[lang].link}
                >
                  {stepTwo[lang].linkText}
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
