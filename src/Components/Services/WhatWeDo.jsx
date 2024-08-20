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

      <div className='whatWeDoTextContainer'>
        <p>E2 Yacht Services provides the highest quality of professional motor and sailing yacht services throughout 
          North America, Mexico, Central and South America, the Caribbean, and beyond. We offer the following for yacht 
          and boat owners, agents and brokers:
        </p>
        <ul>
          <li>Professional and careful motor and sailing yacht delivery insurable year round world wide</li>
          <li>Maintenance while you are away from your yacht, weekly washing to project management and system upgrades</li>
          <li>Complete captain and crewing services, and specialties including , fishing guides, diver masters, surf instruction, etc.</li>
          <li>Complete yacht and project management.</li>
          <li>Hands-on, personal training and instruction</li>
        </ul>
      </div>
    </div>
  )
}

export default WhatWeDo