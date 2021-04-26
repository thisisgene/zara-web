import React, { Component } from "react"
import { connect } from "react-redux"
import Dropzone from "react-dropzone"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepFive } from "./step_data"

import commonStyles from "../../../../../../common/Common.module.sass"
import styles from "../Steps.module.sass"

class StepA5 extends Component {
  state = {
    files:
      this.props.report.stepA5 && this.props.report.stepA5.files
        ? this.props.report.stepA5.files
        : [],
    text5a: this.props.report.stepA5 && this.props.report.stepA5.text5a,
    sexism: this.props.report.stepA5 && this.props.report.stepA5.sexism,
    racism: this.props.report.stepA5 && this.props.report.stepA5.racism,
    heteronormativism:
      this.props.report.stepA5 && this.props.report.stepA5.heteronormativism,
    ableism: this.props.report.stepA5 && this.props.report.stepA5.ableism,
    ageism: this.props.report.stepA5 && this.props.report.stepA5.ageism,
    politics: this.props.report.stepA5 && this.props.report.stepA5.politics,
    other: this.props.report.stepA5 && this.props.report.stepA5.other,
    otherValue: this.props.report.stepA5 && this.props.report.stepA5.otherValue,
    textarea1: this.props.report.stepA5 && this.props.report.stepA5.textarea1,
    textarea2: this.props.report.stepA5 && this.props.report.stepA5.textarea2,
    textarea3: this.props.report.stepA5 && this.props.report.stepA5.textarea3,
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
            this.props.storeReportData(this.state, "stepA5")
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
        this.props.storeReportData(this.state, "stepA5")
      })
    }
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA5")
        }
      )
    }
  }
  onOptionChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.checked,
        },
        () => {
          this.props.storeReportData(this.state, "stepA5")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { files } = this.state
    const errors = stepFive.errorText
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
        <p dangerouslySetInnerHTML={{ __html: stepFive.text5a }} />

        {stepFive.options.map((option) => (
          <div>
            <input
              type="checkbox"
              name={option.value}
              id={option.value}
              value={option.value}
              checked={this.state[option.value]}
              onChange={this.onOptionChange}
            />
            <label
              htmlFor={option.value}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </div>
        ))}
        <input
          type="text"
          name="otherValue"
          value={this.state.otherValue}
          onChange={this.onChange}
          disabled={!this.state.other}
        />
        <p dangerouslySetInnerHTML={{ __html: stepFive.text5b }} />
        <input
          type="text"
          name="textarea1"
          value={this.state.textarea1}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="textarea2"
          value={this.state.textarea2}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          name="textarea3"
          value={this.state.textarea3}
          onChange={this.onChange}
        />
        <div className={styles["dropzone"]}>
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
                return `${errors.fileAccepted}{' '}${acceptedFiles.length},{' '}${errors.fileRejected}{' '}${rejectedFiles.length}`
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
                  {stepFive.droptext}
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

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA5)
