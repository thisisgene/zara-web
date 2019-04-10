import {
  GET_ALL_JAHRESBERICHTE,
  GET_JAHRESBERICHT_BY_ID,
  CREATE_NEW_JAHRESBERICHT,
  UPDATE_JAHRESBERICHT,
  DELETE_JAHRESBERICHT_BY_ID,
  CLEAR_JAHRESBERICHT,
  CLEAR_ALL
} from '../actions/types'

const initialState = {
  jahresberichte: null,
  jahresbericht: null,
  loading: false,
  waiting: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_JAHRESBERICHTE:
      return {
        ...state,
        jahresberichte: action.payload
      }
    case GET_JAHRESBERICHT_BY_ID:
      return {
        ...state,
        jahresbericht: action.payload
      }
    case CREATE_NEW_JAHRESBERICHT:
      return {
        ...state,
        jahresbericht: action.payload
      }
    case UPDATE_JAHRESBERICHT:
      return {
        ...state,
        jahresbericht: action.payload
      }
    case DELETE_JAHRESBERICHT_BY_ID:
      return {
        ...state,
        jahresbericht: null,
        jahresberichte: action.payload
      }
    case CLEAR_JAHRESBERICHT:
      return {
        ...state,
        jahresbericht: null
      }
    case CLEAR_ALL:
      return {
        ...state,
        jahresbericht: null,
        jahresberichte: null
      }
    default:
      return state
  }
}
