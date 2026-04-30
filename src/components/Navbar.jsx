import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-head w-full px-10 py-3'>
        <div className='text-white flex items-center font-semibold'>
            <div className='font-sans text-xl mx-20'> Ankit's Portfolio </div>
            <ul className='list-none flex gap-x-15 mx-40'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
