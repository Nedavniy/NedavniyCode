import React from 'react'
import './Card.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Card({ title, description, link, image, stack = [] }) {
    
    return (
      <div className='card'>
        <div className='card__image-container'>
          <img src={image} alt={title} className='card__image' />
          <div className='card__overlay'>
            <a 
              href={link} 
              target='_blank' 
              rel='noopener noreferrer'
              className='card__overlay-btn'
            >
              <FaExternalLinkAlt />
              <span>View Project</span>
            </a>
          </div>
          {stack.length > 0 && (
            <div className='card__badge'>
              <span>{stack[0]}</span>
            </div>
          )}
        </div>
        
        <div className='card__content'>
          <div className='card__header'>
            <h3 className='card__title'>{title}</h3>
            <a 
              href={link} 
              target='_blank' 
              rel='noopener noreferrer'
              className='card__github'
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub />
            </a>
          </div>
          
          <p className='card__description'>{description}</p>
          
          {stack.length > 0 && (
            <div className='card__tech'>
              {stack.slice(0, 3).map(tech => (
                <span key={tech} className='tech__tag'>{tech}</span>
              ))}
              {stack.length > 3 && (
                <span className='tech__tag'>+{stack.length - 3}</span>
              )}
            </div>
          )}
          
          <a 
            href={link} 
            target='_blank' 
            rel='noopener noreferrer'
            className='card__link'
          >
            <FaExternalLinkAlt />
            <span>Open Project</span>
          </a>
        </div>
      </div>
  )
}

export default Card