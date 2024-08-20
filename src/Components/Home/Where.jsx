import React from 'react'
import './Where.css'
import photo from '/images/servingBanderasHome.jpg'

function Where() {
  return (
    <div className='homeContainers whereHomeContainer'>
      <h5 className='titlesHome'>where we are</h5>
      <h2 className='subtitlesHome'>You can find our offices in Mexico, but we also work around the world.</h2>

      <img src={photo} alt="" className='ourCrewImageHome'/>
    </div>
  )
}

export default Where