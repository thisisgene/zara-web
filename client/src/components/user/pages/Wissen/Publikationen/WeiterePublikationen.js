import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { getAll } from '../../../../../actions/adminActions'

import { weitereHeroData, weitereLongText } from './publikationen_data'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import LongText from '../../../dashboard/LongText/LongText'
import CollapsibleItem from '../../../dashboard/CollapsibleItem/CollapsibleItem'

import styles from './WeiterePublikationen.module.sass'

class WeiterePublikationen extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAll('jahresberichte')
  }

  render() {
    const { activeLanguage, jahresberichte } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            <HeroUnit data={weitereHeroData} lang={lang} />
            <NewsletterOneLineObject lang={lang} />
            <LongText content={weitereLongText} lang={lang} />
            {jahresberichte.jahresberichte && (
              <div className={styles['jahresberichte-container']}>
                {jahresberichte.jahresberichte
                  .filter(
                    bericht =>
                      bericht.isOnline &&
                      !bericht.isDeleted &&
                      (bericht.tag === 'jahresberichte' || !bericht.tag)
                  )
                  .map((bericht, index) => (
                    <CollapsibleItem
                      key={index}
                      content={bericht}
                      lang={lang}
                    />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jahresberichte: state.jahresberichte
})

export default withLocalize(
  connect(
    mapStateToProps,
    { getAll }
  )(WeiterePublikationen)
)
