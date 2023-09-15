import React from 'react'
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        Dashboard
        <div className='icons'>
        <div className='search-box'>
          <input type='text' placeholder='Search...' />
          <FaSearch className='icon' />
        </div>
          <FaBell className='icon' />
          <FaUser className='icon' />
        </div>
      </div>
  )
}

export default Header