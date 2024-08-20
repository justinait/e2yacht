import React from 'react'
import './References.css'

function References() {
 
  const references = [
    { name: 'Harold Ziegler, MV Ziggy, 2009 Hatteras 72’', text: '“Elizabeth, I wanted to thank you and let you know that I recommend you as a delivery captain. You completed my delivery from the Bahamas to Michigan in a timely fashion. There were times that you ran the boat all night in order to get it back to Michigan and meet my scheduled trip. I appreciate your dedication and commitment to making things happen.”', className: '' },
    { name: 'yacht deliveries', text: '/images/deliveriesHero.jpg', className: ''},
    { name: 'PRIVATE INSTRUCTIONS', text: '/images/instructionHero.jpg', className: ''},
    { name: 'marine survey', text: '/images/marineSurveyHero.jpg', className: ''},
    { name: 'marine asset recovery', text: '/images/maritimeRecovery.jpg', className: ''}
  ]
  return (
    <div className='homeContainers whereHomeContainer'>
        
      <h5 className='titlesHome'>References</h5>
      <h2 className='subtitlesHome'>Create new experiences by working with us</h2>

      {
        references.map((e, i)=> {
          return(
            <div className='referenceCard'>
              <p className='referenceCardName'>{e.name}</p>
              <p className='referenceCardText'>{e.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default References