import React, { Component } from "react"
import StepZilla from "react-stepzilla"
import { connect } from "react-redux"

import Step1 from "./Step1"
import Step2 from "./Step2"
import StepFinal from "./StepFinal"

class StepPathA extends Component {
  sampleStore = {
    // email: '',
    // userName: '',
    // phone: '',
    description: "",
    directReaction: "",
    files: [],
    links: "",
    selectedOption: "anonym",
    savedToCloud: false,
    reportSent: false,
  }

  getStore() {
    return this.sampleStore
  }

  updateStore(update) {
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
            title={"LIMPI"}
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
