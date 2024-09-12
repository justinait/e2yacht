import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

function Services() {
    
    const services = [
        { name: 'Yacht management', id: '/management', image: '/images/whatWeDoHero.jpg', text:'We maintain and manage yachts to the highest standards, allowing owners to enjoy worry-free time onboard, knowing every detail is in good hands.', className: '' },
        { name: 'yacht deliveries', id: '/deliveries', image: '/images/deliveriesHero.jpg', text:'Delivering boats worldwide, we specialize in the West Coast of North America, from Alaska to Mexico and Central America.', className: ''},
        { name: 'PRIVATE INSTRUCTIONS', id: '/instruction', image: '/images/instructionHero.jpg', text:'With decades of experience, we\'ve trained hundreds of seamen, sharing our passion for the open water. Our hands-on, personalized approach emphasizes safety above all else.', className: ''},
        { name: 'marine survey', id: '/marinesurvey', image: '/images/marineSurveyHero.jpg', text:'Delivering boats worldwide, we specialize in the West Coast of North America, from Alaska to Mexico and Central America.', className: ''},
        { name: 'captain and crew services', id: '/captainandcrew', image: '/images/captainAndCrewServices.jpg', text:'We provide temporary and on call captain and crew services. All of our staff is licensed.', className: ''},
        { name: 'marine asset recovery', id: '/maritimerecovery', image: '/images/maritimeRecovery.jpg', text:'E2 Yacht Services can skip trace and recover boats and yachts of any size. We can operate on short notice and offer fast delivery.', className: ''}
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
                            <p className='homeServiceText'>{e.text}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services