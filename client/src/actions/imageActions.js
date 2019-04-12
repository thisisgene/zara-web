import axios from 'axios'
import {
  SET_WAITING,
  GET_ERRORS,
  UPDATE_MEDIA,
  DELETE_IMAGE,
  UPLOAD_PROGRESS
  // SET_GRID_POSITION,
  // SET_BACKGROUND_IMAGE,
  // SET_IMAGE_VISIBILITY
} from './types'

export const getImagesByCategory = category => dispatch => {
  return axios.get(`/api/media/get_by_category/${category}`).then(res => {
    dispatch({
      type: UPDATE_MEDIA,
      payload: res.data
    })
  })
}

export const uploadImages = (files, category) => dispatch => {
  // dispatch(setWaiting())
  // console.log('waiting on')
  files.map(file => {
    let formData = new FormData()
    formData.append('category', category)
    formData.append('name', file.name)
    formData.append('size', file.size)
    formData.append('file', file)
    return axios
      .post('/api/media/image_upload', formData, {
        onUploadProgress: function(progressEvent) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )
          dispatch({
            type: UPLOAD_PROGRESS,
            payload: percentCompleted
          })
          console.log(
            'loaded: ' +
              progressEvent.loaded +
              ', totalSize: ' +
              progressEvent.total
          )
          console.log(percentCompleted + '%')
        }
      })
      .then(res => {
        // console.log('waiting off')

        dispatch({
          type: UPDATE_MEDIA,
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
}

export const deleteMediaImage = (category, id) => dispatch => {
  // dispatch(setWaiting())
  axios
    .get(`/api/media/delete/${category}/${id}`)
    .then(res => {
      dispatch({
        type: UPDATE_MEDIA,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

export const deleteImage = (projectid, imgid) => dispatch => {
  // dispatch(setWaiting())
  axios
    .get(`/api/projects/delete_image/${projectid}/${imgid}`)
    .then(res => {
      dispatch({
        type: DELETE_IMAGE,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

export const setWaiting = () => {
  return {
    type: SET_WAITING
  }
}
