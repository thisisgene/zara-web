import React, { Component } from "react"
import { connect } from "react-redux"
import { withLocalize } from "react-localize-redux"

import {
  heroData,
  longText,
  optionObj,
  optionObjOnline,
  optionObjPublic,
} from "./presseclub_data"

import { storeReportData } from "../../../../../../actions/reportActions"

import HeroUnit from "../../../../dashboard/HeroUnit/HeroUnit"
import LongText from "../../../../dashboard/LongText/LongText"
import OptionButtons from "./OptionButtons/OptionButtons"

import { stepsA, stepsB, stepsC, stepsD } from "./steps/steps"
import StepPathA from "./steps/pathA/StepPathA"
import StepPathB from "./steps/pathB/StepPathB"
import StepPathC from "./steps/pathC/StepPathC"

import styles from "./Presseclub.module.sass"

class Presseclub extends Component {
  state = {
    category: "",
    perspective: "",
  }

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.report &&
  //     prevProps.report.reportSent !== this.props.report.reportSent
  //   ) {
  //     this.updateStore({
  //       reportSent: this.props.report.reportSent,
  //     })
  //   }
  // }

  setActiveCategory = (cat) => {
    if (this.state.category !== cat) {
      this.setState(
        {
          category: cat,
          perspective: "",
        },
        () => this.props.storeReportData(this.state, "basics")
      )
    } else {
      this.setState(
        {
          category: "",
          perspective: "",
        },
        () => this.props.storeReportData(this.state, "basics")
      )
    }
  }
  setActivePerspective = (cat) => {
    if (this.state.perspective !== cat) {
      this.setState(
        {
          perspective: cat,
        },
        () => this.props.storeReportData(this.state, "basics")
      )
    } else {
      this.setState(
        {
          perspective: "",
        },
        () => this.props.storeReportData(this.state, "basics")
      )
    }
  }

  render() {
    const { activeLanguage } = this.props
    const { category, perspective } = this.state

    let lang
    if (activeLanguage && activeLanguage.code) {
      lang = activeLanguage.code
    }

    return (
      <>
        {lang && (
          <div className={styles["presseclub"]}>
            <HeroUnit data={heroData} lang={lang} />
            <LongText content={longText} lang={lang} />
            <div className={styles["option-group--wrapper"]}>
              <div className={styles["option-group"]}>
                <div className={styles["option-group--number"]}>
                  <span>1</span>
                </div>
                <OptionButtons
                  content={optionObj}
                  lang={lang}
                  setActiveCategory={this.setActiveCategory}
                  activeCategory={category}
                />
              </div>
              {category !== "" && (
                <div className={styles["option-group"]}>
                  <div className={styles["option-group--number"]}>
                    <span>2</span>
                  </div>
                  {category === "online" && (
                    <OptionButtons
                      content={optionObjOnline}
                      lang={lang}
                      setActiveCategory={this.setActivePerspective}
                      activeCategory={perspective}
                    />
                  )}
                  {category === "public" && (
                    <OptionButtons
                      content={optionObjPublic}
                      lang={lang}
                      setActiveCategory={this.setActivePerspective}
                      activeCategory={perspective}
                    />
                  )}
                </div>
              )}
              {category === "online" && perspective === "first" && (
                <>
                  <StepPathA lang={lang} />
                </>
              )}
              {category === "online" && perspective === "third" && (
                <>
                  <StepPathB lang={lang} />
                </>
              )}
              {category === "public" && perspective === "first" && (
                <>
                  <StepPathC lang={lang} />
                </>
              )}
              {category === "public" && perspective === "third" && (
                <>in progress</>
              )}
            </div>
          </div>
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  report: state.report,
})

export default withLocalize(
  connect(mapStateToProps, { storeReportData })(Presseclub)
)
