import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '/icons/logoNavbar.png'
import menu from '/icons/burgerMenu.png'
import CloseIcon from '/icons/closeMenu.png'
import { Link } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext'
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';

function Navbar() {

  const { t, i18n } = useTranslation(); 
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('')
  const { selectedService, setSelectedService } = useContext(ServiceContext);

  const sections = [
    { name: t('navbar.home'), id: '', className: 'homeNavbar' },
    { name: t('navbar.services'), id: 'services', className: '', image: '/icons/arrowNavbar.png', image2: '/icons/arrowdown.png' },
    { name: t('navbar.crew'), id: 'crew', className: '' },
    { name: t('navbar.whatWeDo'), id: 'whatwedo', className: '' },
    { name: '', id: '', classId: 'convey' },
    { name: t('navbar.contact'), id: 'contact', className: 'contactMobile' },
    { name: t('navbar.contactUs'), id: 'contact', className: 'contactDesktop button contactButtonHover notActive' }
  ];
  

  const services = [
    { name: t('navbar.whatWeDo'), id: 'whatwedo', className: 'notForDesktop homeNavbar' },
    { name: 'Yacht Management', id: 'management', className: ''},
    { name: 'Yacht Deliveries', id: 'deliveries', className: ''},
    { name: 'Private Instructions', id: 'instruction', className: ''},
    { name: 'Marine Survey', id: 'marinesurvey', className: ''},
    { name: 'Captain And Crew Services', id: 'captainandcrew', className: '' },
    { name: 'Maritime Asset Recovery', id: 'maritimerecovery', className: ''},
    { name: t('navbar.viewAllServices'), id: 'whatwedo', image: '/icons/arrowNext.png', className: 'viewAllServicesButtonNavbar contactButtonHover notActive' },
  ];

  const handleLanguageChange = () => {
    const nextLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(nextLanguage);
  };
  const windowWidth = window.innerWidth;
  const [desktop, setDesktop] = (windowWidth <= 1200) ? useState(false): useState(true)
  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = ()=> {
    setDropdown(!dropdown)
    setSelectedCategory('services');
  }

  const handleClose = (id) => {
    setDropdown(false)
    if(!desktop){
      setOpenMenu(false);
    }
    if(id){
      setSelectedCategory(id);
    } else {
      setSelectedCategory('')
    }
    setSelectedService('')
      
  }

  useEffect(() => { 
    const handleResize = () => {
      setDesktop(window.innerWidth > 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpen = () => {
    if(!desktop){

      if(openMenu){
        {console.log(openMenu)}
        return setOpenMenu(false);
      }
      else {
        {console.log(openMenu)}
        return setOpenMenu(true);
      }      
    } else {
      setOpenMenu(true)
    }
  }
  const handleServiceClick =(id) => {
    handleClose(id)
    setSelectedService(id)
  }
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdown && desktop && !event.target.closest('.dropdownHeader')) {
        setDropdown(false);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdown, desktop]);
  useEffect(() => {
    console.log('Current Language:', i18n.language); // Imprimir el idioma actual
  }, [i18n.language]);
  return (
    <div className='navbarContainer'>
    <div className='navbar'>
      {/* logo */}
      <Link to='/'>
        <img src={logo} alt="E2 Yacht Services" className='logoNavbar' onClick={handleClose} />
      </Link>
      
      {/* idioma */}
      <div>
        <p>{i18n.language === 'en' ? 'English' : 'Español'}</p>
        <LanguageIcon color='black' onClick={handleLanguageChange} />
      </div>
      
      {/* burgermenu/X */}
      {
        !desktop && (
          openMenu ?
            <img src={CloseIcon} onClick={handleClose} className='burgerMenuIcon' alt="Close Menu X" /> :
            <img src={menu} onClick={handleOpen} className='burgerMenuIcon' alt="Open Menu" />
        )
      }
      {console.log(t('navbar.home'))}  // Para verificar si está trayendo la traducción

    </div>

    {(openMenu || desktop) &&
      <div className='dropdownHeader'>
        <div className='dropdownItemsContainer'>
          {/* sections  */}
          <p>{t('navbar.home')}</p>
          {/* <p className='ourFocus'>{t('home.ourFocus')}</p> */}
          <p>Current Language: {i18n.language}</p> {/* Mostrar el idioma actual */}
          
          {sections.map((e, i) => (
            <Link
              key={i}
              {...(e.id !== 'services' && { to: `/${e.id}` })} 
              onClick={e.id !== 'services' ? () => handleClose(e.id) : handleDropdown} 
            >
              <div className={`${selectedCategory === e.id ? 'dropdownItems activeNavbar' : 'dropdownItems'}  ${e.className}`}>
                {e.name}
                {e.image && (!dropdown ? <img src={e.image} alt="Arrow" className='arrowNavbar' /> : <img src={e.image2} alt="Arrow"  className='arrowNavbar'/>)                }
              </div>

              {/* services */}
              {(e.id === 'services' && dropdown) &&
                <div className='servicesNavbar'>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/${service.id}`}
                      onClick={() => handleServiceClick(service.id)}
                    >
                      <div className={`dropdownItems serviceDropdownItems ${selectedService === service.id ? 'activeNavbar' : ''} ${service.className}`}>
                        {service.name}
                        {
                          service.image && <img src={service.image} alt="->" />
                        }
                      </div>
                    </Link>
                  ))}
                </div>
              }
            </Link>
          ))}
        </div>
      </div>
    }
  </div>
  )
}

export default Navbar