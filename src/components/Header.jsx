import React from 'react'
import { AiOutlineLogin } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='header'>
        <div className="header-container">
         <div className='header-left'>
            <div className='header-left-info'>
                <h2>MetaHome</h2>
                <p>Time</p>
                <p>Date</p>
            </div>
         </div>
         <div className='header-right'>
            <div className='header-right-link'>
                <p className='header-text'>Customer Dashboard</p>
                <p className='header-text'>Hello Dambujo</p>
                <AiOutlineLogin className='header-icon'/>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Header