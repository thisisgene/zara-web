import axios from 'axios'
import {
  SET_ACTIVE_LANGUAGE,
  SEND_ORDER,
  RESET_ORDER,
  GET_ERRORS
} from './types'

export const setActiveLanguage = language => dispatch => {
  dispatch({
    type: SET_ACTIVE_LANGUAGE,
    payload: language
  })
}

export const sendOrder = order => dispatch => {
  axios
    .post('/api/projects/order', order)
    .then(res => {
      console.log(res)
      dispatch({
        type: SEND_ORDER,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
export const resetOrder = () => dispatch => {
  dispatch({
    type: RESET_ORDER
  })
}
