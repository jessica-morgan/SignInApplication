import {
  REQUEST_LOG_OUT,
  RECEIVE_LOG_OUT,
  REQUEST_SIGNIN,
  RECEIVE_SIGNIN,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS
} from './auth'
import { getUserToken } from '../lib/auth'

const initialState = {
  // isFetching: false,
  isAuthenticated: false,
  // isAuthenticated(),
  user: getUserToken(),
  errorMessage: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNIN:
      return true

    case RECEIVE_SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      }

    case REQUEST_USER_DETAILS:
      return true

    case RECEIVE_USER_DETAILS:
      return {
        ...state
      }

    case REQUEST_LOG_OUT:
      return true

    case RECEIVE_LOG_OUT:
      return {
        ...state,
        user: null
      }

    default:
      return state
  }
}

export default auth
