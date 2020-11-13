import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  oneLineAlert,
  nowEnglishAlert
} from './beratung_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import InfoBoxObject from '../../dashboard/InfoBoxObject/InfoBoxObject'
import CardCollectionGridObject from '../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

const heroData = {
  image: 'main_icons/big/beratung.png',
  imageSide: 'left',
  de: {
    title: 'Das Team der ZARA Beratungsstellen steht Ihnen bei!',
    text:
      'In der Beratungsstelle erhalten jährlich über 2.000 Betroffene und Zeug*innen von Rassismus und Hass und Hetze im Netz rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.'
  },
  en: {
    title: 'We are on your side',
    text:
      'In der Beratungsstelle erhalten jährlich über 2.000 Betroffene und Zeug*innen von Rassismus und Hass und Hetze im Netz rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.'
  }
}

const infoObj_default = {
  color: 'white',
  count: 'two',
  de: {
    title: 'Melden und Beratung',
    text:
      'Möchten Sie einen rassistischen Vorfall oder Hass im Netz melden oder eine schriftliche Beratung bekommen?<br><br>Bei einer anonymen Meldung wird der Vorfall in unsere Falldatenbank aufgenommen, Sie erhalten aber keine Beratung. Wenn Sie eine Beratung wünschen, wählen Sie den Button „Kostenlose Beratung zu Rassismus“ bzw. „Kostenlose Beratung zu Hass im Netz“.',
    cards: [
      {
        color: 'white',
        title: 'Rassistische Diskriminierung',
        text:
          'Rassistische Diskriminierung bedeutet, dass eine Person oder eine bestimmte Gruppe von Personen aufgrund ihrer Hautfarbe, Sprache, Aussehens, Religion, Staatsbürgerschaft oder Herkunft in irgendeiner Form benachteiligt, herabgesetzt oder angegriffen wird.',
        linkType: 'button',
        multiButton: true,
        buttons: [
          {
            text: 'Kostenlose Beratung zu Rassismus',
            type: 'cta',
            link: 'beratung/beratung_rassismus_hassimnetz'
          },
          {
            text: 'Rassismus anonym melden',
            type: 'cta',
            link: 'beratung/melden/rassismus'
          }
        ]
      },
      {
        color: 'white',
        title: 'Hass im Netz',
        titleImage: 'GHiN_logo_s.png',
        text:
          'Hass im Netz umfasst verhetzende oder hassmotivierte Inhalte und Postings auf Online Plattformen und sozialen Medien die gegen bestimmte Gruppen, z.B. wegen ihrer sexuellen Orientierung, ihres Geschlechts oder einer Behinderung, gerichtet sind.',
        linkType: 'button',
        multiButton: true,
        buttons: [
          {
            text: 'Kostenlose Beratung zu Hass im Netz',
            type: 'cta',
            link: 'beratung/beratung_rassismus_hassimnetz'
          },
          {
            text: 'Hass im Netz anonym melden',
            type: 'cta',
            link: 'beratung/melden/hassimnetz'
          }
        ]
      }
    ]
  },
  en: {
    title: 'Melden',
    text:
      'Möchten Sie einen rassistischen Vorfall oder Hass im Netz melden oder eine schriftliche Beratung bekommen?<br><br>Ihre Meldungen werden in unserer Falldatenbank aufgenommen. Wenn Sie uns eine Kontaktmöglichkeit anbieten, können wir Ihnen sagen welche Aktionen wir eingeleitet haben. Wir beraten Sie auch gerne bei weiteren rechtlichen oder anderen Schritten.',
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
            text: 'Rassismus anonym melden',
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
          'Hass im Netz umfasst verhetzende oder hassmotivierte Inhalte und Postings auf Online Plattformen und sozialen Medien die gegen bestimmte Gruppen, z.B. wegen ihrer sexuellen Orientierung, ihres Geschlechts oder einer Behinderung, gerichtet sind.',
        linkType: 'button',
        multiButton: true,
        buttons: [
          {
            text: 'Hass im Netz anonym melden',
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
    title: 'Lass uns was tun',
    // link: 'test',
    // linkText: 'Alle News & Presseaussendungen',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was Sie Tun Können',
        link: 'beratung/wassietunkoennen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'Was Wir Dann Tun',
        link: 'beratung/waswirdanntun'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        title: 'Mitmischen',
        link: 'mitmischen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Wissen',
        link: 'wissen'
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
        {/* {lang == 'de' && <OneLineAlert content={nowEnglishAlert} lang='en' />}  ENGLISH ALERT! */}
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
