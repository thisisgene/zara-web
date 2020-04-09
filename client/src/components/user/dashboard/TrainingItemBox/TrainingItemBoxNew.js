import React, { Component } from 'react';

import TrainingItem from './TrainingItemNew';

import styles from './TrainingItemBoxNew.module.sass';

export default class TrainingItemBox extends Component {
  render() {
    const { content, category, lang } = this.props;
    return (
      <div>
        <div className={styles['training-box--content']}>
          {content &&
            content
              .filter(item => item.isOnline && item.category.value === category)
              .map((item, index) => (
                <div key={index}>
                  {/* <p>{item.title}</p> */}
                  <TrainingItem item={item} lang={lang} />
                </div>
              ))}
        </div>
      </div>
    );
  }
}
