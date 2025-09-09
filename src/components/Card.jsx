import React from 'react'
import './Card.css'

function Card({ title, description, link, image }) {
    
    return (
      <div className='card'>
        <img src={image} alt={title} className='card__image' />
        <h3 className='card__title'>{title}</h3>
        <p className='card__description'>{description}</p>
        <a href={link} target='_blank' rel='noopener noreferrer' className='card__link'>Open</a>
      </div>
  )
}

export default Card