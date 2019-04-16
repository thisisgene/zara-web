import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getImagesByCategory,
  deleteMediaImage
} from '../../../../../actions/imageActions'

import ImageUpload from '../ImageUpload'
import ImageBox from '../ImageBox'
import Spinner from '../../../common/Spinner'

class MediaContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: props.match.params.category
    }
  }

  componentDidMount() {
    this.props.getImagesByCategory(this.state.category)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (prevProps.match !== this.props.match) {
        this.setState({ category: this.props.match.params.category })
        this.props.getImagesByCategory(this.props.match.params.category)
      }
    }
  }

  deleteImage = id => {
    this.props.deleteMediaImage(this.state.category, id)
    // this.props.history.push('/admin/dashboard/news/neu')
  }

  render() {
    return (
      <div>
        {this.state.category && (
          <div>
            <ImageUpload category={this.state.category} />
            <div style={{ height: '1.4rem' }}>
              {this.props.media.uploadProgress &&
                this.props.media.uploadProgress < 100 && (
                  <div>
                    <progress
                      style={{ width: '100%' }}
                      value={this.props.media.uploadProgress}
                      max="100"
                    />
                  </div>
                )}
            </div>
            {this.props.media && this.props.media.images && (
              <ImageBox
                images={this.props.media.images}
                deleteImage={this.deleteImage}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  media: state.media,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { getImagesByCategory, deleteMediaImage }
)(MediaContent)
