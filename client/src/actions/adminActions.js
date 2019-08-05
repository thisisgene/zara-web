import axios from 'axios'

import {
  GET_ERRORS,
  GET_ALL_LABELS,
  DELETE_LABEL_BY_ID,
  CREATE_NEW_LABEL,
  UPDATE_LABEL,
  GET_ALL_NEWS,
  GET_NEWS_BY_ID,
  DELETE_NEWS_BY_ID,
  CREATE_NEW_NEWS,
  UPDATE_NEWS,
  CLEAR_NEWS_ITEM,
  GET_ALL_JAHRESBERICHTE,
  CLEAR_ALL,
  CLEAR_ERRORS,
  CREATE_NEW_JAHRESBERICHT,
  UPDATE_JAHRESBERICHT,
  GET_JAHRESBERICHT_BY_ID,
  DELETE_JAHRESBERICHT_BY_ID,
  CLEAR_JAHRESBERICHT,
  GET_ALL_TEAM,
  CREATE_NEW_TEAM,
  UPDATE_TEAM,
  GET_TEAM_BY_ID,
  DELETE_TEAM_BY_ID,
  CLEAR_TEAM,
  GET_ALL_TRAININGTEAM,
  CREATE_NEW_TRAININGTEAM,
  UPDATE_TRAININGTEAM,
  GET_TRAININGTEAM_BY_ID,
  DELETE_TRAININGTEAM_BY_ID,
  CLEAR_TRAININGTEAM,
  GET_ALL_TRAININGS,
  CREATE_NEW_TRAINING,
  UPDATE_TRAINING,
  GET_TRAINING_BY_ID,
  DELETE_TRAINING_BY_ID,
  CLEAR_TRAINING,
  GET_ALL_FAQS,
  CREATE_NEW_FAQ,
  UPDATE_FAQ,
  GET_FAQ_BY_ID,
  DELETE_FAQ_BY_ID,
  CLEAR_FAQ,
  SET_GENERAL_LOADING,
  UNSET_GENERAL_LOADING,
  GET_ALL_USERS,
  CLEAR_REPORT
} from './types'

// import { setProjectLoading } from './projectActions'

