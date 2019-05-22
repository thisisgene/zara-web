import React, { Component } from 'react'
import { connect } from 'react-redux'

import Spinner from './spinner2.gif'

import cx from 'classnames'
import styles from './Loading.module.sass'

class Loading extends Component {
  state = {
    loading: false
  }
  render() {
    const { loading } = this.props.admin
    return (
      <div
        className={cx(styles['loading'], {
          [styles['visible']]: loading === true
        })}
      >
        <img src={Spinner} alt="" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  admin: state.admin
})

export default connect(
  mapStateToProps,
  {}
)(Loading)
