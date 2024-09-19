import React from 'react'
import './Footer.css'
import logo from '/icons/logoFooter.png'
import linkedinHover from '/icons/linkedinHover.png'
import linkedin from '/icons/linkedin.png'
import instagram from '/icons/instagram.png'
import instagramHover from '/icons/instagramHover.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footerContainer homeContainers'>
        <div>
            <h3 className='footerTitle'>The benefits of a full time crew without the <br className='tablet1000'/> expense yacht management, delivery and staffing.</h3>
            <img src={logo} alt="E2 yacht services" className='logoFooter' />
        </div>        
        
        <div className='contactFooter'>
            <Link to='/contact' className='button learnMore'>Contact Us</Link>
            <div className='socialMedia'>
                <Link to='https://www.linkedin.com/in/capteliz/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='socialMediaCircle'>
                    <img src={linkedin} alt="in" />
                </Link>
                <Link to='https://www.instagram.com/e2yachtservices/' target='_blank' className='socialMediaCircle'>
                    <img src={instagram} alt="ig" />
                </Link>
            </div>
        </div>

        <div className='indice'>
            <section className='homeSectionFooter'>
                <h6>Home</h6>
                <Link className='linksHomeFooterIndice' to='crew'>Our Crew </Link>
                <Link className='linksHomeFooterIndice' to='contact'>Contact Us </Link>
                <Link className='linksHomeFooterIndice' to='whatwedo'>Services </Link>
            </section>
            <section>
                <h6>Location</h6>
                <p className='locationFooter'>Located in Beautiful Paradise Village Marina, Nuevo Vallarta, Nayarit, 63732, Mexico</p>
            </section>
            <section className='contactSectionFooter'>
                <h6>Contact</h6>
                <a href="mailto:info@e2yachtservices.com" className='locationFooter underline marginbottom'>info@e2yachtservices.com</a>
                
                <p className='locationFooter'>Office: +52 322 297 4065</p>
                <a href='https://api.whatsapp.com/send/?phone=523221347397&text&type=phone_number&app_absent=0' target='_blank' className='locationFooter underline'>WhatsApp: +52 322-134-7397</a>
                <p className='locationFooter'>USA: #1-714-412-6180</p>
            </section>
        </div>


    </div>
  )
}

export default Footer