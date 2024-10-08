import React, { useEffect, useRef, useState } from 'react'
import './Maps.css'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
// import markerIcon from '/marker.png';

function Maps() {

    const { isLoaded } = useJsApiLoader({
        id: 'dc395694d3c4c44',
        googleMapsApiKey: "AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y",
    })
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const [zoom, setZoom] = useState(12);

    useEffect(() => {
        if (isLoaded && mapContainerRef.current) {
            const position = { lat: 20.690769012472977, lng: -105.29504164638364 };
            new window.google.maps.Marker({
                position,
                map: mapContainerRef.current.getMap(),
                icon: markerIcon,
            });
        }
    }, [isLoaded]);

    const markerA = {
        lat: 20.690769012472977,
        lng: -105.29504164638364,
        label: 'Paradise Village Marina, Paseo de los Cocoteros 1, Nuevo Vallarta, Nayarit. Mexico 63735',
    };
    
    const markerB = {
        lat: 20.709505586011947,
        lng: -105.29269821754673,
        label: 'Blvd Nuevo Vallarta PTE, 65 Local 15 Nuevo Vallarta, Nayarit. Mexico, 63732',
    };
    const getZoomLevel = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1000   ) {
          return 12;
        } else if (screenWidth < 1200){
            return 13
        } else {
          return 14;
        }
      };
    
      useEffect(() => {
        setZoom(getZoomLevel());
    
        // Listener para cambiar el zoom cuando se redimensiona la ventana
        const handleResize = () => {
          setZoom(getZoomLevel());
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
  return (

    <div className='mapBoxContainer'>
        {isLoaded && 
            <GoogleMap 
                zoom={zoom}
                center={{ lat: 21, lng: -105.29269821754673 }}
                mapContainerClassName='mapContainer'
                ref={mapRef}
                height={200}
                width={200}
            >
                <Marker                    position={markerA}                />
                <InfoWindow
                    position={markerA}
                    options={{
                        pixelOffset: new window.google.maps.Size(-90, 30),
                        maxWidth: 200,
                    }}
                >
                    <div className='infoWindow'>
                        <p>{markerA.label}</p>
                    </div>
                </InfoWindow>
                {/* Marker B */}
                <Marker                    position={markerB}                />

                <InfoWindow
                    position={markerB}
                    
                    options={{
                        pixelOffset: new window.google.maps.Size(-90, 30),
                        maxWidth: 200,
                    }}
                >
                    <div className='infoWindow'>
                        <p>{markerB.label}</p>
                    </div>
                </InfoWindow>
                
            </GoogleMap>
        }
    </div>

)
}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y&callback=initMap&map_ids=dc395694d3c4c44" defer></script>

export default Maps