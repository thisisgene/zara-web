import React, { Component } from 'react'

import styles from '../MultiStepForm.module.sass'

export default class StepSix extends Component {
  onClick = () => {
    this.props.jumpToStep(0)
  }
  componentDidMount() {
    this.props.updateStore({
      email: '',
      userName: '',
      phone: '',
      description: '',
      files: [],
      links: '',
      selectedOption: 'anonym',
      savedToCloud: false,
      reportSent: false
    })
  }
  render() {
    return (
      <div className={styles['step']}>
        <h1>Vielen Dank für Ihren Einsatz</h1>
        <p>
          Vielen Dank für Ihre Meldung. Wir werden uns umgehend mit dem Vorfall
          beschäftigen und Sie gegebenenfalls kontaktieren.
        </p>
        <p>
          Sollten Sie eine kostenlose persönliche Beratung in Anspruch nehmen
          wollen, vereinbaren Sie bitte telefonisch unter: +43 (1) 929 13 99
          einen Termin mit unseren Beratungsteam.
        </p>
        <button onClick={this.onClick}>Erneut Melden</button>
      </div>
    )
  }
}
