import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import TextFieldGroup from '../../common/TextFieldGroup';
import TextareaFieldGroup from '../../common/TextareaFieldGroup';

import { formData } from './PopUpFormData';

import styles from './PopUpForm.module.sass';

export default class PopUpForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    captcha: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSaveClick = () => {
    const saveObj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message
    };
    console.log(saveObj);
  };

  onCaptchaChange = value => {
    console.log('captcha: ', value);
  };

  render() {
    const { lang, onCloseClick } = this.props;
    return (
      <div className={styles['popup-form-container']}>
        <div className={styles['popup-form']}>
          <div className={styles['popup-form--header']}>
            <h1>{formData[lang].title}</h1>
            <div dangerouslySetInnerHTML={{ __html: formData[lang].info }} />
          </div>
          <div className={styles['popup-form--body']}>
            <div
              className={styles['popup-form--body__disclaimer']}
              dangerouslySetInnerHTML={{ __html: formData[lang].disclaimer }}
            ></div>
            <div className={styles['popup-form--body__line']}>
              <TextFieldGroup
                name="firstname"
                type="text"
                value={this.state.firstname}
                onChange={this.onChange}
                placeholder={formData[lang].fName}
              />
              <TextFieldGroup
                name="lastname"
                type="text"
                value={this.state.lastname}
                onChange={this.onChange}
                placeholder={formData[lang].lName}
              />
            </div>
            <div className={styles['popup-form--body__line']}>
              <TextFieldGroup
                name="phone"
                type="tel"
                value={this.state.phone}
                onChange={this.onChange}
                placeholder={formData[lang].phone}
              />
              <TextFieldGroup
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder={formData[lang].email}
              />
            </div>
            <div className={styles['popup-form--body__line']}>
              <TextareaFieldGroup
                name="message"
                value={this.state.message}
                onChange={this.onChange}
                placeholder={formData[lang].message}
              />
            </div>
            <div className={styles['popup-form--body__line']}>
              <ReCAPTCHA
                sitekey="6Lc5K-YUAAAAAKdenY1s1yQYOABhPpy_pNTgkvFb"
                onChange={this.onCaptchaChange}
              />
            </div>
          </div>
          <div className={styles['popup-form--buttons']}>
            <button onClick={this.onSaveClick}>
              {formData[lang].buttons.send}
            </button>
            <button
              className={styles['close']}
              onClick={() => onCloseClick(false)}
            >
              {formData[lang].buttons.close}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
