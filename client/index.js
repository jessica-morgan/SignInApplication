import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './components/App'

// reactn & devtools
import React, { setGlobal } from 'reactn'
import addReactNDevTools from 'reactn-devtools'

// user token
import { getUserToken } from './lib/auth'

setGlobal({
  isAuthenticated: false,
  user: getUserToken()
})

addReactNDevTools()

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
})
