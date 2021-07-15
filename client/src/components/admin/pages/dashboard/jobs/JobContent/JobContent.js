import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import RichTextEditor from "react-rte-link-extended"
import moment from "moment"

import { jobTags } from "../jobs_data"
import { toolbarConfig, toolbarImgConfig } from "./rte_toolbar_config"

import TextFieldGroup from "../../../../common/TextFieldGroup"
import ContentImageList from "../../ContentImageList"

import { confirmAlert } from "react-confirm-alert"

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle,
} from "../../../../../../actions/adminActions"
import { getImagesByCategory } from "../../../../../../actions/imageActions"

import cx from "classnames"
import "../../news/NewsContent/rte.sass"
import "react-confirm-alert/src/react-confirm-alert.css" // Import css
import commonStyles from "../../../../common/Common.module.sass"
import styles from "./JobContent.module.sass"

class JobContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: false,
      blankItem: true,
      jobId: props.match.params.jobId,
      handle: "",
      date: moment(new Date()).format("YYYY-MM-DD"),
      category: "jobs",
      tag: "job",
      titleDE: "",
      titleEN: "",
      descriptionDE: RichTextEditor.createEmptyValue(),
      descriptionEN: RichTextEditor.createEmptyValue(),
      shortDescriptionDE: RichTextEditor.createEmptyValue(),
      shortDescriptionEN: RichTextEditor.createEmptyValue(),

      timeDE: "",
      contactDE: "",
      timeEN: "",
      contactEN: "",
      descTag1KeyDE: "",
      descTag1ValueDE: "",
      descTag2KeyDE: "",
      descTag2ValueDE: "",
      descTag3KeyDE: "",
      descTag3ValueDE: "",
      descTag4KeyDE: "",
      descTag4ValueDE: "",
      descTag1KeyEN: "",
      descTag1ValueEN: "",
      descTag2KeyEN: "",
      descTag2ValueEN: "",
      descTag3KeyEN: "",
      descTag3ValueEN: "",
      descTag4KeyEN: "",
      descTag4ValueEN: "",

      titleImage: "",
      imageId: "",
      imageCategory: "",
      imageSide: "",
      imageAlign: "",
      bigImage: false,
      imageListOpen: false,

      errors: {},
    }
  }

  componentDidMount() {
    this.props.match.params.jobId !== "neu" &&
      this.props.getById(this.props.match.params.jobId, "jobs")
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors })
      }
      if (this.props.jobs.job) {
        if (prevProps.match.params.jobId === "neu") {
          this.setState({
            jobId: this.props.jobs.job._id,
          })
          this.props.getAll("jobs")
          this.props.history.push(
            `/admin/dashboard/jobs/${this.props.jobs.job._id}`
          )
        }
        if (prevProps.jobs != this.props.jobs) {
          const item = this.props.jobs.job
          this.props.getImagesByCategory(item.tag || "jobs")
          this.setState({
            blankItem: false,
            isOnline: item.isOnline,
            jobId: item._id,
            handle: item.handle,
            date: moment(item.date).format("YYYY-MM-DD"),
            tag: item.tag && item.tag,
            titleDE: item.de && item.de.title && item.de.title,
            titleEN: item.en ? item.en.title && item.en.title : "",
            descriptionDE:
              item.de &&
              item.de.description &&
              RichTextEditor.createValueFromString(item.de.description, "html"),
            descriptionEN: item.en
              ? item.en.description &&
                RichTextEditor.createValueFromString(
                  item.en.description,
                  "html"
                )
              : RichTextEditor.createEmptyValue(),
            shortDescriptionDE:
              item.de &&
              item.de.shortDescription &&
              RichTextEditor.createValueFromString(
                item.de.shortDescription,
                "html"
              ),
            shortDescriptionEN: item.en
              ? item.en.shortDescription &&
                RichTextEditor.createValueFromString(
                  item.en.shortDescription,
                  "html"
                )
              : RichTextEditor.createEmptyValue(),

            timeDE: item.de.time,
            contactDE: item.de.contact,
            timeEN: item.en.time,
            contactEN: item.en.contact,

            descTag1KeyDE: item.de.descTag1Key,
            descTag1ValueDE: item.de.descTag1Value,
            descTag2KeyDE: item.de.descTag2Key,
            descTag2ValueDE: item.de.descTag2Value,
            descTag3KeyDE: item.de.descTag3Key,
            descTag3ValueDE: item.de.descTag3Value,
            descTag4KeyDE: item.de.descTag4Key,
            descTag4ValueDE: item.de.descTag4Value,
            descTag1KeyEN: item.en.descTag1Key,
            descTag1ValueEN: item.en.descTag1Value,
            descTag2KeyEN: item.en.descTag2Key,
            descTag2ValueEN: item.en.descTag2Value,
            descTag3KeyEN: item.en.descTag3Key,
            descTag3ValueEN: item.en.descTag3Value,
            descTag4KeyEN: item.en.descTag4Key,
            descTag4ValueEN: item.en.descTag4Value,

            titleImage: item.titleImage && item.titleImage.originalName,
            imageId: item.titleImage && item.titleImage.imageId,
            imageCategory: item.titleImage && item.titleImage.category,
            imageSide: item.imageSide,
            imageAlign: item.imageAlign,
            size: item.size,
          })
        }
      }
      if (prevProps.match.params.jobId !== this.props.match.params.jobId) {
        if (this.props.match.params.jobId === "neu") {
          console.log("reset")
          this.props.clearSingle("jobs")
          this.setState({
            blankItem: true,
            isOnline: false,
            jobId: this.props.match.params.jobId,
            handle: "",
            date: moment(new Date()).format("YYYY-MM-DD"),
            category: "jobs",
            tag: "job",
            titleDE: "",
            titleEN: "",
            descriptionDE: RichTextEditor.createEmptyValue(),
            descriptionEN: RichTextEditor.createEmptyValue(),
            shortDescriptionDE: RichTextEditor.createEmptyValue(),
            shortDescriptionEN: RichTextEditor.createEmptyValue(),

            timeDE: "",
            contactDE: "",
            timeEN: "",
            contactEN: "",
            descTag1KeyDE: "",
            descTag1ValueDE: "",
            descTag2KeyDE: "",
            descTag2ValueDE: "",
            descTag3KeyDE: "",
            descTag3ValueDE: "",
            descTag4KeyDE: "",
            descTag4ValueDE: "",
            descTag1KeyEN: "",
            descTag1ValueEN: "",
            descTag2KeyEN: "",
            descTag2ValueEN: "",
            descTag3KeyEN: "",
            descTag3ValueEN: "",
            descTag4KeyEN: "",
            descTag4ValueEN: "",

            titleImage: "",
            imageId: "",
            imageCategory: "",
            imageSide: "",
            imageAlign: "",
            size: "",
          })
        } else {
          this.props.getById(this.props.match.params.jobId, "jobs")
        }
      }
    }
  }

  toggleOnline = () => {
    this.props.toggleOnline(this.state.jobId, "jobs", !this.state.isOnline)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onShortDescriptionChange = (lang, value) => {
    lang === "de"
      ? this.setState({ shortDescriptionDE: value })
      : this.setState({ shortDescriptionEN: value })
  }
  onDescriptionChange = (lang, value) => {
    lang === "de"
      ? this.setState({ descriptionDE: value })
      : this.setState({ descriptionEN: value })
  }

  swapSoftNewLineBehavior(event) {
    let isSoftKeyPressed = (e) => {
      return (
        e.which === 13 &&
        (e.getModifierState("Shift") ||
          e.getModifierState("Alt") ||
          e.getModifierState("Control"))
      )
    }

    if (!isSoftKeyPressed(event)) {
      event.getModifierState = (_) => {
        return true
      }
    } else {
      event.getModifierState = (_) => {
        return false
      }
    }
  }

  onCheckClick = (e) => {
    this.setState({ [e.target.name]: e.target.checked })
  }
  onTagSelectChange = (e) => {
    this.setState({ tag: e.target.value }, () => {
      if (this.state.jobId !== "neu") {
        this.props.getImagesByCategory(this.state.tag)
      }
    })
  }

  onImageOpen = () => {
    this.setState({ imageListOpen: !this.state.imageListOpen })
  }
  updateTitleImage = (originalName, id, category) => {
    this.setState({
      titleImage: originalName,
      imageId: id,
      imageCategory: category,
      imageListOpen: false,
    })
  }
  closeImageList = () => {
    this.setState({
      imageListOpen: false,
    })
  }
  onImageSideChange = (e) => {
    this.setState({
      imageSide: e.target.checked ? "left" : "right",
    })
  }

  onImageAlignChange = (e) => {
    this.setState({
      imageAlign: e.target.checked ? "center" : "",
    })
  }
  onImageBigChange = (e) => {
    this.setState({
      size: e.target.checked ? "big-image" : "",
    })
  }

  deleteJob = () => {
    this.props.deleteById(this.state.jobId, "jobs")
    this.props.history.push("/admin/dashboard/jobs/neu")
  }

  confirmDelete = (callback) => {
    confirmAlert({
      title: "Beitrag löschen",
      message: "Wollen Sie diesen Beitrag wirklich löschen?",
      buttons: [
        {
          label: "Löschen",
          onClick: () => this.deleteJob(),
        },
        {
          label: "Abbrechen",
        },
      ],
    })
  }

  saveContent = () => {
    const shortDescDE = this.state.shortDescriptionDE
    const shortDescEN = this.state.shortDescriptionEN
    const descDE = this.state.descriptionDE
    const descEN = this.state.descriptionEN

    let descriptionTags
    let timeDE = ""
    let contactDE = ""
    let timeEN = ""
    let contactEN = ""

    jobTags.map((tag) => {
      if (tag.name === this.state.tag)
        descriptionTags = tag.descriptionTags ? tag.descriptionTags : null
    })
    descriptionTags &&
      descriptionTags.map((tag) => {
        if (tag.name === "time") {
          timeDE = this.state.timeDE
          timeEN = this.state.timeEN
        }
        if (tag.name === "contact") {
          contactDE = this.state.contactDE
          contactEN = this.state.contactEN
        }
      })

    const saveData = {
      category: "jobs",
      date: this.state.date,
      tag: this.state.tag,
      id: this.state.jobId,
      titleDE: this.state.titleDE,
      titleEN: this.state.titleEN,
      shortDescriptionDE: shortDescDE.toString("html"),
      shortDescriptionEN: shortDescEN.toString("html"),
      descriptionDE: descDE.toString("html"),
      descriptionEN: descEN.toString("html"),

      timeDE: timeDE,
      contactDE: contactDE,
      timeEN: timeEN,
      contactEN: contactEN,
      descTag1KeyDE: this.state.descTag1KeyDE,
      descTag1ValueDE: this.state.descTag1ValueDE,
      descTag2KeyDE: this.state.descTag2KeyDE,
      descTag2ValueDE: this.state.descTag2ValueDE,
      descTag3KeyDE: this.state.descTag3KeyDE,
      descTag3ValueDE: this.state.descTag3ValueDE,
      descTag4KeyDE: this.state.descTag4KeyDE,
      descTag4ValueDE: this.state.descTag4ValueDE,
      descTag1KeyEN: this.state.descTag1KeyEN,
      descTag1ValueEN: this.state.descTag1ValueEN,
      descTag2KeyEN: this.state.descTag2KeyEN,
      descTag2ValueEN: this.state.descTag2ValueEN,
      descTag3KeyEN: this.state.descTag3KeyEN,
      descTag3ValueEN: this.state.descTag3ValueEN,
      descTag4KeyEN: this.state.descTag4KeyEN,
      descTag4ValueEN: this.state.descTag4ValueEN,

      moreLink: this.state.tag === "job",

      titleImage: this.state.titleImage,
      imageId: this.state.imageId,
      imageCategory: this.state.imageCategory,
      imageSide: this.state.imageSide,
      imageAlign: this.state.imageAlign,
      size: this.state.size,
    }
    this.props.saveContent(saveData)
  }

  render() {
    return (
      <div className={styles["job-wrapper"]}>
        <div
          className={cx(styles["job-content-container"], {
            [styles["blank-item"]]: this.state.blankItem,
          })}
        >
          <div className={styles["job-content"]}>
            <div className={styles["job-content--main"]}>
              <div className={styles["job-content--main__category"]}>
                <select
                  name="catSelect"
                  value={this.state.tag}
                  onChange={this.onTagSelectChange}
                >
                  {jobTags &&
                    jobTags.map((tag) => (
                      <option value={tag.name}>{tag.de.title}</option>
                    ))}
                </select>
              </div>
              <div className={styles["job-content--text"]}>
                <div className={styles["job-content--text__title"]}>
                  <TextFieldGroup
                    className={commonStyles["input"]}
                    colorScheme="light"
                    placeholder="Titel deutsch"
                    type="text"
                    name="titleDE"
                    value={this.state.titleDE}
                    onChange={this.onChange}
                    error={this.state.errors.titleDE}
                  />
                </div>

                <div className={styles["job-content--text__title"]}>
                  <TextFieldGroup
                    className={commonStyles["input"]}
                    colorScheme="light"
                    placeholder="Titel englisch"
                    type="text"
                    name="titleEN"
                    value={this.state.titleEN}
                    onChange={this.onChange}
                    error={this.state.errors.titleEN}
                  />
                </div>
              </div>
              {this.props.media &&
                this.props.media.images &&
                this.state.jobId !== "neu" && (
                  <Fragment>
                    {jobTags &&
                      jobTags.map((tag) => (
                        <Fragment>
                          {tag.name === this.state.tag &&
                            tag.hasShortDescription && (
                              <div className={styles["job-content--text"]}>
                                <div
                                  className={styles["job-content--text__title"]}
                                >
                                  <RichTextEditor
                                    placeholder="Kurzbeschreibung deutsch"
                                    className={styles["html-editor"]}
                                    toolbarConfig={toolbarConfig}
                                    value={this.state.shortDescriptionDE}
                                    onChange={this.onShortDescriptionChange.bind(
                                      this,
                                      "de"
                                    )}
                                  />
                                </div>

                                <div
                                  className={styles["job-content--text__title"]}
                                >
                                  <RichTextEditor
                                    placeholder="Kurzbeschreibung englisch"
                                    className={styles["html-editor"]}
                                    toolbarConfig={toolbarConfig}
                                    value={this.state.shortDescriptionEN}
                                    onChange={this.onShortDescriptionChange.bind(
                                      this,
                                      "en"
                                    )}
                                  />
                                </div>
                              </div>
                            )}
                          {tag.name === this.state.tag && tag.hasDescription && (
                            <div className={styles["job-content--text"]}>
                              <div
                                className={styles["job-content--text__title"]}
                              >
                                <RichTextEditor
                                  handleReturn={this.swapSoftNewLineBehavior}
                                  placeholder="Hauptbeschreibung deutsch"
                                  className={styles["html-editor"]}
                                  toolbarConfig={toolbarImgConfig}
                                  value={this.state.descriptionDE}
                                  onChange={this.onDescriptionChange.bind(
                                    this,
                                    "de"
                                  )}
                                />
                              </div>

                              <div
                                className={styles["job-content--text__title"]}
                              >
                                <RichTextEditor
                                  placeholder="Hauptinhalt englisch"
                                  className={styles["html-editor"]}
                                  toolbarConfig={toolbarImgConfig}
                                  value={this.state.descriptionEN}
                                  onChange={this.onDescriptionChange.bind(
                                    this,
                                    "en"
                                  )}
                                />
                              </div>
                            </div>
                          )}
                          {tag.name === this.state.tag && tag.descriptionTags && (
                            <div
                              className={cx(
                                styles["job-content--descriptionTags"],
                                styles["job-content--text"]
                              )}
                            >
                              <div>
                                {tag.descriptionTags.map((descTag) => (
                                  <div
                                    className={
                                      styles[
                                        "job-content--descriptionTags__tag"
                                      ]
                                    }
                                  >
                                    <span>{descTag["de"].title}</span>
                                    <TextFieldGroup
                                      className={commonStyles["input"]}
                                      colorScheme="light"
                                      placeholder={descTag["de"].title}
                                      type="text"
                                      name={`${descTag.name}DE`}
                                      value={this.state[`${descTag.name}DE`]}
                                      onChange={this.onChange}
                                    />
                                  </div>
                                ))}
                              </div>
                              <div>
                                {tag.descriptionTags.map((descTag) => (
                                  <div
                                    className={
                                      styles[
                                        "job-content--descriptionTags__tag"
                                      ]
                                    }
                                  >
                                    <span>{descTag["en"].title}</span>
                                    <TextFieldGroup
                                      className={commonStyles["input"]}
                                      colorScheme="light"
                                      placeholder={descTag["en"].title}
                                      type="text"
                                      name={`${descTag.name}EN`}
                                      value={this.state[`${descTag.name}EN`]}
                                      onChange={this.onChange}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </Fragment>
                      ))}
                  </Fragment>
                )}
            </div>
            {this.props.jobs.job && (
              <div className={styles["job-content--sidebar"]}>
                <div
                  className={styles["job-content--sidebar__state-indicator"]}
                >
                  <div
                    className={cx(
                      styles["job-content--sidebar__state-indicator--sphere"],
                      {
                        [styles["online"]]: this.state.isOnline,
                      }
                    )}
                  />
                  <div
                    className={
                      styles["job-content--sidebar__state-indicator--text"]
                    }
                  >
                    {this.state.isOnline ? "Online" : "Offline"}
                  </div>
                </div>
                <div
                  className={styles["job-content--sidebar__section--publish"]}
                >
                  <button
                    className={cx(
                      commonStyles["button"],
                      {
                        [commonStyles["button--update"]]: !this.state.isOnline,
                      },
                      {
                        [commonStyles["button--offline"]]: this.state.isOnline,
                      },
                      commonStyles["button--fullwidth"]
                    )}
                    onClick={this.toggleOnline}
                  >
                    {this.state.isOnline ? "Offline nehmen" : "Online stellen"}
                  </button>
                </div>
                <div className={styles["job-content--sidebar--buttons"]}>
                  <button
                    className={cx(
                      commonStyles["button"],
                      commonStyles["button--save"],
                      styles["button--save"]
                    )}
                    onClick={this.saveContent}
                  >
                    Speichern
                  </button>
                </div>
                <hr />
                <div
                  className={styles["title-image"]}
                  onClick={this.onImageOpen}
                >
                  <div className={cx(styles["title-image--avatar"])}>
                    {this.state.titleImage ? (
                      <img
                        src={`/assets/media/${this.state.imageCategory}/${this.state.titleImage}`}
                        alt=""
                      />
                    ) : (
                      <div>
                        Titelbild
                        <br />
                        zum auswählen klicken
                      </div>
                    )}
                  </div>
                  {this.state.imageListOpen && (
                    <ContentImageList
                      updateTitleImage={this.updateTitleImage}
                      closeImageList={this.closeImageList}
                      newsImageId={this.state.imageId}
                      category={"jobs"}
                    />
                  )}
                </div>
                <div className={styles["job-content--sidebar__image-checkbox"]}>
                  <div
                    className={
                      styles["job-content--sidebar__image-checkbox--group"]
                    }
                  >
                    <div>
                      <input
                        id="image-side"
                        type="checkbox"
                        onClick={this.onImageSideChange}
                        checked={this.state.imageSide === "left"}
                        name="imageSide"
                      />
                      <label htmlFor="image-side">Bild Links</label>
                    </div>
                  </div>
                  <div
                    className={
                      styles["job-content--sidebar__image-checkbox--group"]
                    }
                  >
                    <input
                      id="image-big"
                      type="checkbox"
                      onClick={this.onImageBigChange}
                      checked={this.state.size === "big-image"}
                      name="imageBig"
                    />
                    <label htmlFor="image-big">Großes Bild</label>
                  </div>
                  <div
                    className={
                      styles["job-content--sidebar__image-checkbox--group"]
                    }
                  >
                    <input
                      id="image-align"
                      type="checkbox"
                      onClick={this.onImageAlignChange}
                      checked={this.state.imageAlign === "center"}
                      disabled={this.state.size === "big-image"}
                      name="imageAlign"
                    />
                    <label htmlFor="image-align">Text vertikal mittig</label>
                  </div>
                </div>
                <hr />
                <div className={styles["job-content--sidebar--buttons"]}>
                  {this.props.jobs.job && (
                    <button
                      className={cx(
                        commonStyles["button"],
                        commonStyles["button--delete"]
                      )}
                      onClick={this.confirmDelete.bind(this, this.deleteNews)}
                    >
                      Beitrag Löschen
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          {this.props.match.params.jobId === "neu" && (
            <button
              className={cx(
                commonStyles["button"],
                commonStyles["button--save"],
                styles["button--save"]
              )}
              onClick={this.saveContent}
            >
              Speichern
            </button>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  media: state.media,
  errors: state.errors,
})

export default connect(mapStateToProps, {
  saveContent,
  getById,
  toggleOnline,
  deleteById,
  clearSingle,
  getAll,
  getImagesByCategory,
})(JobContent)
