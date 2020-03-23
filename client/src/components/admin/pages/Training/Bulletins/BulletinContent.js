import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from 'react-calendar';

import Select from 'react-select';

import TextFieldGroup from '../../../common/TextFieldGroup';
import TextareaFieldGroup from '../../../common/TextareaFieldGroup';
import { confirmAlert } from 'react-confirm-alert';

import {
  saveContent,
  getAll,
  getById,
  toggleOnline,
  deleteById,
  clearSingle
} from '../../../../../actions/adminActions';
import { getImagesByCategory } from '../../../../../actions/imageActions';
import { getAllUsers } from '../../../../../actions/authActions';

import cx from 'classnames';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import globalStyles from '../../../common/Bootstrap.module.css';
import commonStyles from '../../../common/Common.module.sass';
import styles from './BulletinContent.module.sass';

class BulletinContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
      blankItem: true,
      bulletinId: props.match.params.bulletinId,
      handle: '',
      category: 'bullletins',
      tag: 'bullletins',
      title: '',
      date: new Date(),
      timeFrom: '11:00',
      timeUntil: '17:00',
      location: '',
      address1: '',
      label: {},
      content: '',
      errors: {},
      imageListOpen: false
    };
  }

  componentDidMount() {
    this.props.match.params.bulletinId !== 'neu' &&
      this.props.getById(this.props.match.params.bulletinId, 'bulletins');
    this.props.getAllUsers();
    this.props.getAll('label');
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors });
      }
      if (this.props.training.bulletin) {
        if (prevProps.match.params.bulletinId === 'neu') {
          this.setState({
            bulletinId: this.props.training.bulletin._id
          });
          this.props.getAll('bulletins');
          this.props.history.push(
            `/admin/training/bulletins/${this.props.training.bulletin._id}`
          );
        }
        if (prevProps.training != this.props.training) {
          const item = this.props.training.bulletin;
          this.props.getImagesByCategory(item.tag);
          this.setState({
            blankItem: false,
            isOnline: item.isOnline,
            bulletinId: item._id,
            handle: item.handle,
            tag: item.tag && item.tag,
            title: item.title,
            date: item.date,
            timeFrom: item.timeFrom,
            timeUntil: item.timeUntil,
            location: item.location && item.location.title,
            address1: item.location && item.location.address1,
            label: item.label,
            content: item.content
          });
        }
      }
      if (
        prevProps.match.params.bulletinId !== this.props.match.params.bulletinId
      ) {
        if (this.props.match.params.bulletinId === 'neu') {
          // RESET!
          this.props.clearSingle('bulletins');
          this.setState({
            isOnline: false,
            blankItem: true,
            bulletinId: this.props.match.params.bulletinId,
            handle: '',
            category: 'bulletins',
            tag: 'bulletins',
            title: '',
            date: new Date(),
            timeFrom: '11:00',
            timeUntil: '17:00',
            location: '',
            address1: '',
            label: {},
            content: '',
            errors: {},
            imageListOpen: false
          });
        } else {
          this.props.getById(this.props.match.params.bulletinId, 'bulletins');
        }
      }
    }
  }

  toggleOnline = () => {
    this.props.toggleOnline(
      this.state.bulletinId,
      'bulletins',
      !this.state.isOnline
    );
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onTagSelectChange = e => {
    this.setState({ tag: e.target.value }, () => {
      if (this.state.bulletinId !== 'neu') {
        this.props.getImagesByCategory(this.state.tag);
      }
    });
  };

  onLabelSelectChange = selected => {
    console.log(selected);
    this.setState({ label: selected }, () => {
      console.log('LABEL: ', this.state.label);
    });
  };

  onAssignChange = (state, id, name) => {
    this.setState({ [state]: { id: id, name: name } });
  };

  onSelectChange = (lang, selected) => {
    console.log(lang, selected);

    this.setState({ selectedFiles: selected });
  };
  onDateChange = date => {
    console.log(date);
    this.setState({ date });
  };

  onCheckChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  deleteBulletin = () => {
    this.props.deleteById(this.state.bulletinId, 'bulletins');
    this.props.history.push('/admin/training/bulletins/neu');
  };

  confirmDelete = callback => {
    confirmAlert({
      title: 'Eintrag löschen',
      message: 'Wollen Sie diesen Eintrag wirklich löschen?',
      buttons: [
        {
          label: 'Löschen',
          onClick: () => this.deleteBulletin()
        },
        {
          label: 'Abbrechen'
        }
      ]
    });
  };

  saveContent = () => {
    const saveData = {
      category: 'bulletins',
      tag: this.state.tag,
      id: this.state.bulletinId,
      title: this.state.title,
      date: this.state.date,
      timeFrom: this.state.timeFrom,
      timeUntil: this.state.timeUntil,
      location: this.state.location,
      address1: this.state.address1,
      label: this.state.label,
      content: this.state.content
    };
    this.props.saveContent(saveData);
  };

  render() {
    const { users } = this.props.auth;
    const emptyLabel = {
      label: '',
      value: ''
    };
    let labelList;
    if (this.props.label && this.props.label.labels) {
      labelList = this.props.label.labels.filter(label => !label.isDeleted);
      labelList.unshift(emptyLabel);
    }
    return (
      <div className={styles['bulletins-wrapper']}>
        <div
          className={cx(styles['bulletins-content-container'], {
            [styles['blank-item']]: this.state.blankItem
          })}
        >
          <div className={styles['bulletins-content']}>
            <div className={styles['bulletins-content--main']}>
              <div className={styles['bulletins-content--text']}>
                <div className={styles['bulletins-content--text__title']}>
                  <TextFieldGroup
                    className={commonStyles['input']}
                    colorScheme="light"
                    placeholder="Titel der Ausschreibung"
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    error={this.state.errors.title}
                  />
                </div>
                <div className={styles['bulletins-content--text__content']}>
                  <div
                    className={cx(
                      styles['bulletins-content--text__content--left'],
                      styles['content-box']
                    )}
                  >
                    <div
                      className={
                        styles['bulletins-content--text__content--left__labels']
                      }
                    >
                      {this.props.label && this.props.label.labels && (
                        <Select
                          // isMulti
                          value={this.state.label}
                          name={'label'}
                          options={labelList}
                          className={styles['label-select']}
                          placeholder={'Label auswählen'}
                          onChange={this.onLabelSelectChange}
                        />
                      )}
                    </div>
                    <div
                      className={
                        styles[
                          'bulletins-content--text__content--left__location'
                        ]
                      }
                    >
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="Ort"
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.onChange}
                        error={this.state.errors.location}
                      />
                      <div
                        className={
                          styles[
                            'bulletins-content--text__content--left__location--time'
                          ]
                        }
                      >
                        <span>
                          {/* <i className="fas fa-clock" /> */}
                          Von:
                        </span>
                        <input
                          type="time"
                          id="timeFrom"
                          onChange={this.onChange}
                          value={this.state.timeFrom}
                          name="timeFrom"
                        />
                        <span>Bis:</span>
                        <input
                          type="time"
                          id="timeUntil"
                          onChange={this.onChange}
                          value={this.state.timeUntil}
                          name="timeUntil"
                        />
                      </div>
                    </div>
                    <div>
                      <TextFieldGroup
                        className={commonStyles['input']}
                        colorScheme="light"
                        placeholder="Adresse Zeile 1"
                        type="text"
                        name="address1"
                        value={this.state.address1}
                        onChange={this.onChange}
                        error={this.state.errors.address1}
                      />
                    </div>
                    <div
                      className={
                        styles['trainings-content--text__content--left__date']
                      }
                    >
                      <Calendar
                        onChange={this.onDateChange}
                        value={new Date(this.state.date)}
                        locale="de-DE"
                      />
                    </div>
                  </div>

                  <div
                    className={cx(
                      styles['trainings-content--text__description'],
                      styles['content-box']
                    )}
                  >
                    <TextareaFieldGroup
                      className={commonStyles['input']}
                      colorScheme="light"
                      placeholder="Beschreibungstext öffentlich (wird per Email verschickt)"
                      type="text"
                      name="content"
                      value={this.state.content}
                      onChange={this.onChange}
                      error={this.state.errors.content}
                    />
                  </div>
                </div>
              </div>
            </div>
            {this.props.training.bulletin && (
              <div className={styles['bulletins-content--sidebar']}>
                <div
                  className={
                    styles['bulletins-content--sidebar__state-indicator']
                  }
                >
                  <div
                    className={cx(
                      styles[
                        'bulletins-content--sidebar__state-indicator--sphere'
                      ],
                      {
                        [styles['online']]: this.state.isOnline
                      }
                    )}
                  />
                  <div
                    className={
                      styles[
                        'bulletins-content--sidebar__state-indicator--text'
                      ]
                    }
                  >
                    {this.state.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>
                <div
                  className={
                    styles['bulletins-content--sidebar__section--publish']
                  }
                >
                  <button
                    className={cx(
                      commonStyles['button'],
                      {
                        [commonStyles['button--update']]: !this.state.isOnline
                      },
                      {
                        [commonStyles['button--offline']]: this.state.isOnline
                      },
                      commonStyles['button--fullwidth']
                    )}
                    onClick={this.toggleOnline}
                  >
                    {this.state.isOnline ? 'Offline nehmen' : 'Online stellen'}
                  </button>
                </div>
                <div className={styles['bulletins-content--sidebar--buttons']}>
                  <button
                    className={cx(
                      commonStyles['button'],
                      commonStyles['button--save'],
                      styles['button--save']
                    )}
                    onClick={this.saveContent}
                  >
                    Speichern
                  </button>
                </div>

                <hr />
                <div className={styles['bulletins-content--sidebar--buttons']}>
                  {this.props.training.bulletin && (
                    <button
                      className={cx(
                        commonStyles['button'],
                        commonStyles['button--delete']
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
          {this.props.match.params.bulletinId === 'neu' && (
            <button
              className={cx(
                commonStyles['button'],
                commonStyles['button--save'],
                styles['button--save']
              )}
              onClick={this.saveContent}
            >
              Speichern
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  training: state.training,
  auth: state.auth,
  media: state.media,
  label: state.label,
  errors: state.errors
});

export default connect(mapStateToProps, {
  saveContent,
  getById,
  toggleOnline,
  deleteById,
  clearSingle,
  getAll,
  getAllUsers,
  getImagesByCategory
})(BulletinContent);
