import React from 'react'
import './Contact.css'
import location from '/icons/location.png'
import phone from '/icons/telefono.png'
import mail from '/icons/Correo.png'

function Contact() {

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

      </div>
    </div>
  )
}

export default Contact