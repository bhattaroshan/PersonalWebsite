import * as React from 'react';
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { duration } from '@mui/material';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AcademicsPage() {

    useEffect(()=>{
        gsap.fromTo(".test_para",{
                x: -window.innerWidth,
                opacity: 0
            },{
                x: 0,
                opacity: 1,
                duration: 0.5,
            }
        )
        gsap.fromTo(".test_para2",{
            x: -window.innerWidth,
        },{
            x:0,
            duration: 1,
            scrollTrigger:{
                trigger: '.test_para',
                start: 'bottom center',
                end: 'bottom end',
                scrub: true,
                ease: 'power2.out',
            }
        })
        
        gsap.fromTo(".test_para3",{
            x: window.innerWidth,
        },{
            x:0,
            duration: 1,
            scrollTrigger:{
                trigger: '.test_para2',
                start: 'bottom center',
                end: 'bottom end',
                scrub: true,
                ease: 'power2.out',
            }
        })

    },[])

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div className="test_para" style={{width:'300px', height:'300px',background:'red'}}/>
            <div className="test_para2" style={{width:'300px', height:'300px',background:'green'}}/>
            <div className="test_para3" style={{width:'300px', height:'300px',background:'blue'}}/>
            <div className="test_para4" style={{width:'300px', height:'300px',background:'yellow'}}/>
            <div className="test_para5" style={{width:'300px', height:'300px',background:'pink'}}/>
        </div>
    );
}