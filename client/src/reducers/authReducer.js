import isEmpty from '../validation/is-empty'

import {
  SET_CURRENT_USER,
  GET_ALL_USERS,
  CREATE_NEW_USER
} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}
