import React from 'react'
import BackArrow from './BackArrow'

export default function SignOutSuccess () {
  return (
    <div className='page-background-full'>
      <div className='sign-out-success-image'>
        <h1 className='sign-out-success-page-text-h1'>Thank you {} for visiting Enspiral Dev Academy</h1>
        <h2 className='sign-out-success-page-text-h2'>Please grab a business card and stay in touch!</h2>
        <div style={{ marginTop: '38vh' }}>
          <BackArrow/>
        </div>
      </div>
    </div>
  )
}
