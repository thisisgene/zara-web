import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { faqTags, faqData } from './faq_data'

import HeroUnit from '../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../dashboard/OneLineAlert/OneLineAlert'
import FaqBox from './FaqBox/FaqBox'

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
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lang: state.lang
})

export default withLocalize(Faq)
