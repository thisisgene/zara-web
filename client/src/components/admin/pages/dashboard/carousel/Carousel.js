import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrivateRoute from '../../../common/PrivateRoute'

import { getAll } from '../../../../../actions/adminActions'

import ItemAddList from '../../../common/ItemAddList/ItemAddList'
// import NewsList from './NewsList/NewsList'
import CarouselContent from './CarouselContent/CarouselContent'
// import { newsTags } from '../../../../user/pages/Wissen/News/news_data'

import styles from './Carousel.module.sass'

class Carousel extends Component {
  componentDidMount() {
    this.props.getAll('carousel')
  }

  render() {
    return (
      <div className={styles['carousel']}>
        {this.props.carousel && (
          <ItemAddList
            // tags={newsTags}
            content={this.props.carousel.carousels}
            baseCat={'dashboard'}
            category={'carousel'}
          />
        )}
        <PrivateRoute
          path="/admin/dashboard/carousel/:carouselId"
          component={CarouselContent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  carousel: state.carousel
})

export default connect(
  mapStateToProps,
  { getAll }
)(Carousel)
