import axios from 'axios'
import {
  // SET_WAITING,
  GET_ERRORS,
  UPDATE_MEDIA,
  DELETE_IMAGE
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
  files.map(file => {
    let formData = new FormData()
    formData.append('category', category)
    formData.append('name', file.name)
    formData.append('size', file.size)
    formData.append('file', file)
    return axios
      .post('/api/media/image_upload', formData)
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

// export const setGridPosition = (
//   projectId,
//   projectName,
//   imageId,
//   imageName,
//   position
// ) => dispatch => {
//   dispatch(setWaiting())
//   const data = {
//     projectId: projectId,
//     projectName: projectName,
//     imageId: imageId,
//     imageName: imageName,
//     position: position
//   }
//   axios
//     .post('/api/projects/set_grid_position', data)
//     .then(res => {
//       dispatch({
//         type: SET_GRID_POSITION,
//         payload: res.data
//       })
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: {}
//       })
//     )
// }

// export const setBackgroundImage = (projectId, imageId) => dispatch => {
//   dispatch(setWaiting())
//   const data = {
//     projectId: projectId,
//     imageId: imageId
//   }
//   axios
//     .post('/api/projects/set_background_image', data)
//     .then(res => {
//       dispatch({
//         type: SET_BACKGROUND_IMAGE,
//         payload: res.data
//       })
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: {}
//       })
//     )
// }

// export const setImageVisibility = (projectId, imageId, state) => dispatch => {
//   dispatch(setWaiting())
//   const data = {
//     projectId: projectId,
//     imageId: imageId,
//     state: state
//   }
//   axios
//     .post('/api/projects/set_image_visibility', data)
//     .then(res => {
//       dispatch({
//         type: SET_IMAGE_VISIBILITY,
//         payload: res.data
//       })
//     })
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: {}
//       })
//     )
// }

// export const setWaiting = () => {
//   return {
//     type: SET_WAITING
//   }
// }
