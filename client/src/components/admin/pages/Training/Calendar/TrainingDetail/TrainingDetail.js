import React, { Component } from 'react'

import Moment from 'react-moment'

import cx from 'classnames'
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
              <div className={styles['training-detail--date']}>
                <div className={styles['training-detail--date__day']}>
                  <i className={cx('far fa-calendar-alt', styles['icon'])} />
                  <Moment format={'DD. MMMM YYYY'} locale={'de-DE'}>
                    {training[0].date}
                  </Moment>
                </div>
                <div className={styles['training-detail--date__time']}>
                  <i className={cx('far fa-clock', styles['icon'])} />

                  <div>{training[0].timeFrom}</div>
                  <div>-</div>
                  <div>{training[0].timeUntil}</div>
                </div>
              </div>
              <div className={styles['training-detail--location']}>
                <i className={cx('fas fa-map-marker-alt', styles['icon'])} />
                <div>
                  <p className={styles['training-detail--location__title']}>
                    {training[0].location.title}
                  </p>
                  <p>{training[0].location.address1}</p>
                </div>
              </div>
              <hr />
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
                {training[0].assignedTrainer1.id == undefined ||
                training[0].assignedTrainer1.id == 'none' ||
                training[0].assignedTrainer2.id == undefined ||
                training[0].assignedTrainer2.id == 'none' ? (
                  <button className={styles['button-submit']}>
                    Ich bin interessiert
                  </button>
                ) : (
                  <button className={styles['button-submit']} disabled={true}>
                    Training bereits augebucht
                  </button>
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
