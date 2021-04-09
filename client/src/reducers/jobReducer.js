import {
  GET_ALL_JOBS,
  GET_JOB_BY_ID,
  CREATE_NEW_JOB,
  UPDATE_JOB,
  DELETE_JOB_BY_ID,
  CLEAR_JOB,
  CLEAR_ALL,
} from '../actions/types'

const initialState = {
  jobs: null,
  job: null,
  loading: false,
  waiting: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        jobs: action.payload,
      }
    case GET_JOB_BY_ID:
      return {
        ...state,
        job: action.payload,
      }
    case CREATE_NEW_JOB:
      return {
        ...state,
        job: action.payload,
      }
    case UPDATE_JOB:
      return {
        ...state,
        jobs: action.payload.jobs,
        job: action.payload.job,
      }
    case DELETE_JOB_BY_ID:
      return {
        ...state,
        job: null,
        jobs: action.payload,
      }
    case CLEAR_JOB:
      return {
        ...state,
        job: null,
      }
    case CLEAR_ALL:
      return {
        ...state,
        job: null,
        jobs: null,
      }
    default:
      return state
  }
}
