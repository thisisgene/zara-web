import React, { Component } from 'react'
import TextFieldGroup from '../../../common/TextFieldGroup'

import Moment from 'react-moment'

import cx from 'classnames'
import globalStyles from '../../../common/Bootstrap.module.css'
import commonStyles from '../../../common/Common.module.sass'
import styles from './Fees.module.sass'

export default class TrainingFee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: props.user._id,
      trainingId: props.training._id,
      additionalFeeDescription: '',
      additionalFeeAmount: 0,
      subTotal: 0
    }
  }

  componentDidMount() {
    this.calculateTotalFee()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.training !== this.props.training) {
      this.setState({
        additionalFeeDescription: '',
        additionalFeeAmount: 0
      })
      this.calculateTotalFee()
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  calculateTotalFee = () => {
    const { training, user } = this.props
    let subTotalFee = training.fee
    if (
      training.assignedTrainer1 &&
      training.assignedTrainer1.id === user._id
    ) {
      training.assignedTrainer1.additionalFees &&
        training.assignedTrainer1.additionalFees.map(fee => {
          subTotalFee += fee.amount
        })
    } else if (
      training.assignedTrainer2 &&
      training.assignedTrainer2.id === user._id
    ) {
      training.assignedTrainer2.additionalFees &&
        training.assignedTrainer2.additionalFees.map(fee => {
          subTotalFee += fee.amount
        })
    }
    this.setState({ subTotal: subTotalFee })
    this.props.totalFeeCalc(training, subTotalFee)
  }

  onSaveFee = () => {
    if (this.state.additionalFeeAmount !== 0) {
      const saveObj = {
        category: 'fees',
        userId: this.state.userId,
        trainingId: this.state.trainingId,
        addFeeDescription: this.state.additionalFeeDescription,
        addFeeAmount: this.state.additionalFeeAmount
      }
      this.props.saveContent(saveObj)
    }
  }

  onDeleteFee = feeId => {
    console.log(feeId)
    const deleteObj = {
      feeId: feeId,
      userId: this.state.userId,
      trainingId: this.state.trainingId
    }
    this.props.deleteAdditionalFee(deleteObj)
  }

  render() {
    const { training, user } = this.props
    return (
      <div className={styles['fee-container']}>
        <div className={styles['fee-date']}>
          <Moment
            className={styles['fee-date--month']}
            format="MMM"
            date={training.date}
          />
          <Moment
            className={styles['fee-date--day']}
            format="DD"
            date={training.date}
          />
        </div>
        <div className={styles['fee-table']}>
          <p className={styles['fee-title']}>{training.title}</p>
          <table
            className={cx(globalStyles['table'], globalStyles['table-dark'])}
          >
            <tbody>
              <tr>
                <td className={styles['fee-description']}>Honorar</td>
                <td className={styles['fee-amount']}>{training.fee}</td>
                <td className={styles['fee-button']} />
              </tr>
              {training.assignedTrainer1 &&
              training.assignedTrainer1.id === user._id
                ? training.assignedTrainer1.additionalFees.map((fee, index) => (
                    <tr key={index}>
                      <td className={styles['fee-description']}>
                        {fee.description}
                      </td>
                      <td className={styles['fee-amount']}>{fee.amount}</td>
                      <td className={styles['fee-button']}>
                        <button
                          type="button"
                          className={styles['delete-button']}
                          onClick={this.onDeleteFee.bind(this, fee._id)}
                        >
                          <i className="fas fa-minus-circle" />
                        </button>
                      </td>
                    </tr>
                  ))
                : training.assignedTrainer2 &&
                  training.assignedTrainer2.id === user._id &&
                  training.assignedTrainer2.additionalFees.map((fee, index) => (
                    <tr key={index}>
                      <td className={styles['fee-description']}>
                        {fee.description}
                      </td>
                      <td className={styles['fee-amount']}>{fee.amount}</td>
                      <td className={styles['fee-button']}>
                        <button
                          type="button"
                          className={styles['delete-button']}
                          onClick={this.onDeleteFee.bind(this, fee._id)}
                        >
                          <i className="fas fa-minus-circle" />
                        </button>
                      </td>
                    </tr>
                  ))}
              <tr className={styles['input-line']}>
                <td>
                  <TextFieldGroup
                    placeholder="Beschreibung"
                    type="text"
                    name="additionalFeeDescription"
                    value={this.state.additionalFeeDescription}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <TextFieldGroup
                    placeholder=""
                    type="number"
                    name="additionalFeeAmount"
                    value={this.state.additionalFeeAmount}
                    onChange={this.onChange}
                  />
                </td>
                <td className={styles['fee-button']}>
                  <button
                    type="button"
                    className={styles['save-button']}
                    onClick={this.onSaveFee}
                    disabled={
                      parseInt(this.state.additionalFeeAmount, 10) === 0
                    }
                  >
                    <i className="fa fa-check" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles['fee-description']}>Zwischensumme: </td>
                <td className={styles['fee-amount']}>{this.state.subTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
