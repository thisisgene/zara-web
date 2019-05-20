import React, { Component } from 'react'

import { GithubPicker } from 'react-color'

import TextFieldGroup from '../TextFieldGroup'

import styles from './LabelItem.module.sass'

export default class LabelItem extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      color: '',
      errors: {}
    }
  }
  componentDidMount() {
    this.setState({
      title: this.props.label.title,
      color: this.props.label.color
    })
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

  onEditClick = () => {
    this.setState({ editLabel: true })
  }

  onSaveClick = () => {
    const { label } = this.props
    const saveContent = {
      id: label._id ? label._id : 'neu',
      title: this.state.title,
      color: this.state.color,
      category: 'label'
    }
    this.props.onSave(saveContent)
    this.setState({ editLabel: false })
  }

  render() {
    return (
      <div className={styles['label-item']}>
        {this.state.editLabel ? (
          <div>
            <TextFieldGroup
              // className={commonStyles['input']}
              style={{ background: this.state.color }}
              colorScheme="light"
              placeholder="Titel des Labels"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              // error={label.errors.title}
            />
            <GithubPicker onChange={this.onColorChange} />
            <button onClick={this.onSaveClick}>Speichern</button>
          </div>
        ) : (
          <div
            onClick={this.onEditClick}
            style={{ backgroundColor: this.state.color }}
          >
            {this.state.title}
          </div>
        )}
      </div>
    )
  }
}
