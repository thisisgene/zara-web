import React, { Component } from "react"
import { Link } from "react-router-dom"
import Dropzone from "react-dropzone"
import ReactTooltip from "react-tooltip"

import { stepSix } from "./step_data"

import commonStyles from "../../../../../../common/Common.module.sass"
import styles from "../Steps.module.sass"

class StepA6 extends Component {
  state = {
    files:
      this.props.report.newReport &&
      this.props.report.newReport.stepA6 &&
      this.props.report.newReport.stepA6.files
        ? this.props.report.newReport.stepA6.files
        : [],
  }

  onDrop = (files) => {
    let fileCount = 10 - this.state.files.length
    files.map((file) => {
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
      if (fileCount > 0) {
        this.setState(
          (state) => ({
            files: [...state.files, file],
          }),
          () => {
            this.props.storeReportData(this.state, "stepA6")
          }
        )
        fileCount--
      } else return "Maximal 10 Dateien"
    })
  }

  onCancel = () => {
    this.setState({
      files: [],
    })
  }

  removeFile = (file, e) => {
    e.preventDefault()
    var array = [...this.state.files] // make a separate copy of the array
    var index = array.indexOf(file)
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ files: array }, () => {
        this.props.storeReportData(this.state, "stepA6")
      })
    }
  }

  render() {
    const { lang } = this.props
    const { files } = this.state
    const errors = stepSix[lang].errorText
    const maxSize = 10485760
    const thumbs = files.map((file) => (
      <div key={file.name}>
        <div className={commonStyles["thumb"]}>
          <div className={commonStyles["thumbInner"]}>
            <img
              src={file.preview}
              className={commonStyles["img"]}
              alt={`preview ${file.name}`}
            />
          </div>
          <button
            className={commonStyles["delete-button"]}
            onClick={this.removeFile.bind(this, file)}
          >
            x
          </button>
        </div>
        <p>{file.name}</p>
      </div>
    ))
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepSix[lang].text }} />

        <div className={styles["dropzone"]}>
          <ReactTooltip
            id="screenshot"
            place="bottom"
            type="dark"
            delayHide={1000}
            effect="solid"
          >
            <span>{stepSix[lang].text5c2link}</span>
          </ReactTooltip>
          <Dropzone
            className={styles["dropzone-inner"]}
            accept="image/*"
            minSize={0}
            maxSize={maxSize}
            onDrop={this.onDrop}
            onFileDialogCancel={this.onCancel}
            name="file"
          >
            {({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
              const isFileTooLarge =
                rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize
              if (this.state.files.length >= 10) {
                return `${errors.fileTooLarge}`
              }
              if (isFileTooLarge) {
                return `${errors.fileTooLarge}`
              }
              if (acceptedFiles.length || rejectedFiles.length) {
                return `${errors.fileAccepted} ${acceptedFiles.length}, ${errors.fileRejected} ${rejectedFiles.length}`
              }
              if (isDragAccept) {
                return `${errors.fileFormatAccepted}`
              }
              if (isDragReject) {
                return `${errors.fileFormatRejected}`
              }
              return (
                <p>
                  <i className="dropzone-image fa fa-image" />
                  {stepSix[lang].droptext}
                </p>
              )
            }}
          </Dropzone>
          <aside className={styles["thumbsContainer"]}>{thumbs}</aside>
        </div>
      </div>
    )
  }
}

export default StepA6
