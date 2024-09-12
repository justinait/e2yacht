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
    const [selectedMarker, setSelectedMarker] = useState(null);
    
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

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };
  return (

    <div className='mapBoxContainer'>
        {isLoaded && 
            <GoogleMap 
                zoom={12}
                center={{ lat: 20.7000, lng: -105.2938 }}
                mapContainerClassName='mapContainer'
                ref={mapRef}
                height={200}
                width={200}
            >
                <Marker
                    position={markerA}
                    onClick={() => handleMarkerClick(markerA)}
                />

                {/* Marker B */}
                <Marker
                    position={markerB}
                    onClick={() => handleMarkerClick(markerB)}
                />

                {/* InfoWindow para mostrar el texto cuando se selecciona un marcador */}
                {selectedMarker && (
                    <InfoWindow
                    position={selectedMarker}
                    onCloseClick={() => setSelectedMarker(null)}
                    >
                    <div style={{ padding: '10px' }}>
                        <h3>{selectedMarker.label}</h3>
                    </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        }
    </div>




)
}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATA9w96X3FKj_idxFdo9nvd4SxaxDb43Y&callback=initMap&map_ids=dc395694d3c4c44" defer></script>

export default Maps