import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from '../../../common/PrivateRoute';

import { getAll } from '../../../../../actions/adminActions';

import ItemAddList from '../../../common/ItemAddList/ItemAddList';
import BulletinContent from './BulletinContent';

import { trainingTags } from '../../../../user/pages/Training/training_data';

import styles from './Bulletins.module.sass';

class Bulletins extends Component {
  componentDidMount() {
    this.props.getAll('bulletins');
  }

  render() {
    return (
      <div className={styles['bulletins']}>
        {this.props.bulletin && (
          <ItemAddList
            content={this.props.bulletin.bulletins}
            baseCat="training"
            category="bulletins"
            tags={trainingTags}
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

const mapStateToProps = (state) => ({
  bulletin: state.bulletin,
});

export default connect(mapStateToProps, { getAll })(Bulletins);
