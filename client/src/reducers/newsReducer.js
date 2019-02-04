import {
  GET_ALL_NEWS,
  GET_NEWS_BY_ID,
  CREATE_NEW_NEWS,
  UPDATE_NEWS,
  DELETE_NEWS_BY_ID,
  CLEAR_NEWS_ITEM
} from '../actions/types'

const initialState = {
  news: null,
  newsItem: null,
  loading: false,
  waiting: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_NEWS:
      return {
        ...state,
        news: action.payload
      }
    case GET_NEWS_BY_ID:
      return {
        ...state,
        newsItem: action.payload
      }
    case CREATE_NEW_NEWS:
      return {
        ...state,
        newsItem: action.payload
      }
    case UPDATE_NEWS:
      return {
        ...state,
        newsItem: action.payload
      }
    case DELETE_NEWS_BY_ID:
      return {
        ...state,
        newsItem: null,
        news: action.payload
      }
    case CLEAR_NEWS_ITEM:
      return {
        ...state,
        newsItem: null
      }
    default:
      return state
  }
}
