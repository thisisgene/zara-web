export const fieldsAB = {
  date: 'Datum',
  uid: 'ID',
  path: 'Pfad',
  directReaction: 'direkte Reaktion auf Beitrag?',
  articleUrl: 'URL des Beitrags',
  keywords: 'Zentrales Thema',
  description: 'Kurzbeschreibung Kontext',
  postUrl: 'URL oder Zitation',
  socialmedia: 'Welche online Kanäle',
  extent: 'Umfang des Online-Angriffs',
  privatemsg: 'Waren private Nachrichten Teil',
  privatemsgValue: 'beispielhafte Beschreibung private Nachricht',
  typeOfHate: 'Bezug auf Hass-Ideologien',
  typeText: 'Präzisierung',
  images: 'Screenshots',
  jurid: 'Juristische Maßnahmen',
  juridText: 'Maßnahmen Beschreibung',
  consequence: 'Konsequenzen',
  solidarity: 'Solidaritätsbekundungen',
  gender: 'Geschlecht',
  medium: 'Medium',
  additional: 'Vorschläge',
  additional2: 'Beobachtungen',
}
export const fieldsCD = {
  date: 'Datum',
  uid: 'ID',
  path: 'Pfad',
  typeOfAbuse: 'Art und Weise des Angriffs',
  location: 'Wo',
  attacker: 'Beschreibung angreifende Person(en)',
  description: 'Schilderung Kontext o. mögl. Auslöser',
  medium: 'Medium',
  images: 'Bilder',
  racism: 'Rassismus wahrgenommen',
  racismText: 'Nähere Ausführungen',
  witness: 'Unterstützung durch Zeug*innen',
  witnessText: 'Nähere Ausführungen',
  jurid: 'Juristische Maßnahmen',
  juridText: 'Maßnahmen Beschreibung',
  consequence: 'Konsequenzen',
  onlineToo: 'Auch online',
  gender: 'Geschlecht',
  additional: 'Vorschläge',
  additional2: 'Beobachtungen',
}

