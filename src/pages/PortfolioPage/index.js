import React, {useRef,useEffect} from 'react'
import {Box, Typography,Card,CardMedia,Grid, Container} from '@mui/material';
import PortfolioImage from '../../assets/images/portfolio_page.png';
import ComputerImage from '../../assets/images/computer.png';
import ComputerImage2 from '../../assets/images/computerImage.png';
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
    <Box sx={{minHeight:'40vh', background:"#0c0c0c", boxShadow: 3}}>
        <Grid container spacing={0} sx={{display:'flex', justifyContent:'center', paddingY:5}}>
            <Grid item xs={12} sm={6} md={6} sx={{display:'flex', flexDirection:'column', 
                    justifyContent:'center', alignItems:'center', paddingX:'30px'}}>
                <Typography ref={txtRef} sx={{textAlign:'left',
                                fontSize:'80px', fontWeight:'900', color:'white'}}>Portfolio</Typography>
                <Typography ref={txtRef2} sx={{textAlign:'left',
                                fontSize:'20px', color:'#c0c0c0'}}>Transforming Ideas into Intelligent Code</Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={6} sx={{display:'flex', justifyContent:'center', 
                                                  paddingX:'30px', marginY:'20px'}}>
                <img ref={imgRef} src={ComputerImage2} />
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