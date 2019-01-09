import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cx from 'classnames'
import styles from './HeroUnit.module.sass'

class HeroUnit extends Component {
  render() {
    const { data, lang, special } = this.props
    return (
      <div>
        {data && lang && (
          <div
            className={cx(
              styles['hero-unit-container'],
              { [styles[data.class]]: data.class },
              {
                [styles[data.size]]: data.size
              },
              {
                [styles['narrow']]: special === 'narrow'
              }
            )}
          >
            {data.imageSide === 'left' ? (
              <div
                className={cx(styles['hero-unit'], {
                  [styles[data.imageAlign]]: data.imageAlign
                })}
              >
                <div className={styles['hero-unit--image']}>
                  <img src={`/assets/img/${data.image}`} alt={data.image} />
                </div>
                <div className={styles['hero-unit--text']}>
                  <div
                    className={styles['hero-unit--text__title']}
                    dangerouslySetInnerHTML={{ __html: data[lang].title }}
                  />
                  <div
                    className={styles['hero-unit--text__body']}
                    dangerouslySetInnerHTML={{ __html: data[lang].text }}
                  />
                  {data[lang].link && (
                    <div className={styles['hero-unit--text__link']}>
                      <Link to={`/user/${lang}/${data[lang].link}`}>
                        {data[lang].linkText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles['hero-unit']}>
                <div className={styles['hero-unit--text']}>
                  <div className={styles['hero-unit--text__title']}>
                    {data[lang].title}
                  </div>
                  <div
                    className={styles['hero-unit--text__body']}
                    dangerouslySetInnerHTML={{ __html: data[lang].text }}
                  />
                </div>
                {data.image && (
                  <div className={styles['hero-unit--image']}>
                    <img src={`/assets/img/${data.image}`} alt={data.image} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default HeroUnit
