import React from 'react'
import { Link } from 'react-router-dom'

const BackArrow = () => {
  return (
    <div>
      <Link to='/'>
        <img src='backarrow.png' className='arrow'>
        </img>
      </Link>
    </div>
  )
}

export default BackArrow
