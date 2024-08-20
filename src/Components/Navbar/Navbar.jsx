import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '/icons/logoNavbar.png'
import menu from '/icons/burgerMenu.png'
import CloseIcon from '/icons/closeMenu.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('')

  const sections = [
    { name: 'Services', id: 'services', className: '' },
    { name: 'Our Crew', id: 'crew', className: ''},
    { name: 'Where we are', id: 'where', className: ''},
    { name: 'Contact', id: 'contact', className: ''}
  ]
  const windowWidth = window.innerWidth;
  const [desktop, setDesktop] = (windowWidth <= 1200) ? useState(false): useState(true)

  const handleClose = (id) => {
    if(!desktop){
      setOpenMenu(false);
    }
    if(id){
      setSelectedCategory(id);
    }
      
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
        console.log('hola');
      if(openMenu)
        return setOpenMenu(false);
      else 
        return setOpenMenu(true);
    } else {
      setOpenMenu(true)
    }
  }
  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <Link to='/'>
          <img src={logo} alt="E 2 Yacht Services" className='logoNavbar'/>
        </Link>
        {
          !desktop && (
          openMenu ?
          <img src={CloseIcon}  onClick={handleClose} className='closeMenuIcon' alt="Menu" />:
          <img src={menu}  onClick={handleOpen} className='burgerMenuIcon' alt="X" />)
        }
      </div>

      {(openMenu || desktop) &&
        <div className='dropdownHeader'>
          
          <div className='dropdownItemsContainer'>
            
            {sections.map((e, i)=> {
              return (
                <Link
                  key={e.id} 
                  to={`/${e.id}`} 
                  onClick={()=>handleClose(e.id)} 
                  className={selectedCategory == e.id? 'dropdownItems activeNavbar': 'dropdownItems'}>
                  {e.name}
                </Link>
              )
            })}
            
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar