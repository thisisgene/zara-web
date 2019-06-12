import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import {
  GET_ERRORS,
  CLEAR_ERRORS,
  CREATE_NEW_USER,
  SET_CURRENT_USER,
  GET_ALL_USERS
} from './types'

// Register User
export const registerUser = userData => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
  axios
    .post('/api/users/register', userData)
    .then(res => {
      dispatch({
        type: CREATE_NEW_USER,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
export const updateUserPassword = userData => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
  axios
    .post('/api/users/update', userData)
    .then(res => {
      dispatch({
        type: CREATE_NEW_USER,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Login - Get user token
export const loginUser = userData => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data
      // Set token to localStorage
      localStorage.setItem('jwtToken', token)
      // Set token to auth header
      setAuthToken(token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const getAllUsers = () => dispatch => {
  axios.get('/api/users/all').then(res => {
    dispatch({
      type: GET_ALL_USERS,
      payload: res.data
    })
  })
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// TODO: get all users
// export const getAllUsers = () => dispatch => {
//   axios.get('/api/users/all')
// }

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to {} and isAuthenticated to false
  dispatch(setCurrentUser({}))
}
