import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '/icons/logoNavbar.png'
import menu from '/icons/burgerMenu.png'
import CloseIcon from '/icons/closeMenu.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const sections = [
    { name: 'Home', id: '', className: '' },
    { name: 'Services', id: 'services', className: '', image: '/icons/arrowNavbar.png', image2: '/icons/arrowdown.png' },
    { name: 'Our Crew', id: 'crew', className: ''},
    { name: 'What we do', id: 'whatwedo', className: ''},
    { name: 'Contact', id: 'contact', className: ''}
  ]

  const services = [
    { name: 'What We Do', id: 'whatwedo', className: '' },
    { name: 'Yacht Management', id: 'management', className: ''},
    { name: 'Yacht Deliveries', id: 'deliveries', className: ''},
    { name: 'Private Instructions', id: 'instruction', className: ''},
    { name: 'Marine Survey', id: 'marinesurvey', className: ''},
    { name: 'Captain And Crew Services', id: 'captainandcrew', className: '' },
    { name: 'Maritime Asset Recovery', id: 'maritimerecovery', className: ''}
  ]

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
  return (
    <div className='navbarContainer'>
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="E 2 Yacht Services" className='logoNavbar' onClick={handleClose} />
      </Link>
      {
        !desktop && (
          openMenu ?
            <img src={CloseIcon} onClick={handleClose} className='closeMenuIcon' alt="Close Menu" /> :
            <img src={menu} onClick={handleOpen} className='burgerMenuIcon' alt="Open Menu" />
        )
      }
    </div>

    {(openMenu || desktop) &&
      <div className='dropdownHeader'>
        <div className='dropdownItemsContainer'>
          {sections.map((e, i) => (
            <Link
              key={i}
              {...(e.id !== 'services' && { to: `/${e.id}` })} 
              onClick={e.id !== 'services' ? () => handleClose(e.id) : handleDropdown} 
            >
              <div className={selectedCategory === e.id ? 'dropdownItems activeNavbar' : 'dropdownItems'}>
                {e.name}
                {e.image && 
                  (!dropdown ? <img src={e.image} alt="Arrow" /> : <img src={e.image2} alt="Arrow" />)
                  
                }
              </div>
              {(e.id === 'services' && dropdown) &&
                <div className='servicesNavbar'>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/${service.id}`}
                      onClick={() => handleServiceClick(service.id)}
                      className={selectedService === service.id ? 'dropdownItems serviceDropdownItems activeNavbar' : 'dropdownItems serviceDropdownItems'}
                    >
                      {service.name}
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