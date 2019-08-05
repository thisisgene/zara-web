import React, { Component } from 'react'
import axios from 'axios'
import Promise from 'promise'

import Spinner from '../../Spinner/Spinner'

import cx from 'classnames'
import styles from '../MultiStepForm.module.sass'

class StepFive extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saving: false
    }

    this.isValidated = this.isValidated.bind(this)
  }

  componentDidMount() {}

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

    this.setState({
      saving: true
    })

    const reportData = this.props.getStore()

    return new Promise(async (resolve, reject) => {
      let formData = new FormData()

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
            console.log('file data: ', fileData)
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
      // this.props.sendReport(reportData)
      // setTimeout(() => {
      //   if (this.props.getStore().reportSent) {
      //     resolve()
      //   } else {
      //     reject()
      //   }
      // }, 4000)
    })
  }

  jumpToStep(toStep) {
    // We can explicitly move to a step (we -1 as its a zero based index)
    this.props.jumpToStep(toStep - 1) // The StepZilla library injects this jumpToStep utility into each component
  }

  render() {
    return (
      <div className={styles['step']}>
        <Spinner nowActive={this.state.saving} />
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>Einverstanden?</h1>
                <p>
                  Ihre Daten sind bei uns sicher. Personenbezogene Daten (z.B.
                  falls Sie Namen in der Beschreibung nennen) behandeln wir
                  streng vertraulich. Diese werden nur mit Ihrer Zustimmung an
                  Dritte weitergegeben.
                </p>
                <p>
                  Die Übertragung erfolgt über eine sichere Verbindung zu
                  unserem Webserver.
                </p>
              </label>
            </div>
            <div className="form-group">
              <div className="col-md-12 control-label">
                <div className={styles['review-item']}>
                  <div className={styles['review-item--title']}>
                    Beschreibung
                  </div>
                  <div className={styles['review-item--text']}>
                    {this.props.getStore().description}
                  </div>
                </div>
                <div className={styles['review-item']}>
                  <div className={styles['review-item--title']}>Dateien</div>
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
                  <div className={styles['review-item--title']}>Links</div>
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
                <div className={styles['review-item']}>
                  {/* <div className={styles['review-item--title']}>
                    Kontaktdaten
                  </div>
                  {this.props.getStore().selectedOption !== 'anonym' ? (
                    <div>
                      {this.props.getStore().userName !== '' && (
                        <div className={styles['review-item']}>
                          <div className={styles['review-item--title']}>
                            Name
                          </div>
                          <div className={styles['review-item--text']}>
                            {this.props.getStore().userName}
                          </div>
                        </div>
                      )}
                      {this.props.getStore().email !== '' && (
                        <div className={styles['review-item']}>
                          <div className={styles['review-item--title']}>
                            Email
                          </div>
                          <div className={styles['review-item--text']}>
                            {this.props.getStore().email}
                          </div>
                        </div>
                      )}
                      {this.props.getStore().phone !== '' && (
                        <div className={styles['review-item']}>
                          <div className={styles['review-item--title']}>
                            Telefonnummer
                          </div>
                          <div className={styles['review-item--text']}>
                            {this.props.getStore().phone}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={styles['review-item--text']}>
                      Ich möchte anonym bleiben.
                    </div>
                  )} */}
                </div>
                {/* <div className="col-md-12 eg-jump-lnk">
                  <a href="#" onClick={() => this.jumpToStep(1)}>
                    e.g. showing how we use the jumpToStep method helper method
                    to jump back to step 1
                  </a>
                </div>
                <h2 className={savingCls}>
                  Saving to Cloud, pls wait (by the way, we are using a Promise
                  to do this :)...
                </h2> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default StepFive
// export default connect(
//   null,
//   {}
// )(StepFive)
