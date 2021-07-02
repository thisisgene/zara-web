import React, { Component } from "react"
import { connect } from "react-redux"
import { withLocalize } from "react-localize-redux"

import { getAll } from "../../../../../../actions/adminActions"

import {
  heroData,
  jobData,
  longTextJobs,
  longTextNoJobs,
  longTextVolontariat,
  longTextEhrenamtlich,
  longTextZivildienst,
  longText,
} from "./jobs_data"
// import { oneLineAlert, trainingItems } from './training_data'

import HeroUnit from "../../../../dashboard/HeroUnit/HeroUnit"
import JobItem from "../../../../dashboard/JobItem/JobItem"
// import NewsletterOneLineObject from '../../../dashboard/NewsletterOneLineObject/NewsletterOneLineObject'
import LongText from "../../../../dashboard/LongText/LongText"
// import CardCollectionGridObject from '../../../dashboard/CardCollectionGridObject/CardCollectionGridObject'

import styles from "./Jobs.module.sass"

class RechtUndOrdnung extends Component {
  componentDidMount() {
    this.props.getAll("jobs")
  }

  render() {
    const { activeLanguage } = this.props
    const jobs = this.props.jobs.jobs
    let lang

    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }
    return (
      <div>
        {lang && (
          <div>
            <HeroUnit data={heroData} lang={lang} />
            {jobs && jobs.filter((job) => job.tag === "job").length > 0 ? (
              <>
                <LongText content={longTextJobs} lang={lang} />
                <div className={styles["job-container"]}>
                  {jobs
                    .filter((job) => job.tag === "job" && job.isOnline)
                    .map((job, index) => (
                      <JobItem
                        key={index}
                        index={index}
                        content={job}
                        lang={lang}
                      />
                    ))}
                </div>
              </>
            ) : (
              <LongText content={longTextNoJobs} lang={lang} />
            )}
            {jobs &&
              jobs.filter((job) => job.tag === "volunteering" && job.isOnline)
                .length > 0 && (
                <>
                  <LongText content={longTextVolontariat} lang={lang} />
                  <div className={styles["job-container"]}>
                    {jobs &&
                      jobs
                        .filter(
                          (job) => job.tag === "volunteering" && job.isOnline
                        )
                        .map((job, index) => (
                          <JobItem
                            key={index}
                            index={index}
                            content={job}
                            lang={lang}
                          />
                        ))}
                  </div>
                </>
              )}
            {jobs &&
              jobs.filter((job) => job.tag === "unsalaried" && job.isOnline)
                .length > 0 && (
                <>
                  <LongText content={longTextEhrenamtlich} lang={lang} />
                  <div className={styles["job-container"]}>
                    {jobs &&
                      jobs
                        .filter(
                          (job) => job.tag === "unsalaried" && job.isOnline
                        )
                        .map((job, index) => (
                          <JobItem
                            key={index}
                            index={index}
                            content={job}
                            lang={lang}
                          />
                        ))}
                  </div>
                </>
              )}
            {/* <NewsletterOneLineObject lang={lang} /> */}
            <LongText content={longText} lang={lang} />
            <LongText content={longTextZivildienst} lang={lang} />
            {/* <CardCollectionGridObject cardObject={cardGridObject} lang={lang} /> */}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobs,
})

export default withLocalize(
  connect(mapStateToProps, { getAll })(RechtUndOrdnung)
)
