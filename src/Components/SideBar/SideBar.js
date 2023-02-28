import React from 'react'
import { Link } from 'react-router-dom'





export default function SideBar() {
  return (
    <div>
      <nav className='SideBar'>
        <ul>
            <li>
                <Link to="/">Home</Link>                
            </li>

            <li>
                <Link to="chatgpt">ChatGpt</Link>
            </li>

            <li>
                <Link to="pressbooks">Pressbooks</Link>
            </li>

            <li>
                <Link to="oercommons">Oercommons</Link>
            </li>

            <li>
                <Link to="creativecommons">Creativecommons</Link>
            </li>

        </ul>
      </nav>
    </div>
  )
}
