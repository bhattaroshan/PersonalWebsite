import { Grid,Card,CardMedia,Box, Typography,TextField, Button,Snackbar,Alert,CircularProgress } from '@mui/material';
import React,{useState} from 'react';
import AboutImage from '../../assets/images/about-photo.jpeg';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import emailjs from '@emailjs/browser';

function ContactPage() {

    const [personName,setPersonName] = useState('');
    const [personEmail,setPersonEmail] = useState('');
    const [personMessage,setPersonMessage] = useState('');

    const [snackOpen,setSnackOpen] = useState(false);
    const [messageSentStatus,setMessageSentStatus] = useState(false);
    const [processingMessage,setProcessingMessage] = useState(false);

    async function sendEmail(person,email,message){
        const emailVars = {
            from_name:person,
            from_email:email,
            message:message
        }

        try{
            const result = await emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID,
                                            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                                            emailVars,
                                            process.env.REACT_APP_EMAIL_PUBLIC_KEY);
            
            setSnackOpen(true);
            setMessageSentStatus(true);

        }catch(error){
            setMessageSentStatus(false);
        }
        setProcessingMessage(false);
    }

    function handleMessageSend(person,email,message){
        sendEmail(person,email,message);
        setProcessingMessage(true);
        // setMessageSentStatus(true);
    }

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackOpen(false);
      };
    
  return (
        <Grid container spacing={3} mt={3} justifyContent='center'>
            <Grid item xs={8} md={4} lg={4}>
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
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{py:'10px'}}
                    onChange={(e)=>setPersonName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{py:'10px'}}
                    onChange={(e)=>setPersonEmail(e.target.value)} 
                />
                <TextField
                            sx={{py:'10px'}}
                            rows={4}
                            id="standard-multiline-flexible"
                            label="Message"
                            multiline
                            onChange={(e)=>setPersonMessage(e.target.value)}
                />
                <Button variant='contained' sx={{height:'50px'}}
                onClick={()=>handleMessageSend(personName,personEmail,personMessage)}>
                    <div style={{display:'flex',flexDirection:'row', gap:'10px'}}>
                        {
                            processingMessage && <CircularProgress color='secondary' size={24} style={{border:'none'}}/>
                        }
                        <p>Send Message</p>
                        </div>
                </Button>
            </Grid>
            {/* <Grid item xs={12}>
                <Typography>Test</Typography>
            </Grid> */}

            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose}>
                    <Alert severity={messageSentStatus?"success":"error"} sx={{ width: '100%' }} onClose={handleSnackClose}>
                            {messageSentStatus?"Message sent successfully. I'll revert to you in a few days.":"Your message was not sent. Please click on the send button one more time."}
                    </Alert>
            </Snackbar>
        </Grid>

        
  )
}

export default ContactPage;