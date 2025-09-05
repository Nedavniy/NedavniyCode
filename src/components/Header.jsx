import React from 'react'
import Navbar from './Navbar.jsx'
import './Header.css'
function Header() {
    return (
    <>
        <header className='header '>
            <div className='header__logo'>
                <span>nedavnii</span>
            </div>
        
        <Navbar />
        </header>
    </>
  )
}

export default Header