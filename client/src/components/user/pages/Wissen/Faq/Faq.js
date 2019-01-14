import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { faqTags, faqData } from './faq_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../../dashboard/OneLineAlert/OneLineAlert'
import FaqBox from './FaqBox/FaqBox'
import CardCollectionGridObject from '../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

const heroData = {
  image: 'faq.png',
  imageSide: 'left',
  de: {
    title: 'Häufig gestellte Fragen',
    text:
      'Hier haben wir ein paar Fragen für Sie gesammelt, die uns häufig gestellt werden. Um sich diesbezüglich gut zurechtfinden zu können, haben wir die FAQs in unsere zwei Schwerpunkte sowie spezifische Fragen über ZARA gegliedert:'
  },
  en: {
    title: 'Häufig gestellte Fragen',
    text:
      'Hier haben wir ein paar Fragen für Sie gesammelt, die uns häufig gestellt werden. Um sich diesbezüglich gut zurechtfinden zu können, haben wir die FAQs in unsere zwei Schwerpunkte sowie spezifische Fragen über ZARA gegliedert:'
  }
}

const oneLineAlert = {
  type: 'red',
  icon: 'alert',
  de: {
    text:
      'Ich bin Betroffene*r oder Zeug*in eines rassistischen Vorfalls oder von Hass im Netz.',
    button: {
      text: 'Jetzt melden',
      type: 'alert',
      link: 'beratung/melden/rassismus'
    }
  },
  en: {
    text:
      'Ich bin Betroffene*r oder Zeug*in eines rassistischen Vorfalls oder von Hass im Netz.',
    button: {
      text: 'Jetzt melden',
      type: 'alert',
      link: 'beratung/melden/rassismus'
    }
  }
}

const cardGridObject = {
  count: 'two',
  de: {
    title: 'Mehr Wissen',
    // link: 'test',
    // linkText: 'Alle News & Presseaussendungen',
    cards: [
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/recht und ordnung.png',
        title: 'Recht & Ordnung',
        link: 'wissen'
      },
      {
        size: 'default',
        type: 'imageCard',
        image: 'icons/wissen.png',
        title: 'Glossar',
        link: 'wissen/glossar'
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

class Faq extends Component {
  constructor() {
    super()
    this.state = {
      filterTag: []
    }
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            <HeroUnit data={heroData} lang={lang} />
            <OneLineAlert content={oneLineAlert} lang={lang} />
            {faqData && <FaqBox content={faqData} tags={faqTags} lang={lang} />}
            <CardCollectionGridObject cardObject={cardGridObject} lang={lang} />
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Faq)
