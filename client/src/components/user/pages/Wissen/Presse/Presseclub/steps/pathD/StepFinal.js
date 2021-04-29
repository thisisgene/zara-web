import React, { Component } from "react"

import { stepFinal } from "./step_data"

import styles from "../Steps.module.sass"

class StepFinal extends Component {
  componentDidMount() {
    this.props.clearNewReport()
  }

  render() {
    const { lang } = this.props
    return (
      <div className={styles["step-container"]}>
        <p dangerouslySetInnerHTML={{ __html: stepFinal[lang].text }} />
      </div>
    )
  }
}

export default StepFinal
