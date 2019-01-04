import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'
import ReactTooltip from 'react-tooltip'

import Logo from '../../../common/zara_logo.png'

import IconObject from '../../../dashboard/IconObject/IconObject'
import ActionBar from '../ActionBar/ActionBar'
import LanguageToggle from '../LanguageToggle'
import MobileSubMenu from './MobileSubMenu'
import OneLineContainer from '../../../dashboard/OneLineContainer/OneLineContainer'

import { oneLineContent } from '../../Footer/footer_data'

import cx from 'classnames'
import styles from './MobileMenu.module.sass'

class MobileMenu extends Component {
  constructor() {
    super()
    this.state = {
      mobileExpand: false,
      subMenuVisible: false,
      subMenuContent: '',
      stickyMenu: false,
      scrollToTop: false
    }
    this.menu = React.createRef()
  }

  onMobileNavClick = () => {
    this.setState({
      mobileExpand: !this.state.mobileExpand,
      scrollToTop: true
    })
    if (this.state.subMenuVisible) {
      this.setState({ subMenuVisible: false })
    }
  }

  onLinkClick = (id, e) => {
    this.setState({
      subMenuContent: id,
      subMenuVisible: true
    })
  }

  onSubLinkClick = () => {
    this.setState({
      // subMenuContent: id,
      subMenuVisible: false
    })
  }

  render() {
    const { menuItems, lang } = this.props
    return (
      <div className={styles['mobile-menu-wrapper']}>
        <nav className={cx(styles.header)}>
          <ActionBar lang={lang && lang} />
        </nav>
        <div
          className={cx(styles['mobile-menu'], {
            [styles['submenu-open']]: this.state.mobileExpand
          })}
        >
          <div className={styles['mobile-menu--header']}>
            <NavLink to="/user">
              <div
                className={cx(styles.logo, {
                  [styles['submenu-open']]: this.state.subMenuVisible
                })}
              >
                <img className={styles['logo-img']} src={Logo} alt="Zara" />
              </div>
            </NavLink>
            <div
              className={cx(styles['mobile-menu--header__right'], {
                [styles['submenu-open']]: this.state.subMenuVisible
              })}
            >
              <div
                className={cx(styles['second-button'], {
                  [styles['submenu-open']]: this.state.subMenuVisible
                })}
              >
                {this.state.mobileExpand ? (
                  <div className={styles['language-box']}>
                    <LanguageToggle />
                  </div>
                ) : (
                  <div
                    className={styles['search-box']}
                    data-tip
                    data-for="searchTT"
                  >
                    <IconObject image="search" />
                  </div>
                )}
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

          <div
            className={cx(styles['main-menu-container'], {
              [styles['expand']]: this.state.mobileExpand
            })}
          >
            <div className={styles['main-menu']}>
              {menuItems.map(
                item =>
                  lang && (
                    //  TODO: Sub menu links focus on keyboard tab
                    <div key={item.id}>
                      <div className={styles['main-menu--item']}>
                        <NavLink
                          activeClassName={styles.active}
                          to={`/user/${lang}/${item.link}`}
                          onClick={this.onMobileNavClick}
                        >
                          <Translate id={`menu.item${item.id}`} />
                        </NavLink>
                        <div
                          className={styles['main-menu--item__arrow']}
                          onClick={this.onLinkClick.bind(this, item.id)}
                        >
                          <i className="fa fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  )
              )}
              <div className={styles['bottom-action-bar-container']}>
                <ActionBar
                  lang={lang && lang}
                  align={'left'}
                  onClick={this.onMobileNavClick}
                />
              </div>
            </div>
            <div className="OneLineContainer">
              <OneLineContainer
                contentObj={oneLineContent[lang]}
                newsletterInputId={'ninpu1'}
              />
            </div>
          </div>
          <nav
            role="menu"
            className={cx(styles['mobile-sub-menu'], {
              [styles['open']]: this.state.subMenuVisible
            })}
          >
            <MobileSubMenu
              menuItems={menuItems}
              subMenuContent={this.state.subMenuContent}
              lang={lang}
              onSubLinkClick={this.onSubLinkClick}
              onMobileNavClick={this.onMobileNavClick}
            />
          </nav>
        </div>
      </div>
    )
  }
}

export default withLocalize(MobileMenu)
