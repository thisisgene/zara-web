import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import projectReducer from './projectReducer'
import { localizeReducer } from 'react-localize-redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
  project: projectReducer,
  localize: localizeReducer
})
