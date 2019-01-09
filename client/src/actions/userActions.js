import axios from 'axios'
import { SET_ACTIVE_LANGUAGE, SEND_ORDER } from './types'

export const setActiveLanguage = language => dispatch => {
  dispatch({
    type: SET_ACTIVE_LANGUAGE,
    payload: language
  })
}

export const sendOrder = order => dispatch => {
  axios.post('/api/projects/order', order).then(res => {
    dispatch({
      type: SEND_ORDER,
      payload: res.data
    })
  })
}
