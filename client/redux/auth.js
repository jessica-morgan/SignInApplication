import request from '../lib/apiClient'
import { showSuccess, showError, clearError } from '../error'
import { saveUserToken, logOut } from '../lib/auth'

export const REQUEST_LOG_OUT = 'REQUEST_LOG_OUT'
export const RECIEVE_LOG_OUT = 'RECIEVE_LOG_OUT'

export const REQUEST_SIGNIN = 'REQUEST_SIGNIN'
export const RECEIVE_SIGNIN = 'RECEIVE_SIGNIN'

export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'

const requestLogOut = () => {
  return {
    type: REQUEST_LOG_OUT
  }
}

const recieveLogOut = () => {
  return {
    type: RECIEVE_LOG_OUT
  }
}

const requestSignIn = () => {
  return {
    type: REQUEST_SIGNIN
  }
}

const receiveSignIn = (token) => {
  return {
    type: RECEIVE_SIGNIN,
    token
  }
}

const requestUserDetails = () => {
  return {
    type: REQUEST_USER_DETAILS
  }
}

const receiveUserDetails = (userDetails) => {
  return {
    type: RECEIVE_USER_DETAILS,
    userDetails
  }
}

export function signIn (user) {
  return (dispatch) => {
    dispatch(requestSignIn())
    request('post', '/auth/signin', user)
      .then(res => {
        const token = saveUserToken(res.body.token)
        dispatch(receiveSignIn(res.body))
        dispatch(getUserDetails(token.id))
        dispatch(clearError())
        getUserDetails(token.id)
        dispatch(showSuccess('You are now logged in.'))
      })
      .catch(err => {
        if (err) {
          return dispatch(showError(err.message))
          // 'Username and password do not match an existing user'))
        } else {
          return dispatch(showError('An unexpected error has occurred'))
        }
      })
  }
}

export function logOutUser () {
  return dispatch => {
    dispatch(requestLogOut())
    logOut()
    dispatch(recieveLogOut())
  }
}

export function getUserDetails (userId) {
  return (dispatch) => {
    dispatch(requestUserDetails())
    request('get', `/users/${userId}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError())
      })
    // .catch(() => {
    //   dispatch(showError('An unexpected error has occurred.'))
    // })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
