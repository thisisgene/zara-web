import React, { Component } from 'react'

import Moment from 'react-moment'

import { saveContent } from '../../../../../../actions/adminActions'

import cx from 'classnames'
import commonStyles from '../../../../common/Common.module.sass'
import styles from './TrainingDetail.module.sass'

export default class TrainingDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingId: props.match.params.trainingId
    }
  }

  render() {
    let training =
      this.props.trainings &&
      this.props.trainings.filter(
        filterTraining => filterTraining._id === this.state.trainingId
      )
    console.log(this.props)
    return (
      <div className={styles['training-detail-container']}>
        {training && (
          <div className={styles['training-detail-wrapper']}>
            <div className={styles['close-icon-container']}>
              <div
                className={styles['close-icon']}
                onClick={this.props.closeTrainingDetail}
              >
                <i className={'fas fa-times'} />
              </div>
            </div>
            <div className={styles['training-detail']}>
              <div className={styles['training-detail--title']}>
                <h1>{training[0].title}</h1>
              </div>
              <div className={styles['training-detail--meta']}>
                <div className={styles['training-detail--meta--date']}>
                  <div className={styles['training-detail--meta--date__day']}>
                    <i className={cx('far fa-calendar-alt', styles['icon'])} />
                    <Moment format={'DD. MMMM YYYY'} locale={'de-DE'}>
                      {training[0].date}
                    </Moment>
                  </div>
                  <div className={styles['training-detail--meta--date__time']}>
                    <i className={cx('far fa-clock', styles['icon'])} />

                    <div>{training[0].timeFrom}</div>
                    <div>-</div>
                    <div>{training[0].timeUntil}</div>
                  </div>
                </div>
                <div className={styles['training-detail--meta--location']}>
                  <i className={cx('fas fa-map-marker-alt', styles['icon'])} />
                  <div>
                    <p
                      className={
                        styles['training-detail--meta--location__title']
                      }
                    >
                      {training[0].location.title}
                    </p>
                    <p>{training[0].location.address1}</p>
                  </div>
                </div>
              </div>
              {/* <hr /> */}
              <div className={styles['training-detail--content']}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: training[0].pubContentMarked
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: training[0].privContentMarked
                  }}
                />
              </div>
              <div className={styles['training-detail--trainers']}>
                <div
                  className={cx(styles['training-detail--trainers__view'], {
                    [styles['occupied']]:
                      training[0].assignedTrainer1.id !== 'none' &&
                      training[0].assignedTrainer1.id !== null
                  })}
                >
                  <div
                    className={
                      styles['training-detail--trainers__view--avatar']
                    }
                  >
                    <i class="fas fa-user" />
                  </div>
                  <div
                    className={styles['training-detail--trainers__view--name']}
                  >
                    {training[0].assignedTrainer1.id !== 'none' &&
                    training[0].assignedTrainer1.id !== null ? (
                      <div>
                        <p style={{ fontStyle: 'italic' }}>Belegt von:</p>
                        <p className={styles['trainer-name']}>
                          {training[0].assignedTrainer1.name}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p style={{ fontStyle: 'italic' }}>Noch nicht belegt</p>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={cx(styles['training-detail--trainers__view'], {
                    [styles['occupied']]:
                      training[0].assignedTrainer2.id !== 'none' &&
                      training[0].assignedTrainer2.id !== null
                  })}
                >
                  <div
                    className={
                      styles['training-detail--trainers__view--avatar']
                    }
                  >
                    <i class="fas fa-user" />
                  </div>
                  <div
                    className={styles['training-detail--trainers__view--name']}
                  >
                    {training[0].assignedTrainer2.id !== 'none' &&
                    training[0].assignedTrainer2.id !== null ? (
                      <div>
                        <p style={{ fontStyle: 'italic' }}>Belegt von:</p>
                        <p className={styles['trainer-name']}>
                          {training[0].assignedTrainer2.name}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p style={{ fontStyle: 'italic' }}>Noch nicht belegt</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles['training-detail--buttons']}>
                {this.props.user && this.props.user.securityLevel === 16 ? (
                  <div>
                    {training[0].assignedTrainer1.id == undefined ||
                    training[0].assignedTrainer1.id == 'none' ||
                    training[0].assignedTrainer2.id == undefined ||
                    training[0].assignedTrainer2.id == 'none' ? (
                      <div>
                        {!training[0].interestedTrainers.includes(
                          this.props.user.id
                        ) ? (
                          <button
                            className={styles['button-submit']}
                            onClick={this.props.onInterestClick.bind(
                              this,
                              this.props.user.id,
                              training[0]._id,
                              training[0].title,
                              training[0].interestedTrainers || new Array()
                            )}
                          >
                            Ich bin interessiert
                          </button>
                        ) : (
                          <button
                            className={styles['button-submit']}
                            disabled={true}
                          >
                            Interesse gemeldet
                          </button>
                        )}
                      </div>
                    ) : (
                      <button
                        className={styles['button-submit']}
                        disabled={true}
                      >
                        Training bereits augebucht
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    <button className={styles['button-submit']} disabled={true}>
                      Nicht berechtigt
                    </button>
                    <p className={commonStyles['small-message']}>
                      (Loggen Sie sich mit einem ZARA Trainer*innen Account ein)
                    </p>
                  </div>
                )}
                <div>
                  <button
                    className={styles['button-cancel']}
                    onClick={this.props.closeTrainingDetail}
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
