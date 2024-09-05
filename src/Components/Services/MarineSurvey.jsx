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

          <div>
            <p className='managementh5'>Frequently Asked Questions:</p>
            <div>
              <div>
                <p>How long does a survey take?</p>
                <p>+</p>
                <p>I recommend that you be there to open any locks and give me permission 
                  to board and inspect. The survey can run anywhere from 2 to 10 hours depending 
                  on the size of the vessel and 2 to 8 hours in the office to thoroughly prepare 
                  the survey report. Larger yachts and commercial vessels may take me 2-3 days to 
                  conduct a thorough physical survey.
                </p>
              </div>

              <div>
                <p>Can I be present at the time of the survey?</p>
                <p>+</p>
                <p>I welcome all clients to be present, and I have 
                  no problem explaining as I conduct the survey.</p>
              </div>

              <div>
                <p>How long does a survey take?</p>
                <p>+</p>
                <p>The boat must be plugged into shore power, all batteries hooked up, charged and installed.  All manuals, maintenance log, receipts, registration, 
                  USCG Documentation Papers, and a copy of the previous survey must be onboard.  If a sailboat, masts and spars must be moved to ground level.  
                  Additionally, Please provide the Buyer / Owner/ Brokers's Name, Mailing and E-mail address, Phone Number as well as the Make and Model of Vessel,  
                  HIN (Hull Identification Number), specific location of vessel and mast if un-stepped, and notes pertaining to access of the vessel.  
                  <br /><br />IMPORTANT:  Prior to any survey please ensure the vessel is clean and clear of any personal effects, gear, oil / water in bilge, furniture 
                  or other items which might block access or vision.  The vessel will be surveyed as found, and only to the extent of what can be seen, what is 
                  accessible and what is limited.</p>
              </div>

              <div>
                <p>Because fiberglass hulls can blister, why are they still better than a wood, steel or aluminum boat?</p>
                <p>+</p>
                <p>The basic facts of life, physics, and chemistry are that Steel, Aluminum and Wood all require constant maintenance, which, if neglected would have 
                  far more severe effects on structural integrity over a shorter time period.  A fiberglass boat will likely withstand prolonged neglect without the 
                  hull being weakened.  Ingress of moisture (which can lead to blistering) occurs over years and in the end, might not even result in the formation 
                  of a blister (or chemical change in properties of the GRP matrix).   </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MarineSurvey