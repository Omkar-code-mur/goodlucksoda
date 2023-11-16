import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav'>
        <ul>
            <Link to="/"><li className='nav-item'>Goodluck Soda</li></Link>
            <Link to="/home"><li className='nav-item'>Home</li></Link>
            <Link to="/about"><li className='nav-item'>About</li></Link>
            
        </ul>
    </div>
  )
}
