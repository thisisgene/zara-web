import {
  GET_ALL_TRAININGTEAM,
  GET_TRAININGTEAM_BY_ID,
  CREATE_NEW_TRAININGTEAM,
  UPDATE_TRAININGTEAM,
  DELETE_TRAININGTEAM_BY_ID,
  CLEAR_TRAININGTEAM,
  CLEAR_ALL
} from '../actions/types'

const initialState = {
  trainingTeam: null,
  trainingTeamMember: null,
  loading: false,
  waiting: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TRAININGTEAM:
      return {
        ...state,
        trainingTeam: action.payload
      }
    case GET_TRAININGTEAM_BY_ID:
      return {
        ...state,
        trainingTeamMember: action.payload
      }
    case CREATE_NEW_TRAININGTEAM:
      return {
        ...state,
        trainingTeamMember: action.payload
      }
    case UPDATE_TRAININGTEAM:
      return {
        ...state,
        trainingTeam: action.payload.team,
        trainingTeamMember: action.payload.teamMember
      }
    case DELETE_TRAININGTEAM_BY_ID:
      return {
        ...state,
        trainingTeamMember: null,
        trainingTeam: action.payload
      }
    case CLEAR_TRAININGTEAM:
      return {
        ...state,
        trainingTeamMember: null
      }
    case CLEAR_ALL:
      return {
        ...state,
        trainingTeamMember: null,
        trainingTeam: null
      }
    default:
      return state
  }
}
