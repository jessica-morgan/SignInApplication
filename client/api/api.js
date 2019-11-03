import request from 'superagent'

const url = 'http://localhost:3000/visitors'

// gets all visitors
export function getAllVisitorsApi () {
  return request
    .get(`${url}/allVisitors`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get visitors')
    })
}

// gets a visitor by email
export function getVisitorByEmailApi (email) {
  return request
    .get(`${url}/visitor/${email}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get visitor')
    })
}

// gets all unsigned out visitors from the last 24 hours
export function getAllUnsignedOutVisitorsApi () {
  return request
    .get(`${url}/unsignedOut`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get visitors')
    })
}

// posts a new visitor
export function newVisitorApi (fullName, email, reason) {
  const signInTime = new Date()
  return request
    .post(`${url}/signIn`)
    .send({
      name: fullName,
      email: email,
      reason: reason,
      sign_in_time: signInTime
    })
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot add visitor')
    })
}

// posts a visitors sign out time
export function visitorSignOutApi (email, signOutTime) {
  return request
    .post(`${url}/signOut`)
    .send({
      email: email,
      sign_out_time: signOutTime
    })
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot sign out visitor')
    })
}
