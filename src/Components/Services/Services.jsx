import React, { useContext, useEffect, useState } from 'react'
import menu from '/icons/servicesMenu.png'
import db from '../../../firebaseConfig';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import './Services.css'
import { ServiceContext } from '../context/ServiceContext';

function Services() {

    const [open, setOpen] = useState(false);
    const [service, setService] = useState([]);
    const [serviceOpen, setServiceOpen] = useState('')
    const { setSelectedService, selectedService } = useContext(ServiceContext);
    const { serviceId } = useParams();

    
    const idsDb = [
        { id:'4FhrJKKewjFt9nqAHBbo', url: 'whatwedo' },
        { id:'8LTZWLq9gcpA4wN9j709', url: 'instruction' },
        { id:'MTCdSa4CoLGEDifffliX', url: 'deliveries' },
        { id:'fSm9K9jTJrhQMIm9EQi9', url: 'captainandcrew' },
        { id:'gKZZCIdSLCvrLvluErtn', url: 'marinesurvey' },
        { id:'lBfaNohObxnyr8mDu7uF', url: 'management' },
        { id:'NaXg0p4djLdC7BXcRj6Q', url: 'maritimerecovery' }
    ]
    
    const findId = idsDb.find(e => e.url === serviceId);

    const services = [
        { name: 'What We Do', id: 'whatwedo', className: '' },
        { name: 'Yacht Management', id: 'management', className: ''},
        { name: 'Yacht Deliveries', id: 'deliveries', className: ''},
        { name: 'Private Instructions', id: 'instruction', className: ''},
        { name: 'Marine Survey', id: 'marinesurvey', className: ''},
        { name: 'Captain And Crew Services', id: 'captainandcrew', className: '' },
        { name: 'Maritime Asset Recovery', id: 'maritimerecovery', className: ''}
    ]

    const openPDF = () => {
        const pdfPath = '/SAMS.pdf';
        const link = document.createElement('a');
        link.href = pdfPath;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const faqs = [
        { 
        question: 'How long does a survey take?', 
        text: 'I recommend that you be there to open any locks and give me permission to board and inspect. The survey can run anywhere from 2 to 10 hours depending on the size of the vessel and 2 to 8 hours in the office to thoroughly prepare the survey report. Larger yachts and commercial vessels may take me 2-3 days to conduct a thorough physical survey.', 
        className: ''
        },
        { 
        question: 'Can I be present at the time of the survey?', 
        text: 'I welcome all clients to be present, and I have no problem explaining as I conduct the survey.', 
        className: '' 
        },
        { 
        question: 'How does one prepare the boat for a marine survey?', 
        text: 'The boat must be plugged into shore power, all batteries hooked up, charged and installed. All manuals, maintenance log, receipts, registration, USCG Documentation Papers, and a copy of the previous survey must be onboard. If a sailboat, masts and spars must be moved to ground level. Additionally, Please provide the Buyer / Owner/ Brokers\'s Name, Mailing and E-mail address, Phone Number as well as the Make and Model of Vessel, HIN (Hull Identification Number), specific location of vessel and mast if un-stepped, and notes pertaining to access of the vessel. <br/><br/> IMPORTANT: Prior to any survey please ensure the vessel is clean and clear of any personal effects, gear, oil / water in bilge, furniture or other items which might block access or vision. The vessel will be surveyed as found, and only to the extent of what can be seen, what is accessible and what is limited.', 
        className: '' 
        },
        { 
        question: 'Fiberglass hulls can blister, why are they still better than wood, steel or aluminum?', 
        text: 'The basic facts of life, physics, and chemistry are that Steel, Aluminum and Wood all require constant maintenance, which, if neglected would have far more severe effects on structural integrity over a shorter time period. A fiberglass boat will likely withstand prolonged neglect without the hull being weakened. Ingress of moisture (which can lead to blistering) occurs over years and in the end, might not even result in the formation of a blister (or chemical change in properties of the GRP matrix).', 
        className: 'bigServicesText biggerLetter' 
        }
    ];

    const handleOpen = (e) => {
        setOpen(true);
        setServiceOpen(e.question);
    }
    const handleClose =(e)=>{
        setOpen(false)
        setServiceOpen('')
    }

    const getService = async () => {
        if (findId) {
            const docRef = doc(db, 'services', findId.id);
            const docSnapshot = await getDoc(docRef);
        
            let serviceData = docSnapshot.data();
            serviceData.url = docSnapshot.id;
            
            console.log(findId.url);
            return serviceData;
          } else {
            console.error('findId no encontrado');
            return null;
          }
          
    }
    useEffect(() => {
        setSelectedService(serviceId);
    }, [serviceId, setSelectedService]);
    
    useEffect(() => {
        
        getService()
        .then(res => {
        if (res) {
            setService(res);
        }
        });
            
    }, [serviceId])
    const { name, firstText, secondText, ul, extras } = service;


    return (
    <div className='otherSectionsContainers'>

        <div  className={`heroImages ${findId.url}Hero`}>
          <br />
          <h3>{name}</h3>
        </div>

        <div className='homeContainers'>

            <div className='ourServicesTitleDiv'>
                <img src={menu} alt="" className='menuServices' />
                <h5 className='titlesHome servicesTitles'>Our Services</h5>
            </div>
            <div className='servicesList'>
                <div className='ourServicesTitleDivDesktop'>
                    <img src={menu} alt="" className='menuServices' />
                    <h5 className='titlesHome servicesTitles'>Services</h5>
                </div>
                {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/${service.id}`}
                      className={selectedService === service.id ? ' serviceListItems activeNavbar' : ' serviceListItems'}
                    >
                      {service.name}
                    </Link>
                ))}
            </div>

            <div className={findId.url == 'whatwedo'? 'whatWeDoTextContainer' : 'managementTextContainer'}  >
                <p dangerouslySetInnerHTML={{ __html: firstText }}></p>
                
                {
                    service.subtitle && (
                        <p className={findId.url === 'instruction' ? 'managementh5' : ''}>
                            {service.subtitle}
                        </p>
                    )
                }

                <ul>
                    {
                    ul?.map(e => (
                        <li dangerouslySetInnerHTML={{ __html: e }}></li>
                    ))
                    }
                </ul>

                <p dangerouslySetInnerHTML={{ __html: secondText }}></p>
                
                {service.ul2 &&
                <ul>
                    {
                    service.ul2?.map(e => (
                        <li dangerouslySetInnerHTML={{ __html: e }}></li>
                    ))
                    }
                </ul>
                }
                
                {service.thirdText &&
                    <p dangerouslySetInnerHTML={{ __html: service.thirdText }}></p>

                }

                {/* marine survey */}
                {
                    findId.url == 'marinesurvey' &&
                    <>
                        <div>
                            <p className='managementh5 faqsTitle'>Frequently Asked Questions:</p>
                            <div className='servicesItemsContainer'>
                            {
                                faqs.map((e, i)=> {
                                return (
                                    <div className='serviceItem' key={i}>

                                        <div className='serviceItemName'>
                                            <p className='servicesItemTitle'>{e.question}</p>
                                            {(open && serviceOpen == e.question) ?
                                            <p className='seeMore' onClick={()=>handleClose(e)}>-</p>:
                                            <p className='seeMore' onClick={()=>handleOpen(e)}>+</p>
                                            }
                                        </div>
                                        {
                                            (open && serviceOpen == e.question) &&
                                            <div className='serviceOpenContainer'>
                                            <p dangerouslySetInnerHTML={{ __html: e.text }} className={`servicesText ${e.className}`}></p>
                                            </div>
                                        }
                                    </div>
                                )
                                })
                            }

                            </div>
                        </div>
                        <div>
                            <p> <strong>Other documents:</strong></p>
                            <ul>
                            <li onClick={openPDF} style={{cursor: 'pointer'}}>
                                Certificate from SAMS
                            </li>
                            </ul>
                        </div>
                    </>
                }

                {/* management */}
                {
                    findId.url == 'management' &&
                    <>
                        <div className='separatorManagement'></div>
                        <p className='managementh5 managementh5Bigger'>Yachts under our care</p>
                        <div className='boatsWeManage'>
                            <div>
                                <p className='managementh6'>{extras?.name}</p>
                                <ol className='olManagement'>
                                    {
                                    extras?.ol?.map(e => (
                                        <li>{e}</li>
                                    ))
                                    }
                                </ol>
                            </div>

                            <div>
                                <p className='managementh6'>{extras?.name2}</p>
                                <ol className='olManagement'>
                                    {
                                    extras?.ol2?.map(e => (
                                        <li>{e}</li>
                                    ))
                                    }
                                </ol>
                            </div>
                        
                        </div>
                    </>
                }

            </div>
        </div>
    </div>
  )
}

export default Services