import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '/icons/logoNavbar.png'
import menu from '/icons/burgerMenu.png'
import CloseIcon from '/icons/closeMenu.png'
import { Link } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext'
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {

  const { t, i18n } = useTranslation(); 
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('')
  const { selectedService, setSelectedService } = useContext(ServiceContext);
  const windowWidth = window.innerWidth;
  const [desktop, setDesktop] = (windowWidth < 1200) ? useState(false): useState(true)
  const [dropdown, setDropdown] = useState(false)
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };
  const toggleDropdown = () => {
    setOpen(!open); // Alterna entre abrir/cerrar el dropdown
  };
  const idioma = (
    <div className='languageContainerNavbar'>
      <div className='dropdown' onClick={toggleDropdown}>
        <LanguageIcon fontSize='small' />
        <p>{i18n.language === 'en' ? 'English' : 'Spanish'}</p>
        <KeyboardArrowDownIcon/>
      </div>
      {open && (
        <ul className="dropdownMenuLanguage">
         {i18n.language === 'en' ? (
            <li onClick={() => handleLanguageChange('es')}>Spanish</li>
          ) : (
            <li onClick={() => handleLanguageChange('en')}>English</li>
          )}
        </ul>
      )}
    </div>
  )
  const sections = [
    { name: t('navbar.home'), id: '', className: 'homeNavbar' },
    { name: t('navbar.services'), id: 'services', className: '', image: '/icons/arrowNavbar.png', image2: '/icons/arrowdown.png' },
    { name: t('navbar.crew'), id: 'crew', className: '' },
    { name: t('navbar.whatWeDo'), id: 'whatwedo', className: '' },
    ...(desktop ? [{ name: idioma, id: 'language', className: 'languageSection', content: idioma }] : []), // Aquí se añade el idioma si es desktop
    { name: t('navbar.contact'), id: 'contact', className: 'contactMobile' },
    { name: t('navbar.contactUs'), id: 'contact', className: 'contactDesktop button contactButtonHover notActive' }
  ];
  
  const services = [
    { name: t('navbar.whatWeDo'), id: 'whatwedo', className: 'notForDesktop homeNavbar' },
    { name: t('navbar.yachtManagement'), id: 'management', className: '' },
    { name: t('navbar.yachtDeliveries'), id: 'deliveries', className: '' },
    { name: t('navbar.privateInstructions'), id: 'instruction', className: '' },
    { name: t('navbar.marineSurvey'), id: 'marinesurvey', className: '' },
    { name: t('navbar.captainAndCrewServices'), id: 'captainandcrew', className: '' },
    { name: t('navbar.maritimeAssetRecovery'), id: 'maritimerecovery', className: '' },
    { name: t('navbar.viewAllServices'), id: 'viewallservices', image: '/icons/arrowNext.png', className: 'viewAllServicesButtonNavbar contactButtonHover notActive' },
  ];

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


  return (
    <div className='navbarContainer'>
    <div className='navbar'>
      {/* logo */}
      <Link to='/'>
        <img src={logo} alt="E2 Yacht Services" className='logoNavbar' onClick={handleClose} />
      </Link>

      <div className='burgerAndLanguageContainer'>
        {/* idioma */}
        { !desktop && idioma }
        
        {/* burgermenu/X */}
        {
          !desktop && (
            openMenu ?
              <img src={CloseIcon} onClick={handleClose} className='burgerMenuIcon' alt="Close Menu X" /> :
              <img src={menu} onClick={handleOpen} className='burgerMenuIcon' alt="Open Menu" />
          )
        }
      </div>
      
    </div>

    {(openMenu || desktop) &&
      <div className='dropdownHeader'>
        <div className='dropdownItemsContainer'>
          {/* sections  */}

          {sections.map((e, i) => (
            <Link
              key={i}
              {...((e.id !== 'services' && e.id !== 'language') && { to: `/${e.id}` })} 
              onClick={e.id !== 'services'  ? () => handleClose(e.id) : handleDropdown} 
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