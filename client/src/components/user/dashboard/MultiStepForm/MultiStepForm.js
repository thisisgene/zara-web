import React, { Component } from 'react'
import StepZilla from 'react-stepzilla'
import { connect } from 'react-redux'

import { sendReport, resetReport } from '../../../../actions/reportActions'

import StepOne from './StepComponents/StepOne'
import StepTwo from './StepComponents/StepTwo'
import StepThree from './StepComponents/StepThree'
import StepFour from './StepComponents/StepFour'
import StepFive from './StepComponents/StepFive'
import StepSix from './StepComponents/StepSix'

import { stepNames } from './StepComponents/step_data'

import cx from 'classnames'
import './MultiStepForm_basic.css'
import styles from './MultiStepForm.module.sass'

class MultiStepForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.sampleStore = {
      // email: '',
      // userName: '',
      // phone: '',
      description: '',
      files: [],
      links: '',
      selectedOption: 'anonym',
      savedToCloud: false,
      reportSent: false
    }
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidUpdate(prevProps) {
    if (
      prevProps.report &&
      prevProps.report.reportSent !== this.props.report.reportSent
    ) {
      this.updateStore({
        reportSent: this.props.report.reportSent
      })
    }
  }

  getStore() {
    return this.sampleStore
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update
    }
  }
  render() {
    const { lang } = this.props
    const steps = [
      // {
      //   name: 'Schritt 1',
      //   component: (
      //     <StepOne
      //       className={styles['step']}
      //       getStore={() => this.getStore()}
      //       updateStore={u => {
      //         this.updateStore(u)
      //       }}
      //     />
      //   )
      // },
      {
        name: stepNames[lang].stepTwo,
        component: (
          <StepTwo
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
            lang={lang}
          />
        )
      },
      {
        name: stepNames[lang].stepThree,
        component: (
          <StepThree
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
            lang={lang}
          />
        )
      },
      // {
      //   name: 'Schritt 4',
      //   component: (
      //     <StepFour
      //       className={styles['step']}
      //       getStore={() => this.getStore()}
      //       updateStore={u => {
      //         this.updateStore(u)
      //       }}
      //     />
      //   )
      // },
      {
        name: stepNames[lang].stepFive,
        component: (
          <StepFive
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
            lang={lang}
            report={this.props.report.reportSent}
            resetReport={() => this.props.resetReport()}
            sendReport={reportData => this.props.sendReport(reportData)}
          />
        )
      },
      {
        name: stepNames[lang].stepSix,
        component: (
          <StepSix
            className={cx(styles['step'], 'step6')}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
          />
        )
      }
    ]

    return (
      <div className={styles['multi-step-container']}>
        <div className={cx('step-progress', styles['multi-step-form'])}>
          <StepZilla
            steps={steps}
            startAtStep={0}
            prevBtnOnLastStep={false}
            nextButtonCls={'next-button'}
            nextButtonText={lang === 'de' ? 'Weiter' : 'Next'}
            backButtonText={lang === 'de' ? 'Zurück' : 'Back'}
            nextTextOnFinalActionStep={'Absenden'}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  report: state.report
})
export default connect(
  mapStateToProps,
  { sendReport, resetReport }
)(MultiStepForm)
