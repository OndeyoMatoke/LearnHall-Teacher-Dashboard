import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    
    
    <div className='Footer'>
      <div>
        <p>+123456789</p>
      </div>

      <div>
        <Link to="https://www.google.com/" target={'_blank'}>Privacy Policy</Link>
      </div>

      <div>
        <Link to="https://www.google.com/" target={'_blank'} >Terms of Use</Link>
      </div>
    </div>
  )
}
