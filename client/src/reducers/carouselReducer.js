import {
  GET_ALL_CAROUSELS,
  CREATE_NEW_CAROUSEL,
  UPDATE_CAROUSEL,
  DELETE_CAROUSEL_BY_ID,
  CLEAR_CAROUSEL,
  CLEAR_ALL,
  GET_CAROUSEL_BY_ID
} from '../actions/types'

const initialState = {
  carousels: null,
  carousel: null,
  loading: false,
  waiting: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CAROUSELS:
      return {
        ...state,
        carousels: action.payload
      }
    case CREATE_NEW_CAROUSEL:
      return {
        ...state,
        carousels: action.payload
      }
    case UPDATE_CAROUSEL:
      return {
        ...state,
        carousels: action.payload.carousels,
        carousel: action.payload.carousel
      }
    case GET_CAROUSEL_BY_ID:
      return {
        ...state,
        carousel: action.payload
      }
    case DELETE_CAROUSEL_BY_ID:
      return {
        ...state,
        carousel: null,
        carousels: action.payload
      }
    case CLEAR_CAROUSEL:
      return {
        ...state,
        carousel: null
      }
    case CLEAR_ALL:
      return {
        ...state,
        carousel: null,
        carousels: null
      }
    default:
      return state
  }
}
