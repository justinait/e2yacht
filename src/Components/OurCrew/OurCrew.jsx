import React from 'react'
import './OurCrew.css'
import brujula from '/icons/ourCrewBrujula.png'

function OurCrew() {
  
  const crew = [
    { name: 'Elizabeth Shanahan', text: 'Captain, 1600 T USCG Master, SA', image: '/images/ourCrewElizabeth.jpg', className: '' },
    { name: 'Eugenie Russel', text: 'Captain, 1600 T USCG Master, SA', image: '/images/ourCrewEugene.jpg', className: ''},
    { name: 'José Alejandro Cano', text: 'On the dock', image: '/images/ourCrewCano.jpg', className: ''},
    { name: 'Enrique Delgado', text: 'Office Assistant', image: '/images/ourCrewElizabeth.jpg', className: '' },
    { name: 'Odi Gutierrez', text: 'Office Manager', image: '/images/ourCrewEugene.jpg', className: ''},
    { name: 'Miguel Sánchez Rodríguez', text: 'On the dock', image: '/images/ourCrewCano.jpg', className: ''},
  ]

  return (
    <div className='homeContainers'>

      <div className='ourCrewHero heroImages'>
        <br />
        <br />
        Our Crew
      </div>

      <h2 className='subtitlesHome'>The benefits of a full time crew without the expense yacht management, delivery and staffing.</h2>
      <p className='descriptionCrew'>
        Under the direction of United States Coast Guard Licensed Masters Elizabeth Shanahan and Eugenie Russell, 
        our experienced team of marine professionals offer dedicated and personalized service, no matter the size or type of assignment. 
        We have carefully and successfully captained sailing and motor yachts up and down the West Coast, including Mexico and Alaska.
        <br /><br />
        We also serve the East Coast, South America through the Caribbean, the Eastern Seaboard, through the Erie Canal, to the Great lakes 
        and St. Lawrence Seaway, the South Pacific , Europe, and the Mediterranean. Our captains are available from 100T to unlimited, 
        sailing and motor yachts as well as power boats.
      </p>
      
      <div className='ourCrewBrujula heroImages'>
        <img src={brujula} alt="" className='brujula' />
      </div>
      
      <h2 className='subtitlesHome'>Our Crew</h2>
      <div className='crewDataContainer'>
        {
          crew.map((e, i)=> {
            return(
              <div className='cardCrew' key={i}>
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
  )
}

export default OurCrew