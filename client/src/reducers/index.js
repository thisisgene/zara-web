import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import mediaReducer from './mediaReducer'
import newsReducer from './newsReducer'
import jahresberichteReducer from './jahresberichteReducer'
import faqReducer from './faqReducer'
import teamReducer from './teamReducer'
import trainingReducer from './trainingReducer'
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
  faq: faqReducer,
  team: teamReducer,
  training: trainingReducer,
  user: userReducer,
  report: reportReducer,
  localize: localizeReducer
})
