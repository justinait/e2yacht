import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: 800, // distancia en píxeles que querés que se desplace
      behavior: 'smooth'
    });
  };

  const { t } = useTranslation();
  
  return (
    <div className='heroHome heroImages '>
      <h1>{t('hero.title')}</h1>
      {/* <h4 className='heroSubtitle'>Your resource based in Puerto Vallarta and Pacific Mexico <br className='onlyForDesktop'/> including Baja California and the Sea of Cortez</h4> */}
      {/* <p className='heroDescription'>Operated by <strong>Captain Elizabeth Shanahan </strong> <br className='notForDesktop' />
        and <strong>Captain Eugenie Russel </strong> 
      </p> */}

      <h4 className='heroSubtitle'>
        {t('hero.subtitle.part1')} <br className='onlyForDesktop' />
        {t('hero.subtitle.part2')}
      </h4>
      <div className='separator'></div>
      <p className='heroDescription'>
        {t('hero.operatedBy.part1')} <strong>{t('hero.operatedBy.captain1')}</strong>
        <br className='notForDesktop' />
        {t('hero.operatedBy.part2')} <strong>{t('hero.operatedBy.captain2')}</strong>
      </p>
      
      <div className='buttonsHero'>
        <p className='button learnMore' onClick={handleScroll}>{t('hero.learnMore')}</p>
        <Link to='/contact' className='button contactButtonHover'>{t('hero.contactUs')}</Link>
      
      </div>
    </div>
  )
}

export default Hero