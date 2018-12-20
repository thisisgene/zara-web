import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setActiveLanguage } from '../../actions/userActions'

import { withLocalize } from 'react-localize-redux'
import globalTranslations from './common/translations/global.json'
import { renderToStaticMarkup } from 'react-dom/server'

import ScrollToTop from './ScrollToTop'

import Header from './layout/Header/Header'
import Home from './pages/Home/Home'
import Consulting from './pages/Consulting/Consulting'
import Wissen from './pages/Wissen/Wissen'
import Faq from './pages/Wissen/Faq/Faq'
import News from './pages/Wissen/News/News'
import Team from './pages/Zara/WerWirSind/Team/Team'

import Footer from './layout/Footer/Footer'

import styles from './User.module.sass'

class User extends Component {
  constructor(props) {
    super(props)

    const languages = [
      { name: 'Deutsch', code: 'de' },
      { name: 'English', code: 'en' }
    ]
    const defaultLanguage = languages[0].code
    // window.localStorage.getItem('languageCode') || languages[0].code
    // console.log(defaultLanguage)
    this.props.initialize({
      languages,
      translation: globalTranslations,
      options: { defaultLanguage, renderToStaticMarkup } // TODO: Set defaultLanguage after reload!
    })

    // this.props.addTranslation(headerTranslations)
    this.state = {
      mobileExpand: false,
      subMenuContent: ''
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.activeLanguage) {
      this.props.setActiveLanguage(this.props.activeLanguage.code)
    }
    const prevLang = prevProps.activeLanguage && prevProps.activeLanguage.code
    const curLang = this.props.activeLanguage && this.props.activeLanguage.code

    const hasLanguageChanged = prevLang !== curLang
    if (hasLanguageChanged) {
      // window.localStorage.setItem('languageCode', curLang)
      this.props.setActiveLanguage(curLang)
    }
  }
  componentDidMount() {}
  render() {
    const { activeLanguage } = this.props
    return (
      <div className={styles.user}>
        <Header />
        <ScrollToTop>
          <div className={styles['main-content']}>
            <Switch>
              <Route exact path="/user/de" component={Home} />
              <Route exact path="/user/en" component={Home} />
              {activeLanguage && (
                <Redirect
                  exact
                  from="/user"
                  to={`/user/${activeLanguage.code}`}
                />
              )}
              <Route path="/user/:lang/beratung" component={Consulting} />
              <Route exact path="/user/:lang/wissen" component={Wissen} />
              <Route exact path="/user/:lang/wissen/faq" component={Faq} />
              <Route
                exact
                path="/user/:lang/wissen/aktuelles"
                component={News}
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/wer_wir_sind/team"
                component={Team}
              />
            </Switch>
          </div>
        </ScrollToTop>
        {activeLanguage && <Footer lang={activeLanguage.code} />}
      </div>
    )
  }
}

User.propTypes = {
  setActiveLanguage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  lang: state.lang,
  project: state.project,
  hasBackgroundImage: state.hasBackgroundImage
})

export default withRouter(
  withLocalize(
    connect(
      mapStateToProps,
      { setActiveLanguage }
    )(User)
  )
)
