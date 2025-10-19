import React from 'react';
import { FaFacebookF, FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__nav-row">
        <h4 className="footer__title">Navigation</h4>
        <nav className="navbar footer__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </nav>
      </div>

      <div className="footer__socials">
        <h4 className="footer__title">Socials</h4>
        <nav className="navbar__socials socials">
          <li><a href="https://www.facebook.com/profile.php?id=61550298171843&locale=pl_PL" className="social-link"><FaFacebookF /><span>Facebook</span></a></li>
          <li><a href="https://github.com/Nedavniy" className="social-link"><FaGithub /><span>GitHub</span></a></li>
          <li><a href="https://t.me/nedavniyy" className="social-link"><FaTelegram /><span>Telegram</span></a></li>
          <li><a href="https://www.linkedin.com/in/danylo-nedavnii-b19218269/" className="social-link"><FaLinkedin /><span>LinkedIn</span></a></li>
        </nav>
      </div>

      <div className='footer_contact'>
        <h4 className="footer__title">Contact</h4>
        <nav className="contact-list">
          <li>
            <a href="tel:+48883063828">
              Phone: <span className='modify__blue'>+48 883 063 828</span>
            </a>
          </li>
          <li>
            <a href="mailto:nedavniidanylo@gmail.com">
              Email: <span className='modify__blue'>nedavniidanylo@gmail.com</span>
            </a>
          </li>
        </nav>
    </div>
    </footer>
  );
}

export default Footer;
