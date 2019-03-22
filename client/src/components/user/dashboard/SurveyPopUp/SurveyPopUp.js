import React, { Component } from 'react'

export default class SurveyPopUp extends Component {
  componentDidMount() {
    let el = document.createElement('script')
    el.src = this.props.url
    document.body.appendChild(el)
  }
  render() {
    return <div />
  }
}
