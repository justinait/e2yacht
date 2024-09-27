import React, { useContext, useEffect, useMemo, useState } from 'react'
import menu from '/icons/servicesMenu.png'
import db from '../../../firebaseConfig';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import './Services.css'
import { ServiceContext } from '../context/ServiceContext';
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation(); 

    const [open, setOpen] = useState(false);
    const [service, setService] = useState([]);
    const [serviceOpen, setServiceOpen] = useState('')
    const { setSelectedService, selectedService } = useContext(ServiceContext);
    const { serviceId } = useParams();

    const idsDb = useMemo(() => ({
        'whatwedo': '4FhrJKKewjFt9nqAHBbo',
        'instruction': '8LTZWLq9gcpA4wN9j709',
        'deliveries': 'MTCdSa4CoLGEDifffliX',
        'captainandcrew': 'fSm9K9jTJrhQMIm9EQi9',
        'marinesurvey': 'gKZZCIdSLCvrLvluErtn',
        'management': 'lBfaNohObxnyr8mDu7uF',
        'maritimerecovery': 'NaXg0p4djLdC7BXcRj6Q'
    }), []);

    const services = [
        { name: t('navbar.whatWeDo'), id: 'whatwedo'},
        { name: t('navbar.yachtManagement'), id: 'management'},
        { name: t('navbar.yachtDeliveries'), id: 'deliveries'},
        { name: t('navbar.privateInstructions'), id: 'instruction'},
        { name: t('navbar.marineSurvey'), id: 'marinesurvey'},
        { name: t('navbar.captainAndCrewServices'), id: 'captainandcrew'},
        { name: t('navbar.maritimeAssetRecovery'), id: 'maritimerecovery'}
    ];

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
            question: t('services.faqs.q1'), 
            text: t('services.faqs.t1'), 
        },
        { 
            question: t('services.faqs.q2'), 
            text: t('services.faqs.t2'), 
        },
        { 
            question: t('services.faqs.q3'), 
            text: t('services.faqs.t3'), 
        },
        { 
            question: t('services.faqs.q4'), 
            text: t('services.faqs.t4'), 
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
        const serviceFirebaseId = idsDb[serviceId];
        if (serviceFirebaseId) {
            try {
                const docRef = doc(db, 'services', serviceFirebaseId);
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists()) {
                    const serviceData = docSnapshot.data();
                    setService({ ...serviceData, url: docSnapshot.id });
                } else {
                    console.error('Documento no encontrado');
                }
            } catch (error) {
                console.error('Error al obtener el servicio:', error);
            }
        } else {
            console.error('ID no encontrado en idsDb');
        }
          
    }
    useEffect(() => {
        setSelectedService(serviceId);
    }, [serviceId, setSelectedService]);
    
    useEffect(() => {
        
        getService()
            
    }, [serviceId])

    const { name, firstText, secondText, ul, extras } = service;

    return (
    <div className='otherSectionsContainers'>

        <div  className={`heroImages ${serviceId}Hero`}>
          <br />
          <h3>{name}</h3>
        </div>

        <div className='homeContainers'>

            <div className='ourServicesTitleDiv'>
                <img src={menu} alt="" className='menuServices' />
                <h5 className='titlesHome servicesTitles'>{t('services.ourTitle')}</h5>
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

            <div className={serviceId == 'whatwedo'? 'whatWeDoTextContainer' : 'managementTextContainer'}  >
                <p dangerouslySetInnerHTML={{ __html: firstText }}></p>
                
                {
                    service.subtitle && (
                        <p className={serviceId === 'instruction' ? 'managementh5' : ''}>
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
                    serviceId == 'marinesurvey' &&
                    <>
                        <div>
                            <p className='managementh5 faqsTitle'>{t('services.faqs.faqTitle')}</p>
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
                            <p> <strong>{t('services.faqs.otherDocs')}</strong></p>
                            <ul>
                            <li onClick={openPDF} style={{cursor: 'pointer', textDecoration: 'underline', color:'#165BBB'}}>
                                {t('services.faqs.certificate')}
                            </li>
                            </ul>
                        </div>
                    </>
                }

                {/* management */}
                {
                    serviceId == 'management' &&
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