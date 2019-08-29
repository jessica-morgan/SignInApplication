import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { styles } from '../utils'

export default function SignOutForm () {
  const [fullName, setFullName] = useState('')

  const style = styles()

  return (
    <div className='page-background'>
      <Link to='/'>
        <img src='backarrow.png' className='arrow'>
        </img>
      </Link>
      <header>
        <h1 className='page-text'>Thank you for visiting</h1>
        <h1 style={{ paddingLeft: '10%' }}>Enspiral Dev Academy.</h1>
      </header>
      <br/>
      <form style={{ marginLeft: '10%' }}>
        <br/><br/><br/>
        <TextField
          placeholder="Full name"
          style={{ paddingLeft: '6px' }}
          name='fullName'
          InputProps={{ disableUnderline: true }}
          className="form-inputs"
          type='text'
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
      </form>
      <br/>
      {/* on click send new date object to get time of sign out */}
      <Button className={style.root}>Sign out</Button>
    </div>
  )
}
