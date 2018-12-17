import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { withLocalize, Translate } from 'react-localize-redux'

import Logo from '../../../common/zara_logo.png'
import LogoAdd from '../../../common/zara_logo_add.png'

import ActIcon from '../../../common/img/act.png'

import cx from 'classnames'
import styles from './MobileMenu.module.sass'

export default class MobileMenu extends Component {
  constructor() {
    super()
    this.state = {
      mobileExpand: false
    }
  }

  onMobileNavClick = () => {
    console.log('asd')
    this.setState({
      mobileExpand: !this.state.mobileExpand
    })
  }

  render() {
    const { menuItems, lang } = this.props
    return (
      <div className={styles['mobile-menu']}>
        <nav className={cx(styles.header)}>
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
        </nav>
        <div className={styles['mobile-menu--header']}>
          <NavLink to="/user">
            <div className={styles.logo}>
              <img className={styles['logo-img']} src={Logo} alt="Zara" />
              {/* <img
                className={cx(styles['logo-add-img'], {
                  [styles['hide']]: this.state.subTitleHide
                })}
                src={LogoAdd}
                alt="Zivilcourage und Anti-Rassismus-Arbeit"
              /> */}
            </div>
          </NavLink>
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
        <div />
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
                        to={`/lang}/${item.link}`}
                      >
                        <Translate id={`menu.item${item.id}`} />
                      </NavLink>
                      <div className={styles['main-menu--item__arrow']}>
                        <i className="fa fa-angle-right" />
                      </div>
                    </div>
                    <nav
                      role="menu"
                      className={cx(styles['sub-menu'], {
                        [styles['open']]: this.state.subMenuVisible
                      })}
                    >
                      {/* <SubMenu
                      menuItems={menuItems}
                      // subMenuContent={this.state.subMenuContent}
                      lang={lang}
                    /> */}
                    </nav>
                  </div>
                )
            )}
            {/* <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1> */}
          </div>
        </div>
      </div>
    )
  }
}
