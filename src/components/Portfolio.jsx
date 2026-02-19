import React, { useState, useEffect, useRef } from 'react'
import './Portfolio.css'
import Projects from '../data/projectsData'
import Card from './Card'
import { FaFilter, FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import { SiReact, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si'

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const [viewMode, setViewMode] = useState('grid')

  const allStacks = ['all', ...new Set(Projects.flatMap(project => project.stack))]

  const filteredProjects = selectedCategory === 'all' 
    ? Projects 
    : Projects.filter(project => project.stack.includes(selectedCategory))

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

  const openProjectModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const getStackIcon = (stack) => {
    switch(stack.toLowerCase()) {
      case 'react':
        return <SiReact />
      case 'html':
      case 'html5':
        return <SiHtml5 />
      case 'css':
      case 'css3':
        return <SiCss3 />
      case 'js':
      case 'javascript':
        return <SiJavascript />
      default:
        return <FaExternalLinkAlt />
    }
  }

  const getStackColor = (stack) => {
    switch(stack.toLowerCase()) {
      case 'react':
        return '#61DAFB'
      case 'html':
      case 'html5':
        return '#E34F26'
      case 'css':
      case 'css3':
        return '#1572B6'
      case 'js':
      case 'javascript':
        return '#F7DF1E'
      default:
        return '#8B5CF6'
    }
  }

  return (
    <section className='portfolio__section' id='projects' ref={sectionRef}>
      <div className='portfolio__background'>
        <div className='portfolio__gradient'></div>
        <div className='portfolio__particles'>
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className='portfolio__particle'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className='container'>
        <div className={`portfolio__header ${isVisible ? 'visible' : ''}`}>
          
          <h2 className='portfolio__title'>
            Featured <span className='text-gradient'>Projects</span>
          </h2>
          
          <p className='portfolio__subtitle'>
            A selection of my recent work showcasing frontend development skills 
          </p>
        </div>

        <div className={`portfolio__controls ${isVisible ? 'visible' : ''}`}>
          <div className='controls__filters'>
            <div className='filters__header'>
              <h4>Filter by Technology</h4>
              <span className='filter__count'>{filteredProjects.length} projects</span>
            </div>
            
            <div className='filters__list'>
              {allStacks.map(stack => (
                <button
                  key={stack}
                  className={`filter__btn ${selectedCategory === stack ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(stack)}
                  style={
                    selectedCategory === stack 
                      ? { 
                          backgroundColor: getStackColor(stack),
                          borderColor: getStackColor(stack)
                        }
                      : {}
                  }
                >
                  <span className='filter__icon'>
                    {getStackIcon(stack)}
                  </span>
                  <span className='filter__text'>
                    {stack === 'all' ? 'All Projects' : stack}
                  </span>
                  <span className='filter__counter'>
                    {stack === 'all' 
                      ? Projects.length 
                      : Projects.filter(p => p.stack.includes(stack)).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className='controls__view'>
            <button 
              className={`view__btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label='Grid view'
            >
              <div className='view__grid'>
                <div className='grid__dot'></div>
                <div className='grid__dot'></div>
                <div className='grid__dot'></div>
                <div className='grid__dot'></div>
              </div>
            </button>
            <button 
              className={`view__btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              aria-label='List view'
            >
              <div className='view__list'>
                <div className='list__line'></div>
                <div className='list__line'></div>
                <div className='list__line'></div>
              </div>
            </button>
          </div>
        </div>

        <div className={`portfolio__grid ${viewMode} ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className='project__item'
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProjectModal(project)}
            >
              <div className='project__image'>
                <img src={project.image} alt={project.title} />
                <div className='project__overlay'>
                  <button className='project__view'>
                    View Project
                    <FaExternalLinkAlt />
                  </button>
                </div>
                <div className='project__badge'>
                  <span>{project.stack[0]}</span>
                </div>
              </div>
              
              <div className='project__content'>
                <div className='project__header'>
                  <h3 className='project__title'>{project.title}</h3>
                  <div className='project__links'>
                    <a 
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project__link'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                
                <p className='project__description'>{project.description}</p>
                
                <div className='project__tech'>
                  {project.stack.map(tech => (
                    <span 
                      key={tech}
                      className='tech__badge'
                      style={{ 
                        backgroundColor: `${getStackColor(tech)}20`,
                        color: getStackColor(tech),
                        borderColor: getStackColor(tech)
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`portfolio__empty ${filteredProjects.length === 0 ? 'visible' : ''}`}>
          <div className='empty__illustration'>
            <div className='empty__icon'>💻</div>
            <h3>No projects found</h3>
            <p>Try selecting a different technology filter</p>
            <button 
              className='empty__btn'
              onClick={() => setSelectedCategory('all')}
            >
              Show All Projects
            </button>
          </div>
        </div>

        <div className={`portfolio__cta ${isVisible ? 'visible' : ''}`}>
          <p className='cta__text'>Want to see more? Check out my GitHub for additional projects!</p>
          <a 
            href='https://github.com/Nedavniy'
            target='_blank'
            rel='noopener noreferrer'
            className='cta__btn'
          >
            <FaGithub />
            <span>View GitHub</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className='project__modal' onClick={closeProjectModal}>
          <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <button className='modal__close' onClick={closeProjectModal}>
              <FaTimes />
            </button>
            
            <div className='modal__image'>
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            
            <div className='modal__body'>
              <div className='modal__header'>
                <h2 className='modal__title'>{selectedProject.title}</h2>
                <div className='modal__links'>
                  <a 
                    href={selectedProject.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='modal__link'
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
              
              <p className='modal__description'>{selectedProject.description}</p>
              
              <div className='modal__tech'>
                <h4>Technologies Used</h4>
                <div className='tech__list'>
                  {selectedProject.stack.map(tech => (
                    <div 
                      key={tech}
                      className='tech__item'
                      style={{ 
                        backgroundColor: `${getStackColor(tech)}20`,
                        color: getStackColor(tech)
                      }}
                    >
                      <span className='tech__icon'>{getStackIcon(tech)}</span>
                      <span className='tech__name'>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className='modal__features'>
                <h4>Key Features</h4>
                <ul className='features__list'>
                  <li>Responsive design for all devices</li>
                  <li>Clean and maintainable code structure</li>
                  <li>Modern UI/UX principles applied</li>
                  <li>Performance optimized</li>
                </ul>
              </div>
              
              <div className='modal__actions'>
                <a 
                  href={selectedProject.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='modal__action modal__action--primary'
                >
                  <FaGithub />
                  <span>View on GitHub</span>
                </a>
                <button 
                  className='modal__action modal__action--secondary'
                  onClick={closeProjectModal}
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio