import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import newsReducer from './newsReducer'
import { localizeReducer } from 'react-localize-redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './userReducer'
import reportReducer from './reportReducer'

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
  news: newsReducer,
  user: userReducer,
  report: reportReducer,
  localize: localizeReducer
})
