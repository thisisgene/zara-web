import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import commonStyles from '../../../common/Common.module.sass'

export default class Step3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      files: props.getStore().files
    }
  }

  onDrop = files => {
    console.log(files)
    // this.props.uploadImages(files, this.state.id, 'project')
    this.setState({
      files: files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    })
    if (this.props.getStore().files != files) {
      // only update store of something changed
      // this.setState({ files: files })
      this.props.updateStore({
        files: files,
        savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
      }) // Update store here (this is just an example, in reality you will do it via redux or flux)
    }
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

    const thumbs = files.map(file => (
      <div key={file.name}>
        <div className={commonStyles['thumb']}>
          <div className={commonStyles['thumbInner']}>
            <img src={file.preview} className={commonStyles['img']} />
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
      <div className="step step3">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <h1>
              Gibt es von dem Vorfall Fotos, Screenshots oder Links (optional)?
            </h1>
            <div className={commonStyles['dropzone']}>
              <Dropzone
                className={commonStyles['dropzone-inner']}
                accept="image/*"
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
              <aside className={commonStyles['thumbsContainer']}>
                {thumbs}
              </aside>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
