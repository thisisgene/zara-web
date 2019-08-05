import {
  GET_ALL_REPORTS,
  GET_REPORT_BY_ID,
  SEND_REPORT,
  RESET_REPORT,
  REPORT_FAIL,
  CLEAR_REPORT
} from '../actions/types'

const initialState = {
  reports: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REPORTS:
      return {
        ...state,

        reports: action.payload
      }
    case GET_REPORT_BY_ID:
      return {
        ...state,
        report: action.payload
      }
    case SEND_REPORT:
      return {
        ...state,
        reportSent: true
      }
    case RESET_REPORT:
      return {
        ...state,
        reportSent: false
      }
    case REPORT_FAIL:
      return {
        ...state,
        reportFail: true,
        reportMsgDE:
          'Abschicken hat nicht geklappt. Bitte versuchen Sie es erneut.',
        reportMsgEN: 'Something went wrong. Please try again.'
      }
    case CLEAR_REPORT:
      return {
        ...state,
        report: null
      }

    default:
      return state
  }
}
