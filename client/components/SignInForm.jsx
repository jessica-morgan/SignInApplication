import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { signInButtonStyles, CustomDropDown, CustomInput, menuItemStyle, selectStyle, promoContainer } from '../utils'
import { Link } from 'react-router-dom'
import { newVisitorApi } from '../api/visitors'

export default function SignInForm () {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const buttonStyle = signInButtonStyles()
  const menuStyles = menuItemStyle()
  const promotionContainer = promoContainer()

  return (
    <div className='page-background-half'>
      <div className='sign-in-form-image'>
        <header>
          <h1 className='sign-in-page-text'>Sign in at
            <br/>
          Enspiral Dev Academy.</h1>
        </header>
        <br/>
        <form style={{ marginLeft: '10%', paddingBottom: '18vh' }}>
          <br/>
          <CustomInput
            placeholder="name"
            InputProps={{ disableUnderline: true }}
            type='text'
            name='fullName'
            onChange={e => setFullName(e.target.value)}
            required
          />
          <br/><br/>
          <CustomInput
            placeholder="email"
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
          {fullName.length && email.length && reason.length
            ? <Link style={{ textDecoration: 'none' }} to='/signinsuccess'><Button className={buttonStyle.root} onClick={() => newVisitorApi(fullName, email, reason) }>Sign in</Button></Link>
            : <div style={{ height: '9vh' }}></div>
          }
        </form>

        <Link style={{ textDecoration: 'none' }} to='/signout'>
          <h3 className='sign-out-text'>or sign out instead</h3>
        </Link>
        <img className='promo-image' src='deskRentalAd.png'/>
      </div>
    </div>
  )
}
