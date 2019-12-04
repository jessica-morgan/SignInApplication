import React from 'react'
import { Route } from 'react-router-dom'

import SignInForm from './SignInForm'
import VisitorSignOut from './VisitorSignOut'
import SignInSuccess from './SignInSuccess'
import SignOutSuccess from './SignOutSuccess'
import Dashboard from './Dashboard'

import SignInAdmin from './SignInAdmin'
import EditAdminDetails from './EditAdminDetails'

const App = () => {
  return (
    <div>
      <Route exact path="/" component={SignInForm} />
      <Route path="/signout" component={VisitorSignOut} />
      <Route path="/signinsuccess" component={SignInSuccess} />
      <Route path="/signoutsuccess" component={SignOutSuccess} />
      <Route exact path="/admin/signin" component={SignInAdmin} />
      <Route exact path="/admin/dashboard" component={Dashboard} />
      <Route exact path="/admin/account-edit" component={EditAdminDetails} />
    </div>
  )
}

export default App
