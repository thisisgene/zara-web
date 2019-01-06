import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { newsData, newsTags } from './news_data'
import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import NewsBox from './NewsBox/NewsBox.js'

const heroData = {
  image: 'zara_wide.png',
  imageSide: 'left',
  de: {
    title: 'News, Veranstaltungen & Mehr',
    text:
      'Hier finden Sie wichtige Informationen zu aktuellen Entwicklungen rund um die Themenfelder Rassismus und Hass im Netz, sowie Informationen über interessante Veranstaltungen und aktuelle Workshops. Zusätzlich setzt sich die ZARA Kolumne – None of the Above – tiefgehend mit aktuellen aber auch lang eingesessenen rassistischen Argumentationslogiken und Thematiken auseinander.',
    linkText: 'Zum Pressekontakt',
    link: 'kontakt/#presse'
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
