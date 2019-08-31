import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { styles } from '../utils'
import BackArrow from './BackArrow'

export default function SignOutForm () {
  const [email, setEmail] = useState('')

  const style = styles()

  return (
    <div className='page-background'>
      <header>
        <h1 className='page-text'>Thank you for visiting</h1>
        <h1 style={{ paddingLeft: '10%' }}>Enspiral Dev Academy.</h1>
      </header>
      <br/>
      <form style={{ marginLeft: '10%' }}>
        <br/><br/><br/>
        <TextField
          placeholder='email'
          style={{ paddingLeft: '6px' }}
          name='email'
          InputProps={{ disableUnderline: true }}
          className='form-inputs'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </form>
      <br/>
      {/* on click send new date object to get time of sign out */}
      <Button className={style.root}>Sign out</Button>
      <BackArrow />
    </div>
  )
}
