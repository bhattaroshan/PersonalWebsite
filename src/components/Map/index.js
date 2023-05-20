import React from 'react'
import {useState} from 'react';
import {Button,Box} from '@mui/material';
import L from 'leaflet';
import natsu from '../../assets/images/natsu.png';
import travelPlaces from '../../contants/places';
import {useMapEvents} from "react-leaflet";

import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    Circle,
  } from 'react-leaflet';
import { Flag } from '@mui/icons-material';

function Map() {
    const handleZoomEnd = (event) => {
        const zoomLevel = event.target.getZoom();
        console.log('Zoom level:', zoomLevel);
        // Perform actions based on the zoom level change
        // ...
      };
    
      function ZoomEvent() {
        useMapEvents({
          zoomend: handleZoomEnd,
        });
    
        return null;
      }

    return (
        <MapContainer center={travelPlaces[0].latlong} zoom={3} scrollWheelZoom={true}> 
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomEvent />
        {
            travelPlaces.map((v,i)=>{
                // return <Marker key={i} position={v} style={{color:'red'}}>
                //         <Popup>
                //             <Button>Test</Button>
                //         </Popup>
                //         <Circle center={v} pathOptions={{ fillColor: 'green',color: 'green' }} radius={1000} />
                //     </Marker>
                return <Circle key={i} center={v.latlong} pathOptions={{ fillColor: 'red',color: 'red' }} radius={8000}>
                        <Popup>
                            {v.place}
                        </Popup>
                        </Circle>

            })
        }
      
      </MapContainer>

      );
}

export default Map;