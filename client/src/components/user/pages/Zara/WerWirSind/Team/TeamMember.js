import React, { Component } from 'react'

import cx from 'classnames'
import styles from './Team.module.sass'

export default class TeamMember extends Component {
  render() {
    const { lang, content } = this.props
    return (
      <div
        className={cx(styles['team-member'], {
          [styles['cat-intro']]: content.isCategoryIntro
        })}
      >
        {content.subCategory !== 'vorstand' && !content.isCategoryIntro && (
          <div className={styles['team-member--image']}>
            {content.titleImage && content.titleImage.originalName && (
              <img
                src={`/assets/media/team/${content.titleImage.originalName}`}
                alt={content.image}
              />
            )}
          </div>
        )}
        <div className={styles['team-member--body']}>
          <p className={styles['team-member--body__name']}>
            {content[lang].title}
          </p>
          {/* {content[lang].title && (
            <div className={styles['team-member--body__title']}>
              {content[lang].title}
            </div>
          )} */}
          <div
            className={styles['team-member--body__text']}
            dangerouslySetInnerHTML={{ __html: content[lang].description }}
          />
        </div>
      </div>
    )
  }
}
