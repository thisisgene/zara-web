import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getAll,
  saveContent,
  deleteById
} from '../../../../../actions/adminActions'

import LabelItem from '../../../common/LabelItem/LabelItem'

import styles from './Labels.module.sass'

class Labels extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      color: '',
      errors: {}
    }
  }
  componentDidMount() {
    this.props.getAll('label')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.label !== this.props.label) {
      this.setState({
        title: '',
        color: '',
        errors: ''
      })
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onColorChange = color => {
    console.log(color.hex)
    this.setState({
      color: color.hex
    })
  }

  onDeleteClick = id => {
    console.log(id)
    this.props.deleteById(id, 'label')
  }

  onSave = saveContent => {
    console.log(saveContent)
    this.props.saveContent(saveContent)
  }
  render() {
    const { labels } = this.props.label
    return (
      <div className={styles['labels']}>
        <div className={styles['label-container']}>
          {labels &&
            labels.map((label, index) => (
              <div className={styles['label-wrapper']} key={index}>
                <LabelItem label={label} onSave={this.onSave} />
                <button
                  className={styles['button-delete']}
                  onClick={this.onDeleteClick.bind(this, label._id)}
                >
                  <i className={'fas fa-minus-circle'} />
                </button>
              </div>
            ))}
        </div>
        <div className={styles['label-blank']}>
          <LabelItem
            label={{ title: '', color: '' }}
            onSave={this.onSave}
            editLabel={true}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  label: state.label
})

export default connect(
  mapStateToProps,
  { getAll, saveContent, deleteById }
)(Labels)
