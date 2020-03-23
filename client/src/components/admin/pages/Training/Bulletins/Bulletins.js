import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from '../../../common/PrivateRoute';

import { getAll } from '../../../../../actions/adminActions';

import ItemAddList from '../../../common/ItemAddList/ItemAddList';
import BulletinContent from './BulletinContent';

import styles from './Bulletins.module.sass';

class Bulletins extends Component {
  componentDidMount() {
    this.props.getAll('bulletins');
  }

  render() {
    return (
      <div className={styles['bulletins']}>
        {this.props.training && (
          <ItemAddList
            content={this.props.training.bulletins}
            baseCat="training"
            category="bulletins"
          />
        )}
        <PrivateRoute
          path="/admin/training/bulletins/:bulletinId"
          component={BulletinContent}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  training: state.training
});

export default connect(mapStateToProps, { getAll })(Bulletins);
