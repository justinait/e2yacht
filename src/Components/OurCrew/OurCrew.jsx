import React from 'react'
import './OurCrew.css'
import { useTranslation } from 'react-i18next';

function OurCrew() {
  const { t } = useTranslation();
  
  const crew = [
    { name: 'Elizabeth Shanahan', text: t('ourCrew.captainText'), image: '/images/ourCrewElizabeth.jpg', className: 'leftCrew' },
    { name: 'Eugenie Russel', text: t('ourCrew.captainEugenieText'), image: '/images/ourCrewEugene.jpg', className: 'rightCrew'},
    { name: 'José Alejandro Cano', text: t('ourCrew.joseText'), image: '/images/ourCrewCano.jpg', className: 'leftCrew'},
    { name: 'Odi Gutierrez', text: t('ourCrew.odiText'), image: '/images/OdiCrew.jpeg', className: 'rightCrew'},
    { name: 'Miguel Sánchez Rodríguez', text: t('ourCrew.miguelText'), image: '/images/miguel.jpeg', className: ''},
  ]

  return (
    <div className='otherSectionsContainers'>

      <div className='ourCrewHero heroImages'>
        <br />
        <h3>{t('ourCrew.header')}</h3>
      </div>

      <div className='crewContainerCenter'>
        <div className='ourCrewSectionFirstDiv'>
          <div className='ourCrewInformation'>
            <h2 className='subtitlesHome ourCrewH2'>{t('ourCrew.benefits')}</h2>
            <p className='descriptionCrew'>
              {t('ourCrew.description1')}
              <br className='notForDesktop' /><br className='notForDesktop' />
              {t('ourCrew.description2')}
            </p>
          </div>
          
          <div className='ourCrewBrujula heroImages'></div>
        </div>
        
        <h2 className='subtitlesHome ourCrewH2'>{t('ourCrew.header')}</h2>
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