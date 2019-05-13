import React, { Component } from 'react'

import Moment from 'react-moment'

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
      <div className={styles['training-detail']}>
        {training && (
          <div className={styles['training-detail--container']}>
            <div>
              <h1>{training[0].title}</h1>
            </div>
            <div>
              <p>{training[0].location.title}</p>
              <p>{training[0].location.address1}</p>
            </div>
            <div>
              <Moment format={'DD. MMMM YYYY'} locale={'de-DE'}>
                {training[0].date}
              </Moment>
              <div>{training[0].timeFrom}</div>
              <div>{training[0].timeUntil}</div>
            </div>
            <div>
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
            <div>
              <div>Trainer*innen:</div>
              <div>{training[0].assignedTrainer1.name}</div>
              <div>{training[0].assignedTrainer2.name}</div>
            </div>

            <div>
              <div>
                {training[0].assignedTrainer1.id == undefined ||
                training[0].assignedTrainer1.id == 'none' ||
                training[0].assignedTrainer2.id == undefined ||
                training[0].assignedTrainer2.id == 'none' ? (
                  <button>Ich bin interessiert</button>
                ) : (
                  <button disabled={true}>Training bereits augebucht</button>
                )}
              </div>
              <div>
                <button onClick={this.props.closeTrainingDetail}>
                  Abbrechen
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
