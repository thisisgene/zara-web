import React, { Component } from 'react'

import moment from 'moment'

import TrainingFee from './TrainingFee'

import cx from 'classnames'
import styles from './Fees.module.sass'

export default class FeeUserItem extends Component {
  state = {
    totalFee: 0,
    collapsed: false
  }

  toggleCollapse = () => {
    console.log(this.state.collapsed)
    this.setState({
      collapsed: !this.state.collapsed
    })
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
        <div className={styles['user-title']}>
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
          <div className={styles['user-title--amount']}>Total: 124 Euro</div>
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
                  />
                </div>
              ))}
        </div>
      </div>
    )
  }
}
