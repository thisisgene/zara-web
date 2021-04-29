import axios from "axios"
import {
  GET_ALL_REPORTS,
  GET_REPORT_BY_ID,
  SEND_REPORT,
  RESET_REPORT,
  REPORT_FAIL,
  CLEAR_REPORT,
  CLEAR_NEW_REPORT,
  UPDATE_REPORT,
  STORE_REPORT_DATA,
} from "./types"

export const getAllReports = () => (dispatch) => {
  axios.get("/api/projects/reports").then((res) => {
    dispatch({
      type: GET_ALL_REPORTS,
      payload: res.data,
    })
  })
}
export const getAllPresseclubReports = () => (dispatch) => {
  axios.get("/api/projects/reports/presseclub").then((res) => {
    dispatch({
      type: GET_ALL_REPORTS,
      payload: res.data,
    })
  })
}

export const getReportById = (id) => (dispatch) => {
  axios.get("/api/projects/reports/by_id/" + id).then((res) => {
    dispatch({
      type: GET_REPORT_BY_ID,
      payload: res.data,
    })
  })
}
export const getPresseclubReportById = (id) => (dispatch) => {
  axios.get("/api/projects/reports/presseclub/by_id/" + id).then((res) => {
    dispatch({
      type: GET_REPORT_BY_ID,
      payload: res.data,
    })
  })
}

export const sendToArchive = (id) => (dispatch) => {
  axios
    .get(`/api/projects/report/sendToArchive/${id}`)
    .then((res) => {
      dispatch({
        type: UPDATE_REPORT,
        payload: res.data,
      })
    })
    .catch((res) => {
      console.log(res.data)
    })
}

export const resetReport = () => (dispatch) => {
  dispatch({
    type: RESET_REPORT,
  })
}
export const clearNewReport = () => (dispatch) => {
  dispatch({
    type: CLEAR_NEW_REPORT,
  })
}

// Presseclub Report
export const storeReportData = (reportData, step) => (dispatch) => {
  dispatch({
    type: STORE_REPORT_DATA,
    payload: { data: reportData, step: step },
  })
}

export const sendReport = (reportData) => (dispatch) => {
  // let formData = new FormData()
  // axios.post('/api/projects/report/send', reportData).then(res => {
  //   const id = res.data.report._id
  //   const files = reportData.files
  //   if (files.length > 0) {
  //     files.map(file => {
  //       let fileData = new FormData()
  //       fileData.append('id', id)
  //       fileData.append('name', file.name)
  //       fileData.append('size', file.size)
  //       fileData.append('file', file)
  //       console.log('file data: ', fileData)
  //       return axios.post('/api/projects/report/images', fileData).then(res => {
  //         if (res.data === 'success') {
  //           dispatch({
  //             type: SEND_REPORT
  //           })
  //         } else {
  //           dispatch({
  //             type: REPORT_FAIL
  //           })
  //         }
  //       })
  //     })
  //   } else {
  //     if (res.data.msg === 'success') {
  //       dispatch({
  //         type: SEND_REPORT
  //       })
  //     } else {
  //       dispatch({
  //         type: REPORT_FAIL
  //       })
  //     }
  //   }
  // })
}
