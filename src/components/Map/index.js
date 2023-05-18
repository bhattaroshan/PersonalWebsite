import React from 'react'
import {useState} from 'react';
import {Button} from '@mui/material';

import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    Circle
  } from 'react-leaflet';

function Map() {
    const markers = [
            [27.3103996,86.4902788], //okhaldhunga
            [27.1879061,86.621054],//halesi
            [27.5115864,86.5822882] //salleri
    ];
    return (
        <MapContainer center={markers[0]} zoom={7} scrollWheelZoom={true}> 
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            markers.map((v,i)=>{
                // return <Marker key={i} position={v} style={{color:'red'}}>
                //         <Popup>
                //             <Button>Test</Button>
                //         </Popup>
                //         <Circle center={v} pathOptions={{ fillColor: 'green',color: 'green' }} radius={1000} />
                //     </Marker>
                return <Circle key={i} center={v} pathOptions={{ fillColor: 'red',color: 'red' }} radius={8000} >
                    <Popup>
                        Hello there
                    </Popup>
                    </Circle>
            })
        }
      
      </MapContainer>
      );
}

export default Map;