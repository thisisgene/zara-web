import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import projectReducer from './projectReducer'
import { localizeReducer } from 'react-localize-redux'
import { reducer as formReducer } from 'redux-form'
import reportReducers from './reportReducers'

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
  project: projectReducer,
  report: reportReducers,
  localize: localizeReducer
})
