import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className='contact__section' id='contact'>
      <div className='contact__heading--div'>
        <h2 className='heading__h2'>
          Contact <span className='modify__blue'>me</span>
        </h2>
      </div>

      <div className='contact'>
        <form className="contact-form" action="#" method="POST">

          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>

          <div className='contact-field'>
            <label htmlFor="message">Your Message</label>
            <textarea 
              placeholder='Message' 
              id="message" 
              name="message" 
              required
            ></textarea>
          </div>

          <button className='submit--button' type="submit">Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact
