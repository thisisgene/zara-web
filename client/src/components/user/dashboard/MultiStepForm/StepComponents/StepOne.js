import React, { Component } from 'react'

import InfoCardObject from '../../InfoCardObject/InfoCardObject'

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
        'Ihren Namen und Ihre Kontaktdaten für eventuelle Nachfragen  (optional)'
    }
  ]
}

export default class StepOne extends Component {
  render() {
    return (
      <div>
        <h1>Einen Vorfall an ZARA melden</h1>
        <InfoCardObject card={infoCard} />
      </div>
    )
  }
}
