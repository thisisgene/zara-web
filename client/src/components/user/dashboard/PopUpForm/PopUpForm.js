import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'

import ReCAPTCHA from 'react-google-recaptcha'

import {
  getAll,
  sendTrainingRequest,
  trainingRequestReset,
} from '../../../../actions/adminActions'

import Spinner from '../Spinner/Spinner'
import successIcon from '../../common/assets/icon/various/success.png'

import { formData } from './PopUpFormData'

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
    props.onSaveClick(dataObj)
  }

  const {
    lang,
    bulletins,
    loading,
    onCloseButtonClick,
    sendSuccess,
    selectId,
    successMsg,
  } = props
  const requiredText = lang === 'de' ? 'Erforderlich' : 'Required'
  const invalidEmailText =
    lang === 'de' ? 'Ungültige E-mail Adresse' : 'Invalid email address'
  return (
    <div className={styles['popup-form-container']}>
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
                      defaultValue={selectId}
                      // onChange={this.onSelectChange}
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
                      // value={this.state.message}
                      // onChange={this.onChange}
                      // placeholder={formData[lang].message}
                    />
                  </div>
                </div>
                <div className={styles['popup-form--body__line']}>
                  <ReCAPTCHA
                    sitekey="6LeQKuYUAAAAAOrRih1ajIajCxHw055WU6PH0MpC"
                    // onChange={this.onCaptchaChange}
                  />
                </div>
              </div>
              <div className={styles['popup-form--buttons']}>
                <button type="submit">Submit</button>
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
    </div>
  )
}

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
    successMsg: '',
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
    // const saveObj = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   phone: this.state.phone,
    //   email: this.state.email,
    //   message: this.state.message,
    //   selectedTitle: this.state.selectTitle,
    // }
    console.log('on save clock', dataObj)
    this.setState({ loading: true })
    this.props.sendTrainingRequest(dataObj)
  }

  onCaptchaChange = value => {
    console.log('captcha: ', value)
  }

  onCloseButtonClick = () => {
    this.props.trainingRequestReset()
    this.props.onCloseClick(false)
  }

  onSubmit = data => {
    console.log(data)
  }

  render() {
    // const { register, handleSubmit, errors } = useForm
    const { lang, onCloseClick } = this.props
    const { bulletins, sendSuccess, loading, selectId, successMsg } = this.state
    return (
      <div>
        {bulletins && (
          <Form
            props={{
              lang,
              bulletins,
              loading,
              sendSuccess,
              onCloseButtonClick: this.onCloseButtonClick,
              selectId,
              onSaveClick: this.onSaveClick,
              successMsg,
            }}
          ></Form>
        )}
      </div>
      // <form
      //   className={styles['popup-form-container']}
      //   onSubmit={handleSubmit(this.onSubmit)}
      // >
      //   {bulletins && (
      //     <div className={styles['popup-form']}>
      //       {!sendSuccess ? (
      //         <Fragment>
      //           <Spinner nowActive={loading}></Spinner>
      //           <div className={styles['popup-form--header']}>
      //             <h1>{formData[lang].title}</h1>
      //             <div
      //               dangerouslySetInnerHTML={{ __html: formData[lang].info }}
      //             />
      //           </div>
      //           <div className={styles['popup-form--body']}>
      //             <div className={styles['popup-form--body__line']}>
      //               <label htmlFor="trainingSelect">
      //                 {formData[lang].selectLabel}
      //               </label>
      //               <div className={globalStyles['form-group']}>
      //                 <select
      //                   className={globalStyles['form-control']}
      //                   id="trainingSelect"
      //                   name="trainingSelect"
      //                   value={this.state.selectId}
      //                   onChange={this.onSelectChange}
      //                 >
      //                   <optgroup>
      //                     <option value="no_select">
      //                       {formData[lang].generalRequest}
      //                     </option>
      //                   </optgroup>
      //                   <optgroup label="hallo">
      //                     {bulletins.map(training => (
      //                       <option value={training._id}>
      //                         {training[lang].title}
      //                       </option>
      //                     ))}
      //                   </optgroup>
      //                 </select>
      //               </div>
      //             </div>
      //             <hr />
      //             <div
      //               className={styles['popup-form--body__disclaimer']}
      //               dangerouslySetInnerHTML={{
      //                 __html: formData[lang].disclaimer,
      //               }}
      //             ></div>
      //             <div className={styles['popup-form--body__line']}>
      //               <div className={globalStyles['form-group']}>
      //                 <label htmlFor="firstname">{formData[lang].fName}</label>
      //                 <TextFieldGroup
      //                   id="firstname"
      //                   name="firstname"
      //                   type="text"
      //                   value={this.state.firstname}
      //                   onChange={this.onChange}
      //                   // placeholder={formData[lang].fName}
      //                 />
      //               </div>
      //               <div className={globalStyles['form-group']}>
      //                 <label htmlFor="lastname">{formData[lang].lName}</label>
      //                 <TextFieldGroup
      //                   id="lastname"
      //                   name="lastname"
      //                   type="text"
      //                   value={this.state.lastname}
      //                   onChange={this.onChange}
      //                   // placeholder={formData[lang].lName}
      //                 />
      //               </div>
      //             </div>
      //             <div className={styles['popup-form--body__line']}>
      //               <div className={globalStyles['form-group']}>
      //                 <label htmlFor="phone">{formData[lang].phone}</label>
      //                 <TextFieldGroup
      //                   id="phone"
      //                   name="phone"
      //                   type="tel"
      //                   value={this.state.phone}
      //                   onChange={this.onChange}
      //                   // placeholder={formData[lang].phone}
      //                 />
      //               </div>
      //               <div className={globalStyles['form-group']}>
      //                 <label htmlFor="email">{formData[lang].email}</label>
      //                 <TextFieldGroup
      //                   id="email"
      //                   name="email"
      //                   type="email"
      //                   value={this.state.email}
      //                   onChange={this.onChange}
      //                   // placeholder={formData[lang].email}
      //                 />
      //               </div>
      //             </div>
      //             <div className={styles['popup-form--body__line']}>
      //               <div className={globalStyles['form-group']}>
      //                 <label htmlFor="message">{formData[lang].message}</label>
      //                 <TextareaFieldGroup
      //                   id="message"
      //                   name="message"
      //                   value={this.state.message}
      //                   onChange={this.onChange}
      //                   // placeholder={formData[lang].message}
      //                 />
      //               </div>
      //             </div>
      //             <div className={styles['popup-form--body__line']}>
      //               <ReCAPTCHA
      //                 sitekey="6LeQKuYUAAAAAOrRih1ajIajCxHw055WU6PH0MpC"
      //                 onChange={this.onCaptchaChange}
      //               />
      //             </div>
      //           </div>
      //           <div className={styles['popup-form--buttons']}>
      //             <input type="submit" value={formData[lang].buttons.send} />
      //             {/* <button onClick={this.onSaveClick}>
      //               {formData[lang].buttons.send}
      //             </button> */}
      //             <button
      //               className={styles['close']}
      //               onClick={this.onCloseButtonClick}
      //             >
      //               {formData[lang].buttons.close}
      //             </button>
      //           </div>
      //         </Fragment>
      //       ) : (
      //         <div className={styles['popup-form--header__center']}>
      //           <img src={successIcon} alt="" />
      //           <h1>{formData[lang].success.title}</h1>
      //           <div
      //             dangerouslySetInnerHTML={{
      //               __html: formData[lang].success.body,
      //             }}
      //           />
      //           <button
      //             className={styles['close']}
      //             onClick={this.onCloseButtonClick}
      //           >
      //             {formData[lang].buttons.close}
      //           </button>
      //         </div>
      //       )}
      //     </div>
      //   )}
      // </form>
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
