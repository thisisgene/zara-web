import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import mediaReducer from './mediaReducer'
import newsReducer from './newsReducer'
import jahresberichteReducer from './jahresberichteReducer'
import { localizeReducer } from 'react-localize-redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './userReducer'
import reportReducer from './reportReducer'

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
  media: mediaReducer,
  news: newsReducer,
  jahresberichte: jahresberichteReducer,
  user: userReducer,
  report: reportReducer,
  localize: localizeReducer
})
