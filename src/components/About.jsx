import React from 'react'
import './About.css'
import InfoImg from '../assets/info__img.svg'
import InfoImgBg from '../assets/info__img--bg.svg'

function About() {
  return (
      <section className='about__section' id='about'>
          <div className="about__me">
            <div className='about__info'>
                <h2 className='info__heading'>
                    About <span className='modify__blue'>me</span>
                  </h2>
                  </div>  
                <div className='info__bio'>
                    <p className='bio__text'>
                        I create responsive and interactive web interfaces using React,
                        HTML, CSS, and JavaScript. I focus on writing clean, maintainable
                        code and building user-friendly layouts that are both functional
                        and visually appealing.This site showcases my projects and skills,
                        highlighting my approach to problem-solving, attention to detail,
                        and interest in modern frontend development practices.
                    </p>
                 
              </div>
            </div>
          <div className='about__img'>
                  <img className='info__img--front' src={InfoImg} alt="Hero" />
                  <img className='info__img--bg' src={InfoImgBg} alt="Hero modify" />
              </div>
    </section>
  )
}

export default About