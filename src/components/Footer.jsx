import React from 'react'
import './Footer.css'
import { Heart, ArrowUp, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='footer__section' id='footer'>
      {/* Background Effects */}
      <div className='footer__background'>
        <div className='footer__gradient'></div>
        <div className='footer__particles'></div>
      </div>

      <div className='footer__container'>
        {/* Main Footer Content */}
        <div className='footer__main'>
          {/* Logo & Description */}
          <div className='footer__brand'>
            <div className='brand__logo'>
              <span className='logo__text'>DN</span>
            </div>
            <p className='brand__description'>
              Frontend Developer creating modern, responsive web experiences with React and modern technologies.
            </p>
            <div className='brand__socials'>
              <a href='https://github.com/Nedavniy' className='social__link' aria-label='GitHub'>
                <svg className='social__icon' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
              </a>
              <a href='https://www.linkedin.com/in/danylo-nedavnii-b19218269/' className='social__link' aria-label='LinkedIn'>
                <svg className='social__icon' viewBox='0 0 24 24'>
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                </svg>
              </a>
              <a href='https://x.com/DNedavnii117' className='social__link' aria-label='Twitter'>
                <svg className='social__icon' viewBox='0 0 24 24'>
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                </svg>
              </a>
              <a href='https://t.me/nedavniyy' className='social__link' aria-label='Telegram'>
                <svg className='social__icon' viewBox='0 0 24 24'>
                  <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.55-1.1.55l.4-5.62 10.12-9.14c.45-.4-.1-.62-.69-.22L6.63 13.08 1.56 11.4c-1.18-.37-1.19-1.18.26-1.75l21.26-8.2c.98-.37 1.84.24 1.53 1.34z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='footer__navigation'>
            <h3 className='navigation__title'>Navigation</h3>
            <nav className='navigation__links'>
              <a href='#home' className='nav__link'>Home</a>
              <a href='#about' className='nav__link'>About</a>
              <a href='#projects' className='nav__link'>Portfolio</a>
              <a href='#skills' className='nav__link'>Skills</a>
              <a href='#contact' className='nav__link'>Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className='footer__contact'>
            <h3 className='contact__title'>Contact Info</h3>
            <div className='contact__info'>
              <div className='contact__item'>
                <div className='contact__icon'>
                  <Phone size={16} />
                </div>
                <div>
                  <p className='contact__label'>Phone</p>
                  <a href='tel:+48883063828' className='contact__value'>
                    +48 883 063 828
                  </a>
                </div>
              </div>
              
              <div className='contact__item'>
                <div className='contact__icon'>
                  <Mail size={16} />
                </div>
                <div>
                  <p className='contact__label'>Email</p>
                  <a href='mailto:nedavniidanylo@gmail.com' className='contact__value'>
                    nedavniidanylo@gmail.com
                  </a>
                </div>
              </div>
              
              <div className='contact__item'>
                <div className='contact__icon'>
                  <MapPin size={16} />
                </div>
                <div>
                  <p className='contact__label'>Location</p>
                  <p className='contact__value'>Poland, Katowice</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='footer__bottom'>
          <div className='bottom__content'>
            <p className='copyright'>
              © {currentYear} Danylo Nedavnii. All rights reserved.
            </p>
            <p className='made-with'>
              Made with <Heart size={14} color='#ef4444' /> in Poland
            </p>
          </div>
          
          <button 
            className='back-to-top'
            onClick={scrollToTop}
            aria-label='Scroll to top'
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer