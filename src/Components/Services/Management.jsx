import React from 'react'
import menu from '/icons/servicesMenu.png'
import { Link } from 'react-router-dom'

function Management() {
  return (
    <div className='homeContainers'>
      <div className='whatHero heroImages'>
        <br />
        <h3>Yacht Management</h3>
      </div>

      <div className='ourServicesTitleDiv'>
        <img src={menu} alt="" className='menuServices' />
        <h5 className='titlesHome servicesTitles'>Our Services</h5>
      </div>

      <div className='managementTextContainer'>
        <p>We ensure that the yacht is being maintained, and administered to the highest possible standards. 
          Owners are then free to enjoy their time on board, safe in the knowledge that every last detail is being taken care of. 
          Get on board and enjoy your yacht.
          <br /> <br />
          Services offered by E² Yacht Services
        </p>
        <ul>
          <li>Weekly washing, interior and exterior</li>
          <li>Bottom cleaning</li>
          <li>Boat sitting while the owner is away</li>
          <li>Project Management</li>
          <li>Pre trip provisioning</li>
          <li>Mexican Paperwork (TIP), domestic and international check in and check out</li>
          <li>Part time or on call staffing and crew</li>
          <li>Private instruction on your boat or yacht</li>
          <li>Financial administration</li>
        </ul>
        <p>Project management, supervision of repairs and upgrades, done either in house or in conjunction with 
          Opequimar and La Cruz Shipyards in Puerto Vallarta Mexico.
        </p>
        <p>E2 Yacht Services is committed to safety and quality management. The professionals at E2 YACHT SERVICES 
          include veteran captains and engineers. All of our personnel hold either USCG credentials or Mexican 
          ‘libreta de mar ‘ to ‘Patrón de Yate'.
        </p>

        <div className='separatorManagement'></div>

        <p className='managementh5'>Yachts under our care</p>
        <p className='managementh6'>Power boats</p>
      </div>
    </div>
  )
}

export default Management