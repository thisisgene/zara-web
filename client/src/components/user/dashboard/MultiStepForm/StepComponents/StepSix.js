import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        <h1>Vielen Dank für Ihren Einsatz!</h1>
        <p>
          Wir werden uns umgehend mit dem Vorfall beschäftigen. Wenn Sie eine
          Beratung wünschen, klicken Sie bitte auf „
          <Link to={'/de/beratung/beratung_rassismus_hassimnetz'}>
            Meldung und Beratung zu Rassismus
          </Link>
          “. In diesem Fall beraten wir Sie gerne bei weiteren rechtlichen und
          anderen Schritten.
        </p>
        <p>
          Sollten Sie eine kostenlose persönliche Beratung in Anspruch nehmen
          wollen, vereinbaren Sie bitte telefonisch unter: +43 (1) 929 13 99
          einen Termin mit unseren Beratungsteam.
        </p>
        <button className={styles['reset-button']} onClick={this.onClick}>
          Weiteren Vorfall melden
        </button>
      </div>
    )
  }
}
