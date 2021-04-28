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
        const files = report.stepA5 && report.stepA5.files
        console.log("the report", id, files)
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
                    __html: stepData.stepOne[lang].text,
                  }}
                />
                {stepData.stepOne[lang].options.map(
                  (option) =>
                    report.stepA1[option.value] &&
                    (option.value !== "other" ? (
                      <p dangerouslySetInnerHTML={{ __html: option.text }} />
                    ) : (
                      <p>
                        <span
                          dangerouslySetInnerHTML={{ __html: option.text }}
                        />{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: report.stepA1.otherValue,
                          }}
                        />
                      </p>
                    ))
                )}
              </>
            )}
            {Object.keys(report.stepA2).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepTwo[lang].text,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA2.msgValue,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA3).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepThree[lang].text,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA3.msgValue,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA4).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepFour[lang].text,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA4.msgValue,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA5).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepFive[lang].text,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA5.msgValue,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA6).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepSix[lang].text,
                  }}
                />

                {report.stepA6.files &&
                  report.stepA6.files.map((file) => (
                    <p>
                      <img src={file.preview} alt={`preview ${file.name}`} />{" "}
                      {file.name}
                    </p>
                  ))}
              </>
            )}
            {Object.keys(report.stepA7).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepSeven[lang].text,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepSeven[lang].options.find(
                      (opt) => opt.value === report.stepA7.racism
                    ).text,
                  }}
                />
                {report.stepA7.racism === "yes" && (
                  <>
                    {" "}
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: stepData.stepSeven[lang].textb,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: report.stepA7.msgValue,
                      }}
                    />
                  </>
                )}
              </>
            )}
            {Object.keys(report.stepA8).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepEight[lang].text,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepEight[lang].options.find(
                      (opt) => opt.value === report.stepA8.witness
                    ).text,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA9).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepNine[lang].text,
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepNine[lang].options.find(
                      (opt) => opt.value === report.stepA9.jurid
                    ).text,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA9.msgValue,
                  }}
                />
              </>
            )}
            {/* 
            
            
            {Object.keys(report.stepA7).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepSeven[lang].text7,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA7.msgValue,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA7.msgValue2,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA7.msgValue3,
                  }}
                />
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
                  <p
                    dangerouslySetInnerHTML={{
                      __html: report.stepA9.msgValue,
                    }}
                  />
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA10.msgValue,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA11).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepEleven[lang].text11,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA11.msgValue,
                  }}
                />
              </>
            )}
            {Object.keys(report.stepA12).length !== 0 && (
              <>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: stepData.stepTwelve[lang].text12,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: report.stepA12.msgValue,
                  }}
                />
              </>
            )} */}
          </>
        )}
      </div>
    )
  }
}

export default StepSummary
