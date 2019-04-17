import axios from 'axios'

import {
  GET_ERRORS,
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
  CLEAR_TRAINING
} from './types'

// Get all
export const getAll = category => dispatch => {
  switch (category) {
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
    case 'training':
      axios
        .get(`/api/training/training/${id}`)
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

// Create or update content
export const saveContent = saveData => dispatch => {
  console.log(saveData)
  switch (saveData.category) {
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
            })
            .catch(err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
            )
        : axios
            .post(`/api/news/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_NEWS,
                payload: res.data
              })
            })
            .catch(err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
            )

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
            })
            .catch(err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
            )
        : axios
            .post(`/api/jahresberichte/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_JAHRESBERICHT,
                payload: res.data
              })
            })
            .catch(err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
            )

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
            })
            .catch(err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
            )
        : axios
            .post(`/api/training/team/update/${saveData.id}`, saveData)
            .then(res => {
              dispatch({
                type: UPDATE_TRAININGTEAM,
                payload: res.data
              })
            })
            .catch(err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.response
              })
            )

      break
    case 'training':
      saveData.id === 'neu'
        ? axios
            .post('/api/training/training', saveData)
            .then(res => {
              dispatch({ type: CLEAR_ERRORS })
              dispatch({
                type: CREATE_NEW_TRAINING,
                payload: res.data
              })
            })
            .catch(err =>
              dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
            )
        : axios
            .post(`/api/training/training/update/${saveData.id}`, saveData)
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
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
}

export const toggleOnline = (id, category, state) => dispatch => {
  switch (category) {
    case 'news':
      axios
        .get(`/api/news/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_NEWS,
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
        .get(`/api/jahresberichte/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_JAHRESBERICHT,
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
        .get(`/api/training/team/toggle_online/${id}/${state}`)
        .then(res => {
          dispatch({
            type: UPDATE_TRAININGTEAM,
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
    case 'training':
      axios
        .get(`/api/training/training/toggle_online/${id}/${state}`)
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
      break
    default:
      return
  }
}

export const deleteById = (id, category) => dispatch => {
  switch (category) {
    case 'news':
      axios
        .get(`/api/news/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_NEWS_BY_ID,
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
      console.log('jahresbericht löschen')
      axios
        .get(`/api/jahresberichte/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_JAHRESBERICHT_BY_ID,
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
        .get(`/api/training/team/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_TRAININGTEAM_BY_ID,
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
    case 'training':
      axios
        .get(`/api/training/training/delete/${id}`)
        .then(res => {
          dispatch({
            type: DELETE_TRAINING_BY_ID,
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
    case 'trainingTeam':
      dispatch({
        type: CLEAR_TRAININGTEAM
      })
    case 'training':
      dispatch({
        type: CLEAR_TRAINING
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
