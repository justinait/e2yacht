import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const services = [
    { name: t('services.management.name'), id: '/management', image: '/images/whatWeDoHero.jpg', text: t('services.management.text'), className: '' },
    { name: t('services.deliveries.name'), id: '/deliveries', image: '/images/deliveriesHero.jpg', text: t('services.deliveries.text'), className: '' },
    { name: t('services.instruction.name'), id: '/instruction', image: '/images/instructionHero.jpg', text: t('services.instruction.text'), className: '' },
    { name: t('services.marinesurvey.name'), id: '/marinesurvey', image: '/images/marineSurveyHero.jpg', text: t('services.marinesurvey.text'), className: '' },
    { name: t('services.captainandcrew.name'), id: '/captainandcrew', image: '/images/captainAndCrewServices.jpg', text: t('services.captainandcrew.text'), className: '' },
    { name: t('services.maritimerecovery.name'), id: '/maritimerecovery', image: '/images/maritimeRecovery.jpg', text: t('services.maritimerecovery.text'), className: '' }
  ];

  return (
    <div className='homeContainers servicesHomeContainer'>
      <h5 className='titlesHome'>{t('services.title')}</h5>
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