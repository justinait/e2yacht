import React from 'react'
import './WhatWeDo.css'
import menu from '/icons/servicesMenu.png'

function WhatWeDo() {
  return (
    <div className='homeContainers'>
      <div className='whatHero heroImages'>
        <br />
        <h3>What We Do</h3>
      </div>

      <div className='ourServicesTitleDiv'>
        <img src={menu} alt="" className='menuServices' />
        <h5 className='titlesHome servicesTitles'>Our Services</h5>
      </div>
    </div>
  )
}

export default WhatWeDo