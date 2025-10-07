import React from 'react'
import './About.css'
import InfoImg from '../assets/info__img.svg'
import InfoImgBg from '../assets/info__img--bg.svg'

function About() {
  return (
    <section className='about__section' id='about'>
      <div className='about__me'>
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
            and visually appealing. This site showcases my projects and skills,
            highlighting my approach to problem-solving, attention to detail,
            and interest in modern frontend development practices.
          </p>

          <div className='techstack'>
            <h3>Tech <span className='modify__blue'>Stack</span></h3>

            <div className='stack__group'>
              <h4>Core</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div className='stack__group'>
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className='stack__group'>
              <h4>Tools & Ecosystem</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>npm</li>
                <li>Prettier / ESLint</li>
              </ul>
            </div>

            <div className='stack__group'>
              <h4>UI / Design</h4>
              <ul>
                <li>Figma</li>
                <li>Canva / Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='about__img'>
        <img className='info__img--front' src={InfoImg} alt='Me' />
        <img className='info__img--bg' src={InfoImgBg} alt='Background' />
      </div>
    </section>
  )
}

export default About