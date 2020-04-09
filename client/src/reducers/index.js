import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import mediaReducer from './mediaReducer';
import labelReducer from './labelReducer';
import carouselReducer from './carouselReducer';
import newsReducer from './newsReducer';
import jahresberichteReducer from './jahresberichteReducer';
import faqReducer from './faqReducer';
import teamReducer from './teamReducer';
import trainingReducer from './trainingReducer';
import bulletinReducer from './bulletinReducer';
import { localizeReducer } from 'react-localize-redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import reportReducer from './reportReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
  media: mediaReducer,
  label: labelReducer,
  carousel: carouselReducer,
  news: newsReducer,
  jahresberichte: jahresberichteReducer,
  faq: faqReducer,
  team: teamReducer,
  training: trainingReducer,
  bulletin: bulletinReducer,
  user: userReducer,
  admin: adminReducer,
  report: reportReducer,
  localize: localizeReducer
});