// Get all
export const getAll = category => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
  switch (category) {
    case 'label':
      axios
        .get('/api/label')
        .then(res => {
          dispatch({
            type: GET_ALL_LABELS,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'news':
      axios
        .get('/api/news')
        .then(res => {
          dispatch({
            type: GET_ALL_NEWS,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'jahresberichte':
      axios
        .get('/api/jahresberichte')
        .then(res => {
          dispatch({
            type: GET_ALL_JAHRESBERICHTE,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'faqs':
      axios
        .get('/api/faqs')
        .then(res => {
          dispatch({
            type: GET_ALL_FAQS,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'team':
      axios
        .get('/api/team')
        .then(res => {
          dispatch({
            type: GET_ALL_TEAM,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'trainingTeam':
      axios
        .get('/api/training/team')
        .then(res => {
          dispatch({
            type: GET_ALL_TRAININGTEAM,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'trainings':
      axios
        .get('/api/training/trainings')
        .then(res => {
          dispatch({
            type: GET_ALL_TRAININGS,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break

    default:
      return
  }
}

export const getAllAndSort = (category, sortBy) => dispatch => {
  switch (category) {
    case 'trainings':
      axios
        .get(`/api/training/trainingsSorted/${sortBy}`)
        .then(res => {
          dispatch({
            type: GET_ALL_TRAININGS,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    default:
      return
  }
}

export const getAllByProps = (category, prop) => dispatch => {
  switch (category) {
    case 'team':
      console.log(prop)
      axios
        .post(`/api/team/props`, prop)
        .then(res => {
          dispatch({
            type: GET_ALL_TEAM,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break

    default:
      return
  }
}

// Get by Property
export const getByProperty = (category, property, value) => dispatch => {
  switch (category) {
    case 'news':
      axios
        .get(`/api/news/get_by/${property}/${value}`)
        .then(res => {
          dispatch({
            type: GET_ALL_NEWS,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    default:
      return
  }
}
// Get by ID
export const getById = (id, category) => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
  switch (category) {
    case 'news':
      axios
        .get(`/api/news/${id}`)
        .then(res => {
          dispatch({
            type: GET_NEWS_BY_ID,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'jahresberichte':
      axios
        .get(`/api/jahresberichte/${id}`)
        .then(res => {
          dispatch({
            type: GET_JAHRESBERICHT_BY_ID,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'faqs':
      axios
        .get(`/api/faqs/${id}`)
        .then(res => {
          dispatch({
            type: GET_FAQ_BY_ID,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'team':
      axios
        .get(`/api/team/${id}`)
        .then(res => {
          dispatch({
            type: GET_TEAM_BY_ID,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'trainingTeam':
      axios
        .get(`/api/training/team/${id}`)
        .then(res => {
          dispatch({
            type: GET_TRAININGTEAM_BY_ID,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break
    case 'trainings':
      axios
        .get(`/api/training/trainings/${id}`)
        .then(res => {
          dispatch({
            type: GET_TRAINING_BY_ID,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        )
      break

    default:
      return
  }
}

export const sendInitialTrainingEmail = saveData => dispatch => {
  dispatch(setGeneralLoading())
  axios
    .post(`/api/training/trainings/send_initial_email/`, saveData)
    .then(res => {
      // dispatch({
      //   type: UPDATE_TRAINING,
      //   payload: res.data
      // })
      dispatch({
        type: UNSET_GENERAL_LOADING
      })
    })
    .catch(err => {
      dispatch({
        type: UNSET_GENERAL_LOADING
      })
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    })
}

export const setInterestedTrainer = saveData => dispatch => {
  axios
    .post(
      `/api/training/trainings/set_interested_trainer/${saveData.id}`,
      saveData
    )
    .then(res => {
      dispatch({
        type: UPDATE_TRAINING,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    )
}

// Create or update content
export const saveContent = saveData => dispatch => {
  console.log(saveData)
  dispatch({
    type: CLEAR_ERRORS
  })
  dispatch(setGeneralLoading())

  switch (saveData.category) {
    case 'label':
      saveData.id === 'neu'
        ? axios
            .post('/api/label', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_LABEL,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
        : axios
            .post(`/api/label/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_LABEL,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })

      break
    case 'news':
      saveData.id === 'neu'
        ? axios
            .post('/api/news', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_NEWS,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
        : axios
            .post(`/api/news/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_NEWS,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })

      break
    case 'jahresberichte':
      saveData.id === 'neu'
        ? axios
            .post('/api/jahresberichte', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_JAHRESBERICHT,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
        : axios
            .post(`/api/jahresberichte/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_JAHRESBERICHT,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })

      break
    case 'faqs':
      saveData.id === 'neu'
        ? axios
            .post('/api/faqs', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_FAQ,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
        : axios
            .post(`/api/faqs/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_FAQ,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })

      break
    case 'team':
      saveData.id === 'neu'
        ? axios
            .post('/api/team', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_TEAM,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
        : axios
            .post(`/api/team/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_TEAM,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })

      break
    case 'trainingTeam':
      saveData.id === 'neu'
        ? axios
            .post('/api/training/team', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_TRAININGTEAM,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
        : axios
            .post(`/api/training/team/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_TRAININGTEAM,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })

      break
    case 'trainings':
      console.log(saveData.interestedTrainers)
      saveData.id === 'neu'
        ? axios
            .post('/api/training/trainings', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_TRAINING,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
        : axios
            .post(`/api/training/trainings/update/${saveData.id}`, saveData)
            .then(res => {
              console.log('here we go')
              dispatch({
                type: UPDATE_TRAINING,
                payload: res.data
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })
            .catch(err => {
              dispatch({
                type: GET_ERRORS,
                payload: err.response
              })
              dispatch({
                type: UNSET_GENERAL_LOADING
              })
            })

      break
    case 'fees':
      axios
        .post(`/api/training/trainings/additional_fees`, saveData)
        .then(res => {
          dispatch({
            type: UPDATE_TRAINING,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err.response
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })

      break

    default:
      return
  }
}

export const sortList = (list, category) => dispatch => {
  console.log('CAT: ', category)
  axios
    .post(`/api/projects/sort/${category}`, { list })
    .then(res => {
      dispatch({
        // type: GET_ALL_NEWS,
        // payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
      dispatch({
        type: UNSET_GENERAL_LOADING
      })
    })
}

export const toggleOnline = (id, category, state) => dispatch => {
  dispatch(setGeneralLoading())

  switch (category) {
    case 'news':
      axios
        .get(`/api/news/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_NEWS,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'jahresberichte':
      axios
        .get(`/api/jahresberichte/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_JAHRESBERICHT,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'faqs':
      axios
        .get(`/api/faqs/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_FAQ,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'team':
      axios
        .get(`/api/team/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_TEAM,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'trainingTeam':
      axios
        .get(`/api/training/team/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_TRAININGTEAM,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'trainings':
      axios
        .get(`/api/training/trainings/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_TRAINING,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break

    default:
      return
  }
}

export const deleteById = (id, category) => dispatch => {
  dispatch(setGeneralLoading())

  switch (category) {
    case 'label':
      axios
        .get(`/api/label/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_LABEL_BY_ID,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'news':
      axios
        .get(`/api/news/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_NEWS_BY_ID,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'jahresberichte':
      console.log('jahresbericht löschen')
      axios
        .get(`/api/jahresberichte/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_JAHRESBERICHT_BY_ID,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'faqs':
      axios
        .get(`/api/faqs/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_FAQ_BY_ID,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'team':
      axios
        .get(`/api/team/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_TEAM_BY_ID,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'trainingTeam':
      axios
        .get(`/api/users/delete/${id}`)
        .then(res => {
          dispatch({
            type: GET_ALL_USERS,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break
    case 'trainings':
      axios
        .get(`/api/training/trainings/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_TRAINING_BY_ID,
            payload: res.data
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
          dispatch({
            type: UNSET_GENERAL_LOADING
          })
        })
      break

    default:
      return
  }
}

export const deleteAdditionalFee = content => dispatch => {
  axios
    .post(`/api/training/additional_fees/delete/`, content)
    .then(res => {
      dispatch({
        type: UPDATE_TRAINING,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
}

export const clearSingle = category => dispatch => {
  switch (category) {
    case 'news':
      dispatch({
        type: CLEAR_NEWS_ITEM
      })

      break
    case 'jahresberichte':
      dispatch({
        type: CLEAR_JAHRESBERICHT
      })

      break
    case 'faqs':
      dispatch({
        type: CLEAR_FAQ
      })

      break
    case 'team':
      dispatch({
        type: CLEAR_TEAM
      })

      break
    case 'trainingTeam':
      dispatch({
        type: CLEAR_TRAININGTEAM
      })
    case 'trainings':
      dispatch({
        type: CLEAR_TRAINING
      })

      break
    case 'report':
      dispatch({
        type: CLEAR_REPORT
      })

      break
    default:
      return
  }
}

export const clearAll = () => dispatch => {
  dispatch({
    type: CLEAR_ALL
  })
}

export const setGeneralLoading = () => dispatch => {
  dispatch({
    type: SET_GENERAL_LOADING
  })
}
