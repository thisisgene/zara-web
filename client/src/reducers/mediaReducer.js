import { UPDATE_MEDIA } from '../actions/types'

const initialState = {
  media: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MEDIA:
      return {
        ...state,
        images: action.payload
      }

    default:
      return state
  }
}
