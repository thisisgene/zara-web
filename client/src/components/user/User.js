import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'

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
import Beratung from './pages/Consulting/Beratung'
import Report from './pages/Consulting/Report'
import WasSieTunKoennen from './pages/Consulting/WasSieTunKoennen'
import WasWirTunKoennen from './pages/Consulting/WasWirTunKoennen'

import Training from './pages/Training/Training'
import TrainingChildren from './pages/Training/TrainingChildren'
import TrainingAdults from './pages/Training/TrainingAdults'
import TrainingUnternehmen from './pages/Training/TrainingUnternehmen'
import TrainingDetail from './pages/Training/TrainingDetail'
import TrainingsProjekte from './pages/Training/TrainingsProjekte/TrainingsProjekte'

import Mitmischen from './pages/Mitmischen/Mitmischen'
import CounterNarratives from './pages/Mitmischen/CounterNarratives'
import Hashtags from './pages/Mitmischen/Hashtags'
import HasspostingsMelden from './pages/Mitmischen/HasspostingsMelden'
import Community from './pages/Mitmischen/Community'
import Unterstuetzen from './pages/Mitmischen/Unterstuetzen'

import Wissen from './pages/Wissen/Wissen'
import News from './pages/Wissen/News/News'
import Presse from './pages/Wissen/Presse/Presse'
import Pressespiegel from './pages/Wissen/Presse/Pressespiegel'
import Fotos from './pages/Wissen/Presse/Fotos'
import KenneDeineRechte from './pages/Wissen/KenneDeineRechte/KenneDeineRechte'
import Glossar from './pages/Wissen/KenneDeineRechte/Glossar'
import Publikationen from './pages/Wissen/Publikationen/Publikationen'
import RassismusReport from './pages/Wissen/Publikationen/RassismusReport'
import Faq from './pages/Wissen/Faq/Faq'

import WasWirWollen from './pages/Zara/WasWirWollen/WasWirWollen'
import Mission from './pages/Zara/WasWirWollen/Mission'
import History from './pages/Zara/WasWirWollen/History'
import Grundsaetze from './pages/Zara/WasWirWollen/Grundsaetze'
import Team from './pages/Zara/WerWirSind/Team/Team'
import Jobs from './pages/Zara/WerWirSind/Jobs/Jobs'

import Kontakt from './pages/Zara/Kontakt/Kontakt'
import Impressum from './pages/Other/Impressum'

import Footer from './layout/Footer/Footer'

import styles from './User.module.sass'
import Datenschutz from './pages/Other/Datenschutz'
import Netzwerke from './pages/Zara/ProjekteUndKooperationen/Netzwerke'
import Projekte from './pages/Zara/ProjekteUndKooperationen/Projekte'
import Organisationen from './pages/Zara/ProjekteUndKooperationen/Organisationen'
import TrainingTeam from './pages/Training/TrainingTeam/TrainingTeam'
import NewsDetail from './pages/Wissen/News/NewsBox/NewsDetail'
import Kolumne from './pages/Wissen/News/Kolumne/Kolumne'
import Logos from './pages/Wissen/Presse/Logos'
import VerschluesselteEmail from './pages/Other/VerschluesselteEmail'
import OrderDone from './dashboard/ImageGridObject/OrderDone'
import CookieConsent from './pages/Other/CookieConsent'

