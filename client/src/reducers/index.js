import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import projectReducer from './projectReducer'
import { localizeReducer } from 'react-localize-redux'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  project: projectReducer,
  localize: localizeReducer
})
