import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import InfoImg from '../assets/info__img.svg'
import InfoImgBg from '../assets/info__img--bg.svg'

// Иконки для навыков
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaGitAlt, FaGithub, FaFigma, 
  FaNpm, FaNodeJs, FaSass 
} from 'react-icons/fa'
import { SiTypescript, SiVite, SiTailwindcss, SiVercel, SiEslint, SiPrettier, SiAdobephotoshop } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const skillsData = {
    core: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
      { name: 'Sass/SCSS', icon: <FaSass />, level: 85, color: '#CC6699' }
    ],
    frontend: [
      { name: 'React.js', icon: <FaReact />, level: 92, color: '#61DAFB' },
      { name: 'Vite', icon: <SiVite />, level: 85, color: '#646CFF' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: '#06B6D4' },
      { name: 'Next.js', icon: <SiVercel />, level: 75, color: '#000000' }
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, level: 88, color: '#181717' },
      { name: 'VS Code', icon: <VscVscode />, level: 95, color: '#007ACC' },
      { name: 'npm', icon: <FaNpm />, level: 85, color: '#CB3837' },
      { name: 'ESLint', icon: <SiEslint />, level: 80, color: '#4B32C3' },
      { name: 'Prettier', icon: <SiPrettier />, level: 85, color: '#F7B93E' }
    ],
    design: [
      { name: 'Figma', icon: <FaFigma />, level: 85, color: '#F24E1E' },
      { name: 'Photoshop', icon: <SiAdobephotoshop />, level: 70, color: '#31A8FF' },
      { name: 'UI/UX Design', icon: '🎨', level: 75, color: '#8B5CF6' }
    ]
  }

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'core', label: 'Core Technologies' },
    { id: 'frontend', label: 'Frontend Frameworks' },
    { id: 'tools', label: 'Tools & Ecosystem' },
    { id: 'design', label: 'Design & UI/UX' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsData).flat()
    }
    return skillsData[activeCategory] || []
  }

  return (
    <section className='about__section' id='about' ref={sectionRef}>
      <div className='about__container container'>
        <div className={`about__header ${isVisible ? 'visible' : ''}`}>
          <div className='about__badge'>
            <span className='badge__text'>About Me</span>
            <div className='badge__line'></div>
          </div>
          
          <h2 className='about__heading'>
            Crafting Digital <span className='text-gradient'>Experiences</span> 
            <br />That <span className='text-gradient'>Inspire</span>
          </h2>
          
          <p className='about__subheading'>
            Passionate frontend developer focused on creating exceptional 
            web experiences with modern technologies
          </p>
        </div>

        <div className='about__content'>
          <div className={`about__info ${isVisible ? 'visible' : ''}`}>
            <div className='about__card'>
              <div className='card__header'>
                <div className='card__avatar'>
                  <div className='avatar__image'>
                    <span className='avatar__initials'>DN</span>
                  </div>
                  <div className='avatar__status'></div>
                </div>
                
                <div className='card__title'>
                  <h3>Danylo Nedavnii</h3>
                  <p className='card__subtitle'>Frontend Developer</p>
                </div>
              </div>

              <div className='card__body'>
                <p className='about__description'>
                  I specialize in building responsive, accessible, and 
                  performant web applications using modern frontend technologies. 
                  With a strong focus on user experience and clean code, I transform 
                  complex problems into intuitive digital solutions.
                </p>
                
                <div className='about__stats'>
                  <div className='stat'>
                    <div className='stat__number'>2+</div>
                    <div className='stat__label'>Years Coding</div>
                  </div>
                  <div className='stat__divider'></div>
                  <div className='stat'>
                    <div className='stat__number'>10+</div>
                    <div className='stat__label'>Projects</div>
                  </div>
                  <div className='stat__divider'></div>
                  <div className='stat'>
                    <div className='stat__number'>5+</div>
                    <div className='stat__label'>Technologies</div>
                  </div>
                </div>
              </div>

              <div className='card__footer'>
                <a href='#contact' className='about__cta'>
                  <span>Let's Work Together</span>
                  <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
                    <path d='M5 12H19M19 12L13 6M19 12L13 18' stroke='currentColor' strokeWidth='2'/>
                  </svg>
                </a>
              </div>
            </div>

            <div className='about__features'>
              <div className='feature'>
                <div className='feature__icon'>⚡</div>
                <div className='feature__content'>
                  <h4>Fast & Performant</h4>
                  <p>Optimized code for maximum performance and speed</p>
                </div>
              </div>
              
              <div className='feature'>
                <div className='feature__icon'>📱</div>
                <div className='feature__content'>
                  <h4>Responsive Design</h4>
                  <p>Perfect experience across all devices and screens</p>
                </div>
              </div>
              
              <div className='feature'>
                <div className='feature__icon'>🔧</div>
                <div className='feature__content'>
                  <h4>Clean Code</h4>
                  <p>Maintainable, scalable, and well-documented codebase</p>
                </div>
              </div>
              
              <div className='feature'>
                <div className='feature__icon'>🎨</div>
                <div className='feature__content'>
                  <h4>Modern UI/UX</h4>
                  <p>Intuitive interfaces with attention to detail</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`about__skills ${isVisible ? 'visible' : ''}`}>
            <div className='skills__header'>
              <h3 className='skills__title'>
                Technical <span className='text-gradient'>Expertise</span>
              </h3>
              
              <div className='skills__filters'>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter__btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className='skills__grid'>
              {getFilteredSkills().map((skill, index) => (
                <div 
                  key={skill.name} 
                  className='skill__card'
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className='skill__header'>
                    <div 
                      className='skill__icon'
                      style={{ color: skill.color, backgroundColor: `${skill.color}15` }}
                    >
                      {skill.icon}
                    </div>
                    <span className='skill__name'>{skill.name}</span>
                  </div>
                  
                  <div className='skill__level'>
                    <div className='level__bar'>
                      <div 
                        className='level__fill'
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                        }}
                      ></div>
                    </div>
                    <span className='level__percentage'>{skill.level}%</span>
                  </div>
                  
                  <div className='skill__tags'>
                    <span className='tag'>Frontend</span>
                    <span className='tag'>Development</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='skills__legend'>
              <div className='legend__item'>
                <div className='legend__dot' style={{ background: '#10B981' }}></div>
                <span>Advanced (85-100%)</span>
              </div>
              <div className='legend__item'>
                <div className='legend__dot' style={{ background: '#F59E0B' }}></div>
                <span>Intermediate (70-84%)</span>
              </div>
              <div className='legend__item'>
                <div className='legend__dot' style={{ background: '#EF4444' }}></div>
                <span>Learning (Below 70%)</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`about__image ${isVisible ? 'visible' : ''}`}>
          <div className='image__container'>
            <img className='about__img--bg' src={InfoImgBg} alt='Background pattern' />
            <img className='about__img--front' src={InfoImg} alt='Danil Nedavniy' />
            
            <div className='image__overlay'></div>
            
            <div className='image__badge'>
              <span className='badge__icon'>💻</span>
              <div className='badge__content'>
                <span className='badge__title'>Currently Working On</span>
                <span className='badge__text'>React Projects</span>
              </div>
            </div>
            
            <div className='image__floating image__floating--1'></div>
            <div className='image__floating image__floating--2'></div>
            <div className='image__floating image__floating--3'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About