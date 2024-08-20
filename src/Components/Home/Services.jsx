import React from 'react'
import './Services.css'

function Services() {
    
    const services = [
        { name: 'Management Yacht', id: '/management', image: '/images/deliveriesHero.jpg', className: '' },
        { name: 'Our Crew', id: 'crew', image: '/images/deliveriesHero.jpg', className: ''},
        { name: 'Where we are', id: 'where', image: '/images/deliveriesHero.jpg', className: ''},
        { name: 'Contact', id: 'contact', image: '/images/deliveriesHero.jpg', className: ''},
        { name: 'Our Crew', id: 'crew', image: '/images/deliveriesHero.jpg', className: ''},
        { name: 'Maritime Recovery', id: 'where', image: '/images/deliveriesHero.jpg', className: ''}
    ]

  return (
    <div className='servicesHomeContainer'>
        <h5 className='servicesTitleHome'>Services</h5>
        <h2 className='servicesSubtitleHome'>E² Yacht Services</h2>
        <div className='servicesCardContainer'>

            {
                services.map((e, i)=> {
                    return(
                        <div className='servicesCardHome' key={i}>
                            <img src={e.image} alt={e.name} />
                            <p className='homeServiceName'>{e.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services