export function exportPathAB(report, stepData) {
  let path
  if (report.category === 'online' && report.perspective === 'first') {
    path = 'A'
  }
  if (report.category === 'online' && report.perspective === 'third') {
    path = 'B'
  }

  let extent = ''
  if (report.extent) {
    extent = stepData.stepThree['de'].options.find(
      opt => opt.value === report.extent
    ).text
  }
  extent = extent.replace(/(<([^>]+)>)/gi, '')
  let socialmedia = ''
  stepData.stepTwo['de'].options.map(
    option =>
      report.socialmedia &&
      report.socialmedia[option.value] &&
      (option.value !== 'other'
        ? (socialmedia += `${option.text}\; `)
        : (socialmedia += `${option.text} ${report.socialmedia.otherValue}`))
  )
  let typeOfHate = ''
  stepData.stepFive['de'].options.map(
    option =>
      report.typeOfHate &&
      report.typeOfHate[0] &&
      report.typeOfHate[0][option.value] &&
      (option.value !== 'other'
        ? (typeOfHate += option.text + '; ')
        : (typeOfHate += option.text + ': ' + report.typeOtherValue))
  )
  typeOfHate = typeOfHate.replace(/(<([^>]+)>)/gi, '')
  let jurid = ''
  if (report.jurid) {
    jurid = stepData.stepSix['de'].options.find(
      opt => opt.value === report.jurid
    ).text
  }
  jurid = jurid.replace(/(<([^>]+)>)/gi, '')
  let solidarity = ''
  if (report.solidarity) {
    solidarity = stepData.stepEight['de'].options.find(
      opt => opt.value === report.solidarity
    ).text
  }
  solidarity = solidarity.replace(/(<([^>]+)>)/gi, '')
  let gender = ''
  if (report.gender) {
    gender =
      report.gender !== 'other'
        ? stepData.stepNine['de'].options.find(
            opt => opt.value === report.gender
          ).text
        : report.genderText
  }
  gender = gender.replace(/(<([^>]+)>)/gi, '')
  let images = ''
  report.images &&
    report.images.map((image, index) => (images += image.originalName + '; '))

  const formattedDate = new Date(report.date).toLocaleString('de-at')

  const data = {
    date: formattedDate && `"${formattedDate}"`,
    uid: `"${report._id}"`,
    path: `"${path}"`,
    directReaction:
      'directReaction' in report
        ? report.directReaction
          ? `"Ja"`
          : `"Nein"`
        : `""`,
    articleUrl: report.articleUrl && `"${report.articleUrl}"`,
    keywords:
      report.keywords &&
      `"${report.keywords[0]}; ${report.keywords[1]}; ${report.keywords[2]}"`,
    description: report.description && `"${report.description}"`,
    postUrl: report.postUrl && `"${report.postUrl}"`,
    socialmedia: `"${socialmedia}"`,
    extent: `"${extent}"`,
    privatemsg:
      'privatemsg' in report ? (report.privatemsg ? `"Ja"` : `"Nein"`) : `""`,
    privatemsgValue: report.privatemsgValue && `"${report.privatemsgValue}"`,
    typeOfHate: `"${typeOfHate}"`,
    typeText: `"${report.typeText}; ${report.typeText2}; ${report.typeText3}"`,
    images: `"${images}"`,
    jurid: `"${jurid}"`,
    juridText: report.juridText && `"${report.juridText}"`,
    consequence: `"${report.consequence}; ${report.consequence2}; ${report.consequence3}"`,
    solidarity: `"${solidarity}"`,
    gender: `"${gender}"`,
    medium: report.medium && `"${report.medium}"`,
    additional: report.additional && `"${report.additional}"`,
    additional2: report.additional2 && `"${report.additional2}"`,
  }

  return data
}
export function exportPathCD(report, stepData) {
  let path
  if (report.category === 'public' && report.perspective === 'first') {
    path = 'C'
  }
  if (report.category === 'public' && report.perspective === 'third') {
    path = 'D'
  }

  let typeOfAbuse = ''
  stepData.stepOne['de'].options.map(
    option =>
      report.typeOfAbuse &&
      report.typeOfAbuse[option.value] &&
      (option.value !== 'other'
        ? (typeOfAbuse += option.text + '; ')
        : (typeOfAbuse += option.text + ': ' + report.typeOfAbuse.otherValue))
  )
  typeOfAbuse = typeOfAbuse.replace(/(<([^>]+)>)/gi, '')

  let jurid = ''
  if (report.jurid) {
    jurid = stepData.stepNine['de'].options.find(
      opt => opt.value === report.jurid
    ).text
  }
  jurid = jurid.replace(/(<([^>]+)>)/gi, '')
  let gender = ''
  if (report.gender) {
    gender =
      report.gender !== 'other'
        ? stepData.stepTwelve['de'].options.find(
            opt => opt.value === report.gender
          ).text
        : report.genderText
  }
  gender = gender.replace(/(<([^>]+)>)/gi, '')
  let images = ''
  report.images &&
    report.images.map((image, index) => (images += image.originalName + '; '))

  const formattedDate = new Date(report.date).toLocaleString('de-at')

  const data = {
    date: formattedDate && `"${formattedDate}"`,
    uid: `"${report._id}"`,
    path: `"${path}"`,

    typeOfAbuse: `"${typeOfAbuse}"`,
    location: report.location && `"${report.location}"`,
    attacker: report.attacker && `"${report.attacker}"`,
    description: report.description && `"${report.description}"`,
    medium: report.medium && `"${report.medium}"`,
    images: `"${images}"`,
    racism: 'racism' in report ? (report.racism ? `"Ja"` : `"Nein"`) : `""`,
    racismText: report.racismText && `"${report.racismText}"`,
    witness: 'witness' in report ? (report.witness ? `"Ja"` : `"Nein"`) : `""`,
    witnessText: report.witnessText && `"${report.witnessText}"`,
    jurid: `"${jurid}"`,
    juridText: report.juridText && `"${report.juridText}"`,
    consequence: `"${report.consequence}; ${report.consequence2}; ${report.consequence3}"`,
    onlineToo:
      'onlineToo' in report ? (report.onlineToo ? `"Ja"` : `"Nein"`) : `""`,
    gender: `"${gender}"`,
    additional: report.additional && `"${report.additional}"`,
    additional2: report.additional2 && `"${report.additional2}"`,
  }

  return data
}
