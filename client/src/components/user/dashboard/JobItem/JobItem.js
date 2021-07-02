import React, { Component } from "react"
import { Link } from "react-router-dom"

import styles from "./JobItem.module.sass"

export default class JobItem extends Component {
  render() {
    const { content, lang, index } = this.props
    return (
      <div className={styles["job-item"]}>
        <div className={styles["job-item--title"]}>{content[lang].title}</div>
        <div className={styles["job-item--data"]}>
          {content[lang].shortDescription && (
            <div
              className={styles["job-item--data__text"]}
              dangerouslySetInnerHTML={{
                __html: content[lang].shortDescription,
              }}
            />
          )}
          {content[lang].area && (
            <div>
              <div className={styles["job-item--data__title"]}>
                {lang === "de"
                  ? "Vorwiegende Aufgabengebiete"
                  : "Vorwiegende Aufgabengebiete"}
                :
              </div>
              <div className={styles["job-item--data__text"]}>
                {content[lang].area}
              </div>
            </div>
          )}
        </div>

        <div className={styles["job-item--data"]}>
          {content[lang].qualifications && (
            <div>
              <div className={styles["job-item--data__title"]}>
                {lang === "de"
                  ? "Erwünschte Qualifikationen"
                  : "Erwünschte Qualifikationen"}
                :
              </div>
              <div className={styles["job-item--data__text"]}>
                {content[lang].qualifications}
              </div>
            </div>
          )}
        </div>

        <div className={styles["job-item--data"]}>
          {content[lang].time && (
            <>
              <div className={styles["job-item--data__title"]}>
                {lang === "de" ? "Zeitaufwand" : "Zeitaufwand"}:
              </div>
              <div className={styles["job-item--data__text"]}>
                {content[lang].time}
              </div>
            </>
          )}
        </div>
        <div className={styles["job-item--data"]}>
          {content[lang].contact && (
            <>
              <div className={styles["job-item--data__title"]}>
                {lang === "de" ? "Kontakt" : "Contact"}:
              </div>
              <div className={styles["job-item--data__text"]}>
                <a href={`mailto:${content[lang].contact}`}>
                  {content[lang].contact}
                </a>
              </div>
            </>
          )}
        </div>

        {content.moreLink && (
          <div className={styles["job-item--data"]}>
            <Link to={`/${lang}/ueber_ZARA/wer_wir_sind/jobs/${content._id}`}>
              {lang === "de" ? "Mehr erfahren" : "More Info"}
            </Link>
          </div>
        )}
      </div>
    )
  }
}
