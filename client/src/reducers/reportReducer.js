import {
  GET_ALL_REPORTS,
  GET_REPORT_BY_ID,
  SEND_REPORT,
  RESET_REPORT,
  REPORT_FAIL,
  CLEAR_REPORT,
  CLEAR_NEW_REPORT,
  UPDATE_REPORT,
  STORE_REPORT_DATA,
} from "../actions/types"

const initialState = {
  reports: null,
  newReport: {
    basics: {},
    stepA1: {},
    stepA2: {},
    stepA3: {},
    stepA4: {},
    stepA5: {},
    stepA6: {},
    stepA7: {},
    stepA8: {},
    stepA9: {},
    stepA10: {},
    stepA11: {},
    stepA12: {},
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_REPORTS:
      return {
        ...state,

        reports: action.payload,
      }
    case GET_REPORT_BY_ID:
      return {
        ...state,
        report: action.payload,
      }
    case SEND_REPORT:
      return {
        ...state,
        reportSent: true,
      }
    case RESET_REPORT:
      return {
        ...state,
        reportSent: false,
      }
    case REPORT_FAIL:
      return {
        ...state,
        reportFail: true,
        reportMsgDE:
          "Abschicken hat nicht geklappt. Bitte versuchen Sie es erneut.",
        reportMsgEN: "Something went wrong. Please try again.",
      }
    case CLEAR_REPORT:
      return {
        ...state,
        report: null,
      }
    case CLEAR_NEW_REPORT:
      return {
        ...state,
        newReport: {
          basics: {},
          stepA1: {},
          stepA2: {},
          stepA3: {},
          stepA4: {},
          stepA5: {},
          stepA6: {},
          stepA7: {},
          stepA8: {},
          stepA9: {},
          stepA10: {},
          stepA11: {},
          stepA12: {},
        },
      }
    case UPDATE_REPORT:
      return {
        ...state,
        reports: action.payload.reports,
        report: action.payload.report,
      }
    case STORE_REPORT_DATA:
      return {
        ...state,
        newReport: {
          ...state.newReport,
          [action.payload.step]: action.payload.data,
        },
      }
    default:
      return state
  }
}
