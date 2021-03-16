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
      lang,
      placeholder
    } = this.props
    let optionArray = []
    optionContent.map(option => {
      // console.log('lang option: ', option)
      optionArray.push({
        value: option.originalName,
        label: option.originalName,
        name: option.name,
        originalId: option._id,
        title: option[lang] && option[lang].title,
        secondTitle: option[lang] && option[lang].secondTitle,
        subtitle: option[lang] && option[lang].subtitle,
      })
    })
    console.log('optopme: ', optionArray)
    return (
      <div>
        <Select
          isMulti
          value={defaultValue}
          name={name}
          options={optionArray}
          className={styles['select']}
          placeholder={placeholder || 'Files wählen'}
          onChange={onSelectChange.bind(this, lang)}
        />
      </div>
    )
  }
}
