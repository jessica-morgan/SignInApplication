import React, { useState, useDispatch } from 'reactn'

import Button from '@material-ui/core/Button'

// import Input from '@material-ui/core/Input'
// import InputLabel from '@material-ui/core/InputLabel'
// import clsx from 'clsx'

import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import FormControl from '@material-ui/core/FormControl'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'

import { signInButtonStyles, CustomInput, selectStyle } from '../utils'
import { updateAdminApi } from '../api/admin'

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

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   margin: {
//     margin: theme.spacing(1)
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3)
//   },
//   textField: {
//     width: 200
//   }
// }))

export default function EditAdminDetails () {
  const classes = useStyles()
  // const [values, setValues] = React.useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false
  // })

  // const handleChange = prop => event => {
  //   setValues({ [prop]: event.target.value })
  // }

  // const handleClickShowPassword = () => {
  //   setValues({ showPassword: !values.showPassword })
  // }

  // const handleMouseDownPassword = event => {
  //   event.preventDefault()
  // }

  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showPassword, toggleShowPassword] = useState(false)
  // const [ admin, setAdmin ] = useGlobal('user')

  const signInReducer = (global, dispatch, action) => ({
    user: action.user,
    isAuthenticated: true
  })

  const getAdminToken = useDispatch(signInReducer)

  const buttonStyle = signInButtonStyles()

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
    if (e) {
      e.preventDefault()
    }
    updateAdminApi(email, currentPassword, newPassword)
      .then(body => {
        getAdminToken(body)
      })
  }

  return (
    <div className={classes.root}>
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
                required={true}
                autoComplete='email'
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>

            <br/><br/>

            <FormControl className={classes.formControl}>
              <MuiThemeProvider theme={selectStyle}>
                <CustomInput className={classes.password}
                  id='current-password'
                  variant='outlined'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Current Password'
                  name='currentPassword'
                  value={currentPassword}
                  required={true}
                  // autoComplete='password'
                  onChange={e => setCurrentPassword(e.target.value)}
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

            <br/><br/>

            <FormControl className={classes.formControl}>
              <MuiThemeProvider theme={selectStyle}>
                <CustomInput className={classes.password}
                  id='new-password'
                  variant='outlined'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='New Password'
                  name='NewPassword'
                  value={newPassword}
                  required={true}
                  // autoComplete='password'
                  onChange={e => setNewPassword(e.target.value)}
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

            <br/><br/>

            <FormControl className={classes.formControl}>
              <MuiThemeProvider theme={selectStyle}>
                <CustomInput className={classes.password}
                  id='confirm-new-password'
                  variant='outlined'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Confirm New Password'
                  name='confirmNewPassword'
                  value={confirmNewPassword}
                  required={true}
                  // autoComplete='password'
                  onChange={e => setConfirmNewPassword(e.target.value)}
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

            {/* <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl> */}

            <br/>

            {/* should link to /signinsuccess provided all fields have been filled */}
            <Button className={buttonStyle.root}
              type='submit'
              onClick={handleSubmit}>
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
