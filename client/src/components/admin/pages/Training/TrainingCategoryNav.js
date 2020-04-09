import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import cx from 'classnames';
import styles from '../dashboard/Dashboard.module.sass';

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div className={styles['category-nav']}>
        {user.securityLevel !== 16 ? (
          <div>
            <NavLink
              className={cx(
                styles['category-nav--link'],
                styles['category-nav--link__media']
              )}
              activeClassName={styles['cat-active']}
              to="/admin/dashboard/media/training"
            >
              Media
            </NavLink>

            <NavLink
              className={styles['category-nav--link']}
              activeClassName={styles['cat-active']}
              to="/admin/training/labels"
            >
              Labels
            </NavLink>
            <NavLink
              className={styles['category-nav--link']}
              activeClassName={styles['cat-active']}
              to="/admin/training/team"
            >
              Trainer*innen
            </NavLink>
            <NavLink
              className={styles['category-nav--link']}
              activeClassName={styles['cat-active']}
              to="/admin/training/trainings"
            >
              Trainings
            </NavLink>
            <NavLink
              className={styles['category-nav--link']}
              activeClassName={styles['cat-active']}
              to="/admin/training/calendar"
            >
              Kalender
            </NavLink>
            <NavLink
              className={styles['category-nav--link']}
              activeClassName={styles['cat-active']}
              to="/admin/training/fees"
            >
              Honorare
            </NavLink>
            <NavLink
              className={cx(
                styles['category-nav--link'],
                styles['category-nav--link__new']
              )}
              activeClassName={styles['cat-active']}
              to="/admin/training/bulletins"
            >
              Bulletins
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink
              className={cx(styles['category-nav--link'], styles['only-child'])}
              activeClassName={styles['cat-active']}
              to="/admin/training/calendar"
            >
              Kalender
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps, {})(Dashboard));
