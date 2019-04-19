import {
  GET_ALL_FAQS,
  GET_FAQ_BY_ID,
  CREATE_NEW_FAQ,
  UPDATE_FAQ,
  DELETE_FAQ_BY_ID,
  CLEAR_FAQ,
  CLEAR_ALL
} from '../actions/types'

const initialState = {
  faqs: null,
  faq: null,
  loading: false,
  waiting: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_FAQS:
      return {
        ...state,
        faqs: action.payload
      }
    case GET_FAQ_BY_ID:
      return {
        ...state,
        faq: action.payload
      }
    case CREATE_NEW_FAQ:
      return {
        ...state,
        faq: action.payload
      }
    case UPDATE_FAQ:
      return {
        ...state,
        faqs: action.payload.faqs,
        faq: action.payload.faq
      }
    case DELETE_FAQ_BY_ID:
      return {
        ...state,
        faq: null,
        faqs: action.payload
      }
    case CLEAR_FAQ:
      return {
        ...state,
        faq: null
      }

    case CLEAR_ALL:
      return {
        ...state,
        faqs: null,
        faq: null
      }
    default:
      return state
  }
}
