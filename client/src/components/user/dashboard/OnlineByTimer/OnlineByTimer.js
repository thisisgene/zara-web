import React, { Component } from 'react'

import moment from 'moment'

export default class OnlineByTimer extends Component {
  state = {
    onlineTime: this.props.onlineTime,
    showItem: false
  }

  componentDidMount() {
    this.callTimer()
  }

  callTimer = () => {
    let timer = setInterval(this.startTimeCheck, 1000)

  }

  startTimeCheck = () => {
    let onlineTime = this.state.onlineTime
    let formattedTime = moment.unix(onlineTime).fromNow()
    // console.log("now: ", moment(Date.now()).format())
    console.log('timestamp: ', moment.unix(onlineTime))
    console.log(moment.unix(Date.now()))

  }

  render() {
    const { onlineTime } = this.props
    return (

      <div>
        {this.props.children}
      </div>
    )
  }
}
