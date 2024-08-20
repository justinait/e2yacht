import React from 'react'
import './Where.css'
import photo from '/images/servingBanderasHome.jpg'

function Where() {
  return (
    <div className='WhereHomeContainer'>
        <h5 className='servicesTitleHome'>where we are</h5>
        <h2 className='servicesSubtitleHome'>You can find our offices in Mexico, but we also work around the world.</h2>

        <img src={photo} alt="" className='WhereImageHome'/>
        <p className='button'>SEE MORE</p>
    </div>
  )
}

export default Where