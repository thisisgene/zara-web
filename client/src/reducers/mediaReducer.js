import { GET_IMAGES_BY_CATEGORY } from '../actions/types'

const initialState = {
  media: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES_BY_CATEGORY:
      return {
        ...state,
        images: action.payload
      }

    default:
      return state
  }
}
