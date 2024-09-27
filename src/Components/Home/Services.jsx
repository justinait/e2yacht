import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const services = [
    { name: t('services.yachtManagement.name'), id: '/management', image: '/images/whatWeDoHero.jpg', text: t('services.yachtManagement.text'), className: '' },
    { name: t('services.yachtDeliveries.name'), id: '/deliveries', image: '/images/deliveriesHero.jpg', text: t('services.yachtDeliveries.text'), className: '' },
    { name: t('services.privateInstructions.name'), id: '/instruction', image: '/images/instructionHero.jpg', text: t('services.privateInstructions.text'), className: '' },
    { name: t('services.marineSurvey.name'), id: '/marinesurvey', image: '/images/marineSurveyHero.jpg', text: t('services.marineSurvey.text'), className: '' },
    { name: t('services.captainAndCrewServices.name'), id: '/captainandcrew', image: '/images/captainAndCrewServices.jpg', text: t('services.captainAndCrewServices.text'), className: '' },
    { name: t('services.marineAssetRecovery.name'), id: '/maritimerecovery', image: '/images/maritimeRecovery.jpg', text: t('services.marineAssetRecovery.text'), className: '' }
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