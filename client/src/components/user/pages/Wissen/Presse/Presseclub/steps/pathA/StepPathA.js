import React, { Component } from "react"
import StepZilla from "react-stepzilla"
import { connect } from "react-redux"

import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import Step6 from "./Step6"
import StepFinal from "./StepFinal"

class StepPathA extends Component {
  render() {
    const { lang } = this.props
    const steps = [
      {
        name: "Step 1",
        component: <Step1 lang={lang} />,
      },
      {
        name: "Step 2",
        component: <Step2 lang={lang} />,
      },
      {
        name: "Step 3",
        component: <Step3 lang={lang} />,
      },
      {
        name: "Step 4",
        component: <Step4 lang={lang} />,
      },
      {
        name: "Step 5",
        component: <Step5 lang={lang} />,
      },
      {
        name: "Step 6",
        component: <Step6 lang={lang} />,
      },
      {
        name: "Step Final",
        component: <StepFinal lang={lang} />,
      },
    ]
    return (
      <div>
        <StepZilla
          steps={steps}
          startAtStep={5}
          prevBtnOnLastStep={false}
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

export default connect(mapStateToProps, {})(StepPathA)
