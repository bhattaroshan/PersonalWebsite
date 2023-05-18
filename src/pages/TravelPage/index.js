import React from 'react'
import Map from '../../components/Map';
import {Grid, Typography,Box} from '@mui/material';

function TravelPage() {
  return (
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography sx={{fontSize:'40px', mb:'40px', mt:'40px', fontWeight:'700'}}>Travel</Typography>
        <Map/>
      </Box>
  )
}

export default TravelPage;