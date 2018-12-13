import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import LanguageToggle from './LanguageToggle'

import IconObject from '../dashboard/IconObject/IconObject'

import Logo from '../common/zara_logo.png'
import LogoAdd from '../common/zara_logo_add.png'

import menuItemsFromFile from './menuItems'
import SubMenu from './SubMenu'

import ActIcon from '../common/img/act.png'

import cx from 'classnames'
import styles from './Header.module.sass'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileExpand: false,
      subMenuVisible: false,
      subMenuContent: ''
    }
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
    console.log('OUT!!')
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
        <nav
          className={cx(styles.header)}
          onMouseLeave={this.onLinkBlur.bind(this)}
          onFocusOut={this.onLinkBlur.bind(this)}
        >
          <NavLink
            onClick={this.state.mobileExpand ? this.onMobileNavClick : null}
            to="/user"
          >
            <div className={styles.logo}>
              <img className={styles['logo-img']} src={Logo} alt="Zara" />
              <img
                className={styles['logo-add-img']}
                src={LogoAdd}
                alt="Zivilcourage und Anti-Rassismus-Arbeit"
              />
            </div>
          </NavLink>
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
                    //  TODO: Sub menu links focus on keyboard tab
                    <div>
                      <NavLink
                        key={item.id}
                        activeClassName={styles.active}
                        to={`/user/${activeLanguage.code}/${item.link}`}
                        onMouseEnter={this.onLinkHover.bind(this, item.id)}
                        onFocus={this.onLinkHover.bind(this, item.id)}
                      >
                        <Translate id={`menu.item${item.id}`} />
                      </NavLink>
                      <nav
                        role="submenu"
                        className={cx(styles['sub-menu'], {
                          [styles['open']]: this.state.subMenuVisible
                        })}
                      >
                        <SubMenu
                          menuItems={menuItems}
                          subMenuContent={this.state.subMenuContent}
                          lang={activeLanguage && activeLanguage.code}
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
        </nav>
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
