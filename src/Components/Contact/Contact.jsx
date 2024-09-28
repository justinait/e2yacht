import React, { useRef, useState } from 'react'
import './Contact.css'
import Maps from '../Maps/Maps'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const service_id = import.meta.env.VITE_API_SERVICEID;
  const template_id = import.meta.env.VITE_API_TEMPLATEID;
  const public_id = import.meta.env.VITE_API_PUBLICID;
  
  const [input, setInput] = useState({
    name:{      value:'',      error:''    },
    email:{      value:'',      error:''    },
    subject:{      value:'',      error:''    },
    message:{      value:'',      error:''    }
  });

  const handleInputChange = (e) =>{
    setInput(prev=>({
      ...prev,
      [e.target.name]:{
        value:e.target.value,
        error:null
      }
    }));    
  };

  const clearInputValue = () =>{
    setInput({
      name:{        value:'',        error:''      },
      email:{        value:'',        error:''      },
      subject:{        value:'',        error:''      },
      message:{        value:'',        error:''      }
    });    
  };

  const sendEmailForm = async (e) => {
    e.preventDefault();
    let stop = false;
    Object.keys(input).forEach(key=>{
      if (input[key].value.trim().length === 0) {
        stop = true;
        setInput(prev=>({
          ...prev,
          [key]:{
            ...prev[key],
            error:'*Este campo es obligatorio'
          }
        }));
      }
    });
    if(stop) return;
    
    try {
      const emailjs = await import('@emailjs/browser');
      emailjs.init(public_id);
      emailjs.sendForm(service_id, template_id, form.current, public_id)
        .then((result) => {
          console.log(result.text);
          console.log('enviado');
          
          clearInputValue();
        }, (error) => {
          console.log(error);
        });
    } catch (error) {
      console.error('Error al cargar la biblioteca emailjs-com:', error);
    }
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

        <form onSubmit={sendEmailForm} ref={form} className='contactForm'>
          <div className='inputContainer'>
            <label htmlFor="name" className={`floatingLabel ${input.name.value && 'floatingLabelActive'}`}>{t('contact.nameForm')}</label>
            <input 
              type="text" 
              id="name" 
              value={input.name.value} 
              onChange={handleInputChange} 
              required 
              className='inputContact'
              name='name'
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="email" className={`floatingLabel ${input.email.value && 'floatingLabelActive'}`}>{t('contact.emailForm')}</label>
            <input 
              type="text" 
              id="email" 
              value={input.email.value} 
              onChange={handleInputChange} 
              required 
              className='inputContact'
              name='email'
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="subject" className={`floatingLabel ${input.subject.value && 'floatingLabelActive'}`}>{t('contact.subjectForm')}</label>
            <input 
              type="text" 
              id="subject" 
              value={input.subject.value} 
              onChange={handleInputChange} 
              required 
              className='inputContact'
              name='subject'
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="message" className={`floatingLabel ${input.message.value && 'floatingLabelActive'}`}>{t('contact.messageForm')}</label>
            <input 
              id="message" 
              value={input.message.value} 
              onChange={handleInputChange} 
              required 
              // placeholder='Your message*' 
              className='inputContact'
              name='message'
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