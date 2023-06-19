import * as React from 'react';
import {Box} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { duration } from '@mui/material';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const academics = [
    {
        name: "Paragon Public School",
        location: "Battisputali, Kathmandu",
        year: 1998,
    },
    {
        name: "Little Flower School",
        location: "Narayanghat, Chitwan",
        year: 2004,
    },
    {
        name:"NIST",
        location:"Lainchaur, Kathmandu",
        year: 2006,
    },
    {
        name:"Kathmandu Engineering College",
        location:"Kalimati, Kathmandu",
        year: 2008,
    }
];


export default function AcademicsPage() {

    useEffect(()=>{
        gsap.fromTo(".line",{
            scale:0,
            opacity:0,
        },{
            scale:1,
            opacity:1,
            duration: 1,
            ease: 'power2'
        })

        academics.map((v,i)=>{
            gsap.fromTo(".box"+i,{
                x: window.innerWidth,
                scale: 0,
                opacity: 0,
                ease: 'power3'
            },{
                x:0,
                scale: 1,
                opacity:1,
                delay: 0.4+i*0.05,
                duration: 0.5
            })
    
            gsap.fromTo(".date"+i,{
                x: -window.innerWidth,
                scale: 0,
                opacity: 0,
                ease: 'power3'
            },{
                x:0,
                scale: 1,
                opacity:1,
                delay: 0.4+i*0.05,
                duration: 0.5
            })
        });
       
    },[])

    return (
        <Box  sx={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'100px'}}>
            <Box sx={{minHeight:'20vh', minWidth:'100%', display:'flex', 
                    justifyContent:'center', alignItems:'center'}}>
            <Typography sx={{fontSize:'50px', mb:'40px', mt:'40px', fontWeight:'700'}}>Academics</Typography>
            </Box>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center',margin:'20px', gap:'20px'}}>
                {
                    academics.map((v,i)=>{
                        return  <div style={{display:'flex',gap:'40px'}} key={i}>
                        <Typography className={"date"+i} style={{alignSelf:'center', textAlign:'right', fontSize:'20px', width:'10vw'}}>{v.year}</Typography>
                        <div className="line" style={{width:'0.1px', height:'20vh', border:'2px solid #c0c0c0'}}/>
                        <div className={"box"+i} style={{width:'60vw', heigth:'10vh', 
                                                    border:'1px solid #0c0c0c', borderRadius: '10px',
                                                    background:'#505050'}}>
                            <Typography style={{margin:'10px', color:'white',fontSize:'20px', fontWeight:700}}>{v.name}</Typography>
                            <Typography style={{margin:'10px', color:'white',fontSize:'14px', fontWeight:100}}>{v.location}</Typography>
                        </div>
                    </div>
                    })
                } 
            </div>

        </Box>
    );
}