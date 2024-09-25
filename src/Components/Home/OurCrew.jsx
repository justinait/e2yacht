import React from 'react'
import './OurCrew.css'
import photo from '/images/servingBanderasHome.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function OurCrew() {
  const { t } = useTranslation();
  
  return (
    <div className='homeContainers ourCrewHomeContainer'>
      <div className='ourCrewFirstDiv'>

        <h5 className='titlesHome'>{t('home.ourCrewHeader')}</h5>
        <h2 className='subtitlesHome'>{t('home.servingBanderas')}</h2>

        <p className='ourCrewHomeText'>{t('home.ourCrewText')}</p>

        <Link to='/crew' className='button linkButton onlyForDesktop contactButtonHover'>{t('home.seeMore')}</Link>
      </div>

      <img src={photo} alt="" className='ourCrewImageHome'/>
      
      <Link to='/crew' className='button linkButton notForDesktop contactButtonHover'>{t('home.seeMore')}</Link>
    </div>
  )
}

export default OurCrew