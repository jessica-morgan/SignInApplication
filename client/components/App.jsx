import React from 'react'
import { Route } from 'react-router-dom'

import SignInForm from './SignInForm'
import SignOutForm from './SignOutForm'
import SignInSuccess from './SignInSuccess'
import SignOutSuccess from './SignOutSuccess'

import SignInAdmin from './SignInAdmin'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={SignInForm} />
      <Route path="/signout" component={SignOutForm} />
      <Route path="/signinsuccess" component={SignInSuccess} />
      <Route path="/signoutsuccess" component={SignOutSuccess} />

      <Route path="/admin/signin" component={SignInAdmin} />
    </div>
  )
}

export default App
