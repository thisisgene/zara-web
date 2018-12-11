import React, { Component } from 'react'
import StepZilla from 'react-stepzilla'

import StepOne from './StepComponents/StepOne'
import StepTwo from './StepComponents/StepTwo'
import StepThree from './StepComponents/StepThree'
import StepFour from './StepComponents/StepFour'

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
      }
    ]
    return (
      <div className={styles['multi-step-container']}>
        <div className={cx('step-progress', styles['multi-step-form'])}>
          <StepZilla
            steps={steps}
            stepsNavigation={false}
            startAtStep={1}
            nextButtonCls={'next-button'}
          />
        </div>
      </div>
    )
  }
}
