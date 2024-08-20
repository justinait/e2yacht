import React, { useState } from 'react'
import './Contact.css'
import location from '/icons/location.png'
import phone from '/icons/telefono.png'
import mail from '/icons/Correo.png'

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `Hola, mi nombre es ${name} y mi consulta es: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5213221303534&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  };
  return (
    <div>
      <div className='contactHero heroImages'>
        <br />
        <h3>Visit, call or send email</h3>
        <p>And we will get back to you</p>
      </div>

      <div className='cardsContactContainer'>
        <div className='cardContactDiv'>
          <div className='contactImageCircle'>
            <img src={location} alt="location" className='contactIconLocation'/>
          </div>
          <h5>ADDRESS</h5>
          <p className='cardContactText'>Blvd Nuevo Vallarta PTE, 65 Local 15 Nuevo Vallarta, Nayarit, Mexico, 63732</p>
        </div>
        <div className='cardContactDiv'>
          <div className='contactImageCircle'>
            <img src={phone} alt="location" className='contactIconLocation'/>
          </div>
          <h5>PHONE</h5>
          <p className='cardContactText'>Office: +52 322 297 4065
            WhatsApp: +52 322-134-7397
            Phone USA: #1-714-412-6180
          </p>
        </div>
        <div className='cardContactDiv'>
          <div className='contactImageCircle'>
            <img src={mail} alt="location" className='contactIconLocation'/>
          </div>
          <h5>EMAIL</h5>
          <p className='cardContactText'>info@e2yachtservices.com</p>
        </div>
      </div>
      
      <div className='contactFormBigContainer'>
        <h2 className='contactBigSubtitle'>We’d love to hear from you</h2>

        <form onSubmit={handleSubmit}>
          <div className='inputContainer'>
            <label htmlFor="name" className={`floatingLabel ${name && 'floatingLabelActive'}`}>Name*</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              // placeholder='Name*' 
              className='inputContact'
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="email" className={`floatingLabel ${email && 'floatingLabelActive'}`}>Email*</label>
            <input 
              type="text" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className='inputContact'
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="subject" className={`floatingLabel ${subject && 'floatingLabelActive'}`}>Subject*</label>
            <input 
              type="text" 
              id="subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required 
              className='inputContact'
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="message" className={`floatingLabel ${message && 'floatingLabelActive'}`}>Your message*</label>
            <input 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              // placeholder='Your message*' 
              className='inputContact'
            />
          </div>
        <button className='button formButton'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact