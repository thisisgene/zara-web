import {
  GET_ALL_NEWS,
  GET_NEWS_BY_ID,
  CREATE_NEW_NEWS,
  UPDATE_NEWS,
  DELETE_NEWS_BY_ID,
  ADD_NEWS_VIDEO,
  CLEAR_NEWS_ITEM,
  CLEAR_ALL
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
        news: action.payload.news,
        newsItem: action.payload.newsItem
      }
    case ADD_NEWS_VIDEO:
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
    case CLEAR_ALL:
      return {
        ...state,
        newsItem: null,
        news: null
      }
    default:
      return state
  }
}
