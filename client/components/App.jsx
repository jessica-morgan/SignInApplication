import React from 'react'
import { Route } from 'react-router-dom'
// import MainPage from './MainPage'
import SignInForm from './SignInForm'
import SignOutForm from './SignOutForm'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={SignInForm} />
      {/* <Route path="/signin" component={SignInForm} /> */}
      <Route path="/signout" component={SignOutForm} />
    </div>
  )
}

export default App
