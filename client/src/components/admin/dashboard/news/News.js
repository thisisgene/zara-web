import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../common/PrivateRoute'

import { getAll } from '../../../../actions/adminActions'

import ItemAddList from '../../common/ItemAddList/ItemAddList'
import NewsList from './NewsList/NewsList'
import NewsContent from './NewsContent/NewsContent'

import styles from './News.module.sass'

class News extends Component {
  componentDidMount() {
    this.props.getAll('news')
  }

  render() {
    return (
      <div className={styles['news']}>
        {this.props.news.news && (
          <ItemAddList content={this.props.news.news} category={'news'} />
        )}
        <PrivateRoute
          path="/admin/dashboard/news/:newsId"
          component={NewsContent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

export default connect(
  mapStateToProps,
  { getAll }
)(News)
