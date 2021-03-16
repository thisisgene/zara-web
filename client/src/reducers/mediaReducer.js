import { UPDATE_MEDIA, UPLOAD_PROGRESS, SET_WAITING } from '../actions/types'

const initialState = {
  media: null,
  uploadProgress: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_MEDIA:
      return {
        ...state,
        images: action.payload,
        waiting: false
      }

    case UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: action.payload
      }
    case SET_WAITING:
      return {
        ...state,
        waiting: true
      }

    default:
      return state
  }
}
