import React from 'react'
import './Hero.css'
import HeroImg from '../assets/Hero__img.svg'
import HeroModify from '../assets/heroModify.svg'

function Hero() {
  return (
      <section className='hero__section'>
          <div>
                <h1 className='hero__heading'>frontend <span className='modify__blue'>developer</span></h1>
                <div className='hero__button--list'>
                    <button className='hero__button contact__button'>
                        Contact
                    </button>
                    <button className='hero__button download__button'>
                        Download CV
                    </button>
                </div>
            </div>
          <div className='hero__img'>
                  <img className='hero__img--front' src={HeroImg} alt="Hero" />
                  <img className='hero__img--bg' src={HeroModify} alt="Hero modify" />
          </div>
    </section>
  )
}

export default Hero