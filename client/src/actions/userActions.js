import axios from 'axios'
import { SET_ACTIVE_LANGUAGE } from './types'

export const setActiveLanguage = language => dispatch => {
  console.log(language)
  dispatch({
    type: SET_ACTIVE_LANGUAGE,
    payload: language
  })
}

// export const getAllReports = () => dispatch => {
//   axios.get('/api/projects/reports').then(res => {
//     dispatch({
//       type: GET_ALL_REPORTS,
//       payload: res.data
//     })
//   })
// }
