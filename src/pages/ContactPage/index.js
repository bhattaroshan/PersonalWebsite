import { Grid,Card,CardMedia,Box, Typography } from '@mui/material';
import React from 'react';
import AboutImage from '../../assets/images/about-photo.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ContactPage() {
  return (
        <Grid container spacing={3} mt={3} justifyContent='center'>
            <Grid item xs={8} md={5} lg={4}>
                <Card>
                    <CardMedia 
                        sx={{objectFit:'cover'}}
                        component="img"
                        image= {AboutImage}
                    /> 
                </Card>
            </Grid>
            <Grid item xs={8} md={6} my={4} display='flex' flexDirection='column'>
                <Typography sx={{
                                fontSize:{
                                    xs: '40px',
                                    sm: '40px',
                                    md: '60px',
                                    lg: '60px'

                                }, 
                                fontWeight:'900'}}>ROSHAN</Typography>
                <Typography sx={{
                                fontSize:{
                                    xs: '40px',
                                    sm:'40px',
                                    md:'60px',
                                    lg: '60px'
                                },
                                fontWeight:'900', color:'#ee5500'}}>BHATTA</Typography>
                <Typography display='inline' sx={{fontSize:'20px', fontWeight:'200', my:4, mr:{md:6}, textAlign:'justify'}}>
                    Passionate engineering manager with a strong backround in cloud computing, embedded programming and STEAM education. Keen enthusiast of DSP, applied mathematics, sound engineering and DSA.
                </Typography>
                <Box display='flex' justifyContent='center' gap={2} my={5}>
                    <FacebookIcon fontSize='large'/>
                    <YouTubeIcon fontSize='large'/>
                </Box>

            </Grid>
            {/* <Grid item xs={12}>
                <Typography>Test</Typography>
            </Grid> */}
        </Grid>
  )
}

export default ContactPage;