import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

function Services() {
    
    const services = [
        { name: 'Yacht management', id: '/management', image: '/images/whatWeDoHero.jpg', className: '' },
        { name: 'yacht deliveries', id: '/deliveries', image: '/images/deliveriesHero.jpg', className: ''},
        { name: 'PRIVATE INSTRUCTIONS', id: '/instruction', image: '/images/instructionHero.jpg', className: ''},
        { name: 'marine survey', id: '/marinesurvey', image: '/images/marineSurveyHero.jpg', className: ''},
        { name: 'captain and crew services', id: '/captainandcrew', image: '/images/captainAndCrewServices.jpg', className: ''},
        { name: 'marine asset recovery', id: '/marinerecovery', image: '/images/maritimeRecovery.jpg', className: ''}
    ]

  return (
    <div className='homeContainers servicesHomeContainer'>
        <h5 className='titlesHome'>Services</h5>
        <h2 className='subtitlesHome'>E² Yacht Services</h2>
        <div className='servicesCardContainer'>
            {
                services.map((e, i)=> {
                    return(
                        <Link to={e.id} className='servicesCardHome' key={i}>
                            <img src={e.image} alt={e.name} />
                            <p className='homeServiceName'>{e.name}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services