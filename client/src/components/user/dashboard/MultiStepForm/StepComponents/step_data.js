export const stepNames = {
  de: {
    stepOne: '',
    stepTwo: 'Vorfallbeschreibung',
    stepThree: 'Links/Anhänge',
    stepFour: '',
    stepFive: 'Check',
    stepSix: 'Fertig',
  },
  en: {
    stepOne: '',
    stepTwo: 'Describe incident',
    stepThree: 'Links/Attachments',
    stepFour: '',
    stepFive: 'Check',
    stepSix: 'Done',
  }
}

export const stepTwo = {
  de: {
    title: 'Was ist passiert?',
    text: 'Bitte beschreiben Sie uns den Vorfall möglichst genau, idealerweise auch unter Angabe von Ort und Zeit:',
    disclaimer: '<b>ACHTUNG:</b> BEI EINER ANONYMEN MELDUNG KÖNNEN WIR <b>NICHT</b> ANTWORTEN! WENN SIE EINE BERATUNG MÖCHTEN, KLICKEN SIE',
    link: '/de/beratung/beratung_rassismus_hassimnetz',
    linkText: 'HIER'
  },
  en: {
    title: 'What happened?',
    text: 'Please describe the incident as precisely as possible. If you can, please also tell us the location/place and time of the incident.',
    disclaimer: '<b>ATTENTION:</b> WE <b>CANNOT</b> REPLY TO AN ANONYMOUS REPORT! IF YOU WOULD LIKE TO RECEIVE SUPPORT, CLICK',
    link: '/en/beratung/beratung_rassismus_hassimnetz',
    linkText: 'HERE'
  }
}

export const stepThree = {
  de: {
    title: 'Gibt es von dem Vorfall Fotos, Screenshots oder Links (optional)?',
    text: 'Bilder hier hochladen.',
    text2: 'Links zum Vorfall (Bei mehreren Links, bitte mit Beistrich getrennt eintragen):',
    errorText: {
      maxFileCount: 'Maximal 10 Dateien',
      maxFileCountLong: 'Limit erreicht! Es dürfen maximal nur 10 Dateien auf einmal gesendet werden.',
      fileTooLarge: 'Datei ist zu groß. Maximal 10 MB.',
      fileAccepted: 'Akzeptiert:',
      fileRejected: 'abgelehnt:',
      fileFormatAccepted: 'Gültiges Format.',
      fileFormatRejected: 'Ungültiges Format. Nur Bilddateien erlaubt.',
    }
  },
  en: {
    title: 'Are there photos, screenshots or links of the incident? (optional)',
    text: 'Upload images here.',
    text2: 'Links to the incident (if there are several links, please separate them with a comma):',
    errorText: {
      maxFileCount: '10 Files maximum',
      maxFileCountLong: 'You have reached the limit! Only a maximum of 10 files at a time can be sent.',
      fileTooLarge: 'File is too large: max. 10 MB!',
      fileAccepted: 'Accepted:',
      fileRejected: 'rejected:',
      fileFormatAccepted: 'Valid format.',
      fileFormatRejected: 'Invalid format. Only image files are accepted.',
    }
  }
}

// export const stepOne = {
//   de: {
//     text: 'Was wir für eine Meldung von Ihnen wissen müssen:',
//     link: '',
//     listItems: [
//       {
//         text: 'Eine möglichst genaue Beschreibung des Vorfalls'
//       },
//       {
//         text:
//           'Idealerweise Fotos, Links oder Dokumente zur Dokumentation (optional)'
//       },
//       {
//         text:
//           'Insofern Sie es wünschen, Ihren Namen und Ihre Kontaktdaten für eventuelle Nachfragen bzw. um Sie über Ergebnisse zu informieren'
//       },
//       {
//         text: 'Sie können, wenn Sie es wünschen, auch anonym melden!'
//       }
//     ]
//   },
//   en: {
//     text: 'Was wir für eine Meldung von Ihnen wissen müssen:',
//     link: '',
//     listItems: [
//       {
//         text: 'Eine möglichst genaue Beschreibung des Vorfalls'
//       },
//       {
//         text:
//           'Idealerweise Fotos, Links oder Dokumente zur Dokumentation (optional)'
//       },
//       {
//         text:
//           'Insofern Sie es wünschen, Ihren Namen und Ihre Kontaktdaten für eventuelle Nachfragen bzw. um Sie über Ergebnisse zu informieren'
//       },
//       {
//         text: 'Sie können, wenn Sie es wünschen, auch anonym melden!'
//       }
//     ]
//   }
// }