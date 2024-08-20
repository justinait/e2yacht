import React from 'react'
import './Footer.css'
import logo from '/icons/logoFooter.png'
import linkedinHover from '/icons/linkedinHover.png'
import linkedin from '/icons/linkedin.png'
import instagram from '/icons/instagram.png'
import instagramHover from '/icons/instagramHover.png'

function Footer() {
  return (
    <div className='footerContainer homeContainers'>
        <h3 className='footerTitle'>The benefits of a full time crew without the expense yacht management, delivery and staffing.</h3>
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


    </div>
  )
}

export default Footer