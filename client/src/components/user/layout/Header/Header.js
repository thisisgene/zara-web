import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'
import ReactTooltip from 'react-tooltip'

import LanguageToggle from './LanguageToggle'
import globalTranslations from '../../common/translations/global.json'
import { renderToStaticMarkup } from 'react-dom/server'
import IconObject from '../../dashboard/IconObject/IconObject'
import MobileMenu from './MobileMenu/MobileMenu'

import Logo from '../../common/assets/logo/collapsed.svg'
import LogoAddDe from '../../common/assets/logo/claim-de.svg'
import LogoAddEn from '../../common/assets/logo/claim-en.svg'

import ActionBar from './ActionBar/ActionBar'
import menuItemsFromFile from './menuItems'
import SubMenu from './SubMenu'

import cx from 'classnames'
import styles from './Header.module.sass'

class Header extends Component {
  constructor(props) {
    super(props)

    const languages = [
      { name: 'Deutsch', code: 'de' },
      { name: 'English', code: 'en' }
    ]

    const defaultLanguage = props.match.params.lang || languages[0].code

    this.props.initialize({
      languages,
      translation: globalTranslations,
      options: { defaultLanguage, renderToStaticMarkup } // TODO: Set defaultLanguage after reload!
    })

    this.state = {
      mobileExpand: false,
      subMenuVisible: false,
      subMenuContent: '',
      subTitleHide: false,
      showLanguageAlert: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
      subTitleHide: window.scrollY >= 30
    })
  }

  onMobileNavClick = () => {
    this.setState({
      mobileExpand: !this.state.mobileExpand
    })
  }

  onLinkHover = id => {
    this.setState({
      subMenuContent: id,
      subMenuVisible: true
    })
  }
  onLinkBlur = id => {
    this.setState({
      subMenuVisible: false
    })
  }

  render() {
    const { activeLanguage } = this.props
    let menuItems = menuItemsFromFile

    return (
      <div className={styles['nav-wrapper']}>
        <div className={styles['header-container']}>
          <nav
            className={cx(styles.header)}
            onMouseLeave={this.onLinkBlur.bind(this)}
            onFocusOut={this.onLinkBlur.bind(this)}
          >
            <NavLink
              onClick={this.state.mobileExpand ? this.onMobileNavClick : null}
              to="/user"
            >
              <div className={styles.logo} onClick={this.onLinkBlur}>
                <img className={styles['logo-img']} src={Logo} alt="Zara" />
                {activeLanguage && activeLanguage.code === 'de' ? (
                  <img
                    className={cx(styles['logo-add-img'], {
                      [styles['hide']]: this.state.subTitleHide
                    })}
                    src={LogoAddDe}
                    alt="Zivilcourage und Anti-Rassismus-Arbeit"
                  />
                ) : (
                  <img
                    className={cx(styles['logo-add-img'], {
                      [styles['hide']]: this.state.subTitleHide
                    })}
                    src={LogoAddEn}
                    alt="Civil Courage and Anti-Racism-Work"
                  />
                )}
              </div>
            </NavLink>
            <div className={styles['main-menu']}>
              <div className={styles['top-header']}>
                <div className={styles['top-header--menu']}>
                  <ActionBar
                    lang={activeLanguage && activeLanguage.code}
                    align={'top'}
                    onClick={this.onLinkBlur}
                  />
                </div>
              </div>
              <div className={styles['menu-container']}>
                {menuItems.map(
                  item =>
                    activeLanguage && (
                      //  TODO: Sub menu links focus on keyboard tab
                      <div key={item.id}>
                        <NavLink
                          activeClassName={styles.active}
                          to={`/user/${activeLanguage.code}/${item.link}`}
                          onMouseEnter={this.onLinkHover.bind(this, item.id)}
                          onFocus={this.onLinkHover.bind(this, item.id)}
                          onClick={this.onLinkBlur}
                        >
                          <Translate id={`menu.item${item.id}`} />
                        </NavLink>
                        <nav
                          role="menu"
                          className={cx(styles['sub-menu'], {
                            [styles['open']]: this.state.subMenuVisible
                          })}
                        >
                          <SubMenu
                            menuItems={menuItems}
                            subMenuContent={this.state.subMenuContent}
                            lang={activeLanguage && activeLanguage.code}
                            onClick={this.onLinkBlur}
                          />
                        </nav>
                      </div>
                    )
                )}
              </div>
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
                <label htmlFor="mce-EMAIL">
                  <IconObject image="newsletterLogo" />
                </label>
              </div>
              <div className={styles['right-menu--bottom']}>
                <div className={styles['language-box']}>
                  <LanguageToggle />
                </div>
                <div
                  className={styles['search-box']}
                  data-tip
                  data-for="searchTT"
                >
                  <IconObject image="search" />
                </div>
                <ReactTooltip
                  id="searchTT"
                  place="bottom"
                  type="dark"
                  delayHide={1000}
                  effect="solid"
                >
                  <span>
                    Die Suchfunktion wird demnächst zur Verfügung stehen. <br />{' '}
                    Wir bitten um Ihr Verständnis.
                  </span>
                </ReactTooltip>
              </div>
            </div>
          </nav>
        </div>
        <div className={styles['mobile-menu-container']}>
          {activeLanguage && (
            <MobileMenu menuItems={menuItems} lang={activeLanguage.code} />
          )}
        </div>

        {/* {activeLanguage && (
          <Redirect exact from="/user" to={`/user/${activeLanguage.code}`} />
        )} */}
      </div>
    )
  }
}

export default withLocalize(Header)
