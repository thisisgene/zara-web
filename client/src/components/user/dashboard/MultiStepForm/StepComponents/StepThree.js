import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import commonStyles from '../../../common/Common.module.sass'

import styles from '../MultiStepForm.module.sass'
import validation from 'react-validation-mixin'
import strategy from 'joi-validation-strategy'
import Joi from 'joi'

class Step3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      files: props.getStore().files,
      links: props.getStore().links
    }
    this._validateOnDemand = true // this flag enables onBlur validation as user fills forms

    // this.validationCheck = this.validationCheck.bind(this)
    this.isValidated = this.isValidated.bind(this)
  }
  isValidated() {
    const userInput = this._grabUserInput() // grab user entered vals
    let isDataValid = true
    if (this.props.getStore().links !== userInput.links) {
      // only update store of something changed
      this.props.updateStore({
        ...userInput,
        savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
      }) // Update store here (this is just an example, in reality you will do it via redux or flux)
    }

    isDataValid = true

    return isDataValid
  }
  _grabUserInput() {
    return {
      links: this.refs.links.value
    }
  }

  onDrop = files => {
    let fileCount = 10 - this.state.files.length
    files.map(file => {
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
      if (fileCount > 0) {
        this.setState(
          state => ({
            files: [...state.files, file]
          }),
          () => {
            this.props.updateStore({
              files: this.state.files,
              savedToCloud: true // use this to notify step4 that some changes took place and prompt the user to save again
            })
          }
        )
        fileCount--
      } else return 'Maximal 10 Dateien'
    })

    // if (this.props.getStore().files !== files) {
    //   // only update store of something changed
    //   // this.setState({ files: files })

    //   this.props.updateStore({
    //     files: files,
    //     savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
    //   }) // Update store here (this is just an example, in reality you will do it via redux or flux)
    // }
  }

  onCancel() {
    this.setState({
      files: []
    })
  }

  removeFile = (file, e) => {
    e.preventDefault()
    var array = [...this.state.files] // make a separate copy of the array
    var index = array.indexOf(file)
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ files: array })
      this.props.updateStore({
        files: array,
        savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
      })
    }
  }
  render() {
    const { files } = this.state
    const maxSize = 10485760
    const thumbs = files.map(file => (
      <div key={file.name}>
        <div className={commonStyles['thumb']}>
          <div className={commonStyles['thumbInner']}>
            <img
              src={file.preview}
              className={commonStyles['img']}
              alt={`preview ${file.name}`}
            />
          </div>
          <button
            className={commonStyles['delete-button']}
            onClick={this.removeFile.bind(this, file)}
          >
            x
          </button>
        </div>
        <p>{file.name}</p>
      </div>
    ))
    return (
      <div className={styles['step']}>
        <form id="Form" className="form-horizontal">
          <h1>
            Gibt es von dem Vorfall Fotos, Screenshots oder Links (optional)?
          </h1>
          <div className={styles['dropzone']}>
            <Dropzone
              className={styles['dropzone-inner']}
              accept="image/*"
              minSize={0}
              maxSize={maxSize}
              onDrop={this.onDrop}
              onFileDialogCancel={this.onCancel}
              name="file"
            >
              {({
                isDragAccept,
                isDragReject,
                acceptedFiles,
                rejectedFiles
              }) => {
                const isFileTooLarge =
                  rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize
                if (this.state.files.length >= 10) {
                  return 'Limit erreicht! Es dürfen maximal nur 10 Dateien auf einmal gesendet werden.'
                }
                if (isFileTooLarge) {
                  return 'Datei ist zu groß. Maximal 10 MB.'
                }
                if (acceptedFiles.length || rejectedFiles.length) {
                  return `Akzeptiert: ${acceptedFiles.length}, abgelehnt: ${
                    rejectedFiles.length
                    }`
                }
                if (isDragAccept) {
                  return 'Gültiges Format.'
                }
                if (isDragReject) {
                  return 'Ungültiges Format. Nur Bilddateien erlaubt.'
                }
                return (
                  <p>
                    <i className="dropzone-image fa fa-image" /> Bilder hier
                    hochladen.
                  </p>
                )
              }}
            </Dropzone>
            <aside className={styles['thumbsContainer']}>{thumbs}</aside>
          </div>
          <p>
            Links zum Vorfall (Bei mehreren Links, bitte mit Beistrich getrennt
            eintragen):
          </p>
          <textarea
            ref="links"
            autoComplete="off"
            className="form-control"
            defaultValue={this.state.links}
          // onBlur={this.validationCheck}
          // onChange={this.validationCheck}
          />
          <div>{this.state.linksValMsg}</div>
        </form>
      </div>
    )
  }
}

export default Step3
