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
        
        <h3 className='footerTitle'>The benefits of a full time crew without the <br className='tablet1000'/> expense yacht management, delivery and staffing.</h3>
        
        <img src={logo} alt="E2 yacht services" className='logoFooter' />
        
        <div className='contactFooter'>
            <p className='button learnMore'>Contact Us</p>
            <div className='socialMedia'>
                <div className='socialMediaCircle'>
                    <img src={linkedin} alt="in" />
                </div>
                <div className='socialMediaCircle'>
                    <img src={instagram} alt="ig" />
                </div>
            </div>
        </div>

        <div className='indice'>
            <section className='homeSectionFooter'>
                <h6>Home</h6>
                <Link className='linksHomeFooterIndice' to='crew'>Our Crew </Link>
                <Link className='linksHomeFooterIndice' to='contact'>Contact Us </Link>
                <Link className='linksHomeFooterIndice' to='services'>Services </Link>
            </section>
            <section>
                <h6>Location</h6>
                <p className='locationFooter'>Located in Beautiful Paradise Village Marina, Nuevo Vallarta, Nayarit, 63732, Mexico</p>
            </section>
            <section className='contactSectionFooter'>
                <h6>Contact</h6>
                <p className='locationFooter underline marginbottom'>info@e2yachtservices.com</p>
                {/* <br /> */}
                <p className='locationFooter'>Office: +52 322 297 4065</p>
                <p className='locationFooter underline'>WhatsApp: +52 322-134-7397</p>
                <p className='locationFooter'>USA: #1-714-412-6180</p>
            </section>
        </div>


    </div>
  )
}

export default Footer