import React from 'react'
import Map from '../../components/Map';
import {Grid, Typography,Box,Icon} from '@mui/material';
import TagIcons from '../../components/TagIcons';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import WorkIcon from '@mui/icons-material/Work';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

import HolidayOutlinedIcon from '../../assets/images/travel_icon_holiday_outlined.png';
import HolidayIcon from '../../assets/images/travel_icon_holiday_solid.png';
import AllOutlinedIcon from '../../assets/images/travel_icon_all_outlined.png';
import AllIcon from '../../assets/images/travel_icon_all_solid.png';

const travelIcons = [
  {
    defaultIcon:<Icon><img src={AllOutlinedIcon} style={{width:'100%'}}></img></Icon>,
    clickedIcon:<Icon><img src={AllIcon} style={{width:'100%'}}></img></Icon>,
    title:"All",
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
    defaultIcon:<AirplaneTicketOutlinedIcon/>,
    clickedIcon:<AirplaneTicketIcon/>,
    title:"Flight"
  },
  {
    defaultIcon:<Icon><img src={HolidayOutlinedIcon} style={{width:'100%'}}></img></Icon>,
    clickedIcon:<Icon><img src={HolidayIcon} style={{width:'100%'}}></img></Icon>,
    title:"Holiday"
  },
]

function TravelPage() {
  return (
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative'}}>
        <Typography sx={{fontSize:'50px', mb:'40px', mt:'40px', fontWeight:'700'}}>Travel</Typography>
        <TagIcons style={{marginBottom:'20px', display:'flex', justifyContent:'start', position:'aboslute'}} icons = {travelIcons}/>
        <Map/>
      </Box>
  )
}



export default TravelPage;