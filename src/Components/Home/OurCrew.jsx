import React from 'react'
import './OurCrew.css'
import photo from '/images/servingBanderasHome.jpg'

function OurCrew() {
  return (
    <div className='ourCrewHomeContainer'>
        <h5 className='servicesTitleHome'>Our Crew</h5>
        <h2 className='servicesSubtitleHome'>Serving Banderas Bay 2007</h2>

        <img src={photo} alt="" className='ourCrewImageHome'/>
        <p className='button'>SEE MORE</p>
    </div>
  )
}

export default OurCrew