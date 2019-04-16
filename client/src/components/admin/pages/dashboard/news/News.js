import React, { Component } from './react'
import { connect } from './react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
// import NewsList from './NewsList/NewsList'
import NewsContent from './NewsContent/NewsContent'

import styles from './News.module.sass'
import { newsTags } from '../../../../user/pages/Wissen/News/news_data'

class News extends Component {
  componentDidMount() {
    this.props.getAll('news')
  }

  render() {
    return (
      <div className={styles['news']}>
        {this.props.news && (
          <ItemAddList
            tags={newsTags}
            content={this.props.news.news}
            category={'news'}
          />
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
