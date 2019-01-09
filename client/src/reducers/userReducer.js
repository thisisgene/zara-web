import { SET_ACTIVE_LANGUAGE, SEND_ORDER, RESET_ORDER } from '../actions/types'

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
    case SEND_ORDER:
      return {
        ...state,
        orderSent: true,
        order: action.payload
      }
    case RESET_ORDER:
      return {
        ...state,
        orderSent: false
      }
    default:
      return state
  }
}
