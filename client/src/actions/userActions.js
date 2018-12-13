import axios from 'axios'
import { GET_ERRORS, UPLOAD_IMAGES } from './types'

export const sendReport = reportData => dispatch => {
  let formData = new FormData()
  formData.append('description', reportData.description)
  axios.post('/api/projects/report/send', formData).then(res => {
    const id = res.data._id
    const files = reportData.files
    if (files.length > 0) {
      files.map(file => {
        let fileData = new FormData()
        fileData.append('id', id)
        fileData.append('name', file.name)
        fileData.append('size', file.size)
        fileData.append('file', file)
        return axios.post('/api/projects/report/images', fileData).then(res => {
          console.log(res.data)
        })
      })
    }
  })
}

export const uploadImages = (files, id, category) => dispatch => {
  switch (category) {
    case 'project':
      files.map(file => {
        let formData = new FormData()
        formData.append('id', id)
        formData.append('name', file.name)
        formData.append('size', file.size)
        formData.append('file', file)
        return axios
          .post('/api/projects/image_upload', formData)
          .then(res => {
            dispatch({
              type: UPLOAD_IMAGES,
              payload: res.data
            })
          })
          .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: {}
            })
          )
      })

      break
    default:
      return null
  }
}
