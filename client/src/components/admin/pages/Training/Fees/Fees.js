import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllUsers } from '../../../../../actions/authActions'
import {
  getAllAndSort,
  saveContent,
  deleteAdditionalFee
} from '../../../../../actions/adminActions'

import moment from 'moment'

import TrainingFee from './TrainingFee'
import TextFieldGroup from '../../../common/TextFieldGroup'
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
                  <h1>{user.name}</h1>

                  {trainings
                    .filter(
                      training =>
                        moment(training.date).format('YYYY-MM') ===
                        this.state.selectedMonth
                    )
                    .filter(
                      training =>
                        training.assignedTrainer1.id === user._id ||
                        training.assignedTrainer2.id === user._id
                    )
                    .map((training, index) => (
                      <div key={index}>
                        <TrainingFee
                          training={training}
                          user={user}
                          saveContent={this.saveContent}
                          deleteAdditionalFee={this.props.deleteAdditionalFee}
                        />
                      </div>
                    ))}
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
