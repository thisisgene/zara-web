import React, { Component } from 'react'

import { GithubPicker } from 'react-color'

import TextFieldGroup from '../TextFieldGroup'

import styles from './LabelItem.module.sass'

export default class LabelItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.label.title || '',
      color: props.label.color || '',
      editLabel: props.editLabel || false,
      errors: {}
    }
  }
  componentDidMount() {}
  componentDidUpdate(prevProps) {
    if (prevProps.label !== this.props.label) {
      if (!this.props.label._id) {
        this.setState({
          title: '',
          color: '',
          editLabel: true
        })
      }
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
          <div className={styles['label-item--edit']}>
            <div
              className={styles['label-item--basic']}
              style={{ backgroundColor: this.state.color }}
            >
              <span
                className={styles['label-item--edit__fill']}
                style={{ backgroundColor: this.state.color }}
              />
              <div
                className={styles['label-item--edit__text']}
                style={{ '--color': this.state.color }}
              >
                <TextFieldGroup
                  // className={commonStyles['input']}
                  style={{ borderColor: this.state.color }}
                  colorScheme="light"
                  placeholder="Neues Label"
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  // error={label.errors.title}
                />
              </div>
            </div>
            <div className={styles['edit-group']}>
              <GithubPicker onChange={this.onColorChange} />
              <button
                className={styles['save-button']}
                onClick={this.onSaveClick}
              >
                Speichern
              </button>
            </div>
          </div>
        ) : (
          <div
            className={styles['label-item--basic']}
            onClick={this.onEditClick}
            style={{ backgroundColor: this.state.color }}
          >
            <span
              className={styles['label-item--basic__fill']}
              style={{ backgroundColor: this.state.color }}
            />
            <div
              className={styles['label-item--basic__text']}
              style={{ '--color': this.state.color }}
            >
              {this.state.title}
            </div>
          </div>
        )}
      </div>
    )
  }
}
