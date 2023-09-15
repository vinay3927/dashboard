import React from 'react';
import Maindash from './maindash/Maindash';
import Sidebar from './sidebar/Sidebar';
import './Dashboard.css'

const Dashboad = () => {
  return (
    <div className='dash-container'>
        <Sidebar />
        <Maindash />
    </div>
  )
}

export default Dashboad