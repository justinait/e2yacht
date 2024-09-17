import React from 'react'
import './WhatWeDo.css'
import menu from '/icons/servicesMenu.png'
import { Link } from 'react-router-dom'

function WhatWeDo() {
  return (
    <div className='otherContainers'>

      <div className='whatHero heroImages'>
        <br />
        <h3>What We Do</h3>
      </div>

      <div className='homeContainers'>
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
            <li>Professional and careful motor and sailing <a style={{cursor: 'pointer', color: '#165BBB' }} href='/deliveries'>yacht delivery</a> insurable year round world wide</li>
            <li>Maintenance while you are away from your yacht, weekly washing to project management and system upgrades</li>
            <li>Complete <a style={{cursor: 'pointer', color: '#165BBB' }} href='/captainandcrew'>captain and crewing services</a>, and specialties including, fishing guides, diver masters, surf instruction, etc.</li>
            <li>Complete <a style={{cursor: 'pointer', color: '#165BBB' }} href='/management'>yacht and project management.</a></li>
            <li>Hands-on, <a style={{cursor: 'pointer', color: '#165BBB' }} href='/instruction'>personal training and instruction.</a> </li>
          </ul>
          {/* For ASA certification information please visit our Partners at:              
          <a style={{cursor: 'pointer', color: '#165BBB' }} target='_blank' 
          href='https://www.captainkupps.com/' rel="noopener noreferrer"> CaptainKupps.com</a> 
          */}
          link 
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo