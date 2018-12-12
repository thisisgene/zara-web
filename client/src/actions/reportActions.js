import axios from 'axios'
import { GET_ALL_REPORTS, GET_REPORT_BY_ID } from './types'

export const getAllReports = () => dispatch => {
  axios.get('/api/projects/reports').then(res => {
    dispatch({
      type: GET_ALL_REPORTS,
      payload: res.data
    })
  })
}

export const getReportById = id => dispatch => {
  axios.get('/api/projects/reports/by_id/' + id).then(res => {
    dispatch({
      type: GET_REPORT_BY_ID,
      payload: res.data
    })
  })
}
