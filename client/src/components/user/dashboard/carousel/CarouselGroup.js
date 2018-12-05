import React, { Component } from 'react'

import { Carousel } from 'react-responsive-carousel'
import DateObject from '../dateObject/DateObject'

import cx from 'classnames'
import './carousel.min.css'
import styles from './CarouselGroup.module.sass'

import Image1 from './img/test_img1.png'

class CarouselGroup extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        infiniteLoop
        // autoPlay

        interval={10000}
        transitionTime={2000}
        showStatus={false}
      >
        <div className={styles['carousel-item']}>
          <div className={styles['carousel-item--info']}>
            <div className={styles['carousel-item--info__header']}>
              <DateObject lang={this.props.lang} />
              <div className={styles['info-title']}>
                <div className={styles['info-title--category']}>Workshop</div>
                <div className={styles['info-title--main']}>
                  Digitale Zivilcourage
                </div>
              </div>
            </div>
            <div className={styles['carousel-item--info__body']}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                velit rerum dolores culpa ab sequi reiciendis obcaecati in,
                architecto ducimus modi, consequuntur a hic cupiditate eligendi
                voluptatibus nam possimus eum!
              </p>
            </div>
          </div>
          <div className={styles['carousel-item--image']}>
            <img src={Image1} />
          </div>
        </div>
        <div>
          <img src="http://placekitten.com/g/800/300" />
        </div>
        <div>
          <img src="http://placekitten.com/g/800/300" />
        </div>
      </Carousel>
    )
  }
}

export default CarouselGroup
