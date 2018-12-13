import React, { Component } from 'react'

import { Carousel } from 'react-responsive-carousel'

import CarouselItem from './CarouselItem'

class CarouselGroup extends Component {
  render() {
    const { serverData, lang } = this.props

    return (
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={10000}
        transitionTime={1000}
        showStatus={false}
      >
        {serverData &&
          lang &&
          serverData.map((item, index) => (
            <CarouselItem key={index} item={item} lang={lang} />
          ))}
      </Carousel>
    )
  }
}

export default CarouselGroup
