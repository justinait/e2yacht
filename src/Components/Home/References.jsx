import React from 'react'
import './References.css'

function References() {
 
  const references = [
    { name: 'Harold Ziegler, MV Ziggy, 2009 Hatteras 72’', text: '“Elizabeth, I wanted to thank you and let you know that I recommend you as a delivery captain. You completed my delivery from the Bahamas to Michigan in a timely fashion. There were times that you ran the boat all night in order to get it back to Michigan and meet my scheduled trip. I appreciate your dedication and commitment to making things happen.”', className: '' },
    { name: 'Richard James Markie – Harbor Master, Paradise Village Marina', text: '“Elizabeth Shanahan is a great delivery captain; I have recommended her several times and received good reports about her and her operation. I have known her for 5 plus years and consider her operation an accent to our marina.”', className: ''},
    { name: 'The Riley’s - Nuevo Vallarta, Paradise Village Hatteras 52', text: '“Thank you again for all of your help and assistance with recent repairs, maintenance and project management. We appreciate E2’s professional level of service and the ability to communicate easily with your team. The full range of services you provide is particularly helpful when boat owners must manage their boats from afar.”', className: ''},
    { name: 'Dick and Lee Burd, MV Lion Heart, Defever 49', text: '“Elizabeth, we want to thank you for the years of taking care of and running our yacht. You managed our yacht with professionalism, from having her clean and provisioned as we requested to managing the hardwork in our absence. Your attention to detail in the ongoing maintenance a yacht requires was greatly appreciated. Your skills as captain and in handling the yacht in all sorts of seas and weather are impressive.', className: ''},
    { name: 'Phileta and Dorothy', text: '"Sometimes in life we\'re lucky enough to meet the perfect person to do the perfect job. Eugenie\'s extensive sailing knowledge and experience is shared with gentleness and grace. She respects and understands both her craft and students. She\s honest, humorous, tri-lingual (!), strong in body, mind and spirit and a delight to be with whether sailing or on land. Thanks Eugenie!”', className: ''},
    { name: 'Cheryl and Thom Landgreen, SV Bolero, Puerto Vallarta', text: 'Eugenie is knowledgeable, enthusiastic, personable and she is a great teacher. It is rare to find all these qualities in one person! We look forward to more lessons with Eugenie during the 2011-2012 season. Whenever friends ask us for a recommendation for a sailing instructor - from the most basic to advanced levels – we always send them to Eugenie!', className: ''},
    { name: 'Gary and Marybeth, SV Eagle, Formosa 51', text: '“Dear Elizabeth and Eugenie, Your combined professionalism and skills truly put a lot of my anxiety to rest and carried us through. Thanks so much. Our sailboat’s namesake, the Eagle, is a good metaphor for camaraderie and for good times: I hope to exploit this to the max in the coming years. You both are welcome to sail her anytime the opportunity permits. Love you both.”', className: ''}
  ]
  return (
    <div className='homeContainers whereHomeContainer'>
        
      <h5 className='titlesHome'>References</h5>
      <h2 className='subtitlesHome'>Create new experiences by working with us</h2>

      {
        references.map((e, i)=> {
          return(
            <div className='referenceCard'>
              <p className='referenceCardName'>{e.name}</p>
              <p className='referenceCardText'>{e.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default References