import React from 'react'
import './Portfolio.css'
import Projects from '../data/projectsData'
import Card from './Card'

function Portfolio() {
  return (
      <section className='portfolio__section' id='projects'>
        <div className='portfolio__works'>
              <h2 className='works__heading'>My recent <span className='modify__blue'>works</span></h2>
        </div>
        <div className='portfolio__list'>
        {Projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}          
        </div>
    </section>
  )
}

export default Portfolio