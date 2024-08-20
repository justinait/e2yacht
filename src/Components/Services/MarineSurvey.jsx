import React from 'react'
import menu from '/icons/servicesMenu.png'

function MarineSurvey() {
  return (
    <div>
      <div className='homeContainers'>
        <div className='marineSurveyHero heroImages'>
          <br />
          <h3>Marine Survey</h3>
        </div>

        <div className='ourServicesTitleDiv'>
          <img src={menu} alt="" className='menuServices' />
          <h5 className='titlesHome servicesTitles'>Our Services</h5>
        </div>

        <div className='managementTextContainer'>
          <p>A survey by E2 Yacht Services will provide you with a detailed, internationally accepted report of the condition 
            and fair market value of your vessel. Elizabeth Shanahan is a member of the Navtech US Surveyors Association and 
            is a worldwide accredited and certified Master Marine Surveyor. Her work meets the strictest professional, ethical 
            and technical standards. Services include:
          </p>
          <ul>
            <li>Pre-purchase, appraisal, salvage, and damage surveys</li>
            <li>Insurance, financial and bank surveys, including estate appraisals</li>
            <li>Valuations</li>
            <li>Sail and power yachts</li>
            <li>Commercial vessels</li>
            <li>All hull types—wood, aluminum, fiberglass, steel</li>
            <li>Engine and oil analysis</li>
            <li>Testing: ultrasonic, moisture, galvanic current, stray current, and other types of tests</li>
          </ul>

          <p>Our surveys are accepted by major insurance and financial institutions, as well as the US Coast Guard. 
            Our reports meet US Coast Guard, American Boat and Yacht Council, American Boating Association standards. 
            With our survey, you will know the condition of your boat, its fair market value, and have the peace of 
            mind you need to secure your vessel's future.
          </p>

          
          <p className='managementh5'>Frequently Asked Questions:</p>
        </div>
      </div>
    </div>
  )
}

export default MarineSurvey