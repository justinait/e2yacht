import React from 'react'
import menu from '/icons/servicesMenu.png'

function MaritimeRecovery() {
  return (
    
    <div className='homeContainers'>
      <div className='maritimeAssetHero heroImages'>
        <br />
        <h3>Maritime Asset Recovery</h3>
      </div>

      <div className='ourServicesTitleDiv'>
        <img src={menu} alt="" className='menuServices' />
        <h5 className='titlesHome servicesTitles'>Our Services</h5>
      </div>

      <div className='managementTextContainer'>
        <p>
        E2 Yacht Services can skip trace and recover boats and yachts of any size. We can operate on short notice and offer fast delivery. 
        If you are with a lending institution or a seller of repossessed boats, contact us and we will provide seasoned professionals for 
        your repossession team.
        </p>

        <p>We have represented and acquired assets in Mexico and Central America for Key Bank, Whatcom Credit Union and Zion Bank just to name a few.</p>

      </div>
    </div>
  )
}

export default MaritimeRecovery