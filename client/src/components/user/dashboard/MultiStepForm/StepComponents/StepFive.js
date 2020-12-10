import React, { Component } from 'react'
import axios from 'axios'
import Promise from 'promise'

import Spinner from '../../Spinner/Spinner'

import { stepFive } from './step_data'

import cx from 'classnames'
import styles from '../MultiStepForm.module.sass'

class StepFive extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saving: false,
      consented: false,
      showError: false
    }

    this.isValidated = this.isValidated.bind(this)
  }

  componentDidMount() { }

  componentWillUnmount() {
    // Reset sentReport to FALSE
    this.props.resetReport()
  }



  // This review screen had the 'Save' button, on clicking this is called
  isValidated() {
    /*
    typically this method needs to return true or false (to indicate if the local forms are validated, so StepZilla can move to the next step),
    but in this example we simulate an ajax request which is async. In the case of async validation or server saving etc. return a Promise and StepZilla will wait
    ... for the resolve() to work out if we can move to the next step
    So here are the rules:
    ~~~~~~~~~~~~~~~~~~~~~~~~
    SYNC action (e.g. local JS form validation).. if you return:
    true/undefined: validation has passed. Move to next step.
    false: validation failed. Stay on current step
    ~~~~~~~~~~~~~~~~~~~~~~~~
    ASYNC return (server side validation or saving data to server etc).. you need to return a Promise which can resolve like so:
    resolve(): validation/save has passed. Move to next step.
    reject(): validation/save failed. Stay on current step
    */


    const reportData = this.props.getStore()

    return new Promise(async (resolve, reject) => {
      if (this.state.consented) {
        this.setState({
          saving: true,
          showError: false
        })
        axios.post('/api/projects/report/send', reportData).then(res => {
          const id = res.data.report._id
          const files = reportData.files
          if (files.length > 0) {
            files.map(file => {
              let fileData = new FormData()
              fileData.append('id', id)
              fileData.append('name', file.name)
              fileData.append('size', file.size)
              fileData.append('file', file)
              return axios
                .post('/api/projects/report/images', fileData)
                .then(res => {
                  if (res.data === 'success') {
                    resolve()
                  } else {
                    reject()
                  }
                })
            })
          } else {
            if (res.data.msg === 'success') {
              resolve()
            } else {
              reject()
            }
          }
        })
      } else {
        this.setState({
          showError: true
        })
      }

    })
  }

  jumpToStep(toStep) {
    // We can explicitly move to a step (we -1 as its a zero based index)
    this.props.jumpToStep(toStep - 1) // The StepZilla library injects this jumpToStep utility into each component
  }

  checkConsent = e => {
    console.log(e.target.checked)
    this.setState({
      consented: e.target.checked
    })
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles['step']}>
        <Spinner nowActive={this.state.saving} />
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>{stepFive[lang].title}</h1>
                <p dangerouslySetInnerHTML={{ __html: stepFive[lang].text }} />

              </label>
            </div>
            <div className="form-group">
              <div className="col-md-12 control-label">
                <div className={styles['review-item']}>
                  <div className={styles['review-item--title']}>
                    {stepFive[lang].list1}
                  </div>
                  <div className={styles['review-item--text']}>
                    {this.props.getStore().description}
                  </div>
                </div>
                <div className={styles['review-item']}>
                  <div className={styles['review-item--title']}>{stepFive[lang].list2}</div>
                  {this.props.getStore().files.length > 0 ? (
                    <div className={styles['review-item--text']}>
                      {this.props.getStore().files &&
                        this.props
                          .getStore()
                          .files.map((file, index) => (
                            <p key={index}>{file.name}</p>
                          ))}
                    </div>
                  ) : (
                      <div className={styles['review-item--text']}>---</div>
                    )}
                </div>
                <div className={styles['review-item']}>
                  <div className={styles['review-item--title']}>{stepFive[lang].list3}</div>
                  {this.props.getStore().links !== '' ? (
                    <div className={styles['review-item--text']}>
                      {this.props
                        .getStore()
                        .links.split(',')
                        .map(link => (
                          <p>{link}</p>
                        ))}
                    </div>
                  ) : (
                      <div className={styles['review-item--text']}>---</div>
                    )}
                </div>
                <div>
                  <div className={cx(styles['consent-box'],
                    { [styles['error']]: this.state.showError && !this.state.consented }
                  )}>
                    <input type="checkbox" id="checkConsent" checked={this.state.consented} onChange={this.checkConsent} />
                    <label htmlFor="checkConsent" dangerouslySetInnerHTML={{ __html: stepFive[lang].consent }} />
                  </div>
                  {this.state.showError && !this.state.consented && (
                    <p style={{ 'color': 'red' }}>{stepFive[lang].errorMsg}</p>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default StepFive

