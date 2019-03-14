import React, { Component } from 'react'

export default class SurveyPopUp extends Component {
  componentDidMount() {
    console.log('survey!')
    let el = document.createElement('script')
    el.src = this.props.url
    document.body.appendChild(el)
  }
  render() {
    return <div />
  }
}
