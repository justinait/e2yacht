import React from 'react'
import './OurCrew.css'

function OurCrew() {
  
  const crew = [
    { name: 'Elizabeth Shanahan', text: 'Captain, 1600 T USCG Master, SA', image: '/images/ourCrewElizabeth.jpg', className: 'leftCrew' },
    { name: 'Eugenie Russel', text: 'Captain, 1600 T USCG Master, SA', image: '/images/ourCrewEugene.jpg', className: 'rightCrew'},
    { name: 'José Alejandro Cano', text: 'On the dock', image: '/images/ourCrewCano.jpg', className: 'leftCrew'},
    { name: 'Odi Gutierrez', text: 'Office Manager', image: '/images/ourCrewEugene.jpg', className: 'rightCrew'},
    { name: 'Miguel Sánchez Rodríguez', text: 'On the dock', image: '/images/ourCrewCano.jpg', className: ''},
  ]

  return (
    <div className='otherSectionsContainers'>

      <div className='ourCrewHero heroImages'>
        <br />
        <h3>Our Crew</h3>
      </div>

      <div className='homeContainers'>
        <div className='ourCrewSectionFirstDiv'>
          <div className='ourCrewInformation'>
            <h2 className='subtitlesHome ourCrewH2'>The benefits of a full time crew without the expense yacht management, delivery and staffing.</h2>
            <p className='descriptionCrew'>
              Under the direction of United States Coast Guard Licensed Masters Elizabeth Shanahan and Eugenie Russell, 
              our experienced team of marine professionals offer dedicated and personalized service, no matter the size or type of assignment. 
              We have carefully and successfully captained sailing and motor yachts up and down the West Coast, including Mexico and Alaska. 
              <br className='notForDesktop' /><br className='notForDesktop' />
               We also serve the East Coast, South America through the Caribbean, the Eastern Seaboard, through the Erie Canal, to the Great lakes 
              and St. Lawrence Seaway, the South Pacific , Europe, and the Mediterranean. Our captains are available from 100T to unlimited, 
              sailing and motor yachts as well as power boats.
            </p>
          </div>
          
          <div className='ourCrewBrujula heroImages'></div>
        </div>
        
        <h2 className='subtitlesHome ourCrewH2'>Our Crew</h2>
        <div className='crewDataContainer'>
          {
            crew.map((e, i)=> {
              return(
                <div className={`cardCrew ${e.className}`} key={i}>
                  <img src={e.image} alt={e.name} />
                  <div className='crewInfoCard'>
                    <p className='crewName'>{e.name}</p>
                    <p className='crewText'>{e.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OurCrew