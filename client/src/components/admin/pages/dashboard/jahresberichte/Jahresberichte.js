import React, { Component } from './react'
import { connect } from './react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import { jahresberichtTags } from './jahresberichte_data'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
// import NewsList from './NewsList/NewsList'
import JahresberichtContent from './JahresberichtContent/JahresberichtContent'

import styles from './Jahresberichte.module.sass'

class Jahresberichte extends Component {
  componentDidMount() {
    this.props.getAll('jahresberichte')
  }

  render() {
    return (
      <div className={styles['jahresberichte']}>
        {this.props.jahresberichte && (
          <ItemAddList
            tags={jahresberichtTags}
            content={this.props.jahresberichte.jahresberichte}
            category={'jahresberichte'}
          />
        )}
        <PrivateRoute
          path="/admin/dashboard/jahresberichte/:jahresberichtId"
          component={JahresberichtContent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jahresberichte: state.jahresberichte
})

export default connect(
  mapStateToProps,
  { getAll }
)(Jahresberichte)
