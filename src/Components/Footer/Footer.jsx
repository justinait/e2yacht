import React from 'react'
import './Footer.css'
import logo from '/icons/logoFooter.png'
import linkedinHover from '/icons/linkedinHover.png'
import linkedin from '/icons/linkedin.png'
import instagram from '/icons/instagram.png'
import instagramHover from '/icons/instagramHover.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation();
  return (
    <div className='footerContainer homeContainers'>
        <div>
            <h3 className='footerTitle'>{t('footer.header')}
                {/* <br className='tablet1000'/>  */}
                {t('footer.header2')}</h3>
            <img src={logo} alt="E2 yacht services" className='logoFooter' />
        </div>        
        
        <div className='contactFooter'>
            <Link to='/contact' className='button learnMore'>{t('navbar.contactUs')}</Link>
            <div className='socialMedia'>
                <Link to='https://www.linkedin.com/in/capteliz/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className='socialMediaCircle'>
                    <img src={linkedin} alt="linkedin" className='linkedin'  />
                    <img src={linkedinHover} alt="linkedin" className='hoverLinkedin' />
                </Link>
                <Link to='https://www.instagram.com/e2yachtservices/' target='_blank' className='socialMediaCircle'>
                    <img src={instagram} alt="instagram" className='instagram'  />
                    <img src={instagramHover} alt="instagram" className='hoverInstagram'  />
                </Link>
            </div>
        </div>

        <div className='indice'>
            <section className='homeSectionFooter'>
                <h6>{t('navbar.home')}</h6>
                <Link className='linksHomeFooterIndice' to='crew'>{t('footer.crew')}</Link>
                <Link className='linksHomeFooterIndice' to='contact'>{t('navbar.contactUs')} </Link>
                <Link className='linksHomeFooterIndice' to='whatwedo'>{t('navbar.services')} </Link>
            </section>
            <section>
                <h6>{t('contact.address')}</h6>
                <p className='locationFooter'>Located in Beautiful Paradise Village Marina, Nuevo Vallarta, Nayarit, 63732, Mexico</p>
            </section>
            <section className='contactSectionFooter'>
                <h6>{t('navbar.contact')}</h6>
                <a href="mailto:info@e2yachtservices.com" className='locationFooter underline marginbottom'>info@e2yachtservices.com</a>
                
                <p className='locationFooter'>{t('contact.office')}: +52 322 297 4065</p>
                <a href='https://api.whatsapp.com/send/?phone=523221347397&text&type=phone_number&app_absent=0' target='_blank' className='locationFooter underline'>WhatsApp: +52 322-134-7397</a>
                <p className='locationFooter'>USA: #1-714-412-6180</p>
            </section>
        </div>


    </div>
  )
}

export default Footer