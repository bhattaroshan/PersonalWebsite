import React from 'react'
import {useState} from 'react';
import {Button,Box} from '@mui/material';
import L from 'leaflet';
import travelPlaces from '../../contants/places';
import {Polyline, useMapEvents} from "react-leaflet";
import { geoPoly } from '../../config';

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
 
  const [zoomLevel,setZoomLevel] = useState(3);

    const handleZoomEnd = (event) => {
        // const zoomLevel = event.target.getZoom();
        console.log('Zoom level:', zoomLevel);
        setZoomLevel(event.target.getZoom());
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
        <MapContainer center={travelPlaces[0].latlong} zoom={3} scrollWheelZoom={true} > 
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
          zoomLevel<=4?
            <Polygon pathOptions={{fillColor:'red',color:'red'}} positions={geoPoly}  />
          :
          travelPlaces.map((v,i)=>{
                
            return <Circle key={i} center={v.latlong} pathOptions={{ fillColor: 'red',color: 'red' }} radius={(8000/(zoomLevel/(zoomLevel<=8?20:3)))}>
                    <Popup>
                        {v.place}
                        {/* <button className='border rounded p-2 m-2 hover:bg-blue-200 active:bg-blue-300'>OK</button> */}
                    </Popup>
                    </Circle>

        }) 

        }
      </MapContainer>

      );
}

export default Map;