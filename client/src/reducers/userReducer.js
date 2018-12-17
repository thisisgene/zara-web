import { SET_ACTIVE_LANGUAGE } from '../actions/types'

const initialState = {
  language: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }

    default:
      return state
  }
}
