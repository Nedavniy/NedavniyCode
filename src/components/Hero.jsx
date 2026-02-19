import React, { useEffect, useState } from 'react';
import './Hero.css';
import HeroImg from '../assets/hero__img.svg';
import HeroModify from '../assets/heroModify.svg';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    setIsVisible(true);
    

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {

    const link = document.createElement('a');
    link.href = '/cv.pdf'; 
    link.download = 'Nedavnii_Danylo_CV.pdf';
    link.click()
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`
            }}></div>
          ))}
        </div>
      </div>

      <div className="container hero__container">
        <div className={`hero__content ${isVisible ? 'visible' : ''}`}>
          
          <h1 className="hero__title">
            <p>Danylo</p>
            <p><span className='hero__surname'>Nedavnii</span></p>
          </h1>
          
          <div className="hero__role">
            <div className="role__container">
              <span className="role__prefix">I am a </span>
              <div className="role__text">
                {roles.map((role, index) => (
                  <span 
                    key={role} 
                    className={`role__item ${index === textIndex ? 'active' : ''}`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="role__cursor"></div>
          </div>
          
          <div className="hero__description">
            <p>
              Frontend developer who builds websites the right way.
              <br />
              Websites that work exactly as intended.
            </p>

            <p>
              No hacks. No random decisions. No “good enough.”
            </p>

            <p>
              For me, quality isn’t a checkbox — it’s the foundation of the product.
              Thoughtful architecture, clean code, predictable interfaces, and attention to detail aren’t extras — they’re the standard.
            </p>

            <p>I build interfaces that:</p>

            <ul>
              <li>Work <span className=''>reliably</span></li>
              <li>Look clean</li>
              <li>Scale properly</li>
              <li>Don’t break a month later</li>
            </ul>

            <p>If it’s built — it’s built right.</p>
        </div>
          
          <div className="hero__stats">
            <div className="stat__item">
              <span className="stat__number">2+</span>
              <span className="stat__label">Years Experience</span>
            </div>
            <div className="stat__divider"></div>
            <div className="stat__item">
              <span className="stat__number">10+</span>
              <span className="stat__label">Projects Completed</span>
            </div>
            <div className="stat__divider"></div>
            <div className="stat__item">
              <span className="stat__number">100%</span>
              <span className="stat__label">Client Satisfaction</span>
            </div>
          </div>
          
          <div className="hero__buttons">
            <button 
              className="hero__button hero__button--primary"
              onClick={scrollToContact}
            >
              <span>Get in Touch</span>
              <svg className="button__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            
            <button 
              className="hero__button hero__button--secondary"
              onClick={handleDownloadCV}
            >
              <svg className="button__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Download CV</span>
            </button>
          </div>
          
          <div className="hero__socials">
            <a href="https://github.com/Nedavniy" className="social__link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/danylo-nedavnii-b19218269/" className="social__link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://t.me/nedavniyy" className="social__link" aria-label="Telegram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.697.064-1.225-.461-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className={`hero__images ${isVisible ? 'visible' : ''}`}>
          <div className="hero__image-container">
            <img 
              className="hero__image hero__image--bg" 
              src={HeroModify} 
              alt="Decorative background elements" 
            />
            <img 
              className="hero__image hero__image--front" 
              src={HeroImg} 
              alt="Danil Nedavniy - Frontend Developer" 
            />
            <div className="hero__image-glow"></div>
            
            {/* Декоративные элементы */}
            <div className="floating-element floating-element--1"></div>
            <div className="floating-element floating-element--2"></div>
            <div className="floating-element floating-element--3"></div>
            
            <div className="hero__badge">
              <span className="badge__text">Available for work</span>
              <div className="badge__dot"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero__scroll-indicator">
        <span>Scroll down</span>
        <div className="scroll-arrow">
          <div className="scroll-arrow__line"></div>
          <div className="scroll-arrow__line"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;