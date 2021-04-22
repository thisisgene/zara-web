import React, { Component } from "react"
import StepZilla from "react-stepzilla"
import { connect } from "react-redux"

import Step1 from "./Step1"
import Step2 from "./Step2"
import StepFinal from "./StepFinal"

class StepPathA extends Component {
  sampleStore = {
    directReaction: "",
    text1a1: "",
    text1a2a: "",
    text1a2b: "",
    text1a2c: "",
    text1b1: "",
    text1b2: "",
    savedToCloud: false,
    reportSent: false,
  }

  getStore() {
    return this.sampleStore
  }

  updateStore(update) {
    console.log("update store: ", update)
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    }
  }

  render() {
    const { lang } = this.props
    const steps = [
      {
        name: "Step 1",
        component: (
          <Step1
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u)
            }}
            lang={lang}
          />
        ),
      },
      {
        name: "Step 2",
        component: (
          <Step2
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u)
            }}
            lang={lang}
          />
        ),
      },
      {
        name: "Step Final",
        component: (
          <StepFinal
            getStore={() => this.getStore()}
            updateStore={(u) => {
              this.updateStore(u)
            }}
            lang={lang}
          />
        ),
      },
    ]
    return (
      <div>
        <StepZilla
          steps={steps}
          startAtStep={0}
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
