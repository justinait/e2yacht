import React from 'react'
import './OurCrew.css'
import photo from '/images/servingBanderasHome.jpg'
import { Link } from 'react-router-dom'

function OurCrew() {
  return (
    <div className='homeContainers ourCrewHomeContainer'>
      <h5 className='titlesHome'>Our Crew</h5>
      <h2 className='subtitlesHome'>Serving Banderas Bay 2007</h2>

      <img src={photo} alt="" className='ourCrewImageHome'/>
      <Link to='/crew' className='button linkButton'>SEE MORE</Link>
    </div>
  )
}

export default OurCrew