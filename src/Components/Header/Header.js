import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { FaBell } from 'react-icons/fa'

export default function Header() {
  return (
   
   
   <div className='Header'>
      <div>
        <img width="40px" src='https://th.bing.com/th/id/OIP.Fp7ZjUivkklGQbt9rlTCpwHaIO?pid=ImgDet&rs=1' alt='lion'></img>
      </div>

      <div>
        <h2>Teacher Dashboard</h2>
      </div>

      <div>
         <FiMessageSquare style={{fontSize:30}}/>
         <FaBell style={{fontSize:30}}/>       
      </div>
    </div>
  )
}
