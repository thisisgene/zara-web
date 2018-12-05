import React, { Component } from 'react'

import { Carousel } from 'react-responsive-carousel'
import DateObject from '../dateObject/DateObject'

import cx from 'classnames'
import './carousel.min.css'
import styles from './CarouselGroup.module.sass'

import Image1 from './img/test_img1.png'

class CarouselGroup extends Component {
  render() {
    const { serverData, lang } = this.props
    return (
      <Carousel
        showThumbs={false}
        infiniteLoop
        // autoPlay
        interval={10000}
        transitionTime={1000}
        showStatus={false}
      >
        {serverData &&
          lang &&
          serverData.map((item, index) => (
            <div
              key={index}
              className={cx(styles['carousel-item'], {
                [styles['backgroundImage']]: item.imageAsBackground
              })}
              style={{
                background: item.imageAsBackground ? `url(${Image1})` : 'none'
              }}
            >
              <div className={styles['carousel-item--info']}>
                <div className={styles['carousel-item--info__header']}>
                  <DateObject dateObj={item[lang].date} lang={lang} />
                  <div className={styles['info-title']}>
                    <div className={styles['info-title--category']}>
                      {item[lang].category}
                    </div>
                    <div className={styles['info-title--main']}>
                      {item[lang].title}
                    </div>
                  </div>
                </div>
                <div className={styles['carousel-item--info__body']}>
                  <p>{item[lang].text}</p>
                </div>
              </div>
              {item.imageAsBackground ? (
                ''
              ) : (
                <div className={styles['carousel-item--image']}>
                  <img src={Image1} />
                </div>
              )}
            </div>
          ))}
      </Carousel>
    )
  }
}

export default CarouselGroup
