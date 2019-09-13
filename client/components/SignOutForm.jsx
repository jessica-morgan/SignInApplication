import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { CustomInput, signOutButtonStyles } from '../utils'
import BackArrow from './BackArrow'

export default function SignOutForm () {
  const [email, setEmail] = useState('')
  const buttonStyle = signOutButtonStyles()

  return (
    <div className='page-background-half'>
      <div className='sign-out-form-image'>
        <header>
          <h1 className='sign-out-page-text'>Thank you for visiting
            <br/>Enspiral Dev Academy.</h1>
        </header>
        <br/>
        <form style={{ marginLeft: '10%', marginBottom: '1vh' }}>
          <br/><br/><br/>
          <CustomInput
            placeholder="email"
            InputProps={{ disableUnderline: true }}
            type='text'
            name='email'
            onChange={e => setEmail(e.target.value)}
            required
          />
        </form>
        <br/>
        {/* on click send new date object to get time of sign out */}
        <div style={{ marginBottom: '26vh', marginLeft: '5vw' }}>
          <Button className={buttonStyle.root}>Sign out</Button>
        </div>
        <BackArrow />
      </div>
    </div>
  )
}
