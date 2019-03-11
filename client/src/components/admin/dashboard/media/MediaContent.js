import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getImagesByCategory } from '../../../../actions/imageActions'

import ImageUpload from '../ImageUpload'
import ImageBox from '../ImageBox'

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
        console.log(this.props.match.params.category)
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.category && (
          <div>
            <ImageUpload category={this.state.category} />
            {this.props.media && this.props.media.images && (
              <ImageBox images={this.props.media.images} />
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
  { getImagesByCategory }
)(MediaContent)
