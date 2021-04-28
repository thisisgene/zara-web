import React, { Component } from "react"
import StepZilla from "react-stepzilla"
import { connect } from "react-redux"

import {
  clearNewReport,
  storeReportData,
} from "../../../../../../../../actions/reportActions"

import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import Step7 from "./Step7"
import Step8 from "./Step8"
import Step9 from "./Step9"
import Step10 from "./Step10"
import Step11 from "./Step11"
import Step12 from "./Step12"
import StepSummary from "./StepSummary"
import StepFinal from "./StepFinal"

class StepPathA extends Component {
  componentDidMount() {
    this.props.clearNewReport()
  }
  render() {
    const { lang } = this.props
    const steps = [
      {
        component: (
          <Step1
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step2
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step3
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step4
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step5
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step6
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step7
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step8
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step9
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step10
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step11
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <Step12
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <StepSummary
            report={this.props.report}
            storeReportData={this.props.storeReportData}
            lang={lang}
          />
        ),
      },
      {
        component: (
          <StepFinal clearNewReport={this.props.clearNewReport} lang={lang} />
        ),
      },
    ]
    return (
      <div>
        <StepZilla
          steps={steps}
          startAtStep={0}
          prevBtnOnLastStep={false}
          hocValidationAppliedTo={-1}
          nextButtonCls={"next-button"}
          nextButtonText={lang === "de" ? "Weiter" : "Next"}
          backButtonText={lang === "de" ? "Zurück" : "Back"}
          nextTextOnFinalActionStep={lang === "de" ? "Absenden" : "Send"}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default connect(mapStateToProps, { clearNewReport, storeReportData })(
  StepPathA
)
