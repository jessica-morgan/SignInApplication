import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
// import Input from '@material-ui/core/Input'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { styles } from '../utils'

// ADD A CATEGORY DROP DOWN INPUT

export default function SignInForm () {
  // Using hooks we are no longer declaring a single object called state that holds our component’s state. Instead,
  // we are now splitting up state into multiple declarations.
  // since this is a functional component, we don’t have setState to help us modify the value of the state
  // variable. What we do have is setFullName whose sole purpose is to update fullName every time we call it.
  // you can name the setFullName function whatever you want. It is a convention, however, to append ‘set’ before
  // the name of the state variable we’re modifying.
  // We’re basically declaring a state variable and a function to allow us to modify the state variable later.
  // The empty string in the useState call is the initial value of fullName and can be set to any required value.
  const [fullName, setFullName] = useState('')
  const [reason, setReason] = useState('')
  const [email, setEmail] = useState('')

  const style = styles()

  return (
    <div className='page-background'>
      <div className="page-background-image">
        <header>
          <h1 className='page-text'>Sign in at</h1>
          <h1 style={{ paddingLeft: '10%' }}>Enspiral Dev Academy.</h1>
        </header>
        <form style={{ marginLeft: '10%' }}>
          <br/>
          <TextField
            style={{ paddingLeft: '6px' }}
            placeholder="Name"
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
          <FormControl variant="filled" className='form-drop-down'>
            <InputLabel>
          Reason for visit
            </InputLabel>
            <Select
              value={reason}
              onChange={e => setReason(e.target.value)}
              input={<FilledInput name="reason"
                required />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'interview'}>Interview</MenuItem>
              <MenuItem value={''}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </form>
        <br/>
        {/* on click send new date object to get time of sign out */}
        <Button className={style.root}>Sign in</Button>
        {/* Type something into the input fields and click the button below- state variables will print in the console */}
        {/* <button onClick={() => { console.log(fullName, reason) }}>state</button> */}
        <Link to='/'>
          <img src='backarrow.png' className='arrow'>
          </img>
        </Link>
      </div>
    </div>
  )
}
