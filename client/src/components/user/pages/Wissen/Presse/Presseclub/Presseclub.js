import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import {
  heroData,
  longText,
  optionObj,
  optionObjOnline,
  optionObjPublic,
} from './presseclub_data'
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import LongText from '../../../../dashboard/LongText/LongText'
import OptionButtons from './OptionButtons/OptionButtons'

class Presseclub extends Component {
  state = {
    category: '',
    perspective: '',
  }

  setActiveCategory = cat => {
    if (this.state.category !== cat) {
      this.setState({
        category: cat,
        perspective: '',
      })
    }
  }
  setActivePerspective = cat => {
    if (this.state.perspective !== cat) {
      this.setState({
        perspective: cat,
      })
    }
  }

  render() {
    // console.log('props', this.props)
    const { activeLanguage } = this.props
    const { category, perspective } = this.state
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            <HeroUnit data={heroData} lang={lang} />
            <LongText content={longText} lang={lang} />
            <OptionButtons
              content={optionObj}
              lang={lang}
              setActiveCategory={this.setActiveCategory}
              activeCategory={category}
            />
            {category === 'online' && (
              <OptionButtons
                content={optionObjOnline}
                lang={lang}
                setActiveCategory={this.setActivePerspective}
                activeCategory={perspective}
              />
            )}
            {category === 'public' && (
              <OptionButtons
                content={optionObjPublic}
                lang={lang}
                setActiveCategory={this.setActivePerspective}
                activeCategory={perspective}
              />
            )}
            {category === 'online' && perspective === 'first' && (
              <p>First Online</p>
            )}
            {category === 'online' && perspective === 'third' && (
              <p>Third Online</p>
            )}
            {category === 'public' && perspective === 'first' && (
              <p>First Public</p>
            )}
            {category === 'public' && perspective === 'third' && (
              <p>Third Public</p>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(Presseclub)
