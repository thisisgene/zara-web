import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import IconObject from '../../dashboard/IconObject/IconObject';

import styles from './TrainingItemBoxNew.module.sass';

class TrainingItem extends Component {
  render() {
    const { item, lang } = this.props;
    return (
      <div>
        <Link to={`/${lang}/training/detail/${item._id}`}>
          <div className={styles['training-item']}>
            <div className={styles['training-item--title']}>
              {item[lang].title}
            </div>
            <div
              className={styles['training-item--description']}
              dangerouslySetInnerHTML={{ __html: item[lang].shortDescription }}
            ></div>
            <div className={styles['training-item--info']}>
              {item.peopleMin && (
                <div className={styles['training-item--info__child']}>
                  <IconObject image="participants" />
                  <div className={styles['training-item--info__child--data']}>
                    <div
                      className={
                        styles['training-item--info__child--data__line']
                      }
                    >
                      <div>{item.peopleMin}</div>
                      <div>&nbsp;-&nbsp;</div>
                      <div>{item.peopleMax}</div>
                    </div>
                    <div
                      className={
                        styles['training-item--info__child--data__line']
                      }
                    >
                      <div>Personen</div>
                    </div>
                  </div>
                </div>
              )}
              {item.timeFrom && (
                <div className={styles['training-item--info__child']}>
                  <IconObject image="duration" />
                  <div className={styles['training-item--info__child--data']}>
                    <div
                      className={
                        styles['training-item--info__child--data__line']
                      }
                    >
                      <div>
                        {moment(item.date)
                          .locale('de')
                          .format('DD. MM. YYYY')}
                      </div>
                    </div>
                    <div
                      className={
                        styles['training-item--info__child--data__line']
                      }
                    >
                      <div>{item.timeFrom}</div>
                      <div>&nbsp;-&nbsp;</div>
                      <div>{item.timeUntil}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles['training-item--info']}>
              {item.peopleMin && (
                <div className={styles['training-item--info__child']}>
                  <IconObject image="location" />
                  <div className={styles['training-item--info__child--data']}>
                    <div
                      className={
                        styles['training-item--info__child--data__line']
                      }
                    >
                      <div>{item.location}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className={styles['training-item--info__child']}>
                {/* <IconObject image="duration" /> */}
                <div className={styles['training-item--info__child--data']}>
                  <div
                    className={styles['training-item--info__child--data__line']}
                  >
                    <div
                      className={
                        styles['training-item--info__child--data__line--detail']
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
        </Link>
      </div>
    );
  }
}

export default TrainingItem;
