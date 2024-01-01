import React from 'react'
import {useState} from 'react';
import {Button,Box} from '@mui/material';
import L from 'leaflet';
import travelPlaces from '../../contants/places';
import {Polyline, useMapEvents} from "react-leaflet";
import { geoNepal,polygon } from '../../config';

import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    Circle,
    Polygon,
  } from 'react-leaflet';
import { Flag } from '@mui/icons-material';


function Map() {
 
  const [globalLevel,setGlobalLevel] = useState(3);

    const handleZoomEnd = (event) => {
        const zoomLevel = event.target.getZoom();
        console.log('Zoom level:', zoomLevel);
        setGlobalLevel(zoomLevel);
        // Perform actions based on the zoom level change
        // ...
        //until zoom level 5 from 0 map out only counties

      };
    
      function ZoomEvent() {
        useMapEvents({
          zoomend: handleZoomEnd,
        });
    
        return null;
      }
      const fillBlueOptions = { fillColor: 'blue' }

    return (
        <MapContainer center={travelPlaces[0].latlong} zoom={3} scrollWheelZoom={true}> 
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomEvent />
        {/* {
            travelPlaces.map((v,i)=>{
                
                return <Circle key={i} center={v.latlong} pathOptions={{ fillColor: 'red',color: 'red' }} radius={8000}>
                        <Popup>
                            {v.place}
                        </Popup>
                        </Circle>

            })
        }
       */}
        {/* <Polygon pathOptions={fillBlueOptions} positions={geoNepal} /> */}
        {
          globalLevel<=5?
            <Polygon pathOptions={{fillColor:'red',color:'red'}} positions={geoNepal}  />
          :
          travelPlaces.map((v,i)=>{
                
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