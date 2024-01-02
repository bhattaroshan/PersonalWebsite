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
        <p className='text-5xl mt-6 mb-8 md:my-12 font-extrabold'>Travel</p>
        <div className='mb-4'>
          <TagIcons style={{ display:'flex', justifyContent:'start', position:'aboslute'}} icons = {travelIcons}/>
        </div>
          <div className='flex flex-col items-center'>
            <div className='flex justify-end w-screen mr-6'>
              <p className='text-red-300 text-xs'>Zoom In for detail view</p>
            </div>
            <Map/>
          </div>
      </Box>
  )
}



export default TravelPage;