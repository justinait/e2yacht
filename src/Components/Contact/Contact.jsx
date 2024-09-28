import React, { useState } from 'react'
import './Contact.css'
import Maps from '../Maps/Maps'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

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
        <h3>{t('contact.header')}</h3>
        <p className='contactHeroP'>{t('contact.subtitle')}</p>
      </div>

      <div className='cardsContactContainer'>
        <div className='cardContactDiv'>
          <div className='contactImageCircle'>
            <PlaceIcon  className='contactIconMui' />
          </div>
          <h5>{t('contact.address')}</h5>
          <a href='https://maps.app.goo.gl/DphqnYiVoGED6PnV9' target='_blank' className='cardContactText'>Blvd Nuevo Vallarta PTE, 65 Local 15 Nuevo Vallarta, Nayarit, Mexico, 63732</a>
        </div>
        <div className='cardContactDiv'>
          <div className='contactImageCircle'>
            < CallIcon  className='contactIconMui'/>
          </div>
          <h5>{t('contact.phone')}</h5>
          <p className='cardContactText'>
            {t('contact.office')}: +52 322 297 4065 <br />
            WhatsApp: +52 322-134-7397 <br />
            {t('contact.phoneUsa')}: #1-714-412-6180
          </p>
        </div>
        <div className='cardContactDiv'>
          <div className='contactImageCircle'>
            < EmailIcon className='contactIconMui' color='blue' />
          </div>
          <h5>EMAIL</h5>
          <a href="mailto:info@e2yachtservices.com" className='cardContactText'>info@e2yachtservices.com</a>
        </div>
      </div>
      
      <div className='contactFormBigContainer'>
        <h2 className='contactBigSubtitle'>{t('contact.subtitle2')}</h2>

        <form onSubmit={handleSubmit} className='contactForm'>
          <div className='inputContainer'>
            <label htmlFor="name" className={`floatingLabel ${name && 'floatingLabelActive'}`}>{t('contact.nameForm')}</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className='inputContact'
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="email" className={`floatingLabel ${email && 'floatingLabelActive'}`}>{t('contact.emailForm')}</label>
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
            <label htmlFor="subject" className={`floatingLabel ${subject && 'floatingLabelActive'}`}>{t('contact.subjectForm')}</label>
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
            <label htmlFor="message" className={`floatingLabel ${message && 'floatingLabelActive'}`}>{t('contact.messageForm')}</label>
            <input 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              // placeholder='Your message*' 
              className='inputContact'
            />
          </div>
        <button className='button contactButtonHover formButton'>{t('contact.sendForm')}</button>
        </form>
      </div>

      <div className=' homeContainers'>
        <h5 className='titlesHome'>{t('contact.whereTitle')}</h5>
        <h2 className='subtitlesHome'>{t('contact.whereVisitUs')}</h2>

        <Maps />
        
      </div>
    </div>
  )
}

export default Contact