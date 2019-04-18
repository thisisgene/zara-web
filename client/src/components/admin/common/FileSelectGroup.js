import React, { Component } from 'react'
import Select from 'react-select'

import styles from './FileSelectGroup.module.sass'

export default class FileSelectGroup extends Component {
  render() {
    const {
      optionContent,
      defaultValue,
      name,
      onSelectChange,
      lang
    } = this.props
    let optionArray = []
    optionContent.map(option => {
      optionArray.push({
        value: option.originalName,
        label: option.originalName,
        name: option.name,
        originalId: option._id
      })
    })
    return (
      <div>
        <Select
          isMulti
          value={defaultValue}
          name={name}
          options={optionArray}
          className={styles['select']}
          // classNamePrefix="select"
          onChange={onSelectChange.bind(this, lang)}
        />
      </div>
    )
  }
}
