import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <ul className='App1'>
        <li className='App2'><NavLink className='App3' to={'/'}>Home</NavLink></li>
        <li className='App2'><NavLink className='App3' to={'/about'}>About</NavLink></li>
        <li className='App2'><NavLink className='App3' to={'/service'}>Service</NavLink></li>
        <li className='App2'><NavLink  className='App3'to={'/contact'}>Contact</NavLink></li>
        </ul>
    </>
  )
}

export default Navbar