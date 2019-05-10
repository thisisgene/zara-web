import React, { Component } from 'react'

import moment from 'moment'

import TrainingFee from './TrainingFee'

import cx from 'classnames'
import styles from './Fees.module.sass'

export default class FeeUserItem extends Component {
  state = {
    totalFee: 0,
    subTotals: [],
    collapsed: false,
    selectedMonth: this.props.selectedMonth
  }

  componentDidUpdate(prevProps) {
    if (prevProps.training != this.props.training) {
      this.setState({ subTotals: [], totalFee: 0 })
    }
    if (prevProps.selectedMonth != this.props.selectedMonth) {
      this.setState({
        selectedMonth: this.props.selectedMonth,
        totalFee: 0,
        subTotals: []
      })
    }
    if (prevProps.collapseAll !== this.props.collapseAll) {
      this.setState({
        collapsed: this.props.collapseAll
      })
    }
  }

  toggleCollapse = () => {
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
      <div
        className={cx(
          styles['fee-container--item'],
          {
            [styles['collapsed']]: this.state.collapsed
          },
          {
            [styles['removed']]: this.state.totalFee == 0
          }
        )}
      >
        <div
          className={cx(styles['user-title'], {
            [styles['collapsed']]: this.state.collapsed
          })}
          onClick={this.toggleCollapse}
        >
          <div className={styles['user-title--name']}>
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
            Gesamt{' '}
            <div step="0.01" className={styles['sum']}>
              {parseFloat(this.state.totalFee).toFixed(2)}
            </div>
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
                <div>
                  {training ? (
                    <div className={styles['fee-item']} key={index}>
                      <TrainingFee
                        training={training}
                        user={user}
                        saveContent={saveContent}
                        deleteAdditionalFee={deleteAdditionalFee}
                        totalFeeCalc={this.totalFeeCalc}
                        totalFee={this.state.totalFee}
                        selectedMonth={this.state.selectedMonth}
                      />
                    </div>
                  ) : (
                    <div>Keine Einträge</div>
                  )}
                </div>
              ))}
          <div className={styles['user-footer']}>
            <div className={styles['user-footer--name']} />
            <div className={styles['user-footer--amount']}>
              <div step="0.01" className={styles['sum']}>
                {parseFloat(this.state.totalFee).toFixed(2)}
              </div>
              <i className={cx('fas fa-euro-sign', styles['euro-sign'])} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
