import React, { Component } from 'react'

import moment from 'moment'

import TrainingFee from './TrainingFee'

import cx from 'classnames'
import styles from './Fees.module.sass'

export default class FeeUserItem extends Component {
  state = {
    totalFee: 0,
    subTotals: [],
    collapsed: false
  }
  componentDidMount() {
    // this.setState({
    //   totalFee: 0,
    //   subTotals: []
    // })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.training != this.props.training) {
      this.setState({ subTotals: [], totalFee: 0 })
    }
  }

  toggleCollapse = () => {
    console.log(this.state.collapsed)
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  totalFee = () => {
    let sum = 0
    const subTotalArray = this.state.subTotals
    for (let prop in subTotalArray) {
      sum += subTotalArray[prop].subTotal
    }
    this.setState({
      totalFee: sum
    })
  }

  totalFeeCalc = (training, subTotal) => {
    let tArray = this.state.subTotals
    tArray[training._id] = { subTotal: subTotal }

    this.setState({ subTotals: tArray }, () => this.totalFee())
  }

  render() {
    const {
      trainings,
      user,
      saveContent,
      deleteAdditionalFee,
      selectedMonth
    } = this.props

    return (
      <div>
        <div
          className={cx(styles['user-title'], {
            [styles['collapsed']]: this.state.collapsed
          })}
        >
          <div
            className={styles['user-title--name']}
            onClick={this.toggleCollapse}
          >
            <div
              className={cx(styles['user-title--name__collapse'], {
                [styles['look-down']]: this.state.collapsed
              })}
            >
              <img className={'fa fa-chevron-up'} />
            </div>
            {user.name}
          </div>
          <div className={styles['user-title--amount']}>
            Gesamt <div className={styles['sum']}>{this.state.totalFee}</div>
            <i className={cx('fas fa-euro-sign', styles['euro-sign'])} />
          </div>
        </div>
        <div
          className={cx(styles['user-fee'], {
            [styles['hidden']]: this.state.collapsed
          })}
        >
          {trainings &&
            trainings
              .filter(
                training =>
                  moment(training.date).format('YYYY-MM') === selectedMonth
              )
              .filter(
                training =>
                  training.assignedTrainer1.id === user._id ||
                  training.assignedTrainer2.id === user._id
              )
              .map((training, index) => (
                <div className={styles['fee-item']} key={index}>
                  <TrainingFee
                    training={training}
                    user={user}
                    saveContent={saveContent}
                    deleteAdditionalFee={deleteAdditionalFee}
                    totalFeeCalc={this.totalFeeCalc}
                    totalFee={this.state.totalFee}
                  />
                </div>
              ))}
        </div>
      </div>
    )
  }
}
