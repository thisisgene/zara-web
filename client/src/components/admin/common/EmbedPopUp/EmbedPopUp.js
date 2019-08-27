import React, { Component } from 'react'

import RichTextEditor from 'react-rte'
import TextFieldGroup from '../TextFieldGroup'

import styles from './EmbedPopUp.module.sass'

export default class EmbedPopUp extends Component {
  state = {
    vId: '',
    vTitleDE: '',
    vTextDE: '',
    errors: []
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDescriptionChange = (lang, value) => {
    lang === 'de'
      ? this.setState({ descriptionDE: value })
      : this.setState({ descriptionEN: value })
  }

  render() {
    return (
      <div className={styles['embed-popup']}>
        <TextFieldGroup
          // className={commonStyles['input']}
          colorScheme="light"
          placeholder="Video ID"
          type="text"
          name="vId"
          value={this.state.vId}
          onChange={this.onChange}
          error={this.state.errors.vTitleDE}
        />
        <div className={styles['embed-popup--de']}>
          <TextFieldGroup
            // className={commonStyles['input']}
            colorScheme="light"
            placeholder="Video Titel deutsch"
            type="text"
            name="vTitleDE"
            value={this.state.vTitleDE}
            onChange={this.onChange}
            error={this.state.errors.vTitleDE}
          />
          <RichTextEditor
            // handleReturn={this.swapSoftNewLineBehavior}
            placeholder="Hauptinhalt deutsch"
            className={styles['html-editor']}
            // toolbarConfig={toolbarExtConfig}
            value={this.state.vTextDE}
            onChange={this.onDescriptionChange.bind(this, 'de')}
          />
        </div>
      </div>
    )
  }
}
