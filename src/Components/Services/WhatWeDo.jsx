import React from 'react'
import './WhatWeDo.css'
import menu from '/icons/servicesMenu.png'
import { Link } from 'react-router-dom'

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
          <li>Professional and careful motor and sailing <Link to='/deliveries'>yacht delivery</Link> insurable year round world wide</li>
          <li>Maintenance while you are away from your yacht, weekly washing to project management and system upgrades</li>
          <li>Complete <Link to='/captainandcrew'>captain and crewing services</Link>, and specialties including, fishing guides, diver masters, surf instruction, etc.</li>
          <li>Complete <Link to='/management'>yacht and project management.</Link></li>
          <li>Hands-on, <Link to='/instruction'>personal training and instruction.</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default WhatWeDo