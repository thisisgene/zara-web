import React, { Component } from './react'
import Dropzone from './react-dropzone'
import { connect } from './react-redux'

import { uploadImages } from '../../../../actions/imageActions'

import commonStyles from '../common/Common.module.sass'

const acceptedFiles = {
  news: 'image/*',
  jahresberichte: ''
}

class ImageUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: []
    }
  }

  componentDidMount() {
    if (this.props) {
      // this.setState({ id: this.props.match.params.category })
    }
  }

  onDrop = files => {
    this.setState({ files: files })
    this.props.uploadImages(files, this.props.category)
  }

  onCancel = () => {
    this.setState({
      files: []
    })
  }

  render() {
    return (
      <div>
        <div className={commonStyles['dropzone']}>
          <Dropzone
            className={commonStyles['dropzone-inner']}
            accept={acceptedFiles[this.props.category]}
            // maxSize={15728640}
            onDrop={this.onDrop}
            onFileDialogCancel={this.onCancel}
            name="file"
          >
            {({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
              if (acceptedFiles.length || rejectedFiles.length) {
                return `Akzeptiert: ${acceptedFiles.length}, abgelehnt: ${
                  rejectedFiles.length
                }`
              }
              if (isDragAccept) {
                return 'Gültige Format.'
              }
              if (isDragReject) {
                return 'Ungültiges Format. Oder zu groß.'
              }
              return (
                <p>
                  <i className="dropzone-image fa fa-image" /> Dateien hier
                  hochladen.
                </p>
              )
            }}
          </Dropzone>
        </div>
        {/* <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside> */}
      </div>
    )
  }
}

// ImageUpload.propTypes = {
//   uploadImages: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   project: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
//

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { uploadImages }
)(ImageUpload)
// export default ImageUpload
