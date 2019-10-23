import decode from 'jwt-decode'

import { saveToken, getToken } from './token'

export function isAuthenticated () {
  const authToken = getToken()

  if (authToken) {
    const payload = decode(authToken)
    const expiry = payload.exp

    if (expiry < new Date().getTime() / 1000) {
      logOut()
      return false
    }
    return true
  } else {
    return false
  }
}

export function saveUserToken (authToken) {
  saveToken(authToken)
  return decode(authToken)
}

export function getUserToken () {
  const authToken = getToken()
  return authToken ? decode(authToken) : null
}

export function getEncodedToken () {
  return getToken()
}

export function logOut () {
  saveToken(null)
}
