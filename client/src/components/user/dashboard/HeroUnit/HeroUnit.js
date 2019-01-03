import React, { Component } from 'react'

import cx from 'classnames'
import styles from './HeroUnit.module.sass'

class HeroUnit extends Component {
  render() {
    const { data, lang } = this.props
    return (
      <div>
        {data && lang && (
          <div
            className={cx(styles['hero-unit-container'], styles[data.class], {
              [styles[data.size]]: data.size
            })}
          >
            {data.imageSide === 'left' ? (
              <div className={styles['hero-unit']}>
                <div className={styles['hero-unit--image']}>
                  <img src={`/assets/img/${data.image}`} alt={data.image} />
                </div>
                <div className={styles['hero-unit--text']}>
                  <div className={styles['hero-unit--text__title']}>
                    {data[lang].title}
                  </div>
                  <div
                    className={styles['hero-unit--text__body']}
                    dangerouslySetInnerHTML={{ __html: data[lang].text }}
                  />
                </div>
              </div>
            ) : (
              <div className={styles['hero-unit']}>
                <div className={styles['hero-unit--text']}>
                  <div className={styles['hero-unit--text__title']}>
                    {data[lang].title}
                  </div>
                  <div className={styles['hero-unit--text__body']}>
                    {data[lang].text}
                  </div>
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
