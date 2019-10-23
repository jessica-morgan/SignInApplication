import request from 'superagent'
import { saveUserToken } from '../lib/auth'

export function signIn (user) {
  return request('post', '/auth/signin', user)
    .then(res => {
      const token = saveUserToken(res.body.token)
      getUserDetails(token.id)
    })
    .catch((err) => {
      throw Error(err.message)
    })
}

export function getUserDetails (userId) {
  return request('get', `/users/${userId}`)
    .then(res => {
      const userDetails = res.body
      return userDetails
    })
    .catch((err) => {
      throw Error(err.message)
    })
}
