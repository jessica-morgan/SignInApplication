import React from 'react'
import { Route } from 'react-router-dom'
import SignInForm from './SignInForm'
import SignOutForm from './SignOutForm'
import SignInSuccess from './SignInSuccess'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={SignInForm} />
      <Route path="/signout" component={SignOutForm} />
      <Route path="/signinsuccess" component={SignInSuccess} />
    </div>
  )
}

export default App
