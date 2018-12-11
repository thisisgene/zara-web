import React, { Component } from 'react'
import StepZilla from 'react-stepzilla'

import StepOne from './StepComponents/StepOne'
import StepTwo from './StepComponents/StepTwo'
import StepThree from './StepComponents/StepThree'
import StepFour from './StepComponents/StepFour'
import StepFive from './StepComponents/StepFive'
import StepSix from './StepComponents/StepSix'

import cx from 'classnames'
import './MultiStepForm_basic.css'
import styles from './MultiStepForm.module.sass'

export default class MultiStepForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.sampleStore = {
      email: '',
      description: '',
      files: [],
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
            getStore={() => this.getStore()}
            updateStore={u => {
              this.updateStore(u)
            }}
          />
        )
      },
      {
        name: 'Schritt 6',
        component: (
          <StepSix
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
            startAtStep={4}
            nextButtonCls={'next-button'}
            nextTextOnFinalActionStep={'Absenden'}
          />
        </div>
      </div>
    )
  }
}
