import React, { Component } from 'react'

import { Carousel } from 'react-responsive-carousel'

import CarouselItem from './CarouselItem'

import styles from './CarouselGroup.module.sass'

class CarouselGroup extends Component {
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

export default CarouselGroup
