import React from 'react'
import menu from '/icons/servicesMenu.png'

function Instruction() {
  return (
    <div className='homeContainers'>
      <div className='instructionHero heroImages'>
        <br />
        <h3>Private Instruction</h3>
      </div>

      <div className='ourServicesTitleDiv'>
        <img src={menu} alt="" className='menuServices' />
        <h5 className='titlesHome servicesTitles'>Our Services</h5>
      </div>

      <div className='managementTextContainer'>
        <p>
          We have successfully trained hundreds of seamen over the past decades and love sharing our passion for the open water with our customers. 
          Our training is hands on and personal, with the highest commitment to safety. 
        </p>
        <p className='managementh5'>We can teach you to:</p>

        <ul>
          <li>Plan your voyage </li>
          <li>Master navigation</li>
          <li>Learn the mechanical workings of your boat </li>
          <li>Read and understand different kinds of weather and water conditions</li>
          <li>Keep yourself and everyone on your boat safe at all times </li>
          <li>Marlinespike, line handling and towing </li>
          <li>Anchor and moor your boat </li>
          <li>Perfect close quarters maneuvering, docking, slow speed boat handling </li>
          <li>Teach you to sail and operate your vessel in all weather and sea conditions </li>
          <li>For ASA certification information please visit our Partners at: 
            <a style={{cursor: 'pointer', color: '#165BBB' }} target='_blank' href='https://www.captainkupps.com/'> CaptainKupps.com</a>
          </li>
        </ul>

        <p>We also offer training cruises, including on your own boat while we deliver it.</p>
      </div>
    </div>
  )
}

export default Instruction