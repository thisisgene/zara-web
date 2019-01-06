import React, { Component } from 'react'

import styles from './JobItem.module.sass'

export default class JobItem extends Component {
  render() {
    const { content, lang, index } = this.props
    return (
      <div className={styles['job-item']}>
        <div className={styles['job-item--title']}>
          {index + 1}. {content[lang].title}
        </div>
        <div className={styles['job-item--data']}>
          <div className={styles['job-item--data__title']}>
            {lang === 'de'
              ? 'Vorwiegende Aufgabengebiete'
              : 'Vorwiegende Aufgabengebiete'}
            :
          </div>
          <div className={styles['job-item--data__text']}>
            {content[lang].area}
          </div>
        </div>
        <div className={styles['job-item--data']}>
          <div className={styles['job-item--data__title']}>
            {lang === 'de'
              ? 'Erwünschte Qualifikationen'
              : 'Erwünschte Qualifikationen'}
            :
          </div>
          <div className={styles['job-item--data__text']}>
            {content[lang].qualifications}
          </div>
        </div>
        <div className={styles['job-item--data']}>
          <div className={styles['job-item--data__title']}>
            {lang === 'de' ? 'Zeitaufwand' : 'Zeitaufwand'}:
          </div>
          <div className={styles['job-item--data__text']}>
            {content[lang].time}
          </div>
        </div>
        <div className={styles['job-item--data']}>
          <div className={styles['job-item--data__title']}>
            {lang === 'de' ? 'Kontakt' : 'Contact'}:
          </div>
          <div className={styles['job-item--data__text']}>
            <a href={`mailto:${content[lang].contact}`}>
              {content[lang].contact}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
