import axios from 'axios'
import {
  GET_ALL_REPORTS,
  GET_REPORT_BY_ID,
  SEND_REPORT,
  REPORT_FAIL
} from './types'

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

export const sendReport = reportData => dispatch => {
  let formData = new FormData()
  formData.append('description', reportData.description)
  formData.append('links', reportData.links)
  if (reportData.selectedOption === 'anonym') {
    formData.append('anonym', true)
  } else {
    formData.append('name', reportData.name)
    formData.append('email', reportData.email)
    formData.append('phone', reportData.phone)
  }
  axios.post('/api/projects/report/send', formData).then(res => {
    const id = res.data.report._id
    const files = reportData.files
    if (files.length > 0) {
      files.map(file => {
        let fileData = new FormData()
        fileData.append('id', id)
        fileData.append('name', file.name)
        fileData.append('size', file.size)
        fileData.append('file', file)
        return axios.post('/api/projects/report/images', fileData).then(res => {
          if (res.data === 'success') {
            dispatch({
              type: SEND_REPORT
            })
          } else {
            dispatch({
              type: REPORT_FAIL
            })
          }
        })
      })
    } else {
      if (res.data.msg === 'success') {
        dispatch({
          type: SEND_REPORT
        })
      } else {
        dispatch({
          type: REPORT_FAIL
        })
      }
    }
  })
}
