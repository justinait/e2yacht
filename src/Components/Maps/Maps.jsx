import React, { useEffect, useRef, useState } from 'react'
import './Maps.css'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import markerIcon from '/marker.png';

function Maps() {


    const { isLoaded } = useJsApiLoader({
        id: 'dc395694d3c4c44',
        googleMapsApiKey: "AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y",
    })
    const mapRef = useRef(null);
    
    
    const markerPosition = {
        lat: 20.690769012472977,
        lng: -105.29504164638364,
    };

    const mapContainerRef = useRef(null);
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

  return (

    <div className='mapBoxContainer'>
        {isLoaded && 
            <GoogleMap 
                zoom={12}
                center={{ lat: 20.690769012472977, lng: -105.29504164638364 }}
                mapContainerClassName='mapContainer'
                ref={mapRef}
                height={200}
                width={200}
            >
            {/* <Marker position={markerPosition}/> */}
            </GoogleMap>
        }
    </div>




)
}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y&callback=initMap&map_ids=dc395694d3c4c44" defer></script>

export default Maps