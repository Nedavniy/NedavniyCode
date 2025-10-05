import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
          <div className='footer__nav-row'>
              <nav className='navbar'>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Me</a></li>
                  <li><a href="#">Contact</a></li>
              </nav>
          </div>
          <div className='footer__socials'>
                <nav className='navbar'>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Telegram</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">GitHub</a></li>
                </nav>
          </div>
    </footer>
  )
}

export default Footer