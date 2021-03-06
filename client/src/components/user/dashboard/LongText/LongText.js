import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import IconObject from '../IconObject/IconObject'

import cx from 'classnames'
import styles from './LongText.module.sass'

export default class LongText extends Component {
  render() {
    const { content, lang } = this.props
    return (
      <div
        className={cx(styles['long-text'], {
          [styles[content.type]]: content.type,
        })}
      >
        {content[lang].title && (
          <div
            className={styles['long-text--title']}
            dangerouslySetInnerHTML={{ __html: content[lang].title }}
          />
        )}
        {content[lang].subtitle && (
          <div
            className={styles['long-text--subtitle']}
            dangerouslySetInnerHTML={{ __html: content[lang].subtitle }}
          />
        )}
        {content.image && (
          <div
            className={cx(styles['long-text--image'], {
              [styles['big']]: content.bigImage,
            })}
          >
            <img src={`/assets/img/${content.image}`} alt="" />
          </div>
        )}
        {content[lang].list && (
          <div className={styles['long-text--list']}>
            {content[lang].listTitle && (
              <div className={styles['long-text--list__title']}>
                {content[lang].listTitle}
              </div>
            )}
            <ul>
              {content[lang].list.map((item, index) => (
                <li key={index}>
                  <IconObject image="arrowRight" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          className={styles['long-text--text']}
          dangerouslySetInnerHTML={{ __html: content[lang].text }}
        />

        {content[lang].link && (
          <div className={styles['long-text--link']}>
            <IconObject image="arrowRight" />
            {content[lang].linkType && content[lang].linkType === 'external' ? (
              <a target="_blank" href={content[lang].link}>
                {content[lang].linkText}
              </a>
            ) : (
              <Link to={`/${lang}/${content[lang].link}`}>
                {content[lang].linkText}
              </Link>
            )}
          </div>
        )}
        {content.bottomImages && (
          <div
            className={cx(
              styles['long-text--bottom-images'],
              content.bottomImageAlign && [styles[content.bottomImageAlign]]
            )}
          >
            {content.bottomImages.map(image => (
              <img
                src={`/assets/img/${image.image}`}
                alt={image.image}
                className={cx(
                  {
                    [styles['big']]: image.bigImage,
                  },
                  image.imageSize && [styles[image.imageSize]]
                )}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}
