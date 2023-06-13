import React, {useRef,useEffect} from 'react'
import {Box, Typography,Card,CardMedia,Grid, Container} from '@mui/material';
import PortfolioImage from '../../assets/images/portfolio_page.png';
import ComputerImage from '../../assets/images/computer.png';
import {gsap} from 'gsap';

import './style.scss';



function PortfolioPage() {
  const imgRef = useRef(null);
  const txtRef = useRef(null);
  const txtRef2 = useRef(null);

    useEffect(()=>{
        gsap.fromTo(txtRef.current,
            {x:-400, opacity:0},
            {x:0, duration: 0.7, opacity:1, ease: 'power2.out'}
        );
        gsap.fromTo(txtRef2.current,
            {x:-400,opacity:0},
            {x:0,duration:1.2,opacity:1,ease:'power2.out'}
            );
        gsap.fromTo(imgRef.current,
            {x: 400, opacity:0},
            {x:0,duration: 0.7, opacity:1, ease: 'power2.out'}
        );

            console.log("test");
    },[])

  return (
    <Box sx={{minHeight:'40vh', background:"#154c79", boxShadow: 3}}>
        <Grid container spacing={0} alignItems='center' justifyContent='center'>
            <Grid item xs={12} sm={4} marginX={5}>
                <Typography ref={txtRef} sx={{textAlign:'center',
                                fontSize:'80px', fontWeight:'900', color:'white'}}>Portfolio</Typography>
                <Typography ref={txtRef2} sx={{textAlign:'center',
                                fontSize:'20px', color:'#d0d0d0'}}>Transforming Ideas into Intelligent Code</Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={6}>
                <img ref={imgRef} src={ComputerImage} style={{width:'100%'}}/>
            </Grid>
        </Grid>
    </Box>

        /* <Box sx={{display:'flex'}}>
            <Box flexGrow={0.5}>
                <Typography>Test</Typography>
                <Card sx={{ display: 'flex', width: "300px", height:"220px"}}> 
                <CardMedia
                    component="img"
                    sx={{ width: 151, maxHeight: 220, borderTopRightRadius: '5px', borderBottomRightRadius: '5px', objectFit:'contain'}}
                    image={book_hooked}
                    alt={"book_hooked"}
                />
                </Card>
            </Box>
            <Box flexGrow={0.5}>
                <Typography>Test</Typography>
            </Box>
        </Box> */
  );
}

export default PortfolioPage;