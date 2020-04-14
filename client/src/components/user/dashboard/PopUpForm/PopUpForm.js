import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ReCAPTCHA from 'react-google-recaptcha'

import {
  getAll,
  sendTrainingRequest,
  trainingRequestReset,
} from '../../../../actions/adminActions'

import TextFieldGroup from '../../common/TextFieldGroup'
import TextareaFieldGroup from '../../common/TextareaFieldGroup'

import Spinner from '../Spinner/Spinner'
import successIcon from '../../common/assets/icon/various/success.png'

import { formData } from './PopUpFormData'

import globalStyles from '../../../admin/common/Bootstrap.module.css'
import styles from './PopUpForm.module.sass'

class PopUpForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    captcha: false,
    bulletins: [],
    selectId: this.props.preSelectId ? this.props.preSelectId : 'no_select',
    selectTitle: '',
    sendSuccess: false,
    loading: false,
  }

  componentDidMount() {
    this.props.getAll('bulletins')
  }

  componentDidUpdate(prevProps) {
    if (this.props.bulletin !== prevProps.bulletin) {
      this.setState(
        {
          bulletins: this.props.bulletin.bulletins,
        },
        () => {
          let title = ''
          title = this.getTitleFromId(this.state.selectId)
          title !== '' &&
            this.setState({
              selectTitle: title,
            })
        }
      )
    }
    if (this.props.training !== prevProps.training) {
      if (this.props.training.trainingRequestSuccess === 'success') {
        this.setState({
          loading: false,
          sendSuccess: true,
        })
      }
    }
  }

  getTitleFromId = id => {
    let selTraining = this.props.bulletin.bulletins.filter(
      training => training._id === id
    )
    if (selTraining.length > 0) {
      return selTraining[0]['de'].title
    } else {
      return 'Allgemeine Anfrage'
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSelectChange = e => {
    let title = ''
    title = this.getTitleFromId(e.target.value)
    title !== '' &&
      this.setState({
        selectId: e.target.value,
        selectTitle: title,
      })
  }

  onSaveClick = () => {
    const saveObj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
      selectedTitle: this.state.selectTitle,
    }
    this.setState({ loading: true })
    this.props.sendTrainingRequest(saveObj)
  }

  onCaptchaChange = value => {
    console.log('captcha: ', value)
  }

  onCloseButtonClick = () => {
    this.props.trainingRequestReset()
    this.props.onCloseClick(false)
  }

  render() {
    const { lang, onCloseClick } = this.props
    const { bulletins, sendSuccess, loading } = this.state
    return (
      <div className={styles['popup-form-container']}>
        {bulletins && (
          <div className={styles['popup-form']}>
            {!sendSuccess ? (
              <Fragment>
                <Spinner nowActive={loading}></Spinner>
                <div className={styles['popup-form--header']}>
                  <h1>{formData[lang].title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: formData[lang].info }}
                  />
                </div>
                <div className={styles['popup-form--body']}>
                  <div className={styles['popup-form--body__line']}>
                    <label htmlFor="trainingSelect">
                      {formData[lang].selectLabel}
                    </label>
                    <div className={globalStyles['form-group']}>
                      <select
                        className={globalStyles['form-control']}
                        id="trainingSelect"
                        name="trainingSelect"
                        value={this.state.selectId}
                        onChange={this.onSelectChange}
                      >
                        <optgroup>
                          <option value="no_select">
                            {formData[lang].generalRequest}
                          </option>
                        </optgroup>
                        <optgroup label="hallo">
                          {bulletins.map(training => (
                            <option value={training._id}>
                              {training[lang].title}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div
                    className={styles['popup-form--body__disclaimer']}
                    dangerouslySetInnerHTML={{
                      __html: formData[lang].disclaimer,
                    }}
                  ></div>
                  <div className={styles['popup-form--body__line']}>
                    <div className={globalStyles['form-group']}>
                      <label htmlFor="firstname">{formData[lang].fName}</label>
                      <TextFieldGroup
                        id="firstname"
                        name="firstname"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.onChange}
                        // placeholder={formData[lang].fName}
                      />
                    </div>
                    <div className={globalStyles['form-group']}>
                      <label htmlFor="lastname">{formData[lang].lName}</label>
                      <TextFieldGroup
                        id="lastname"
                        name="lastname"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.onChange}
                        // placeholder={formData[lang].lName}
                      />
                    </div>
                  </div>
                  <div className={styles['popup-form--body__line']}>
                    <div className={globalStyles['form-group']}>
                      <label htmlFor="phone">{formData[lang].phone}</label>
                      <TextFieldGroup
                        id="phone"
                        name="phone"
                        type="tel"
                        value={this.state.phone}
                        onChange={this.onChange}
                        // placeholder={formData[lang].phone}
                      />
                    </div>
                    <div className={globalStyles['form-group']}>
                      <label htmlFor="email">{formData[lang].email}</label>
                      <TextFieldGroup
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        // placeholder={formData[lang].email}
                      />
                    </div>
                  </div>
                  <div className={styles['popup-form--body__line']}>
                    <div className={globalStyles['form-group']}>
                      <label htmlFor="message">{formData[lang].message}</label>
                      <TextareaFieldGroup
                        id="message"
                        name="message"
                        value={this.state.message}
                        onChange={this.onChange}
                        // placeholder={formData[lang].message}
                      />
                    </div>
                  </div>
                  <div className={styles['popup-form--body__line']}>
                    <ReCAPTCHA
                      sitekey="6LeQKuYUAAAAAOrRih1ajIajCxHw055WU6PH0MpC"
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
                    onClick={this.onCloseButtonClick}
                  >
                    {formData[lang].buttons.close}
                  </button>
                </div>
              </Fragment>
            ) : (
              <div className={styles['popup-form--header__center']}>
                <img src={successIcon} alt="" />
                <h1>{formData[lang].success.title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: formData[lang].success.body,
                  }}
                />
                <button
                  className={styles['close']}
                  onClick={this.onCloseButtonClick}
                >
                  {formData[lang].buttons.close}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bulletin: state.bulletin,
  training: state.training,
})

export default connect(mapStateToProps, {
  getAll,
  sendTrainingRequest,
  trainingRequestReset,
})(PopUpForm)
