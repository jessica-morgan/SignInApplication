import React from 'react'
import BackArrow from './BackArrow'

export default function SignInSuccess () {
  return (
    <div className='page-background-full'>
      <div className='sign-in-success-image'>
        <h1 className='sign-in-success-page-text-h1'>Thank you for visiting Enspiral Dev Academy</h1>
        <h2 className='sign-in-success-page-text-h2'>Please remember to sign out once your visit with us had ended</h2>
        <div style={{ marginTop: '38vh' }}>
          <BackArrow/>
        </div>
      </div>
    </div>
  )
}
