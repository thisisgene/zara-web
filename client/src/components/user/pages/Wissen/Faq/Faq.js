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
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.'
  },
  en: {
    title: 'Frequently asked questions',
    text:
      'In der Beratungsstelle erhalten jährlich über 1.000 Opfer und Zeug*innen von Rassismus rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.'
  }
}

const oneLineAlert = {
  type: 'red',
  icon: 'alert',
  de: {
    text: 'Ich bin Opfer oder Zeug*in eines rassistischen Vorfalls geworden',
    button: {
      text: 'Jetzt melden',
      type: 'alert',
      link: '/beratung/melden/rassismus'
    }
  },
  en: {
    text: 'Ich bin Opfer oder Zeug*in eines rassistischen Vorfalls geworden',
    button: {
      text: 'Jetzt melden',
      type: 'alert',
      link: '/beratung/melden/rassismus'
    }
  }
}

const cardGridObject = {
  de: {
    title: 'Mehr Wissen',
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
