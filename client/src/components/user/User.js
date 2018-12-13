import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllProjects, getProjectById } from '../../actions/projectActions'

import { withLocalize, Translate } from 'react-localize-redux'
import globalTranslations from './common/translations/global.json'
import { renderToStaticMarkup } from 'react-dom/server'

import Header from './layout/Header'
// import Landing from './dashboard/Landing'
import MainContent from './layout/MainContent'
import Home from './pages/Home/Home'
import Consulting from './pages/Consulting/Consulting'
import styles from './User.module.sass'

class User extends Component {
  constructor(props) {
    super(props)

    const languages = [
      { name: 'Deutsch', code: 'de' },
      { name: 'English', code: 'en' }
    ]
    const defaultLanguage =
      window.localStorage.getItem('languageCode') ||
      this.props.languages[0].code
    console.log(defaultLanguage)
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
    const prevLang = prevProps.activeLanguage && prevProps.activeLanguage.code
    const curLang = this.props.activeLanguage && this.props.activeLanguage.code

    const hasLanguageChanged = prevLang !== curLang
    if (hasLanguageChanged) {
      window.localStorage.setItem('languageCode', curLang)
      console.log('change: ', curLang)
    }
  }
  componentDidMount() {}
  render() {
    const { activeLanguage } = this.props
    return (
      <div className={styles.user}>
        <Header />
        <div className={styles['main-content']}>
          <Switch>
            {/* <Route exact path="/user" component={Home} /> */}
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
            <MainContent />
          </Switch>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  getAllProjects: PropTypes.func.isRequired,
  getProjectById: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  project: state.project,
  hasBackgroundImage: state.hasBackgroundImage
})

export default withRouter(
  withLocalize(
    connect(
      mapStateToProps,
      { getAllProjects, getProjectById }
    )(User)
  )
)