class User extends Component {
  constructor(props) {
    super(props)

    const languages = [
      { name: 'Deutsch', code: 'de' },
      { name: 'English', code: 'en' }
    ]
    const defaultLanguage = languages[0].code
    // window.localStorage.getItem('languageCode') || languages[0].code
    this.props.initialize({
      languages,
      translation: globalTranslations,
      options: { defaultLanguage, renderToStaticMarkup } // TODO: Set defaultLanguage after reload!
    })

    // this.props.addTranslation(headerTranslations)
    this.state = {
      mobileExpand: false,
      subMenuContent: '',
      showCookieConsent: true
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
  componentDidMount() {
    this.setState({
      showCookieConsent: !localStorage.getItem('cookieAccept')
    })
  }

  cookieAccept = () => {
    this.setState({
      showCookieConsent: false
    })
    localStorage.setItem('cookieAccept', true)
  }

  render() {
    const { activeLanguage } = this.props
    const routes = [
      {
        path: '/user/de',
        exact: false,
        breadcrumb: () => <NavLink to="/user/de">ZARA</NavLink>,
        main: Home
      },
      {
        path: '/user/:lang/beratung',
        exact: false,
        breadcrumb: activeLanguage =>
          activeLanguage && (
            <NavLink to={`/user/${activeLanguage.code}/beratung`}>
              Beratung
            </NavLink>
          ),
        main: Home
      }
    ]

    return (
      <div className={styles.user}>
        <div className={styles['user--header']}>
          <Route path="/user/:lang" component={Header} />
        </div>

        <ScrollToTop>
          <div className={styles['main-content']}>
            {/* TODO: BREADCRUMBS */}
            {/* <div className={styles['breadcrumb-container']}>
              {routes.map((route, index) => (
                <div key={index} className={styles['breadcrumb']}>
                  <Route
                    exact={route.exact}
                    path={route.path}
                    component={route.breadcrumb}
                  />
                </div>
              ))}
            </div> */}
            <Switch>
              <Route exact path="/user/:lang" component={Home} />

              {activeLanguage && (
                <Redirect
                  exact
                  from="/user"
                  to={`/user/${activeLanguage.code}`}
                />
              )}
              <Route exact path="/user/:lang/beratung" component={Consulting} />
              <Route
                exact
                path="/user/:lang/beratung/melden/:report"
                component={Report}
              />
              <Route
                exact
                path="/user/:lang/beratung/beratung_rassismus_hassimnetz"
                component={Beratung}
              />
              <Route
                exact
                path="/user/:lang/beratung/wassietunkoennen"
                component={WasSieTunKoennen}
              />
              <Route
                exact
                path="/user/:lang/beratung/waswirdanntun"
                component={WasWirTunKoennen}
              />
              <Route exact path="/user/:lang/training" component={Training} />
              <Route
                exact
                path="/user/:lang/training/kinder_jugendliche"
                component={TrainingChildren}
              />
              <Route
                exact
                path="/user/:lang/training/erwachsene"
                component={TrainingAdults}
              />
              <Route
                exact
                path="/user/:lang/training/unternehmen"
                component={TrainingUnternehmen}
              />
              <Route
                exact
                path="/user/:lang/training/detail/:trainingId"
                component={TrainingDetail}
              />
              <Route
                exact
                path="/user/:lang/training/trainingsprojekte"
                component={TrainingsProjekte}
              />
              <Route
                exact
                path="/user/:lang/training/trainer_innen"
                component={TrainingTeam}
              />

              <Route
                exact
                path="/user/:lang/mitmischen"
                component={Mitmischen}
              />
              <Route
                exact
                path="/user/:lang/mitmischen/counternarratives"
                component={CounterNarratives}
              />
              <Route
                exact
                path="/user/:lang/mitmischen/hashtags"
                component={Hashtags}
              />
              <Route
                exact
                path="/user/:lang/mitmischen/hasspostings_melden"
                component={HasspostingsMelden}
              />

              <Route
                exact
                path="/user/:lang/mitmischen/community"
                component={Community}
              />
              <Route
                exact
                path="/user/:lang/mitmischen/unterstuetzen"
                component={Unterstuetzen}
              />

              <Route exact path="/user/:lang/wissen" component={Wissen} />
              <Route
                exact
                path="/user/:lang/wissen/aktuelles"
                component={News}
              />
              <Route
                exact
                path="/user/:lang/wissen/aktuelles/kolumne"
                component={Kolumne}
              />
              <Route
                exact
                path="/user/:lang/wissen/aktuelles/:category/:newsId"
                component={NewsDetail}
              />
              <Route
                exact
                path="/user/:lang/wissen/eigene_rechte_kennen"
                component={KenneDeineRechte}
              />
              <Route
                exact
                path="/user/:lang/wissen/eigene_rechte_kennen/glossar"
                component={Glossar}
              />
              <Route
                exact
                path="/user/:lang/wissen/presse"
                component={Presse}
              />
              <Route
                exact
                path="/user/:lang/wissen/presse/pressespiegel"
                component={Pressespiegel}
              />
              <Route
                exact
                path="/user/:lang/wissen/presse/logos_und_kampagnenmaterial"
                component={Logos}
              />
              <Route
                exact
                path="/user/:lang/wissen/presse/fotos"
                component={Fotos}
              />
              <Route
                exact
                path="/user/:lang/wissen/publikationen"
                component={Publikationen}
              />
              <Route
                exact
                path="/user/:lang/wissen/publikationen/rassismusreport"
                component={RassismusReport}
              />
              <Route
                exact
                path="/user/:lang/wissen/publikationen/rassismusreport/bestellung_abgeschlossen"
                component={OrderDone}
              />
              <Route exact path="/user/:lang/wissen/faq" component={Faq} />

              <Redirect
                exact
                from="/user/:lang/ueber_ZARA"
                to="/user/:lang/ueber_ZARA/wer_wir_sind"
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/wer_wir_sind"
                component={WasWirWollen}
              />
              <Redirect
                exact
                from="/user/:lang/ueber_ZARA/was_wir_wollen"
                to="/user/:lang/ueber_ZARA/was_wir_wollen/mission"
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/was_wir_wollen/mission"
                component={Mission}
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/was_wir_wollen/geschichte"
                component={History}
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/was_wir_wollen/grundsaetze"
                component={Grundsaetze}
              />
              <Redirect
                exact
                from="/user/:lang/ueber_ZARA/was_wir_wollen/mitmischen"
                to="/user/:lang/mitmischen"
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/wer_wir_sind/team"
                component={Team}
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/wer_wir_sind/jobs"
                component={Jobs}
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/projekte_und_kooperation/netzwerke_und_initiativen"
                component={Netzwerke}
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/projekte_und_kooperation/projekte"
                component={Projekte}
              />
              <Route
                exact
                path="/user/:lang/ueber_ZARA/projekte_und_kooperation/befreundete_organisationen"
                component={Organisationen}
              />

              <Route exact path="/user/:lang/kontakt" component={Kontakt} />
              <Route
                exact
                path="/user/:lang/verschluesselte_email"
                component={VerschluesselteEmail}
              />

              <Route exact path="/user/:lang/impressum" component={Impressum} />
              <Route
                exact
                path="/user/:lang/datenschutzerklaerung"
                component={Datenschutz}
              />
            </Switch>
          </div>
        </ScrollToTop>
        {activeLanguage && this.state.showCookieConsent && (
          <CookieConsent
            handleClick={this.cookieAccept}
            lang={activeLanguage.code}
          />
        )}
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
