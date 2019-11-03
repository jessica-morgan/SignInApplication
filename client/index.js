import React, { setGlobal } from 'reactn'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'
import { getUserToken } from './lib/auth'

setGlobal({
  isAuthenticated: false,
  user: getUserToken()
})

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
})
