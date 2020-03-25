import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import IconObject from '../../dashboard/IconObject/IconObject';

import styles from './TrainingItemBox.module.sass';

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
            <div className={styles['training-item--description']}>
              {item[lang].shortDescription}
            </div>
            <div className={styles['training-item--info']}>
              {item.demographic && (
                <div className={styles['training-item--info__child']}>
                  <IconObject image="participants" />
                  <div>{item.demographic}</div>
                </div>
              )}
              {item.duration && (
                <div className={styles['training-item--info__child']}>
                  <IconObject image="duration" />
                  <div>{item.duration}</div>
                </div>
              )}
            </div>
            <div className={styles['training-item--link']}>
              {item.detailLinkText}
              <IconObject image="arrowRight" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default TrainingItem;
