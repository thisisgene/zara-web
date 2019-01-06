import React, { Component } from 'react'

import InfoCardObject from '../../InfoCardObject/InfoCardObject'

import styles from '../MultiStepForm.module.sass'

const infoCard = {
  text: 'Was wir für eine Meldung von Ihnen wissen müssen:',
  link: '',
  listItems: [
    {
      text: 'Eine möglichst genaue Beschreibung des Vorfalls'
    },
    {
      text:
        'Idealerweise Fotos, Links oder Dokumente zur Dokumentation (optional)'
    },
    {
      text:
        'Insofern Sie es wünschen, Ihren Namen und Ihre Kontaktdaten für eventuelle Nachfragen bzw. um Sie über Ergebnisse zu informieren'
    },
    {
      text: 'Sie können, wenn Sie es wünschen, auch anonym melden!'
    }
  ]
}

export default class StepOne extends Component {
  render() {
    return (
      <div className={styles['step']}>
        <h1>Einen Vorfall an ZARA melden</h1>
        <InfoCardObject card={infoCard} />
      </div>
    )
  }
}
