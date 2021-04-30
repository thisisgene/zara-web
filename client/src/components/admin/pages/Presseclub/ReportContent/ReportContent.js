import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import {
  getPresseclubReportById,
  sendToArchive,
} from '../../../../../actions/reportActions'
import { clearSingle } from '../../../../../actions/adminActions'

import * as stepDataA from '../../../../user/pages/Wissen/Presse/Presseclub/steps/pathA/step_data.js'
import * as stepDataB from '../../../../user/pages/Wissen/Presse/Presseclub/steps/pathB/step_data.js'
import * as stepDataC from '../../../../user/pages/Wissen/Presse/Presseclub/steps/pathC/step_data.js'
import * as stepDataD from '../../../../user/pages/Wissen/Presse/Presseclub/steps/pathD/step_data.js'

import styles from './ReportContent.module.sass'

class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: props.src,
      alt: props.alt,
    }
  }
  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.src.replace(/_/g, ' '),
        errored: true,
      })
    }
  }

  render() {
    const { src, alt } = this.state
    const { src: _1, fallbackSrc: _2, ...props } = this.props

    return <img src={src} alt={alt} onError={this.onError} {...props} />
  }
}

class ReportContent extends Component {
  state = {
    date: '',
    description: '',

    images: [],
    archived: false,
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPresseclubReportById(id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.report != this.props.report) {
      if (this.props.report.report) {
        const report = this.props.report.report
        this.setState({
          archived: report.archived,
        })
      }
    }
  }

  componentWillUnmount() {
    this.props.clearSingle('report')
  }

  onSendToArchiveClick = id => {
    this.props.sendToArchive(id)
  }

