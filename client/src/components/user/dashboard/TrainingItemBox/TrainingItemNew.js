import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'

import IconObject from '../../dashboard/IconObject/IconObject'

import styles from './TrainingItemBoxNew.module.sass'

class TrainingItem extends Component {
  render() {
    const { item, lang } = this.props
    return (
      <div>
        <Link to={`/${lang}/training/detail/${item._id}`}>
          <div className={styles['training-item-container']}>
            <div className={styles['training-item']}>
              <div className={styles['training-item--title']}>
                {item[lang].title}
              </div>
              <div
                className={styles['training-item--description']}
                dangerouslySetInnerHTML={{
                  __html: item[lang].shortDescription,
                }}
              ></div>
              <div className={styles['training-item--info']}>
                {item[lang].targetGroup && (
                  <div className={styles['training-item--info__child']}>
                    <IconObject image="participants" />
                    <div className={styles['training-item--info__child--data']}>
                      <div
                        className={
                          styles['training-item--info__child--data__line']
                        }
                      >
                        <div>{item[lang].targetGroup}</div>
                      </div>
                    </div>
                  </div>
                )}
                {(item[lang].timeFrame || item.showTimeAndDate) && (
                  <div className={styles['training-item--info__child']}>
                    <Fragment>
                      <IconObject image="duration" />
                      <div
                        className={styles['training-item--info__child--data']}
                      >
                        <div
                          className={
                            styles['training-item--info__child--data__line']
                          }
                        >
                          {item.showTimeAndDate && (
                            <div>
                              {moment(item.date)
                                .locale('de')
                                .format('DD. MM. YYYY')}
                            </div>
                          )}
                        </div>
                        <div
                          className={
                            styles['training-item--info__child--data__line']
                          }
                        >
                          <div>{item[lang].timeFrame}</div>
                        </div>
                      </div>
                    </Fragment>
                  </div>
                )}

                <Fragment>
                  {item[lang].location && (
                    <div className={styles['training-item--info__child']}>
                      <IconObject image="location" />
                      <div
                        className={styles['training-item--info__child--data']}
                      >
                        <div
                          className={
                            styles['training-item--info__child--data__line']
                          }
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item[lang].location.replace(
                                /\n\r?/g,
                                '<br />'
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </Fragment>
                <Fragment>
                  {
                    (item[lang].targetGroup && (item[lang].timeFrame || item.showTimeAndDate) && !item[lang].location)
                    && (
                      <div className={styles['training-item--info__child']}></div>
                    )
                  }
                </Fragment>
                <Fragment>
                  {
                    (!item[lang].targetGroup && !(item[lang].timeFrame || item.showTimeAndDate) && !item[lang].location)
                    && (
                      <div className={styles['training-item--info__child']}></div>
                    )
                  }
                </Fragment>
                <div className={styles['training-item--info__child']}>
                  {/* <IconObject image="duration" /> */}
                  <div className={styles['training-item--info__child--data']}>
                    <div
                      className={
                        styles['training-item--info__child--data__line']
                      }
                    >
                      <div
                        className={
                          styles[
                          'training-item--info__child--data__line--detail'
                          ]
                        }
                      >
                        Details
                      </div>
                      {/* <IconObject image="arrowRight" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {item.titleImage && item.titleImage.originalName && (
              <div className={styles['training-image']}>
                <img
                  src={`/assets/media/${item.titleImage.category}/${item.titleImage.originalName}`}
                  alt=""
                />
              </div>
            )}
          </div>
        </Link>
      </div>
    )
  }
}

export default TrainingItem
