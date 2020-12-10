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
    linkText: 'HIER',
    emptyError: 'Bitte beschreiben Sie den Vorfall.'
  },
  en: {
    title: 'What happened?',
    text: 'Please describe the incident as precisely as possible. If you can, please also tell us the location/place and time of the incident.',
    disclaimer: '<b>ATTENTION:</b> WE <b>CANNOT</b> REPLY TO AN ANONYMOUS REPORT! IF YOU WOULD LIKE TO RECEIVE SUPPORT, CLICK',
    link: '/en/beratung/beratung_rassismus_hassimnetz',
    linkText: 'HERE',
    emptyError: 'Please describe the incident.'
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

export const stepFive = {
  de: {
    title: 'Einverstanden?',
    text: 'Ihre Daten sind bei uns sicher. Personenbezogene Daten (z.B. falls Sie Namen in der Beschreibung nennen) behandeln wir streng vertraulich. Diese werden nur mit Ihrer Zustimmung an Dritte weitergegeben.<br />Die Übertragung erfolgt über eine sichere Verbindung zu unserem Webserver.',
    list1: 'Beschreibung',
    list2: 'Dateien',
    list3: 'Links',
    consent: 'Durch das Abschicken dieser Meldung erhalten wir keine Kontaktinformationen und können Sie daher nicht kontaktieren. Wenn Sie von uns kontaktiert werden möchten, klicken Sie <a href="https://zara.or.at/de/beratung/beratung_rassismus_hassimnetz">hier</a> oder rufen Sie uns an: <a href="0043019291399">+43 (0) 1 929 13 99<a/>',
    errorMsg: 'Bitte stimmen Sie zu!'
  },
  en: {
    title: 'Aproved?',
    text: 'Your data is safe with us. We treat personal data (e.g. if you mention names in the description) with strict confidentiality. These will only be passed on to third parties with your explicit consent.<br />The transmission takes place via a secure connection to our web server.',
    list1: 'Description',
    list2: 'Files',
    list3: 'Links',
    consent: 'Durch das Abschicken dieser Meldung erhalten wir keine Kontaktinformationen und können Sie daher nicht kontaktieren. Wenn Sie von uns kontaktiert werden möchten, klicken Sie <a href="https://zara.or.at/de/beratung/beratung_rassismus_hassimnetz">hier</a> oder rufen Sie uns an: <a href="0043019291399">+43 (0) 1 929 13 99<a/>',
    errorMsg: 'Please give your consent!'
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