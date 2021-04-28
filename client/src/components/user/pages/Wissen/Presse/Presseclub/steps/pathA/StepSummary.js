import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import Promise from "promise"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepSummary } from "./step_data"

import Spinner from "../../../../../../dashboard/Spinner/Spinner"

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
    console.log("report: ", report)
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
    const report = this.props
    return (
      <div className={styles["step-container"]}>
        <Spinner nowActive={this.state.saving} />
        <p dangerouslySetInnerHTML={{ __html: stepSummary[lang].text }} />
        <p>...</p>
      </div>
    )
  }
}

export default StepSummary
