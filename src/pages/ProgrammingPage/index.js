import React from 'react'
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
import PythonOutlinedIcon from '../../assets/images/python-icon-outlined.png';
import PythonSolidIcon from '../../assets/images/python-icon-solid.png';
import CppOutlinedIcon from '../../assets/images/c-icon-outlined.png';
import CppSolidIcon from '../../assets/images/c-icon-solid.png';
import JavascriptOutlinedIcon from '../../assets/images/javascript-icon-outlined.png';
import JavascriptSolidIcon from '../../assets/images/javascript-icon-solid.png';
import AllIcon from '../../assets/images/travel_icon_all_solid.png';

const travelIcons = [
  {
    defaultIcon:<Icon><img src={PythonOutlinedIcon} style={{width:'100%'}}></img></Icon>,
    clickedIcon:<Icon><img src={PythonSolidIcon} style={{width:'100%'}}></img></Icon>,
    title:"Python",
  },
  {
    defaultIcon:<Icon><img src={CppOutlinedIcon} style={{width:'100%'}}></img></Icon>,
    clickedIcon:<Icon><img src={CppSolidIcon} style={{width:'100%'}}></img></Icon>,
    title:"C++",
  },
  {
    defaultIcon:<Icon><img src={JavascriptOutlinedIcon} style={{width:'100%'}}></img></Icon>,
    clickedIcon:<Icon><img src={JavascriptSolidIcon} style={{width:'100%'}}></img></Icon>,
    title:"JS"
  },
 
]


function ProgrammingPage() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative'}}>
        <Typography sx={{fontSize:'50px', mb:'40px', mt:'40px', fontWeight:'700'}}>Programming</Typography>
        <TagIcons style={{marginBottom:'20px', display:'flex', justifyContent:'start', position:'aboslute'}} icons = {travelIcons}/>
    </Box>
  )
}

export default ProgrammingPage;