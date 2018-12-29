import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Training.module.sass'

class TrainingItem extends Component {
  render() {
    const { content, lang } = this.props
    const item = content[lang]
    return (
      <div>
        <div className={styles['training-item--title']}>{item.title}</div>
        <div className={styles['training-item--description']}>
          {item.description}
        </div>
        <div className={styles['training-item--info']}>
          <div className={styles['training-item--info__demographic']}>
            <div>{item.demographic}</div>
          </div>
          <div className={styles['training-item--info__duration']}>
            <div>{item.duration}</div>
          </div>
        </div>
        <div className={styles['training-item--link']}>
          <Link to={`/user/${lang}/training/${content._id}`}>
            {item.detailLinkText}
          </Link>
        </div>
      </div>
    )
  }
}

export default TrainingItem
