import React, { Component } from 'react'
import { JsonToCsv, useJsonToCsv } from 'react-json-csv'

const fields = {
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
  // typeOtherValue: report.stepA5 && report.stepA5.otherValue,
  typeText: 'Präzisierung',
  // typeText2: report.stepA5 && report.stepA5.textarea2,
  // typeText3: report.stepA5 && report.stepA5.textarea3,
  images: 'Screenshots',
  jurid: 'Juristische Maßnahmen',
  juridText: 'Maßnahmen Beschreibung',
  consequence: 'Konsequenzen',
  // consequence2: report.stepA7 && report.stepA7.msgValue2,
  // consequence3: report.stepA7 && report.stepA7.msgValue3,
  solidarity: 'Solidaritätsbekundungen',
  gender: 'Geschlecht',
  // genderText: report.stepA9 && report.stepA9.msgValue,
  medium: 'Medium',
  additional: 'Vorschläge',
  additional2: 'Beobachtungen',
}

export default class ExportCsv extends Component {
  exportPathAB = (report, stepData, path) => {
    const { saveAsCsv } = useJsonToCsv()
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
          ? (socialmedia += option.text + '; ')
          : (socialmedia += option.text + ' ' + report.socialmedia.otherValue))
    )
    let typeOfHate = ''
    stepData.stepFive['de'].options.map(
      option =>
        report.typeOfHate &&
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

    const data = [
      {
        date: report.date && report.date,
        uid: report._id,
        path: path,
        directReaction: report.directReaction && report.directReaction,
        articleUrl: report.articleUrl && report.articleUrl,
        keywords:
          report.keywords &&
          report.keywords[0] +
            ', ' +
            report.keywords[1] +
            ', ' +
            report.keywords[2],
        description: report.description && report.description,
        postUrl: report.postUrl && report.postUrl,
        socialmedia: socialmedia,
        extent: extent,
        privatemsg:
          'privatemsg' in report ? (report.privatemsg ? 'Ja' : 'Nein') : '',
        privatemsgValue: report.privatemsgValue && report.privatemsgValue,
        typeOfHate: typeOfHate,
        // typeOtherValue: report.stepA5 && report.stepA5.otherValue,
        typeText:
          report.typeText + '; ' + report.typeText2 + '; ' + report.typeText3,
        // typeText2: report.stepA5 && report.stepA5.textarea2,
        // typeText3: report.stepA5 && report.stepA5.textarea3,
        images: images,
        jurid: jurid,
        juridText: report.juridText && report.juridText,
        consequence:
          report.consequence +
          '; ' +
          report.consequence2 +
          '; ' +
          report.consequence3,
        // consequence2: report.stepA7 && report.stepA7.msgValue2,
        // consequence3: report.stepA7 && report.stepA7.msgValue3,
        solidarity: solidarity,
        gender: gender,
        // genderText: report.stepA9 && report.stepA9.msgValue,
        medium: report.medium && report.medium,
        additional: report.additional && report.additional,
        additional2: report.additional2 && report.additional2,
      },
    ]

    const filename = 'csv-test'
    saveAsCsv({ data, fields, filename })
  }

  exportCsv = (data, stepData, path) => {
    console.log(path)
    if (path === 'A' || path === 'B') {
      this.exportPathAB(data, stepData, path)
    }
    if (path === 'C' || path === 'D') {
      console.log('happaenif')
      // this.exportPathAB(data, stepData, path)
    }
  }
  render() {
    const { data, stepData, path } = this.props

    return (
      <div>
        {data && stepData && path && (
          <button onClick={this.exportCsv.bind(this, data, stepData, path)}>
            Exportieren
          </button>
        )}
      </div>
    )
  }
}
