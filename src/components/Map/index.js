import React from 'react'
import {useState} from 'react';
import {Button,Box} from '@mui/material';
import L from 'leaflet';
import natsu from '../../assets/images/natsu.png';
import travelPlaces from '../../contants/places';

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
 
    return (
        <MapContainer center={travelPlaces[0].latlong} zoom={3} scrollWheelZoom={true}> 
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
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