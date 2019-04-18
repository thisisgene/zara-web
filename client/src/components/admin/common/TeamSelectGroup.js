import React, { Component } from 'react'
import Select from 'react-select'

import styles from './FileSelectGroup.module.sass'

export default class TeamSelectGroup extends Component {
  render() {
    const {
      optionContent,
      defaultValue,
      name,
      onSelectChange,
      lang,
      placeholder
    } = this.props
    let optionArray = []
    optionContent.map(option => {
      optionArray.push({
        value: option[lang].title,
        label: option[lang].title,
        // name: option[lang].title,
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
          placeholder={placeholder || 'Team wählen'}
          onChange={onSelectChange.bind(this, lang)}
        />
      </div>
    )
  }
}
