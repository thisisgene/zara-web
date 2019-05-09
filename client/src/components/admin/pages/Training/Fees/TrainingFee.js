import React, { Component } from 'react'
import TextFieldGroup from '../../../common/TextFieldGroup'

import Moment from 'react-moment'

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
    let totalFee = training.fee
    if (
      training.assignedTrainer1 &&
      training.assignedTrainer1.id === user._id
    ) {
      training.assignedTrainer1.additionalFees &&
        training.assignedTrainer1.additionalFees.map(fee => {
          totalFee += fee.amount
        })
    } else if (
      training.assignedTrainer2 &&
      training.assignedTrainer2.id === user._id
    ) {
      training.assignedTrainer2.additionalFees &&
        training.assignedTrainer2.additionalFees.map(fee => {
          totalFee += fee.amount
        })
    }
    this.setState({ subTotal: totalFee })
    console.log('total: ', totalFee)
  }

  onSaveFee = () => {
    console.log(
      this.state.userId,
      this.state.trainingId,
      this.state.additionalFeeDescription,
      this.state.additionalFeeAmount
    )
    const saveObj = {
      category: 'fees',
      userId: this.state.userId,
      trainingId: this.state.trainingId,
      addFeeDescription: this.state.additionalFeeDescription,
      addFeeAmount: this.state.additionalFeeAmount
    }
    this.props.saveContent(saveObj)
  }

  render() {
    const { training, user } = this.props
    return (
      <div>
        <p>{training.title}</p>
        <Moment format="DD.MM.YYYY" date={training.date} />
        <table className={globalStyles['table']}>
          <tr>
            <td>Honorar</td>
            <td>{training.fee}</td>
            <td />
          </tr>
          {training.assignedTrainer1 &&
          training.assignedTrainer1.id === user._id
            ? training.assignedTrainer1.additionalFees.map((fee, index) => (
                <tr key={index}>
                  <td>{fee.description}</td>
                  <td>{fee.amount}</td>
                </tr>
              ))
            : training.assignedTrainer2 &&
              training.assignedTrainer2.id === user._id &&
              training.assignedTrainer2.additionalFees.map((fee, index) => (
                <tr key={index}>
                  <td>{fee.description}</td>
                  <td>{fee.amount}</td>
                </tr>
              ))}
          <tr>
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
            <td>
              <button
                type="button"
                className={styles['save-button']}
                onClick={this.onSaveFee}
              >
                <i className="fa fa-check" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Zwischensumme: </td>
            <td>{this.state.subTotal}</td>
          </tr>
        </table>
      </div>
    )
  }
}
