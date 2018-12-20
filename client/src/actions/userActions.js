import { SET_ACTIVE_LANGUAGE } from './types'

export const setActiveLanguage = language => dispatch => {
  dispatch({
    type: SET_ACTIVE_LANGUAGE,
    payload: language
  })
}
