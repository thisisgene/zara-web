import {
  GET_ALL_LABELS,
  CREATE_NEW_LABEL,
  UPDATE_LABEL,
  DELETE_LABEL_BY_ID,
  CLEAR_LABEL,
  CLEAR_ALL
} from '../actions/types'

const initialState = {
  labels: null,
  label: null,
  loading: false,
  waiting: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_LABELS:
      return {
        ...state,
        labels: action.payload
      }
    case CREATE_NEW_LABEL:
      return {
        ...state,
        labels: action.payload
      }
    case UPDATE_LABEL:
      return {
        ...state,
        labels: action.payload.labels,
        label: action.payload.label
      }
    case DELETE_LABEL_BY_ID:
      return {
        ...state,
        label: null,
        labels: action.payload
      }
    case CLEAR_LABEL:
      return {
        ...state,
        label: null
      }
    case CLEAR_ALL:
      return {
        ...state,
        label: null,
        labels: null
      }
    default:
      return state
  }
}
