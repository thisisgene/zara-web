import React, { Component } from 'react'
import { withLocalize } from 'react-localize-redux'

import { oneLineAlert, cardGrid } from './jobdetail_data'
import { jobData } from './jobs_data'

import HeroUnit from '../../../../dashboard/HeroUnit/HeroUnit'
import OneLineAlert from '../../../../dashboard/OneLineAlert/OneLineAlert'
import CardCollectionGridObject from '../../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

import styles from './JobDetail.module.sass'

class JobDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobId: props.match.params.jobId
    }
  }

  componentDidMount() {
    let docTitle = 'ZARA | ' + this.state.jobId
    docTitle = docTitle.replace(/_/g, ' ')
    document.title = docTitle
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match &&
      this.props.match &&
      prevProps.match.params.jobId !== this.props.match.params.jobId
    ) {
      this.setState({
        jobId: this.props.match.params.jobId
      })
      let docTitle = 'ZARA | ' + this.state.jobId
      docTitle = docTitle.replace(/_/g, ' ')
      document.title = docTitle
    }
  }
  render() {
    const { activeLanguage } = this.props
    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    const jobArray = jobData.filter(item => item.id === this.state.jobId)
    let job
    if (lang) {
      job = jobArray[0]
      if (!job.image) {
        job.imageSide = 'left'
        job.imageAlign = 'center'
        job.image = 'main_icons/big/unterstuetzen.png'
      }
    }
    return (
      <div>
        {lang && (
          <div className={styles['job-detail']}>
            <HeroUnit data={job} lang={lang} />
            <OneLineAlert content={oneLineAlert} lang={lang} />
            <div
              className={styles['job-detail--text']}
              dangerouslySetInnerHTML={{ __html: job[lang].content }}
            />
            {job.bottomImages && (
              <div className={styles['job-detail--bottom-images']}>
                {job.bottomImages.map(image => (
                  <img src={`/assets/img/${image.image}`} alt="{image.image}" />
                ))}
              </div>
            )}
            {/* <CardCollectionGridObject cardObject={cardGrid} lang={lang} /> */}
          </div>
        )}
      </div>
    )
  }
}

export default withLocalize(JobDetail)
