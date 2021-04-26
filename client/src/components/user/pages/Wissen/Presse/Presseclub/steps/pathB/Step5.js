import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Dropzone from "react-dropzone"
import ReactTooltip from "react-tooltip"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepFive } from "./step_data"

import commonStyles from "../../../../../../common/Common.module.sass"
import styles from "../Steps.module.sass"

class StepA5 extends Component {
  state = {
    files:
      this.props.report.newReport &&
      this.props.report.newReport.stepA5 &&
      this.props.report.newReport.stepA5.files
        ? this.props.report.newReport.stepA5.files
        : [],
    text5a:
      this.props.report.newReport &&
      this.props.report.newReport.stepA5 &&
      this.props.report.newReport.stepA5.text5a,
    typeOfHate: {
      sexism:
        this.props.report.newReport &&
        this.props.report.newReport.stepA5 &&
        this.props.report.newReport.stepA5.typeOfHate &&
        this.props.report.newReport.stepA5.typeOfHate.sexism,
      racism:
        this.props.report.newReport &&
        this.props.report.newReport.stepA5 &&
        this.props.report.newReport.stepA5.typeOfHate &&
        this.props.report.newReport.stepA5.typeOfHate.racism,
      heteronormativism:
        this.props.report.newReport &&
        this.props.report.newReport.stepA5 &&
        this.props.report.newReport.stepA5.typeOfHate &&
        this.props.report.newReport.stepA5.typeOfHate.heteronormativism,
      ableism:
        this.props.report.newReport &&
        this.props.report.newReport.stepA5 &&
        this.props.report.newReport.stepA5.typeOfHate &&
        this.props.report.newReport.stepA5.typeOfHate.ableism,
      ageism:
        this.props.report.newReport &&
        this.props.report.newReport.stepA5 &&
        this.props.report.newReport.stepA5.typeOfHate &&
        this.props.report.newReport.stepA5.typeOfHate.ageism,
      politics:
        this.props.report.newReport &&
        this.props.report.newReport.stepA5 &&
        this.props.report.newReport.stepA5.typeOfHate &&
        this.props.report.newReport.stepA5.typeOfHate.politics,
      other:
        this.props.report.newReport &&
        this.props.report.newReport.stepA5 &&
        this.props.report.newReport.stepA5.typeOfHate &&
        this.props.report.newReport.stepA5.typeOfHate.other,
    },
    otherValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA5 &&
      this.props.report.newReport.stepA5.otherValue,
    textarea1:
      this.props.report.newReport &&
      this.props.report.newReport.stepA5 &&
      this.props.report.newReport.stepA5.textarea1,
    textarea2:
      this.props.report.newReport &&
      this.props.report.newReport.stepA5 &&
      this.props.report.newReport.stepA5.textarea2,
    textarea3:
      this.props.report.newReport &&
      this.props.report.newReport.stepA5 &&
      this.props.report.newReport.stepA5.textarea3,
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
          typeOfHate: {
            ...this.state.typeOfHate,
            [e.target.name]: e.target.checked,
          },
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
    const errors = stepFive[lang].errorText
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
        <p dangerouslySetInnerHTML={{ __html: stepFive[lang].text5a }} />

        {stepFive[lang].options.map((option) => (
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
          disabled={!this.state.typeOfHate.other}
        />
        <p dangerouslySetInnerHTML={{ __html: stepFive[lang].text5b }} />
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
          <p>
            <span dangerouslySetInnerHTML={{ __html: stepFive[lang].text5c }} />
            <span
              className={styles["tooltip"]}
              data-tip
              data-for="screenshot"
              dangerouslySetInnerHTML={{ __html: stepFive[lang].text5c2 }}
            />
            <span
              dangerouslySetInnerHTML={{ __html: stepFive[lang].text5c3 }}
            />
          </p>
          <ReactTooltip
            id="screenshot"
            place="bottom"
            type="dark"
            delayHide={1000}
            effect="solid"
          >
            <span>{stepFive[lang].text5c2link}</span>
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
                  {stepFive[lang].droptext}
                </p>
              )
            }}
          </Dropzone>
          <aside className={styles["thumbsContainer"]}>{thumbs}</aside>
          <p>
            <span dangerouslySetInnerHTML={{ __html: stepFive[lang].text5d }} />{" "}
            <Link to={stepFive[lang].link.url}>{stepFive[lang].link.text}</Link>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA5)
