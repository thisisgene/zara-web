import React, { Component } from "react"
import { connect } from "react-redux"

import { storeReportData } from "../../../../../../../../actions/reportActions"

import { stepTwelve } from "./step_data"

import styles from "../Steps.module.sass"

class StepA12 extends Component {
  state = {
    msgValue:
      this.props.report.newReport &&
      this.props.report.newReport.stepA12 &&
      this.props.report.newReport.stepA12.msgValue,
  }

  onChange = (e) => {
    if (this.state[e.target.name] !== e.target.value) {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          this.props.storeReportData(this.state, "stepA12")
        }
      )
    }
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepTwelve[lang].text12 }} />
        <br />
        <textarea
          name="msgValue"
          value={this.state.msgValue}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { storeReportData })(StepA12)
