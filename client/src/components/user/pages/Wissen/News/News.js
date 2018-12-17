import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { newsData, newsTags } from './news_data'
import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import NewsBox from './NewsBox/NewsBox.js'

const heroData = {
  de: {
    title: 'News, Veranstaltungen & Kolumne',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum.'
  },
  en: {
    title: 'Frequently asked questions',
    text:
      'In der Beratungsstelle erhalten jährlich über 1.000 Opfer und Zeug*innen von Rassismus rechtliche Unterstützung. Die Beratung ist kostenlos, das Beratungsteam besteht aus juristisch und sozial geschulten Berater*innen.'
  }
}

class News extends Component {
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
            {newsData && (
              <NewsBox content={newsData} tags={newsTags} lang={lang} />
            )}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(News)
