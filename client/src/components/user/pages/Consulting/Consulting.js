import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { oneLineAlert } from './beratung_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

const heroData = {
  image: 'consulting.jpg',
  imageSide: 'left',
  de: {
    title: 'Wir sind auf Ihrer Seite',
    text:
      'In der Beratungsstelle erhalten jährlich über 1.000 Betroffene und Zeug*innen von Rassismus rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.'
  },
  en: {
    title: 'We are on your side',
    text:
      'In der Beratungsstelle erhalten jährlich über 1.000 Betroffene und Zeug*innen von Rassismus rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.'
  }
}

const infoObj_default = {
  color: 'white',
  count: 'two',
  de: {
    title: 'Melden',
    text:
      'Möchten Sie was zu Rassismus oder zu Hass im Netz melden oder eine schriftliche Beratung bekommen? Meldungen werden in unserer Falldatenbank aufgenommen. Wenn Sie uns eine Kontaktmöglichkeit anbieten, können wir Ihnen sagen welche Aktionen wir eingeleitet haben. Wir Beraten Sie auch gerne bei weiteren rechtlichen oder anderen Schritten. ',
    cards: [
      {
        color: 'white',
        title: 'Rassistische Diskriminierung',
        text:
          'Rassistische Diskriminierung bedeutet, dass eine Person aufgrund ihrer Hautfarbe, ihrer Sprache, ihres Aussehens, ihrer Religion, Staatsbürgerschaft oder Herkunft in irgendeiner Form benachteiligt wird.',
        linkType: 'button',
        multiButton: true,
        buttons: [
          {
            text: 'Rassismus melden',
            type: 'cta',
            link: 'beratung/melden/rassismus'
          },
          {
            text: 'Beratung',
            type: 'cta',
            link: 'beratung/beratung_rassismus_hassimnetz'
          }
        ]
      },
      {
        color: 'white',
        title: 'Hass im Netz',
        text:
          'Verhetzende und hassmotivierte Inhalte und Postings  auf Online Plattformen und sozialen Medien können uns auch gemeldet werden, wenn sie gegen bestimmte Gruppen,  z.B. wegen ihrer sexuellen Orientierung, ihres Geschlechts oder einer Behinderung, gerichtet sind.',
        linkType: 'button',
        multiButton: true,
        buttons: [
          {
            text: 'Hass im Netz melden',
            type: 'cta',
            link: 'beratung/melden/hassimnetz'
          },
          {
            text: 'Beratung',
            type: 'cta',
            link: 'beratung/beratung_rassismus_hassimnetz'
          }
        ]
      }
    ]
  },
  en: {
    title: 'Melden',
    text:
      'Möchten Sie was zu Rassismus oder zu Hass im Netz melden oder eine schriftliche Beratung bekommen? Meldungen werden in unserer Falldatenbank aufgenommen. Wenn Sie uns eine Kontaktmöglichkeit anbieten, können wir Ihnen sagen welche Aktionen wir eingeleitet haben. Wir Beraten Sie auch gerne bei weiteren rechtlichen oder anderen Schritten. ',
    cards: [
      {
        color: 'white',
        title: 'Rassistische Diskriminierung',
        text:
          'Rassistische Diskriminierung bedeutet, dass eine Person aufgrund ihrer Hautfarbe, ihrer Sprache, ihres Aussehens, ihrer Religion, Staatsbürgerschaft oder Herkunft in irgendeiner Form benachteiligt wird.',
        linkType: 'button',
        multiButton: true,
        buttons: [
          {
            text: 'Rassismus melden',
            type: 'cta',
            link: 'beratung/melden/rassismus'
          },
          {
            text: 'Beratung',
            type: 'cta',
            link: 'beratung/beratung_rassismus_hassimnetz'
          }
        ]
      },
      {
        color: 'white',
        title: 'Hass im Netz',
        text:
          'Verhetzende und hassmotivierte Inhalte und Postings  auf Online Plattformen und sozialen Medien können uns auch gemeldet werden, wenn sie gegen bestimmte Gruppen,  z.B. wegen ihrer sexuellen Orientierung, ihres Geschlechts oder einer Behinderung, gerichtet sind.',
        linkType: 'button',
        multiButton: true,
        buttons: [
          {
            text: 'Hass im Netz melden',
            type: 'cta',
            link: 'beratung/melden/hassimnetz'
          },
          {
            text: 'Beratung',
            type: 'cta',
            link: 'beratung/beratung_rassismus_hassimnetz'
          }
        ]
      }
    ]
  }
}

const cardGridObject = {
  de: {
    title: 'KENNE DEINE RECHTE',
    // link: 'test',
    // linkText: 'Alle News & Presseaussendungen',
    cards: [
      {
        size: 'default',
        type: 'titleCard',
        text:
          'Rassismus Report 2017: Weitere Zunahme rassistischer Vorfälle - Online Hass und Hetze auf neuem Höchststand',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        title: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        text: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        text: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      }
    ]
  },
  en: {
    title: 'Aktuell',
    link: 'test',
    linkText: 'Alle News & Presseaussendungen',
    cards: [
      {
        size: 'default',
        type: 'titleCard',
        text:
          'Rassismus Report 2017: Weitere Zunahme rassistischer Vorfälle - Online Hass und Hetze auf neuem Höchststand',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        title: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        text: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      },
      {
        size: 'default',
        type: 'imageCard',
        text: 'Der Klagsverband ist vom Zusperren bedroht',
        link: 'test'
      }
    ]
  }
}

class Consulting extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        <HeroUnit data={heroData} lang={lang} />
        <OneLineAlert content={oneLineAlert} lang={lang} />
        <div id="melden">
          <InfoBoxObject infoBox={infoObj_default} lang={lang} />
        </div>
        <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
        {/* <MultiStepForm /> */}
      </div>
    )
  }
}

export default withLocalize(Consulting)
