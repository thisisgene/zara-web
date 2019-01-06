import React, { Component } from 'react'
import StepZilla from 'react-stepzilla'
import { connect } from 'react-redux'

import { sendReport } from '../../../../actions/reportActions'

import StepOne from './StepComponents/StepOne'
import StepTwo from './StepComponents/StepTwo'
import StepThree from './StepComponents/StepThree'
import StepFour from './StepComponents/StepFour'
import StepFive from './StepComponents/StepFive'
import StepSix from './StepComponents/StepSix'

import cx from 'classnames'
import './MultiStepForm_basic.css'
import styles from './MultiStepForm.module.sass'

class MultiStepForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.sampleStore = {
      email: '',
      userName: '',
      phone: '',
      description: '',
      files: [],
      links: '',
      selectedOption: 'anonym',
      savedToCloud: false
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

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
    const steps = [
      {
        name: 'Schritt 1',
        component: (
          <StepOne
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
          />
        )
      },
      {
        name: 'Schritt 2',
        component: (
          <StepTwo
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
          />
        )
      },
      {
        name: 'Schritt 3',
        component: (
          <StepThree
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
          />
        )
      },
      {
        name: 'Schritt 4',
        component: (
          <StepFour
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
          />
        )
      },
      {
        name: 'Schritt 5',
        component: (
          <StepFive
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
            report={this.props.report}
            sendReport={reportData => this.props.sendReport(reportData)}
          />
        )
      },
      {
        name: 'Schritt 6',
        component: (
          <StepSix
            className={styles['step']}
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
          />
        )
      }
    ]
    const { lang } = this.props
    return (
      <div className={styles['multi-step-container']}>
        <div className={cx('step-progress', styles['multi-step-form'])}>
          <StepZilla
            steps={steps}
            startAtStep={3}
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

export default connect(
  null,
  { sendReport }
)(MultiStepForm)
