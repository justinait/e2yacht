import React from 'react'
import './Where.css'
import photo from '/images/servingBanderasHome.jpg'
import Maps from '../Maps/Maps'
import { useTranslation } from 'react-i18next';

function Where() {
  const { t } = useTranslation();
  return (
    <div className='homeContainers whereHomeContainer'>
      <div className='whereHomeTitles'>
        <h5 className='titlesHome'>{t('contact.whereTitle')}</h5>
        <h2 className='subtitlesHome'>{t('contact.youCanFindUs1')}
          <br className='onlyForDesktop'/>{t('contact.youCanFindUs2')} </h2>
      </div>

      <Maps/>
    </div>
  )
}

export default Where