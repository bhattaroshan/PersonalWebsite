import React, {useRef,useEffect} from 'react'
import {Box, Typography,Card,CardMedia,Grid, Container} from '@mui/material';
import PortfolioImage from '../../assets/images/portfolio_page.png';
import ComputerImage from '../../assets/images/computer.png';
import ComputerImage2 from '../../assets/images/computerImage.png';
import {gsap} from 'gsap';

import './style.scss';
import PortfolioCard from '../../components/PortfolioCard';
import Thumbnail_NepaliCalendar from '../../assets/portfolio/thumbnail_nepcalendar.png';
import Thumbnail_Synthesizer from '../../assets/portfolio/thumbnail_synthesizer.png';
import Thumbnail_GuitarTuner from '../../assets/portfolio/thumbnail_guitartuner.png';
import Thumbnail_RBAudioConverter from '../../assets/portfolio/thumbnail_rbaudioconverter.jpeg';
import Thumbnail_Adinath from '../../assets/portfolio/thumbnail_adinath.png';

const contents = [
    {
        title:'Qt Sythesizer',
        preface:'This is an app designed in Qt6 c++. It implements signal processing algorithms in time domain. It might be a great tool for people who want to experiment with frequency, harmonics. It could also be a tool for sound engineers to some extent.',
        thumbnail: Thumbnail_Synthesizer,
        link: 'https://github.com/bhattaroshan/QtSynthesizer'
    },
    {
      title:'Nepali Calendar',
      preface:'Calendar app is created in qml and c++. All the UI component is designed in qml and its backend is done in c++. Cloud side backend is designed in fastapi in Python. Since the app is written in qml in qt6, you can technically compile the source for any platform you wish and run the app.',
      thumbnail: Thumbnail_NepaliCalendar,
      link: 'https://github.com/bhattaroshan/NepaliCalendar'
    },
    {
      title:'Guitar Tuner',
      preface:'Guitar Tuner is built using qt6. This app makes use of portaudio to get access of microphone and sample its data. The CMakeLists.txt is not implemented in a standard way to import portaudio. CMake file must be modified to compile this app.',
      thumbnail: Thumbnail_GuitarTuner,
      link: 'https://github.com/bhattaroshan/Qt6GuitarTuner'
    },
    {
      title:'RB Audio Converter',
      preface:'It\'s a software written for windows in C++ without any UI framework. It uses lame.exe and bass.dll to encode and decode different file formats. It was written in those days when functional softwares were priotized over its looks and user experience.',
      thumbnail: Thumbnail_RBAudioConverter,
      link: 'https://github.com/bhattaroshan/Audio-Converter'
    },
    {
      title:'School Website 1',
      preface:'It\'s a webapp written in reactjs. The design is done with MUI.',
      thumbnail: Thumbnail_Adinath,
      link: 'https://github.com/bhattaroshan/SchoolWebsite'
    }
]

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
            {x:400,opacity:0},
            {x:0,duration:1.2,opacity:1,ease:'power2.out'}
            );
    },[])

  return (<Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'40px'}}>
    {/* <Box sx={{width:'100%', minHeight:'40vh', background:"#0c0c0c", boxShadow: 3}}>
        <Grid container spacing={0} sx={{display:'flex', justifyContent:'center', paddingY:5}}>
            <Grid item xs={12} sm={6} md={6} sx={{display:'flex', flexDirection:'column', 
                    justifyContent:'center', alignItems:'center', paddingX:'30px'}}> */}
                <Typography ref={txtRef} sx={{textAlign:'left',
                                fontSize:'50px', fontWeight:'700'}}>Portfolio</Typography>
                <Typography ref={txtRef2} sx={{textAlign:'left',
                                fontSize:'16px', color:'#a0a0a0'}}>Transforming Ideas into Intelligent Code</Typography>
            {/* </Grid>
            <Grid item xs={12} sm={7} md={6} sx={{display:'flex', justifyContent:'center', 
                                                  paddingX:'30px', marginY:'20px'}}>
                <img ref={imgRef} src={ComputerImage2} style={{width:'60%', objectFit:'cover'}}/>
            </Grid>
        </Grid>
    </Box> */}
    <Grid container sx={{display:'flex', justifyContent:'center', width:'90%', marginTop:'50px', 
                        marginBottom:'60px'}} spacing={5} >
      {contents.map((content,index) => (
        <Grid key={index} item xs={12} sm={6} md={6} lg={4} sx={{display:'flex'}}>
          <PortfolioCard content={content} />
        </Grid>
      ))}
    </Grid>
</Box>
     
  );
}

export default PortfolioPage;