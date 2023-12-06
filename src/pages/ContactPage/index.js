import { Grid,Card,CardMedia,Box, Typography,TextField, Button } from '@mui/material';
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
                        sx={{objectFit:'cover', my:5}}
                        component="img"
                        image= {AboutImage}
                    /> 
                <Box display='flex' justifyContent='center' gap={2} my={5}>
                    <FacebookIcon fontSize='large'/>
                    <YouTubeIcon fontSize='large'/>
                </Box>
                </Card>
            </Grid>

            <Grid item xs={8} md={6} my={4} display='flex' flexDirection='column'>
                <Typography sx={{
                                fontSize:{
                                    xs: '40px',
                                    sm: '40px',
                                    md: '40px',
                                    lg: '40px'

                                }, 
                                fontWeight:'600'}}>ROSHAN</Typography>
                <Typography sx={{
                                fontSize:{
                                    xs: '40px',
                                    sm:'40px',
                                    md:'40px',
                                    lg: '40px'
                                },
                                fontWeight:'600', color:'#ee5500'}}>BHATTA</Typography>
                <Typography display='inline' sx={{fontSize:'18px', fontWeight:'200', my:1, mr:{md:6}, textAlign:'justify'}}>
                    Passionate engineering manager with a strong backround in cloud computing, embedded programming and STEAM education. Keen enthusiast of DSP, applied mathematics, sound engineering and DSA.
                </Typography>
                <Typography sx={{py:'10px', fontSize:'32px', fontWeight:700, justifyContent:'center', alignItems:'center'}}>Contact Me</Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{py:'10px'}}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{py:'10px'}}/>
                <TextField
                            sx={{py:'10px'}}
                            rows={4}
                            id="standard-multiline-flexible"
                            label="Message"
                            multiline
                            maxRows={4}
                            // value={value}
                            // onChange={handleChange}
                />
                <Button variant='contained' sx={{height:'50px'}}>Send Message</Button>
            </Grid>
            {/* <Grid item xs={12}>
                <Typography>Test</Typography>
            </Grid> */}
        </Grid>
  )
}

export default ContactPage;