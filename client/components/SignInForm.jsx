import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import Button from '@material-ui/core/Button'
import { signInButtonStyles, CustomDropDown, ButtonMargin } from '../utils'
import BackArrow from './BackArrow'

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
  const buttonMargin = ButtonMargin()
  const buttonStyle = signInButtonStyles()

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
          <TextField
            style={{ paddingLeft: '6px' }}
            placeholder="name"
            InputProps={{ disableUnderline: true }}
            className="form-inputs"
            type='text'
            name='fullName'
            value={fullName}
            // dont need to write event handler functions when using hooks
            onChange={e => setFullName(e.target.value)}
            required
          />
          <br/><br/>
          <TextField
            style={{ paddingLeft: '6px' }}
            placeholder="email"
            InputProps={{ disableUnderline: true }}
            className="form-inputs"
            type='text'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <br/><br/>

          <FormControl className={buttonMargin.margin}>
            <NativeSelect
              value={reason}
              onChange={e => setReason(e.target.value)}
              input={<CustomDropDown name="reason" />}
            >
              <option>reason for visit</option>
              <option value={'interview'}>Interview</option>
              <option value={'id verification'}>ID verification</option>
              <option value={'day in the life'}>Day in the life</option>
              <option value={'meeting'}>Meeting</option>
              <option value={'meet up'}>Meet up</option>
              <option value={'other'}>Other</option>
            </NativeSelect>
          </FormControl>
          <br/>
          <Button className={buttonStyle.root}>Sign in</Button>
        </form>
        <BackArrow />
      </div>
    </div>
  )
}
