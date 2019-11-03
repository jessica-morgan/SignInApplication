import request from 'superagent'
// import { saveUserToken } from '../lib/auth'

const url = 'http://localhost:3000/api/v1/auth'

export function signInAdminApi (email) {
  return request('post', `${url}/signin`, email)
    .then(res => {
      // const token = saveUserToken(res.body.token)
      // getAdminDetails(token.id)
      return res.body
    })
    .catch((err) => {
      throw Error(err.message)
    })
}

export function getAdminDetails (userId) {
  return request('get', `${url}/admin/${userId}`)
    .then(res => {
      const adminDetails = res.body
      return adminDetails
    })
    .catch((err) => {
      throw Error(err.message)
    })
}
