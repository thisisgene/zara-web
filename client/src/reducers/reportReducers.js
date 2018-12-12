import { GET_ALL_REPORTS, GET_REPORT_BY_ID } from '../actions/types'

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
    default:
      return state
  }
}
