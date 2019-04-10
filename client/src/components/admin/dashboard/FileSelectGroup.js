import React, { Component } from 'react'
import Select from 'react-select'

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
          // className="basic-multi-select"
          // classNamePrefix="select"
          onChange={onSelectChange.bind(this, lang)}
        />
      </div>
    )
  }
}
