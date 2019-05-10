import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllUsers } from '../../../../../actions/authActions'
import {
  getAllAndSort,
  saveContent,
  deleteAdditionalFee
} from '../../../../../actions/adminActions'

import moment from 'moment'

import FeeUserItem from './FeeUserItem'
import MonthPicker from '../../../common/MonthPicker/MonthPicker'

import cx from 'classnames'
import globalStyles from '../../../common/Bootstrap.module.css'
import commonStyles from '../../../common/Common.module.sass'
import styles from './Fees.module.sass'

class Fees extends Component {
  state = {
    selectedMonth: this.props.location.hash
      ? this.props.location.hash.slice(1)
      : moment()
          .subtract(1, 'M')
          .format('YYYY-MM'),
    collapseAll: false
  }
  componentDidMount() {
    this.props.getAllUsers()
    this.props.getAllAndSort('trainings', 'date')
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.hash != this.props.location.hash) {
      this.props.getAllAndSort('trainings', 'date')
      this.setState({
        selectedMonth: this.props.location.hash.slice(1)
      })
    }
  }
  onMonthChange = e => {
    this.setState({ selectedMonth: e.target.value })
  }

  decreaseMonth = () => {
    this.setState({
      selectedMonth: moment(this.state.selectedMonth)
        .subtract(1, 'M')
        .format('YYYY-MM')
    })
  }
  increaseMonth = () => {
    this.setState({
      selectedMonth: moment(this.state.selectedMonth)
        .add(1, 'M')
        .format('YYYY-MM')
    })
  }

  onCollapseAllClick = () => {
    this.setState({
      collapseAll: !this.state.collapseAll
    })
  }

  onPrintClick = () => {
    window.print()
  }

  saveContent = content => {
    this.props.saveContent(content)
  }

  render() {
    const { users } = this.props.auth
    const { trainings } = this.props.training
    return (
      <div className={styles['fees']}>
        <div className={styles['fees-buttons']}>
          <div
            className={cx(styles['fees-buttons--collapse-all'], {
              [styles['pressed']]: !this.state.collapseAll
            })}
          >
            <button
              className={cx(styles['fees-buttons--button'], {
                [styles['pressed']]: !this.state.collapseAll
              })}
              onClick={this.onCollapseAllClick}
            >
              {this.state.collapseAll ? 'Alle ausklappen' : 'Alle einklappen'}
            </button>
          </div>
          <div>
            <MonthPicker
              date={this.state.selectedMonth}
              increaseMonth={this.increaseMonth}
              decreaseMonth={this.decreaseMonth}
            />
          </div>
          <div
            className={cx(styles['fees-buttons--collapse-all'], {
              [styles['pressed']]: !this.state.collapseAll
            })}
          >
            <button
              onClick={this.onPrintClick}
              className={cx(styles['fees-buttons--button'])}
            >
              PDF Exportieren
            </button>
          </div>
        </div>
        <div className={styles['print-title']}>
          ZARA Training Honorare{' '}
          {moment(this.state.selectedMonth)
            .lang('de')
            .format('MMMM YYYY')}
        </div>
        <div className={styles['fees-content']}>
          {users &&
            trainings &&
            users
              .filter(user => user.securityLevel === 16)
              .map((user, index) => (
                <div key={index} className={styles['fees-content--item']}>
                  <FeeUserItem
                    trainings={trainings}
                    user={user}
                    saveContent={this.saveContent}
                    deleteAdditionalFee={this.props.deleteAdditionalFee}
                    selectedMonth={this.state.selectedMonth}
                    collapseAll={this.state.collapseAll}
                  />
                </div>
              ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  training: state.training
})

export default connect(
  mapStateToProps,
  { getAllUsers, getAllAndSort, saveContent, deleteAdditionalFee }
)(Fees)
