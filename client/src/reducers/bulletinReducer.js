import {
  GET_ALL_BULLETINS,
  GET_BULLETIN_BY_ID,
  CREATE_NEW_BULLETIN,
  UPDATE_BULLETIN,
  DELETE_BULLETIN_BY_ID,
  CLEAR_BULLETIN,
  CLEAR_ALL
} from '../actions/types';

const initialState = {
  bulletins: null,
  bulletin: null,
  loading: false,
  waiting: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BULLETINS:
      return {
        ...state,
        bulletins: action.payload
      };
    case GET_BULLETIN_BY_ID:
      return {
        ...state,
        bulletin: action.payload
      };
    case CREATE_NEW_BULLETIN:
      return {
        ...state,
        bulletin: action.payload
      };
    case UPDATE_BULLETIN:
      return {
        ...state,
        bulletins: action.payload.bulletins,
        bulletin: action.payload.bulletin
      };
    case DELETE_BULLETIN_BY_ID:
      return {
        ...state,
        bulletin: null,
        bulletins: action.payload
      };
    case CLEAR_BULLETIN:
      return {
        ...state,
        bulletin: null
      };
    case CLEAR_ALL:
      return {
        ...state,
        bulletin: null,
        bulletins: null
      };
    default:
      return state;
  }
}
