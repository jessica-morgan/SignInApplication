import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useStyles } from '../utils'

export default function MainPage () {
  const classes = useStyles()

  return (
    <div className='page-background'>
      <header>
        <h1 className='page-text'>Welcome to</h1>
        <h1 style={{ paddingLeft: '10%' }}>Enspiral Dev Academy.</h1>
      </header>
      <div className='button-container-main'>
        <Link style={{ textDecoration: 'none' }} to='/signin'>
          <Button className={classes.root}>Sign in</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/signout'>
          <Button className={classes.root}>Sign out</Button>
        </Link>
      </div>
    </div>
  )
}