  render() {
    const { report } = this.props.report
    const lang = 'de'
    let stepData
    let path
    let pathName
    if (report) {
      if (report.category === 'online' && report.perspective === 'first') {
        stepData = stepDataA
        path = 'A'
        pathName =
          'A: Sie sind Journalist*in und wollen einen gegen Sie gerichteten Online-Angriff melden'
      }
      if (report.category === 'online' && report.perspective === 'third') {
        stepData = stepDataB
        path = 'B'
        pathName =
          'B: Sie haben einen Online-Angriff auf eine Journalist*in beobachtet und möchten diesen melden'
      }
      if (report.category === 'public' && report.perspective === 'first') {
        stepData = stepDataC
        path = 'C'
        pathName =
          'C: Sie sind Journalist*in und wollen einen gegen Sie gerichteten Angriff im öffentlichen Raum (z.B. bei einer Demonstration) melden'
      }
      if (report.category === 'public' && report.perspective === 'third') {
        stepData = stepDataD
        path = 'D'
        pathName =
          'D: Sie haben einen Angriff auf eine*n Journalist*in im öffentlichen Raum (z.B. auf einer Demonstration) beobachtet und möchten diesen melden'
      }
    }
    return (
      <div className={styles['report-content-container']}>
        {report && (
          <div>
            <div className={styles['report-message-container']}>
              <h3>
                <strong>Pfad</strong>
              </h3>
              <p>{pathName}</p>
              {(path == 'A' || path == 'B') && stepData.length !== 0 && (
                <>
                  <>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepOne[lang].text1,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: report.directReaction
                          ? stepData.stepOne[lang].options[0].text
                          : stepData.stepOne[lang].options[1].text,
                      }}
                    />
                    {report.directReaction ? (
                      <>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: stepData.stepOne[lang].text1A1.text,
                          }}
                        />
                        <p>{report.articleUrl}</p>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: stepData.stepOne[lang].text1A2.text,
                          }}
                        />
                        <p>{report.keywords[0]}</p>
                        <p>{report.keywords[1]}</p>
                        <p>{report.keywords[2]}</p>
                      </>
                    ) : (
                      <>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: stepData.stepOne[lang].text1B1.text,
                          }}
                        />
                        <p>{report.description}</p>
                        {report.postUrl && (
                          <>
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: stepData.stepOne[lang].text1B2.text,
                              }}
                            />
                            <p>{report.postUrl}</p>
                          </>
                        )}
                      </>
                    )}
                  </>
                  <>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepTwo[lang].text2,
                      }}
                    />
                    {stepData.stepTwo[lang].options.map(
                      option =>
                        report.socialmedia &&
                        report.socialmedia[option.value] &&
                        (option.value !== 'other' ? (
                          <p
                            dangerouslySetInnerHTML={{ __html: option.text }}
                          />
                        ) : (
                          <p>
                            <span
                              dangerouslySetInnerHTML={{ __html: option.text }}
                            />{' '}
                            <span>{report.socialmedia.otherValue}</span>
                          </p>
                        ))
                    )}
                  </>
                  {report.extent && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepThree[lang].text3,
                        }}
                      />

                      <p
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepThree[lang].options.find(
                            opt => opt.value === report.extent
                          ).text,
                        }}
                      />
                    </>
                  )}
                  {'privatemsg' in report && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepFour[lang].text4a,
                        }}
                      />

                      <p
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepFour[lang].options.find(opt =>
                            report.privatemsg ? 'yes' : 'no'
                          ).text,
                        }}
                      />
                      {report.privatemsg && report.privatemsgValue && (
                        <>
                          {' '}
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: stepData.stepFour[lang].text4b,
                            }}
                          />
                          <p>{report.privatemsgValue}</p>
                        </>
                      )}
                    </>
                  )}

                  <>
                    {report.typeOfHate.length > 0 && (
                      <>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: stepData.stepFive[lang].text5a,
                          }}
                        />
                        {stepData.stepFive[lang].options.map(
                          option =>
                            report.typeOfHate[0][option.value] &&
                            (option.value !== 'other' ? (
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: option.text,
                                }}
                              />
                            ) : (
                              <p>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: option.text,
                                  }}
                                />
                                {': '}
                                <span>{report.typeOtherValue}</span>
                              </p>
                            ))
                        )}
                      </>
                    )}
                    {(report.typeText ||
                      report.typeText2 ||
                      report.typeText3) && (
                      <>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: stepData.stepFive[lang].text5b,
                          }}
                        />
                        <p>{report.typeText}</p>
                        <p>{report.typeText2}</p>
                        <p>{report.typeText3}</p>
                      </>
                    )}
                    {report.images.length > 0 && (
                      <>
                        <h3>
                          <strong>
                            Beispielhafte Nachrichten, Postings oder Kommentare
                            des Online-Angriffs als Screenshots
                          </strong>
                        </h3>
                        <div className={styles['image-container']}>
                          {report.images.map((image, index) => (
                            <div
                              className={styles['thumb-container']}
                              key={index}
                            >
                              <div>
                                <div className={styles['thumb']}>
                                  <div className={styles['thumbInner']}>
                                    <Image
                                      src={`/assets/presseclub/reports/${report._id}/${image.originalName}`}
                                      className={styles['img']}
                                      alt={`preview ${image.originalName}`}
                                    />
                                  </div>
                                </div>
                              </div>
                              <p>{image.originalName}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                  {report.jurid && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepSix[lang].text6,
                        }}
                      />

                      <p
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepSix[lang].options.find(
                            opt => opt.value === report.jurid
                          ).text,
                        }}
                      />
                      {report.jurid === 'other' && (
                        <>
                          <p>{report.juridText}</p>
                        </>
                      )}
                    </>
                  )}
                  {(report.consequence ||
                    report.consequence2 ||
                    report.consequence3) && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepSeven[lang].text7,
                        }}
                      />
                      <p>{report.consequence}</p>
                      <p>{report.consequence2}</p>
                      <p>{report.consequence3}</p>
                    </>
                  )}
                  {report.solidarity && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepEight[lang].text8,
                        }}
                      />

                      <p
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepEight[lang].options.find(
                            opt => opt.value === report.solidarity
                          ).text,
                        }}
                      />
                    </>
                  )}
                  {report.gender && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepNine[lang].text9,
                        }}
                      />

                      {report.gender !== 'other' ? (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: stepData.stepNine[lang].options.find(
                              opt => opt.value === report.gender
                            ).text,
                          }}
                        />
                      ) : (
                        <p>{report.genderText}</p>
                      )}
                    </>
                  )}
                  {report.medium && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepTen[lang].text10,
                        }}
                      />
                      <p>{report.medium}</p>
                    </>
                  )}
                  {report.additional && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepEleven[lang].text11,
                        }}
                      />
                      <p>{report.additional}</p>
                    </>
                  )}
                  {report.additional2 && (
                    <>
                      <h3
                        dangerouslySetInnerHTML={{
                          __html: stepData.stepTwelve[lang].text12,
                        }}
                      />
                      <p>{report.additional2}</p>
                    </>
                  )}
                </>
              )}
            </div>

            <div className={styles['archive-button']}>
              <button
                onClick={this.onSendToArchiveClick.bind(this, report._id)}
              >
                {this.state.archived ? 'Aus Archiv holen' : 'Archivieren'}
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  report: state.report,
})

export default connect(mapStateToProps, {
  getPresseclubReportById,
  sendToArchive,
  clearSingle,
})(ReportContent)
