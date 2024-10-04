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
import Thumbnail_Crosshimalaya from '../../assets/portfolio/thumbnail_crosshimalaya.png';
import Thumbnail_NewsPortal from '../../assets/portfolio/thumbnail_newsportal.png';
import Thumbnail_Makeymakey from '../../assets/portfolio/thumbnail_makeymakey.jpg';
import Thumbnail_Videochat from '../../assets/portfolio/thumbnail_videochat.png';
import Thumbnail_AudioPlayer from '../../assets/portfolio/thumbnail_audioplayer.jpg';
import Thumbnail_Waterlevel from '../../assets/portfolio/thumbnail_waterlevel.jpg';
import Thumbnail_Facebookpage from '../../assets/portfolio/thumbnail_fbpage.jpg';
import Thumbnail_Dataoversound from '../../assets/portfolio/thumbnail_dataoversound.jpeg';

const contents = [
    {
        title:'Qt Sythesizer',
        preface:<p className='text-justify font-light'>
              This is an app designed in Qt6 c++. 
              It implements signal processing algorithms in time domain. 
              It might be a great tool for people who want to experiment with frequency, harmonics. 
              It could also be a tool for sound engineers to some extent.
            </p>,
        thumbnail: Thumbnail_Synthesizer,
        link: 'https://github.com/bhattaroshan/QtSynthesizer'
    },
    {
      title:'Nepali Calendar',
      preface:<p className='text-justify font-light'>
        Calendar app is created in qml and c++. 
        All the UI component is designed in qml and its backend is done in c++. 
        Cloud side backend is designed in fastapi in Python. 
        Since the app is written in qml in qt6, you can technically compile the source for any platform you wish and run the app.
        </p>,
      thumbnail: Thumbnail_NepaliCalendar,
      link: 'https://github.com/bhattaroshan/NepaliCalendar'
    },
    {
      title:'Guitar Tuner',
      preface:<p className='text-justify font-light'>
        Guitar Tuner is built using qt6. 
        This app makes use of portaudio to get access of microphone and sample its data. 
        The CMakeLists.txt is not implemented in a standard way to import portaudio. CMake file must be modified to compile this app.
      </p>,
      thumbnail: Thumbnail_GuitarTuner,
      link: 'https://github.com/bhattaroshan/Qt6GuitarTuner'
    },
    {
      title:'RB Audio Converter',
      preface:<p className='text-justify font-light'>
        Its a software written for windows in C++ without any UI framework. 
        It uses lame.exe and bass.dll to encode and decode different file formats. 
        It was written in those days when functional softwares were priotized over its looks and user experience.
        </p>,
      thumbnail: Thumbnail_RBAudioConverter,
      link: 'https://github.com/bhattaroshan/Audio-Converter'
    },
    {
      title:'School Website 1',
      preface:<p className='text-justify font-light'>
        Its a webapp written in reactjs. The design is done with MUI.
      </p>,
      thumbnail: Thumbnail_Adinath,
      link: 'https://github.com/bhattaroshan/SchoolWebsite',
      demo: 'https://adinathschool.edu.np'
    },
    {
      title:'Travel Website',
      preface:<p className='text-justify font-light'>
            It's a webapp written in nextjs including both backend and frontend. 
            DrizzleORM is used to connect with the postgresql database. The source is private as of now.
        </p>,
      thumbnail: Thumbnail_Crosshimalaya,
      demo: 'https://crosshimalaya.vercel.app/'
    },
    {
      title:'News Portal',
      preface:<p className='text-justify font-light'>
              It's a webapp written in nextjs for FE and django for BE. 
                The source is private as of now. The portal also consists of robust cms for layout management, 
                theme management, menu management, article management, user registration and many more. 
                Please send me a text from <a href='/contactme' className='text-blue-600 font-medium'>contact me page {" "}</a>if you need cms credentials for exploration.
      </p>,
      thumbnail: Thumbnail_NewsPortal,
      demo: 'https://news.roshanbhatta.com.np/'
    },
    {
      title: 'Makey Makey Clone',
      preface:<p className='text-justify font-light'>
                Makey makey is a tinkering hardware made for students to learn about conductivity by MIT graduates. It's cost is somewhere around $60. 
                I used comparatively cheaper microcontroller and re-wrote everything completely from scratch to enable all the features using low-resource hardware. 
                I was able to build the hardware in just $4. I also tested the hardware in my classes. 
                The firmware includes code for capacitive sensing, moving average filter and HID keyboard and mouse interface.
              </p>,
      thumbnail: Thumbnail_Makeymakey,
      link: 'https://github.com/bhattaroshan/MakeyMakeyClone'
    },
    {
      title: 'Video Chat App',
      preface: <p className='text-justify font-light'>
          It's a video calling chat app. There are no third-party services used to build the app. 
          The STUN and TURN servers are self hosted. Adding in extra features in video is just the logical part which 
          can be done as per the feature requirement. I've only added a feature to raise a hand for now. 
      </p>,
      thumbnail: Thumbnail_Videochat,
       demo: 'https://abcvideochat.vercel.app'
    },
    {
        title: '8-Bit AudioPlayer (Hardware)',
        preface: <p className='text-justify font-light'>
           It's a hardware project done using 8-bit ATMega8 microcontroller. It's written in c. The project is capable of reading RAW audio files from FAT32 SD cards and play PCM audio files of 44.1Khz 8-bit signals. 
        </p>,
        thumbnail: Thumbnail_AudioPlayer,
         link: 'https://github.com/bhattaroshan/8-bit-AudioPlayer'
    },
    {
      title: 'Water Level Detector (Hardware)',
      preface: <p className='text-justify font-light'>
         It's a hardware project written in C. The project uses 16bit ATMega 32 microcontroller to detect the two levels in the water tank. The hardware also has other abilities to turn other electrical suppliences via relay.
      </p>,
      thumbnail: Thumbnail_Waterlevel,
       link: 'https://github.com/bhattaroshan/Water-Level-Detector'
    },
    {
      title: 'Embedded Programming Facebook Page',
      preface: <p className='text-justify font-light'>
         It's a facebook page I created probably 10-12 years ago to share tips and tricks on C/C++ and embedded programming. I was quite active until 2017. The page has more then <b>5K community members</b>. However I haven't been active since then.
      </p>,
      thumbnail: Thumbnail_Facebookpage,
       demo: 'https://www.facebook.com/EmbeddedIoTProgramming'
    },
    {
      title: 'Data Over Sound C++',
      preface: <p className='text-justify font-light'>
        It's an app to send text messages via speaker as a 17khz sound signal. It uses cooley-tuckey fft to decode the sound back via microphone. SDL Audio has been used to access speaker and microphone for cross-platform compatibility. I have also tried to implement reed-solomon for error correction but I don't think I've implemented it. Too lazy to go through the code and check it out right now!
      </p>,
      thumbnail: Thumbnail_Dataoversound,
       link: 'https://github.com/bhattaroshan/DataOverSound'
    },
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