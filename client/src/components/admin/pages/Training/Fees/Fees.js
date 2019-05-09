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

import globalStyles from '../../../common/Bootstrap.module.css'
import commonStyles from '../../../common/Common.module.sass'
import styles from './Fees.module.sass'

class Fees extends Component {
  state = {
    selectedMonth: moment()
      .subtract(1, 'M')
      .format('YYYY-MM')
  }
  componentDidMount() {
    this.props.getAllUsers()
    this.props.getAllAndSort('trainings', 'date')
  }

  onMonthChange = e => {
    this.setState({ selectedMonth: e.target.value })
    console.log(e.target.value)
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

  saveContent = content => {
    this.props.saveContent(content)
  }

  render() {
    const { users } = this.props.auth
    const { trainings } = this.props.training
    return (
      <div className={styles['fees']}>
        <div>
          <MonthPicker
            date={this.state.selectedMonth}
            increaseMonth={this.increaseMonth}
            decreaseMonth={this.decreaseMonth}
          />
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
