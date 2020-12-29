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
    title: 'ZARA unterstützt Sie',
    text:
      'gegen Rassismus oder Hass im Netz – kostenlos und auf Wunsch anonym.',
    buttons: [
      {
        text: 'Melden',
        link: 'beratung/melden',
        type: 'cta'
      },
      {
        text: 'Beratung',
        link: 'beratung/beratung_rassismus_hassimnetz',
        type: 'cta'
      }
    ]
  },
  en: {
    title: 'ZARA supports you',
    text:
      'against racism or online hate - free of charge and anonymously.',
    buttons: [
      {
        text: 'Report an incident',
        link: 'beratung/melden',
        type: 'cta'
      },
      {
        text: 'Get support',
        link: 'beratung/beratung_rassismus_hassimnetz',
        type: 'cta'
      }
    ]
  }
}

const infoObj_default = {
  color: 'white',
  count: 'two',
  de: {
    title: 'Melden und Beratung',
    text:
      'In der Beratungsstelle erhalten alle Betroffenen und Zeug*innen von Rassismus und Hass und Hetze im Netz Unterstützung. Die Beratung ist kostenlos und auf Wunsch anonym.<br />Wenn Sie eine Beratung wünschen, klicken Sie auf „Beratung“. Sie können uns dann per Telefon, verschlüsselte E-Mail oder per Chat erreichen.<br />Wenn Sie einen Vorfall nur melden möchten, aber keine Beratung brauchen, klicken Sie auf „Melden“. Der Vorfall wird dann von unseren Berater*innen bearbeitet.',
    cards: [
      {
        color: 'white',
        title: 'Rassistische Diskriminierung',
        text:
          'Rassistische Diskriminierung umfasst nach ZARAs Arbeitsdefinition, dass eine Person oder eine bestimmte (konstruierte) Gruppe von Personen aufgrund ihrer Hautfarbe, Sprache, Religion, Staatsbürgerschaft, Herkunft oder ihres Aussehens in irgendeiner Form benachteiligt, herabgesetzt oder angegriffen wird.',
        // linkType: 'button',
        // multiButton: true,
        // buttons: [
        //   {
        //     text: 'Kostenlose Beratung zu Rassismus',
        //     type: 'cta',
        //     link: 'beratung/beratung_rassismus_hassimnetz'
        //   },
        //   {
        //     text: 'Rassismus anonym melden',
        //     type: 'cta',
        //     link: 'beratung/melden/rassismus'
        //   }
        // ]
      },
      {
        color: 'white',
        title: 'Hass im Netz',
        titleImage: 'GHiN_logo_s.png',
        text:
          'Hass im Netz umfasst nach ZARAs Arbeitsdefinition verhetzende oder hassmotivierte Inhalte und Postings auf Online Plattformen und sozialen Medien, die sich gegen eine Person oder (konstruierte) Gruppen, z.B. wegen ihrer sexuellen Orientierung, ihres Geschlechts oder einer Behinderung, richten.',
        // linkType: 'button',
        // multiButton: true,
        // buttons: [
        //   {
        //     text: 'Kostenlose Beratung zu Hass im Netz',
        //     type: 'cta',
        //     link: 'beratung/beratung_rassismus_hassimnetz'
        //   },
        //   {
        //     text: 'Hass im Netz anonym melden',
        //     type: 'cta',
        //     link: 'beratung/melden/hassimnetz'
        //   }
        // ]
      }
    ]
  },
  en: {
    title: 'Report an incident & Get support',
    text:
      'All victims and witnesses of racism and online hate can receive support from our team. The advice is free of charge and, if desired, anonymous.<br />If you would like to get in touch with us, click on "Get support". You can contact us by phone, encrypted email or chat.<br />If you only want to let us know about an incident but don\'t need additional support, click "Report an incident". Our team will then process the incident.',
    cards: [
      {
        color: 'white',
        title: 'Racial Discrimination',
        text:
          'According to ZARA\'s working definition, racial discrimination occurs when a person or a (constructed) group of people is disadvantaged, degraded or attacked in any way because of their skin colour, language, religion, citizenship, origin or appearance.',
        // linkType: 'button',
        // multiButton: true,
        // buttons: [
        //   {
        //     text: 'Rassismus anonym melden',
        //     type: 'cta',
        //     link: 'beratung/melden/rassismus'
        //   },
        //   {
        //     text: 'Beratung',
        //     type: 'cta',
        //     link: 'beratung/beratung_rassismus_hassimnetz'
        //   }
        // ]
      },
      {
        color: 'white',
        title: 'Online Hate',
        text:
          'According to ZARA\'s working definition, online hate includes inflammatory or hateful content, which is published on online platforms and social media, directed against a person or a (constructed) group, for example, as a result of their sexual orientation, their gender or disability.',
        // linkType: 'button',
        // multiButton: true,
        // buttons: [
        //   {
        //     text: 'Hass im Netz anonym melden',
        //     type: 'cta',
        //     link: 'beratung/melden/hassimnetz'
        //   },
        //   {
        //     text: 'Beratung',
        //     type: 'cta',
        //     link: 'beratung/beratung_rassismus_hassimnetz'
        //   }
        // ]
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
        title: 'Rechtshilfefonds #GegenHassimNetz',
        link: 'beratung/rechtshilfefonds'
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
    // link: 'test',
    // linkText: 'Alle News & Presseaussendungen',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'What you can do',
        link: 'beratung/wassietunkoennen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/beratung.png',
        title: 'What we can do',
        link: 'beratung/waswirdanntun'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/mitmischen.png',
        title: 'Legal Aid Fund #AgainstOnlineHate',
        link: 'beratung/rechtshilfefonds'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Resources',
        link: 'wissen'
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
