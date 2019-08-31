import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { signInButtonStyles, CustomDropDown, CustomInput, menuItemStyle, selectStyle } from '../utils'
import BackArrow from './BackArrow'
import { Link } from 'react-router-dom'

export default function SignInForm () {
  // Using hooks we are no longer declaring a single object called state that holds our component’s state. Instead,
  // we are now splitting up state into multiple declarations.
  // since this is a functional component, we don’t have setState to help us modify the value of the state
  // variable. What we do have is setFullName whose sole purpose is to update fullName every time we call it.
  // you can name the setFullName function whatever you want. It is a convention, however, to append ‘set’ before
  // the name of the state variable we’re modifying.
  // We’re basically declaring a state variable and a function to allow us to modify the state variable later.
  // The empty string in the useState call is the initial value of fullName and can be set to any required value.
  const [fullName, setFullName] = useState('name')
  const [email, setEmail] = useState('email')
  const [reason, setReason] = useState('reason')
  const buttonStyle = signInButtonStyles()
  const menuStyles = menuItemStyle()
  // const selectStyles = selectStyle()

  return (
    <div className='page-background-half'>
      <div className="page-background-half-image">
        <header>
          <h1 className='page-text'>Sign in at
            <br/>
          Enspiral Dev Academy.</h1>
        </header>
        <br/>
        <form style={{ marginLeft: '10%', paddingBottom: '18vh' }}>
          <br/>
          <CustomInput
            placeholder=" name"
            InputProps={{ disableUnderline: true }}
            type='text'
            name='fullName'
            // dont need to write event handler functions when using hooks
            onChange={e => setFullName(e.target.value)}
            required
          />
          <br/><br/>
          <CustomInput
            placeholder=" email"
            InputProps={{ disableUnderline: true }}
            type='text'
            name='email'
            onChange={e => setEmail(e.target.value)}
            required
          />
          <br/><br/>

          <FormControl>
            <MuiThemeProvider theme={selectStyle}>
              <Select
                className={selectStyle}
                value={reason}
                onChange={e => setReason(e.target.value)}
                input={<CustomDropDown name="reason"
                />}

              >
                <MenuItem className={menuStyles.root} value={'interview'}>Interview</MenuItem>
                <MenuItem className={menuStyles.root}value={'id verification'}>ID verification</MenuItem>
                <MenuItem className={menuStyles.root} value={'day in the life'}>Day in the life</MenuItem>
                <MenuItem className={menuStyles.root} value={'meeting'}>Meeting</MenuItem>
                <MenuItem className={menuStyles.root}value={'meet up'}>Meet up</MenuItem>
                <MenuItem className={menuStyles.root} value={'other'}>Other</MenuItem>
              </Select>
            </MuiThemeProvider>
          </FormControl>
          <br/>
          <Button className={buttonStyle.root}>Sign in</Button>
        </form>
        <Link style={{ textDecoration: 'none' }} to='/signout'>
          <h3 className='sign-out-text'>or sign out instead</h3>
        </Link>
        <BackArrow />
      </div>
    </div>
  )
}
