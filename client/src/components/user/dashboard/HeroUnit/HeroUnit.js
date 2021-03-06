import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import styles from './HeroUnit.module.sass';

import ButtonObject from '../ButtonObject/ButtonObject'

class HeroUnit extends Component {
  render() {
    const { data, lang, special } = this.props;
    return (
      <div>
        {data && lang && (
          <div
            className={cx(
              styles['hero-unit-container'],
              { [styles[data.class]]: data.class },
              {
                [styles[data.size]]: data.size,
              },
              {
                [styles['narrow']]: special === 'narrow',
              }
            )}
          >
            {data.imageSide === 'left' ? (
              <div
                className={cx(
                  styles['hero-unit'],
                  styles['hero-unit--image-left'],
                  {
                    [styles[data.imageAlign]]: data.imageAlign,
                  }
                )}
              >
                <div className={styles['hero-unit--image']}>
                  {data.titleImage && data.titleImage.originalName ? (
                    <img
                      src={`/assets/media/${data.titleImage.category}/${data.titleImage.originalName}`}
                      alt={data.titleImage.originalName}
                    />
                  ) : (
                      data.image && (
                        <img src={`/assets/img/${data.image}`} alt={data.image} />
                      )
                    )}
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
                      <Link to={`/${lang}/${data[lang].link}`}>
                        {data[lang].linkText}
                      </Link>
                    </div>
                  )}
                  {
                    data[lang].buttons && (
                      <div className={styles['hero-unit--buttons']}>
                        {data[lang].buttons.map(button => (
                          <ButtonObject button={button} lang={lang} />
                        ))}</div>)
                  }
                </div>
              </div>
            ) : (
                <div
                  className={cx(
                    styles['hero-unit'],
                    {
                      [styles[data.imageAlign]]: data.imageAlign,
                    },
                    {
                      [styles['hero-unit--image-right']]:
                        data.image ||
                        (data.titleImage && data.titleImage.originalName),
                    }
                  )}
                >
                  <div className={styles['hero-unit--text']}>
                    <div className={styles['hero-unit--text__title']}>
                      {data[lang].title}
                    </div>
                    <div
                      className={styles['hero-unit--text__body']}
                      dangerouslySetInnerHTML={{ __html: data[lang].text }}
                    />
                  </div>
                  {data.titleImage && data.titleImage.originalName ? (
                    <div className={styles['hero-unit--image']}>
                      <img
                        src={`/assets/media/${data.titleImage.category}/${data.titleImage.originalName}`}
                        alt={data.titleImage.originalName}
                      />
                    </div>
                  ) : (
                      data.image && (
                        <div className={styles['hero-unit--image']}>
                          <img src={`/assets/img/${data.image}`} alt={data.image} />
                        </div>
                      )
                    )}
                </div>
              )}
          </div>
        )}
      </div>
    );
  }
}

export default HeroUnit;
