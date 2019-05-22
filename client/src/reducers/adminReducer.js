import { SET_GENERAL_LOADING, UNSET_GENERAL_LOADING } from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GENERAL_LOADING:
      return {
        ...state,
        loading: true
      }
    case UNSET_GENERAL_LOADING:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}
