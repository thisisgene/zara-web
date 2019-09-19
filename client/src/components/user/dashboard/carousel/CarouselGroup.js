import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAll } from '../../../../actions/adminActions'

import { Carousel } from 'react-responsive-carousel'

import CarouselItem from './CarouselItem'

import styles from './CarouselGroup.module.sass'

class CarouselGroup extends Component {
  componentDidMount() {
    this.props.getAll('carousel')
  }

  render() {
    const { data, lang } = this.props

    return (
      <div className={styles['carousel-container']}>
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={10000}
          transitionTime={1000}
          showStatus={false}
        >
          {this.props.carousel &&
            this.props.carousel.carousels &&
            lang &&
            this.props.carousel.carousels.map((item, index) => (
              <CarouselItem
                contentType="server"
                key={index}
                item={item}
                lang={lang}
              />
            ))}
          {data &&
            lang &&
            data.map((item, index) => (
              <CarouselItem key={index} item={item} lang={lang} />
            ))}
        </Carousel>
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
)(CarouselGroup)
