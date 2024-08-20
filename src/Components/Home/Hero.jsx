import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';

function Hero() {
  const handleScroll = () => {
    window.scrollBy({
      top: 380, // distancia en píxeles que querés que se desplace
      behavior: 'smooth' // hace que el desplazamiento sea suave
    });
  };
  return (
    <div className='heroHome heroImages '>
      <h1>Professional Yacht Services</h1>
      <h4 className='heroSubtitle'>Your resource based in Puerto Vallarta and Pacific Mexico including Baja California and the Sea of Cortez</h4>
      <div className='separator'></div>
      <p className='heroDescription'>Operated by <strong>Captain Elizabeth Shanahan </strong> <br />
        and <strong>Captain Eugenie Russel </strong> 
      </p>

      <div className='buttonsHero'>
        <p className='button learnMore' onClick={handleScroll}>Learn More</p>
        <Link to='/contact' className='button'>Contact us</Link>
      </div>
    </div>
  )
}

export default Hero