import React, { Component, Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import Recaptcha from 'react-google-invisible-recaptcha'

import {
  getAll,
  sendTrainingRequest,
  trainingRequestReset,
} from '../../../../actions/adminActions'

import Spinner from '../Spinner/Spinner'
import successIcon from '../../common/assets/icon/various/success.png'

import { formData } from './PopUpFormData'

import { trainingTags } from '../../pages/Training/training_data.js'

import globalStyles from '../../../admin/common/Bootstrap.module.css'
import styles from './PopUpForm.module.sass'

function Form({ props }) {
  const getTitleFromId = id => {
    let selTraining = props.bulletins.filter(training => training._id === id)
    if (selTraining.length > 0) {
      return selTraining[0]['de'].title
    } else {
      return 'Allgemeine Anfrage'
    }
  }
  const getCategoryFromId = id => {
    let selTraining = props.bulletins.filter(training => training._id === id)
    if (selTraining.length > 0) {
      return selTraining[0].category.label
    } else {
      return 'Allgemein'
    }
  }

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    const trainingTitle = getTitleFromId(values.trainingSelect)
    const trainingCategory = getCategoryFromId(values.trainingSelect)
    const dataObj = {
      ...values,
      trainingTitle,
      trainingCategory,
    }
    if (props.captchaResolved) { props.onSaveClick(dataObj) } else { console.log('ReCaptcha not resolved') }
  }

  const onConsentChange = e => {
    setConsent(e.target.checked)
  }

  const {
    lang,
    bulletins,
    loading,
    onCloseButtonClick,
    sendSuccess,
    selectId,
    successMsg,
    recaptcha,
    onResolved

  } = props
  const [selectedId] = useState(selectId)
  let [consented, setConsent] = useState(false)
  const requiredText = lang === 'de' ? 'Erforderlich' : 'Required'
  const invalidEmailText =
    lang === 'de' ? 'Ungültige E-mail Adresse' : 'Invalid email address'
  return (
    <div>
      <div className={styles['popup-form']}>
        {!sendSuccess ? (
          <Fragment>
            <Spinner nowActive={loading}></Spinner>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles['popup-form--header']}>
                <h1>{formData[lang].title}</h1>
                <div
                  className={styles['popup-form--header__info']}
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
                      ref={register}
                    // defaultValue={selectedId}
                    // onChange={this.onSelectChange}
                    >

                      <optgroup>
                        <option value="no_select">
                          {formData[lang].generalRequest}
                        </option>
                      </optgroup>
                      {trainingTags.map(tag =>
                        <optgroup label={tag[lang].title}>
                          {bulletins.filter(item => item.category.value === tag.name).map(training => (
                            <option value={training._id} selected={selectedId === training._id}>
                              {training[lang].title}
                            </option>
                          ))}

                        </optgroup>
                      )}
                      {/* <optgroup label="halumni"><option value="NcM9dIIt8">TEST</option></optgroup> */}
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
                    <input
                      className={globalStyles['form-control']}
                      id="firstname"
                      name="firstname"
                      type="text"
                      ref={register({
                        required: requiredText,
                      })}
                    />
                    <p className={styles['is-invalid']}>
                      {errors.firstname && errors.firstname.message}
                    </p>
                  </div>
                  <div className={globalStyles['form-group']}>
                    <label htmlFor="lastname">{formData[lang].lName}</label>
                    <input
                      className={globalStyles['form-control']}
                      id="lastname"
                      name="lastname"
                      type="text"
                      ref={register({
                        required: requiredText,
                      })}
                    />
                    <p className={styles['is-invalid']}>
                      {errors.lastname && errors.lastname.message}
                    </p>
                  </div>
                </div>
                <div className={styles['popup-form--body__line']}>
                  <div className={globalStyles['form-group']}>
                    <label htmlFor="phone">{formData[lang].phone}</label>
                    <input
                      className={globalStyles['form-control']}
                      id="phone"
                      name="phone"
                      type="tel"
                      ref={register({
                        required: requiredText,
                      })}
                    />
                    <p className={styles['is-invalid']}>
                      {errors.phone && errors.phone.message}
                    </p>
                  </div>
                  <div className={globalStyles['form-group']}>
                    <label htmlFor="email">{formData[lang].email}</label>
                    <input
                      className={globalStyles['form-control']}
                      id="email"
                      name="email"
                      type="email"
                      ref={register({
                        required: requiredText,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: invalidEmailText,
                        },
                      })}
                    />
                    <p className={styles['is-invalid']}>
                      {errors.email && errors.email.message}
                    </p>
                  </div>
                </div>
                <div className={styles['popup-form--body__line']}>
                  <div className={globalStyles['form-group']}>
                    <label htmlFor="message">{formData[lang].message}</label>
                    <textarea
                      className={globalStyles['form-control']}
                      id="message"
                      name="message"
                      ref={register}
                    />
                  </div>
                </div>
                <div className={styles['popup-form--body__consent']}>

                  <input
                    // className={globalStyles['form-control']}
                    type="checkbox"
                    id="consent"
                    name="consent"
                    onChange={onConsentChange}
                    ref={register}
                  />
                  <label htmlFor="consent" dangerouslySetInnerHTML={{ __html: formData[lang].consent }}></label>
                </div>

              </div>
              <div className={styles['popup-form--buttons']}>
                <button type="submit" disabled={!consented}>Submit</button>
                <button
                  type="cancel"
                  className={styles['close']}
                  onClick={onCloseButtonClick}
                >
                  {formData[lang].buttons.close}
                </button>
              </div>

              {/* <input
          name="username"
          ref={register({
            validate: value => value !== 'admin' || 'Nice try!',
          })}
        />
        {errors.username && errors.username.message} */}
            </form>{' '}
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
              <div
                className={styles['popup-form--header__success-msg']}
                dangerouslySetInnerHTML={{ __html: successMsg }}
              />
              <button className={styles['close']} onClick={onCloseButtonClick}>
                {formData[lang].buttons.close}
              </button>
            </div>
          )}
      </div>
    </div >
  )
}

class PopUpForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: '',
    captchaResolved: false,
    bulletins: [],
    selectId: this.props.preSelectId ? this.props.preSelectId : 'no_select',
    selectTitle: '',
    sendSuccess: false,
    successMsg: '',
    loading: false,
  }

  componentDidMount() {
    this.props.getAll('bulletins')

  }

  componentDidUpdate(prevProps) {
    if (this.props.bulletin !== prevProps.bulletin) {
      this.recaptcha.execute()
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
          successMsg: this.props.training.trainingRequestSuccessMsg,
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

  onSaveClick = dataObj => {

    this.setState({ loading: true })
    this.props.sendTrainingRequest(dataObj)
  }

  onCaptchaChange = value => {
  }

  onCloseButtonClick = () => {
    this.props.trainingRequestReset()
    this.props.onCloseClick(false)
  }

  onResolved = () => {
    this.setState({ captchaResolved: true })
  }

  render() {
    // const { register, handleSubmit, errors } = useForm
    const { lang, onCloseClick } = this.props
    const { bulletins, sendSuccess, loading, selectId, successMsg, captchaResolved, onResolved } = this.state
    return (
      <div>
        {bulletins && formData && (
          <div className={styles['popup-form-container']}><Form
            props={{
              lang,
              bulletins,
              loading,
              sendSuccess,
              onCloseButtonClick: this.onCloseButtonClick,
              selectId,
              onSaveClick: this.onSaveClick,
              successMsg,
              // recaptcha,
              captchaResolved,
              onResolved
            }}
          />
            <Recaptcha
              ref={ref => this.recaptcha = ref}
              sitekey={formData.captchaKey}
              onResolved={this.onResolved}
            /></div>
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
