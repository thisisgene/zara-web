import React, { Component } from 'react'

import styles from './Team.module.sass'

export default class TeamMember extends Component {
  render() {
    const { content } = this.props
    return (
      <div className={styles['team-member']}>
        {content.field !== 'vorstand' && (
          <div className={styles['team-member--image']}>
            {content.image && (
              <img
                src={`/assets/img/team/${content.image}`}
                alt={content.image}
              />
            )}
          </div>
        )}
        <div className={styles['team-member--body']}>
          <p className={styles['team-member--body__name']}>{content.name}</p>
          {content.title && (
            <div className={styles['team-member--body__title']}>
              {content.title}
            </div>
          )}
          <div
            className={styles['team-member--body__text']}
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
        </div>
      </div>
    )
  }
}
