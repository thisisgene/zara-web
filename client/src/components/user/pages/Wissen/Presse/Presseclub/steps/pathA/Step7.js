import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepSeven } from "./step_data"

import styles from "../Steps.module.sass"

class StepA7 extends Component {
  state = {
    msgValue: this.props.report.stepA7 && this.props.report.stepA7.msgValue,
    msgValue2: this.props.report.stepA7 && this.props.report.stepA7.msgValue2,
    msgValue3: this.props.report.stepA7 && this.props.report.stepA7.msgValue3,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA7")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    const { jurid } = this.state
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepSeven[lang].text7 }} />

        <textarea
          name="msgValue"
          value={this.state.msgValue}
          onChange={this.onChange}
        />
        <br />
        <textarea
          name="msgValue2"
          value={this.state.msgValue2}
          onChange={this.onChange}
        />
        <br />
        <textarea
          name="msgValue3"
          value={this.state.msgValue3}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA7)
