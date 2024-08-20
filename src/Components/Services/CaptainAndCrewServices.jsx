import React from 'react'
import menu from '/icons/servicesMenu.png'

function CaptainAndCrewServices() {
  return (
    <div className='homeContainers'>
      <div className='captainAndCrewHero heroImages'>
        <br />
        <h3>Captain and Crew Services</h3>
      </div>

      <div className='ourServicesTitleDiv'>
        <img src={menu} alt="" className='menuServices' />
        <h5 className='titlesHome servicesTitles'>Our Services</h5>
      </div>

      <div className='managementTextContainer'>
        <p>
          We provide temporary and on call captain and crew services. All of our staff is licensed
        </p>

        <ul>
          <li>Captain and crew services for motor yachts, sailboats and power boats </li>
          <li>Yacht and boat owner services, including training yacht and project management</li>
          <li>Relief captains, temporary crew and specialty guides, dive masters, surf instruction what ever your needs are while in Mexico</li>
          <li>Navigator, cruise guide and instructor services</li>
          <li>Long-term and short-term availability all over the World</li>          
        </ul>

      </div>
    </div>
  )
}

export default CaptainAndCrewServices