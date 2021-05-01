import React, { Component } from "react"
import axios from "axios"
import Promise from "promise"

import * as stepData from "./step_data"

import Spinner from "../../../../../../dashboard/Spinner/Spinner"

import cx from "classnames"
import styles from "../Steps.module.sass"

class StepSummary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      saving: false,
    }
    this.isValidated = this.isValidated.bind(this)
  }
  isValidated() {
    const { report } = this.props
    return new Promise(async (resolve, reject) => {
      this.setState({
        saving: true,
      })
      axios.post("/api/projects/report/presseclub/send", report).then((res) => {
        const id = res.data.report._id
        const files = report.newReport.stepA5 && report.newReport.stepA5.files
        if (files && files.length > 0) {
          // console.log("files ", id, files)
          files.map((file) => {
            let fileData = new FormData()
            fileData.append("id", id)
            fileData.append("name", file.name)
            fileData.append("size", file.size)
            fileData.append("file", file)
            return axios
              .post("/api/projects/report/presseclub/images", fileData)
              .then((res) => {
                if (res.data === "success") {
                  resolve()
                } else {
                  reject()
                }
              })
          })
        } else {
          if (res.data.msg === "success") {
            resolve()
          } else {
            reject()
          }
        }
      })
    })
  }
  render() {
    const { lang } = this.props
    const report = this.props.report.newReport
    return (
      <div
        className={cx(styles["step-container"], styles["summary-container"])}
      >
        <Spinner nowActive={this.state.saving} />
        <h2
          dangerouslySetInnerHTML={{ __html: stepData.stepSummary[lang].text }}
        />

        {report && (
          <>
            {Object.keys(report.stepA1).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepOne[lang].text1,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      report.stepA1 && report.stepA1.directReaction === "yes"
                        ? stepData.stepOne[lang].options[0].text
                        : stepData.stepOne[lang].options[1].text,
                  }}
                />
                {report.stepA1.directReaction === "yes" ? (
                  <>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepOne[lang].text1A1.text,
                      }}
                    />
                    <p>{report.stepA1.text1a1}</p>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepOne[lang].text1A2.text,
                      }}
                    />
                    <p>{report.stepA1.text1a2a}</p>
                    <p>{report.stepA1.text1a2b}</p>
                    <p>{report.stepA1.text1a2c}</p>
                  </>
                ) : (
                  <>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepOne[lang].text1B1.text,
                      }}
                    />
                    <p>{report.stepA1.text1b1}</p>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepOne[lang].text1B2.text,
                      }}
                    />
                    <p>{report.stepA1.text1b2}</p>
                  </>
                )}
              </>
            )}
            {Object.keys(report.stepA2).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepTwo[lang].text2,
                  }}
                />
                {stepData.stepTwo[lang].options.map(
                  (option) =>
                    report.stepA2.socialmedia &&
                    report.stepA2.socialmedia[option.value] &&
                    (option.value !== "other" ? (
                      <p dangerouslySetInnerHTML={{ __html: option.text }} />
                    ) : (
                      <p>
                        <span
                          dangerouslySetInnerHTML={{ __html: option.text }}
                        />{" "}
                        <span>{report.stepA2.socialmedia.otherValue}</span>
                      </p>
                    ))
                )}
              </>
            )}
            {Object.keys(report.stepA3).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepThree[lang].text3,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepThree[lang].options.find(
                      (opt) => opt.value === report.stepA3.extent
                    ).text,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA4).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepFour[lang].text4a,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepFour[lang].options.find(
                      (opt) => opt.value === report.stepA4.privatemsg
                    ).text,
                  }}
                />
                {report.stepA4.privatemsg === "yes" && (
                  <>
                    {" "}
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepFour[lang].text4b,
                      }}
                    />
                    <p>{report.stepA4.msgValue}</p>
                  </>
                )}
              </>
            )}
            {Object.keys(report.stepA5).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepFive[lang].text5a,
                  }}
                />
                {stepData.stepFive[lang].options.map(
                  (option) =>
                    report.stepA5.typeOfHate &&
                    report.stepA5.typeOfHate[option.value] &&
                    (option.value !== "other" ? (
                      <p dangerouslySetInnerHTML={{ __html: option.text }} />
                    ) : (
                      <p>
                        <span
                          dangerouslySetInnerHTML={{ __html: option.text }}
                        />
                        {": "}
                        <span>{report.stepA5.otherValue}</span>
                      </p>
                    ))
                )}
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepFive[lang].text5a2,
                  }}
                />
                <p>{report.stepA5.typeOfHateNotes}</p>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepFive[lang].text5b,
                  }}
                />
                <p>{report.stepA5.textarea1}</p>
                <p>{report.stepA5.textarea2}</p>
                <p>{report.stepA5.textarea3}</p>
                <h3>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: stepData.stepFive[lang].text5c,
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: stepData.stepFive[lang].text5c2,
                    }}
                  />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: stepData.stepFive[lang].text5c3,
                    }}
                  />
                </h3>
                {report.stepA5.files &&
                  report.stepA5.files.map((file) => (
                    <p>
                      <img src={file.preview} alt={`preview ${file.name}`} />{" "}
                      {file.name}
                    </p>
                  ))}
              </>
            )}
            {Object.keys(report.stepA6).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepSix[lang].text6,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepSix[lang].options.find(
                      (opt) => opt.value === report.stepA6.jurid
                    ).text,
                  }}
                />
                {report.stepA6.jurid === "other" && (
                  <>
                    {" "}
                    <p>{report.stepA6.msgValue}</p>
                  </>
                )}
              </>
            )}
            {Object.keys(report.stepA7).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepSeven[lang].text7,
                  }}
                />
                <p>{report.stepA7.msgValue}</p>
                <p>{report.stepA7.msgValue2}</p>
                <p>{report.stepA7.msgValue3}</p>
              </>
            )}
            {Object.keys(report.stepA8).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepEight[lang].text8,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepEight[lang].options.find(
                      (opt) => opt.value === report.stepA8.solidarity
                    ).text,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA9).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepNine[lang].text9,
                  }}
                />

                {report.stepA9.gender !== "other" ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: stepData.stepNine[lang].options.find(
                        (opt) => opt.value === report.stepA9.gender
                      ).text,
                    }}
                  />
                ) : (
                  <p>{report.stepA9.msgValue}</p>
                )}
              </>
            )}
            {Object.keys(report.stepA10).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepTen[lang].text10,
                  }}
                />
                <p>{report.stepA10.msgValue}</p>
              </>
            )}
            {Object.keys(report.stepA11).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepEleven[lang].text11,
                  }}
                />
                <p>{report.stepA11.msgValue}</p>
              </>
            )}
            {Object.keys(report.stepA12).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepTwelve[lang].text12,
                  }}
                />
                <p>{report.stepA12.msgValue}</p>
              </>
            )}
          </>
        )}
      </div>
    )
  }
}

export default StepSummary
