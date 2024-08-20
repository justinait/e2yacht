import React from 'react'
import menu from '/icons/servicesMenu.png'

function Deliveries() {
  return (
    <div className='homeContainers'>
      <div className='deliveriesHero heroImages'>
        <br />
        <h3>Yacht Deliveries</h3>
      </div>

      <div className='ourServicesTitleDiv'>
        <img src={menu} alt="" className='menuServices' />
        <h5 className='titlesHome servicesTitles'>Our Services</h5>
      </div>

      <div className='managementTextContainer'>
        <p>
          We can deliver your boat throughout world with extensive knowledge of the West Coast of North America; Canada, United States 
          (Alaska to Mexico and Central America). We are dedicated to safe and timely deliveries.
        </p>
        <p>Our captains are fully licensed Masters with extensive experience on motor and sailing yachts, canal transits, inter-coastal, 
          and offshore waterways. We are insurable for deliveries during the hurricane and cyclone seasons.
        </p>
        <p>We work for private parties as well as financial institutions and insurance companies such as Key Bank, 
          Wells Fargo, WhatCom Credit Union and Sea Worthy Insurance just to name a few.
        </p>

        <ul>
          <li>Pre-voyage planning and management, including crew, outfitting, maintenance, scheduling, and accounting</li>
          <li>Owner on-board training, where you learn.   On board systems while we deliver or relocate your boat</li>
          <li>Re-locations, including storm, bank and insurance re-location's</li>
          <li>Passage making</li>
          <li>Sea trials and pre-purchase inspections</li>
          <li>We can provide guidance while the boat is in any location</li>
        </ul>
        
        <p>You can also choose to stay aboard your boat while we deliver to learn more about your boat and improve your seamanship skills. 
          of our deliveries include a pre-voyage inspection, expense reporting, port and customs clearance, and a written performance report 
          at the end. Additional list of delivery's completed available upon request. Below is a sample
        </p>

        <ul>
          <li>Hatteras 72 MY, Bahamas to Lake Michigan via Eerie canal and Welland Canal</li>
          <li>Horizon 70' Huatulco to Puerto Vallarta  and Puerto Vallarta to Los Angeles</li>
          <li>Johnson 65' Columbia to Puerto Vallarta thru the Panama Canal</li>
          <li>Viking 65' All over Mexico</li>
          <li>Passport 45, Ixtapa to Puerto Vallarta then Papette , Tahiti</li>
          <li>Riviera 48, San Diego to Puerto Vallarta</li>
          <li>Symbol 80, Puerto Vallarta to Manzanillo, and load on Yacht Path</li>
          <li>Offshore 55 Puerto Vallarta to Whittier Alaska</li>
          <li>Formosa 51, Puerto Vallarta to Los Angeles</li>
          <li>Jeanneau 49 DS, Ixtapa to Los Angeles</li>
          <li>Defever 49, Puerto Vallarta to Los Angeles</li>
          <li>Beneateau 38 Costa Rica to Long Beach, CA </li>
          <li>Two weeks private instruction in the Greek Islands aboard the owner's vessel</li>
        </ul>

        <p>The list above is just a sample of the diversity of boats we have delivered. 
          There are too many to list up and down the west coast of North America from Whittier, 
          Alaska through the Panama Canal, including Pacific and Atlantic crossing. 
          Our Delivery team are professionals through and through.</p>
        
      </div>
    </div>
  )
}

export default Deliveries