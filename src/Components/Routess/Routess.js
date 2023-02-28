import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chatgpt from '../../Components2/Chatgpt'
import Creativecommons from '../../Components2/Creativecommons'
import Oercommons from '../../Components2/Oercommons'
import Pressbooks from '../../Components2/Pressbooks'
import Home from '../../Components2/Home'

export default function Routess() {
  return (
    
    
    <div className='Routess'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chatgpt' element={<Chatgpt/>}/>
        <Route path='/creativecommons' element={<Creativecommons/>}/>
        <Route path='oercommons' element={<Oercommons/>} />
        <Route path='pressbooks' element={<Pressbooks/>} />
      </Routes>      
    </div>
  )
}
