import React, { useState } from 'react'
import './Contact.css'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Imitation
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Status reset after 5 sec
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className='contact__section' id='contact'>
      {/* Background Effects */}
      <div className='contact__background'>
        <div className='contact__gradient'></div>
        <div className='contact__particles'></div>
      </div>

      <div className='contact__container'>
        {/* Header */}
        <div className='contact__header'>
          <h1 className='contact__title'>
            Let's <span className='gradient__text'>Connect</span>
          </h1>
          <p className='contact__subtitle'>
            Looking for exciting projects and opportunities. Let’s discuss how I can contribute to your team!
          </p>
        </div>

        <div className='contact__content'>
          {/* Contact Information */}
          <div className='contact__info'>
            <div className='info__card'>
              <div className='info__icon'>
                <Mail className='icon' />
              </div>
              <h3>Email</h3>
              <p>nedavniidanylo@gmail.com</p>
              <a href='mailto:nedavniidanylo@gmail.com' className='info__link'>
                Send message 
              </a>
            </div>

            <div className='info__card'>
              <div className='info__icon'>
                <Phone className='icon' />
              </div>
              <h3>Phone</h3>
              <p>+48 883 063 828</p>
              <a href='tel:+48883063828' className='info__link'>
                Call now 
              </a>
            </div>

            <div className='info__card'>
              <div className='info__icon'>
                <MapPin className='icon' />
              </div>
              <h3>Location</h3>
              <p>Katowice, PL</p>
              <a href='https://maps.app.goo.gl/vBxM84XKUBs6od8cA' className='info__link' target='_blank'>
                Get directions 
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className='contact__form-wrapper'>
            <form className='contact-form' onSubmit={handleSubmit}>
              {/* Form Header */}
              <div className='form__header'>
                <h3>Send a Message</h3>
                <p>Fill out the form below and I'll get back to you ASAP</p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className='status__message success'>
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className='status__message error'>
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              {/* Form Fields */}
              <div className='form__row'>
                <div className='form__field'>
                  <label htmlFor='name'>
                    Your Name <span className='required'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='John Doe'
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className='field__error'>{errors.name}</span>}
                </div>

                <div className='form__field'>
                  <label htmlFor='email'>
                    Your Email <span className='required'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@example.com'
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className='field__error'>{errors.email}</span>}
                </div>
              </div>

              <div className='form__field'>
                <label htmlFor='message'>
                  Your Message <span className='required'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project...'
                  rows='5'
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className='field__error'>{errors.message}</span>}
                <div className='char__count'>
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button 
                type='submit' 
                className='submit__btn'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className='spinner'></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className='contact__social'>
          <p className='social__title'>Or connect via</p>
          <div className='social__links'>
            <a href='https://github.com/Nedavniy' className='social__link' aria-label='GitHub'>
              <svg className='social__icon' viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/danylo-nedavnii-b19218269/' className='social__link' aria-label='LinkedIn'>
              <svg className='social__icon' viewBox='0 0 24 24'>
                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
              </svg>
            </a>
            <a href='https://x.com/DNedavnii117' className='social__link' aria-label='Twitter'>
              <svg className='social__icon' viewBox='0 0 24 24'>
                <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
              </svg>
            </a>
            <a href='https://t.me/nedavniyy' className='social__link' aria-label='Telegram'>
              <svg className='social__icon' viewBox='0 0 24 24'>
                <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.55-1.1.55l.4-5.62 10.12-9.14c.45-.4-.1-.62-.69-.22L6.63 13.08 1.56 11.4c-1.18-.37-1.19-1.18.26-1.75l21.26-8.2c.98-.37 1.84.24 1.53 1.34z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact