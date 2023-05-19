import React from 'react'
import Map from '../../components/Map';
import {Grid, Typography,Box} from '@mui/material';
import TagIcons from '../../components/TagIcons';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WorkIcon from '@mui/icons-material/Work';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import { divIcon } from 'leaflet';

const travelIcons = [
  {
    defaultIcon:<WorkOutlineIcon/>,
    clickedIcon:<WorkIcon/>,
    title:"All"
  },
  {
    defaultIcon:<WorkOutlineIcon/>,
    clickedIcon:<WorkIcon/>,
    title:"Work"
  },
  {
    defaultIcon:<DriveEtaOutlinedIcon/>,
    clickedIcon:<DriveEtaIcon/>,
    title:"Drive"
  },
  {
    defaultIcon:<DriveEtaOutlinedIcon/>,
    clickedIcon:<DriveEtaIcon/>,
    title:"Drive"
  },
  {
    defaultIcon:<DriveEtaOutlinedIcon/>,
    clickedIcon:<DriveEtaIcon/>,
    title:"Drive"
  },
  {
    defaultIcon:<DriveEtaOutlinedIcon/>,
    clickedIcon:<DriveEtaIcon/>,
    title:"Drive"
  },
  {
    defaultIcon:<DriveEtaOutlinedIcon/>,
    clickedIcon:<DriveEtaIcon/>,
    title:"Drive"
  },
  {
    defaultIcon:<DriveEtaOutlinedIcon/>,
    clickedIcon:<DriveEtaIcon/>,
    title:"Drive"
  },
]

function TravelPage() {
  return (
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative'}}>
        <Typography sx={{fontSize:'40px', mb:'40px', mt:'40px', fontWeight:'700'}}>Travel</Typography>
        <TagIcons style={{marginBottom:'20px', display:'flex', justifyContent:'start', position:'aboslute'}} icons = {travelIcons}/>
        <Map/>
      </Box>
  )
}



export default TravelPage;