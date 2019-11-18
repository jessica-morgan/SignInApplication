import request from '../lib/apiClient'
import { saveUserToken } from '../lib/auth'

const url = 'http://localhost:3000/api/v1'

export function signInAdminApi (user) {
  return request('post', '/auth/admin/signin', user)
    .then(res => {
      const token = saveUserToken(res.body.token)
      getAdminDetails(token.id)
      return res.body
    })
    .catch((err) => {
      throw Error(err.message)
    })
}

export function getAdminDetails (userId) {
  return request('get', `${url}/${userId}`)
    .then(res => {
      const adminDetails = res.body
      return adminDetails
    })
    .catch((err) => {
      throw Error(err.message)
    })
}

export function updateAdminApi (email, currentPassword, newPassword) {
  return request('put', '/auth/admin/update', email, currentPassword, newPassword)
    .then(res => {
      const token = saveUserToken(res.body.token)
      getAdminDetails(token.id)
      return res.body
    })
    .catch((err) => {
      throw Error(err.message)
    })
}
