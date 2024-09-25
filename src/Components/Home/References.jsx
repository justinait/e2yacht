import React, { useEffect, useRef } from 'react'
import './References.css'
import { useTranslation } from 'react-i18next';

function References() {
  const { t } = useTranslation();
 
  const references = [
    { name: 'Harold Ziegler, MV Ziggy, 2009 Hatteras 72’', text: t('references.references.text1'), className: 'firstReview' },
    { name: 'Richard James Markie - Harbor Master, Paradise Village Marina', text: t('references.references.text2'), className: ''},
    { name: 'The Riley’s - Nuevo Vallarta, Paradise Village Hatteras 52', text: t('references.references.text3'), className: ''},
    { name: 'Dick and Lee Burd, MV Lion Heart, Defever 49', text: t('references.references.text4'), className: ''},
    { name: 'Phileta and Dorothy', text: t('references.references.text5'), className: ''},
    { name: 'Cheryl and Thom Landgreen, SV Bolero, Puerto Vallarta', text: t('references.references.text6'), className: ''},
    { name: 'Gary and Marybeth, SV Eagle, Formosa 51', text: t('references.references.text7'), className: ''}
  ]

  const containerRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    
    const container = containerRef.current;
    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Multiplica para aumentar la velocidad de desplazamiento
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <div className='homeContainers referencesHomeContainer'>
        
      <h5 className='titlesHome'>References</h5>
      <h2 className='subtitlesHome'>Create new experiences by working with us</h2>
      <div ref={containerRef} className='referencesContainerScroll'>
        {
          references.map((e, i)=> {
            return(
              <div className={`referenceCard ${e.className}`} key={i}>
                <p className='referenceCardName'>{e.name}</p>
                <p className='referenceCardText'>{e.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default References