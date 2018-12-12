import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'
import headerTranslations from '../common/translations/global.json'
import { renderToStaticMarkup } from 'react-dom/server'

import LanguageToggle from './LanguageToggle'

import IconObject from '../dashboard/IconObject/IconObject'

// import Logo from '/assets/Layer_1_2.png'

import menuItemsFromFile from './menuItems'
import SubMenu from './SubMenu'

import ActIcon from '../common/img/act.png'

import cx from 'classnames'
import styles from './Header.module.sass'

class Header extends Component {
  constructor(props) {
    super(props)

    const languages = [
      { name: 'Deutsch', code: 'de' },
      { name: 'English', code: 'en' }
    ]
    // const defaultLanguage =
    //   window.localStorage.getItem('languageCode') || this.props.languages[0]
    this.props.initialize({
      languages,
      // translation: headerTranslations,
      options: { renderToStaticMarkup } // TODO: Set defaultLanguage after reload!
    })

    this.props.addTranslation(headerTranslations)
    this.state = {
      mobileExpand: false,
      subMenuContent: ''
    }
  }
  componentDidUpdate(prevProps) {
    const prevLangCode =
      prevProps.activeLanguage && prevProps.activeLanguage.code
    const curLangCode =
      this.props.activeLanguage && this.props.activeLanguage.code

    const hasLanguageChanged = prevLangCode !== curLangCode
    if (hasLanguageChanged) {
      window.localStorage.setItem('languageCode', curLangCode)
    }
  }
  onMobileNavClick = () => {
    this.setState({
      mobileExpand: !this.state.mobileExpand
    })
  }

  onLinkHover = id => {
    this.setState({
      subMenuContent: id
    })
  }

  render() {
    // NOTE: Does link to admin make sense?
    // const toAdmin = this.props.auth ? (
    //   <NavLink to="../admin">To Admin</NavLink>
    // ) : (
    //   ''
    // )
    // const { hasBackgroundImage } = this.props
    // if (hasBackgroundImage) {
    //   console.log('hello')
    // }
    const { activeLanguage } = this.props
    let menuItems = menuItemsFromFile

    return (
      <div className={styles['header-container']}>
        <div className={cx(styles.header)}>
          <div className={styles.logo}>
            <NavLink
              onClick={this.state.mobileExpand ? this.onMobileNavClick : null}
              to="/user"
            >
              <img
                src="/assets/Layer_1_2.png"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </NavLink>
          </div>
          <div className={styles['main-menu']}>
            <div className={styles['top-header']}>
              <div className={styles['top-header--menu']}>
                <NavLink activeClassName={styles.active} to="/user/melden">
                  <img src={ActIcon} alt="" />
                </NavLink>
                <NavLink activeClassName={styles.active} to="/user/melden">
                  Melden
                </NavLink>
                <NavLink activeClassName={styles.active} to="/user/spenden">
                  Spenden
                </NavLink>
                <NavLink activeClassName={styles.active} to="/user/kontakt">
                  Kontakt
                </NavLink>
              </div>
            </div>
            <div className={styles['menu-container']}>
              {menuItems.map(
                item =>
                  activeLanguage && (
                    // TODO: Set link base to '/' for de
                    <NavLink
                      key={item.id}
                      activeClassName={styles.active}
                      to={`/user/${activeLanguage.code}/${item.name}`}
                      onMouseOver={this.onLinkHover.bind(this, item.id)}
                    >
                      <Translate id={`menu.item${item.id}`}>
                        {item.name}
                      </Translate>
                    </NavLink>
                  )
              )}
            </div>
          </div>
          <div className={styles['sub-menu']}>
            <SubMenu
              menuItems={menuItems}
              subMenuContent={this.state.subMenuContent}
            />
          </div>
          <div className={styles['right-menu']}>
            <div className={styles['right-menu--top']}>
              <a target="blank" href="http://facebook.com">
                <IconObject image="fbLogo" />
              </a>
              <a target="blank" href="http://twitter.com">
                <IconObject image="twitterLogo" />
              </a>
              <a target="blank" href="http://instagram.com">
                <IconObject image="instaLogo" />
              </a>
              <a target="blank" href="http://youtube.com">
                <IconObject image="ytLogo" />
              </a>
              <a target="blank" href="http://mailchimp.com">
                <IconObject image="newsletterLogo" />
              </a>
            </div>
            <div className={styles['right-menu--bottom']}>
              <div className={styles['language-box']}>
                <LanguageToggle />
              </div>
              <div className={styles['search-box']}>
                <i className="fa fa-search" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles['mobile-menu-container']}>
            <div
              className={cx(styles['mobile-menu'], {
                [styles['expanded']]: this.state.mobileExpand
              })}
            >
              <NavLink
                activeClassName={styles.active}
                onClick={this.onMobileNavClick}
                to="/user/aktuell"
              >
                Aktuell
              </NavLink>
              <NavLink
                activeClassName={styles.active}
                onClick={this.onMobileNavClick}
                to="/user/projekte"
              >
                Projekte
              </NavLink>
              <NavLink
                activeClassName={styles.active}
                onClick={this.onMobileNavClick}
                to="/user/team"
              >
                Team
              </NavLink>
              <NavLink
                activeClassName={styles.active}
                onClick={this.onMobileNavClick}
                to="/user/kontakt"
              >
                Kontakt
              </NavLink>
            </div>
            <div className={styles['mobile-menu-button']}>
              <div onClick={this.onMobileNavClick}>
                <span
                  className={cx(styles['nav-burger'], {
                    [styles['burger-expand']]: this.state.mobileExpand
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   hasBackgroundImage: state.hasBackgroundImage
// })

// export default connect(
//   mapStateToProps,
//   {}
// )(Header)

export default withLocalize(Header)
