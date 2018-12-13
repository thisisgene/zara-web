import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'

import cx from 'classnames'
import globalStyles from '../common/Bootstrap.module.css'
import commonStyles from '../common/Common.module.sass'
import styles from './Auth.module.css'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      securityLevel: '2',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      securityLevel: this.state.securityLevel
    }

    this.props.registerUser(newUser, this.props.history)
  }
  render() {
    const { errors } = this.state

    return (
      <div>
        <div className={styles['register']}>
          <div className={styles['container']}>
            <div className={styles['row']}>
              <div className={styles['col-md-8 m-auto form-dark']}>
                <div className={styles['title-container']}>
                  <p className={styles['lead']}>Neuen User hinzufügen</p>
                  <p className="small text-muted">
                    Füllen Sie die Felder aus um einen neuen User zu erstellen.
                  </p>
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextFieldGroup
                    placeholder="E-mail Adresse"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextFieldGroup
                    placeholder="Passwort"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="Passwort bestätigen"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                  />
                  <select
                    className={cx(
                      globalStyles['custom-select'],
                      commonStyles['custom-select'],
                      commonStyles['dark-input']
                    )}
                    name="securityLevel"
                    id=""
                    value={this.state.securityLevel}
                    onChange={this.onChange}
                  >
                    <option value="4">Beratung</option>
                    <option value="3">Website config</option>
                    <option value="2">Website & Beratung</option>
                    <option value="1">Admin</option>
                  </select>
                  <input
                    type="submit"
                    value="Senden"
                    className={cx(
                      globalStyles['btn'],
                      globalStyles['btn-info'],
                      globalStyles['btn-block'],
                      globalStyles['mt-4']
                    )}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
