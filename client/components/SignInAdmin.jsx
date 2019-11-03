import React, { useState, useDispatch } from 'reactn'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import FormControl from '@material-ui/core/FormControl'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'

import { signInButtonStyles, CustomInput, selectStyle } from '../utils'
import { signInAdminApi } from '../api/admin'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    flexBasis: 200,
    background: 'white',
    borderRadius: 10
  },
  email: {
    paddingRight: theme.spacing(8),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  password: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}))

export default function SignInAdmin () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, toggleShowPassword] = useState(false)
  // const [ admin, setAdmin ] = useGlobal('user')

  const signInReducer = (global, dispatch, action) => ({
    user: action.user,
    isAuthenticated: true
  })

  const getAdminToken = useDispatch(signInReducer)

  const buttonStyle = signInButtonStyles()
  const classes = useStyles()

  // const handleSubmit = (e) => {
  //   const user = {
  //     email,
  //     password
  //   }
  //   const goToHome = () => this.props.history.push('/')
  //   signInAdmin(user, goToHome)
  //   e.preventDefault()
  // }

  const handleSubmit = (e) => {
    const user = {
      email,
      password
    }
    if (e) {
      e.preventDefault()
    }
    signInAdminApi(email)
      .then(body => {
        getAdminToken(body)
      })
  }

  return (
    <div className='page-background-full'>
      <div className='admin-signin-image'>
        <header>
          <h1 className='admin-signin-page-text-h1'>Dev Academy
            <br/>
          Admin.</h1>
        </header>
        <br/>
        <form className='admin-form'>
          <br/>
          <FormControl className={classes.formControl}>
            <CustomInput className={classes.email}
              id='email'
              variant='outlined'
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              required='true'
              autoComplete='email'
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>

          <br/><br/>

          <FormControl className={classes.formControl}>
            <MuiThemeProvider theme={selectStyle}>
              <CustomInput className={classes.password}
                id='password'
                variant='outlined'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                name='password'
                value={password}
                required='true'
                autoComplete='password'
                onChange={e => setPassword(e.target.value)}
                endAdornment= {
                  <InputAdornment position='end'>
                    <IconButton className={classes.icon}
                      edge='end'
                      aria-label='toggle password visibility'
                      onClick={() => toggleShowPassword(!showPassword)}
                      onMouseDown={e => e.preventDefault()}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </MuiThemeProvider>
          </FormControl>
          <br/>
          {/* should link to /signinsuccess provided all fields have been filled */}
          <Button className={buttonStyle.root}
            type='submit'
            onClick={handleSubmit}>
              Sign in
          </Button>
        </form>
      </div>
    </div>
  )
}
