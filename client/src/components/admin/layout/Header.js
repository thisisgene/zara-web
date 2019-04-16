import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/authActions'
import { clearAll } from '../../../actions/adminActions'

import Logo from '../common/zara_logo.png'

import { authLinks } from './nav-links'

import cx from 'classnames'
import styles from './Header.module.sass'
import globalStyles from '../common/Bootstrap.module.css'

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault()
    this.props.clearAll()
    this.props.logoutUser()
  }

  render() {
    const { isAuthenticated, user } = this.props.auth

    // const authLinks = (
    //   <ul className={cx(globalStyles.nav, globalStyles['justify-content-end'])}>
    //     {user.securityLevel <= 3 && (
    //       <li className={globalStyles['nav-item']}>
    //         <NavLink
    //           activeClassName={styles['active']}
    //           className={globalStyles['nav-link']}
    //           to="/admin/dashboard"
    //         >
    //           <i className="fas fa-cubes" />
    //         </NavLink>
    //       </li>
    //     )}
    //     {(user.securityLevel === 4 || user.securityLevel <= 2) && (
    //       <li className={globalStyles['nav-item']}>
    //         <NavLink
    //           activeClassName={styles['active']}
    //           className={globalStyles['nav-link']}
    //           to="/admin/reports"
    //         >
    //           <i className="fas fa-clipboard-list" />
    //         </NavLink>
    //       </li>
    //     )}
    //     {(user.securityLevel === 4 || user.securityLevel <= 2) && (
    //       <li className={globalStyles['nav-item']}>
    //         <NavLink
    //           activeClassName={styles['active']}
    //           className={globalStyles['nav-link']}
    //           to="/admin/training"
    //         >
    //           <i className="fas fa-graduation-cap" />
    //         </NavLink>
    //       </li>
    //     )}
    //     {user.securityLevel <= 1 && (
    //       <li className={globalStyles['nav-item']}>
    //         <NavLink
    //           activeClassName={styles['active']}
    //           className={globalStyles['nav-link']}
    //           to="/admin/settings"
    //         >
    //           <i className="fas fa-cog" />
    //         </NavLink>
    //       </li>
    //     )}
    //     <li className={globalStyles['nav-item']}>
    //       <button
    //         className={cx(globalStyles.btn, globalStyles['btn-link'])}
    //         id="dLabel"
    //         data-toggle="dropdown"
    //         aria-haspopup="true"
    //         aria-expanded="false"
    //       >
    //         {user.name}
    //       </button>
    //     </li>
    //   </ul>
    // )

    return (
      <div className={styles['header']}>
        <nav
          className={cx(
            globalStyles.navbar,
            globalStyles['navbar-dark'],
            globalStyles['bg-dark'],
            styles['navbar']
          )}
        >
          <Link className={globalStyles['navbar-brand']} to="/admin/">
            <img
              src={Logo}
              height="30"
              className={cx(
                globalStyles['d-inline-block'],
                globalStyles['align-top']
              )}
              alt=""
            />
            {/* <h1>ZARA</h1> */}
            <span>Admin</span>
          </Link>
          {isAuthenticated ? (
            <ul
              className={cx(
                globalStyles.nav,
                globalStyles['justify-content-end']
              )}
            >
              {authLinks
                .filter(
                  link =>
                    link.securityLevel === user.securityLevel ||
                    user.securityLevel <= link.securityMaxLevel
                )
                .map(link => (
                  <li className={globalStyles['nav-item']}>
                    <NavLink
                      activeClassName={styles['active']}
                      className={cx(
                        globalStyles['nav-link'],
                        styles['nav-link']
                      )}
                      to={`/admin/${link.link}`}
                    >
                      <i className={link.icon} />
                      <p>{link.name}</p>
                    </NavLink>
                  </li>
                ))}
              <li className={globalStyles['nav-item']}>
                <button
                  onClick={this.onLogoutClick.bind(this)}
                  className={cx(
                    globalStyles.btn,
                    globalStyles['btn-link'],
                    styles['nav-link']
                  )}
                >
                  <i className="fas fa-sign-out-alt" />
                  <p>Log Out</p>
                </button>
              </li>
            </ul>
          ) : (
            <ul
              className={cx(
                globalStyles.nav,
                globalStyles['justify-content-end']
              )}
            >
              <li className={globalStyles['nav-item']}>
                <Link
                  className={cx(globalStyles['nav-link'], styles['nav-link'])}
                  to="/admin/login"
                >
                  <i className="fas fa-sign-in-alt" />
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    )
  }
}

Header.propTypes = {
  // clearProjects: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser, clearAll }
  )(Header)
)
