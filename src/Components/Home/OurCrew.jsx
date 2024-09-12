import React from 'react'
import './OurCrew.css'
import photo from '/images/servingBanderasHome.jpg'
import { Link } from 'react-router-dom'

function OurCrew() {
  return (
    <div className='homeContainers ourCrewHomeContainer'>
      <div className='ourCrewFirstDiv'>

        <h5 className='titlesHome'>Our Crew</h5>
        <h2 className='subtitlesHome'>Serving Banderas Bay 2007</h2>

        <p className='ourCrewHomeText'>Under the direction of United States Coast Guard Licensed Masters Elizabeth Shanahan and Eugenie Russell, 
          our experienced team of marine professionals offer dedicated and personalized service, no matter the size or 
          type of assignment. We have carefully and successfully captained sailing and motor yachts up and down the West Coast, 
          including Mexico and Alaska. We also serve the East Coast, South America through the Caribbean, the Eastern Seaboard, 
          through the Erie Canal, to the Great lakes and St. Lawrence Seaway, the South Pacific , Europe, and the Mediterranean. 
          Our captains are available from 100T to unlimited, sailing and motor yachts as well as power boats.
        </p>
        <Link to='/crew' className='button linkButton onlyForDesktop'>SEE MORE</Link>
      </div>

      <img src={photo} alt="" className='ourCrewImageHome'/>
      
      <Link to='/crew' className='button linkButton notForDesktop'>SEE MORE</Link>
    </div>
  )
}

export default OurCrew