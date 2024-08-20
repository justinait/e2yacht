import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='heroHome heroImages '>
      <h1>Professional Yacht Services</h1>
      <h4 className='heroSubtitle'>Your resource based in Puerto Vallarta and Pacific Mexico including Baja California and the Sea of Cortez</h4>
      <div className='separator'></div>
      <p className='heroDescription'>Operated by <strong>Captain Elizabeth Shanahan </strong> <br />
        and <strong>Captain Eugenie Russel </strong> 
      </p>

      <div className='buttonsHero'>
        <p className='button learnMore'>Learn More</p>
        <p className='button'>Contact us</p>
      </div>
    </div>
  )
}

export default Hero