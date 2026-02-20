import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import InfoImg from '../assets/info__img.svg'
import InfoImgBg from '../assets/info__img--bg.svg'

// Icons
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
      { name: 'HTML5', type: ["Core"], icon: <FaHtml5 />,  color: '#E34F26' },
      { name: 'CSS3', type: ["Core"], icon: <FaCss3Alt />,  color: '#1572B6' },
      { name: 'JavaScript', type: ["Core"], icon: <FaJs />,  color: '#F7DF1E' },
      { name: 'TypeScript', type: ["Core"], icon: <SiTypescript />, level: 80, color: '#3178C6' },
      { name: 'Sass/SCSS', type: ["Core"], icon: <FaSass />,  color: '#CC6699' }
    ],
    frontend: [
      { name: 'React.js', type: ["Frameworks"], icon: <FaReact />,  color: '#61DAFB' },
      { name: 'Vite', type: ["Frameworks"], icon: <SiVite />,  color: '#646CFF' },
      { name: 'Tailwind CSS', type: ["Frameworks"], icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Next.js', type: ["Frameworks"], icon: <SiVercel />, color: '#000000' }
    ],
    tools: [
      { name: 'Git', type: ["Tools"], icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', type: ["Tools"], icon: <FaGithub />, color: '#181717' },
      { name: 'VS Code', type: ["Tools"], icon: <VscVscode />, color: '#007ACC' },
      { name: 'npm', type: ["Tools"], icon: <FaNpm />, color: '#CB3837' },
      { name: 'ESLint', type: ["Tools"], icon: <SiEslint />, color: '#4B32C3' },
      { name: 'Prettier', type: ["Tools"], icon: <SiPrettier />, color: '#F7B93E' }
    ],
    design: [
      { name: 'Figma', type: ['Design'], icon: <FaFigma />, color: '#F24E1E' },
      { name: 'Photoshop', type: ["Design"], icon: <SiAdobephotoshop />, color: '#31A8FF' },
      { name: 'UI/UX Design', type: ["Design"], icon: '🎨', color: '#8B5CF6' }
    ]
  }

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'core', label: 'Core' },
    { id: 'frontend', label: 'Frameworks' },
    { id: 'tools', label: 'Tools' },
    { id: 'design', label: 'Design' }
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
          
          <h2 className='about__heading'>
            Frontend Developer with a <br /> Focus on <span className='text-gradient'>Quality</span> 
          </h2>
          
          <p className='about__subheading'>
            Commercial developer with agency and freelance experience.
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
                  I work with React and modern frontend tools to build applications that are stable, scalable, and easy to maintain.
                  I prefer thoughtful solutions over quick patches.
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
                    <div className='stat__number'>10+</div>
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
                  <h4>Performance-Focused</h4>
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
                  <h4>UI with Clear Logic</h4>
                  <p>Clear structure and consistent interaction patterns</p>
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
                      style={{
                        color: skill.color,
                        backgroundColor: `${skill.color}15`
                      }}
                    >
                      {skill.icon}
                    </div>

                    <span className='skill__name'>{skill.name}</span>
                  </div>

                  <div className='skill__tags'>
                    <span className='tag'>{skill.type}</span>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default About