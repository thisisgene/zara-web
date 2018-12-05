import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllProjects, getProjectById } from '../../actions/projectActions'

import Header from './layout/Header'
// import Landing from './dashboard/Landing'
import MainContent from './layout/MainContent'

import styles from './User.module.sass'

class User extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.user}>
        <Header />

        <MainContent />
      </div>
    )
  }
}

User.propTypes = {
  getAllProjects: PropTypes.func.isRequired,
  getProjectById: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  project: state.project,
  hasBackgroundImage: state.hasBackgroundImage
})

export default withRouter(
  connect(
    mapStateToProps,
    { getAllProjects, getProjectById }
  )(User)
)
