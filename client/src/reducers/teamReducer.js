import {
  GET_ALL_TEAM,
  GET_TEAM_BY_ID,
  CREATE_NEW_TEAM,
  UPDATE_TEAM,
  DELETE_TEAM_BY_ID,
  CLEAR_TEAM,
  CLEAR_ALL
} from '../actions/types'

const initialState = {
  team: null,
  teamMember: null,
  loading: false,
  waiting: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TEAM:
      return {
        ...state,
        team: action.payload
      }
    case GET_TEAM_BY_ID:
      return {
        ...state,
        teamMember: action.payload
      }
    case CREATE_NEW_TEAM:
      return {
        ...state,
        teamMember: action.payload
      }
    case UPDATE_TEAM:
      return {
        ...state,
        team: action.payload.team,
        teamMember: action.payload.teamMember
      }
    case DELETE_TEAM_BY_ID:
      return {
        ...state,
        teamMember: null,
        team: action.payload
      }
    case CLEAR_TEAM:
      return {
        ...state,
        teamMember: null
      }
    case CLEAR_ALL:
      return {
        ...state,
        teamMember: null,
        team: null
      }
    default:
      return state
  }
}
