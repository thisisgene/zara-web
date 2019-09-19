import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DateObject from '../dateObject/DateObject'
import ButtonObject from '../ButtonObject/ButtonObject'
import CustomLink from '../CustomLink/CustomLink'

import cx from 'classnames'
import './carousel.min.css'
import styles from './CarouselGroup.module.sass'

import Image1 from './img/test_img2.png'

class CarouselItem extends Component {
  constructor() {
    super()

    this.state = {
      imageLoaded: false
    }
  }

  onLoad = () => {
    this.setState({
      imageLoaded: true
    })
  }
  render() {
    const { item, lang, contentType } = this.props
    const imageUrl =
      contentType === 'server'
        ? `/assets/media/carousel/${item.titleImage.originalName}`
        : `/assets/img/carousel/${item.image}`
    const mainImage = (
      <img
        src={imageUrl}
        onLoad={this.onLoad}
        style={{ opacity: 0, height: 0, width: 0 }}
        alt={'carousel'}
      />
    )
    return (
      <div>
        <CustomLink
          isExternal={item.linkPath === 'external' || item.linkIsExternal}
          to={
            item.mainLink
              ? item.linkPath === 'external' || item.linkIsExternal
                ? item.mainLink
                : `/${lang}/${item.mainLink}`
              : `/${lang}`
          }
          inside={
            <div
              className={cx(
                styles['carousel-item'],
                {
                  [styles['background-image']]: item.imageAsBackground
                },
                {
                  [styles['has-loaded']]: this.state.imageLoaded
                }
              )}
              style={{
                backgroundImage: item.imageAsBackground
                  ? `url(${imageUrl})`
                  : 'none'
              }}
            >
              {mainImage}
              {item[lang] && (
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
                  <div className={styles['button-group']}>
                    {item[lang].buttons &&
                      item[lang].buttons.map((button, i) => (
                        <ButtonObject
                          key={`btn-${i}`}
                          button={button}
                          lang={lang}
                        />
                      ))}
                  </div>
                </div>
              )}
              <div
                className={cx(styles['carousel-item--image'], {
                  [styles['hidden']]: item.imageAsBackground
                })}
              >
                <img src={imageUrl} alt={'carousel'} />
              </div>
            </div>
          }
        />
      </div>
    )
  }
}

export default CarouselItem
