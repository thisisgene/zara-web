import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withLocalize } from 'react-localize-redux'

import { getAll } from '../../../../../actions/adminActions'

import { heroData } from './pressespiegel_data'
// import { oneLineAlert, trainingItems } from './training_data'
import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'

import HeroUnit from '../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../dashboard/LongText/LongText'
import CollapsibleItem from '../../../dashboard/CollapsibleItem/CollapsibleItem'

import styles from '../Publikationen/WeiterePublikationen.module.sass'

class Pressespiegel extends Component {
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
            <HeroUnit data={heroData} lang={lang} />
            {/* <NewsletterOneLineObject lang={lang} /> */}
            {/* <LongText content={longText} lang={lang} /> */}
            {jahresberichte.jahresberichte && (
              <div className={styles['jahresberichte-container']}>
                {jahresberichte.jahresberichte
                  .filter(
                    bericht =>
                      bericht.isOnline &&
                      !bericht.isDeleted &&
                      (bericht.tag === 'pressespiegel' || !bericht.tag)
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
  )(Pressespiegel)
)
