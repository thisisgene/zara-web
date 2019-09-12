import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextFieldGroup from '../TextFieldGroup'
import RichTextEditor from 'react-rte'

import { toolbarImgConfig } from '../../pages/dashboard/news/NewsContent/newsContentData'

import { saveContent } from '../../../../actions/adminActions'

import styles from './EmbedPopUp.module.sass'

class NewVideo extends Component {
  state = {
    vId: '',
    vTitleDE: '',
    vTextDE: RichTextEditor.createEmptyValue(),
    vTitleEN: '',
    vTextEN: RichTextEditor.createEmptyValue(),
    errors: []
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDescriptionChange = (lang, value) => {
    console.log(value)
    lang === 'de'
      ? this.setState({ vTextDE: value })
      : this.setState({ vTextEN: value })
  }

  addVideo = () => {
    console.log(this.state.vTitleDE)
    const saveData = {
      category: 'news-video',
      id: this.props.newsId,
      videoObj: {
        vId: this.state.vId,
        de: {
          title: this.state.vTitleDE,
          text: this.state.vTextDE.toString('html')
        },
        en: {
          title: this.state.vTitleEN,
          text: this.state.vTextEN.toString('html')
        }
      }
    }
    this.props.saveContent(saveData)
    this.setState({
      vId: '',
      vTitleDE: '',
      vTextDE: RichTextEditor.createEmptyValue(),
      vTitleEN: '',
      vTextEN: RichTextEditor.createEmptyValue(),
      errors: []
    })
  }

  render() {
    return (
      <div className={styles['create-video']}>
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
        <div className={styles['create-video--description']}>
          <div className={styles['create-video--description__content']}>
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
              toolbarConfig={toolbarImgConfig}
              placeholder="Beschreibung deutsch"
              className={styles['html-editor']}
              value={this.state.vTextDE}
              onChange={this.onDescriptionChange.bind(this, 'de')}
            />
          </div>
          <div className={styles['create-video--description__content']}>
            <TextFieldGroup
              // className={commonStyles['input']}
              colorScheme="light"
              placeholder="Video Titel englisch"
              type="text"
              name="vTitleEN"
              value={this.state.vTitleEN}
              onChange={this.onChange}
              error={this.state.errors.vTitleEN}
            />
            <RichTextEditor
              toolbarConfig={toolbarImgConfig}
              placeholder="Beschreibung englisch"
              className={styles['html-editor']}
              value={this.state.vTextEN}
              onChange={this.onDescriptionChange.bind(this, 'en')}
            />
          </div>
        </div>
        <button onClick={this.addVideo}>Hinzufügen</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.news
})

export default connect(
  mapStateToProps,
  { saveContent }
)(NewVideo)
