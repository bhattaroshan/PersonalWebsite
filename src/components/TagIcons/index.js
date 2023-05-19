import React,{useState,useEffect,useRef} from 'react'
import {Box, Typography,Icon} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {useTheme } from '@mui/material/styles';
import Slider from "react-slick";

import './style.scss';

function TagIcons({style,icons}) {
    const theme = useTheme();
    const moveRef = useRef();
    const [currentIcons,setCurrentIcon] = useState(Array(icons.length).fill(null));
    const [clickedIcons, setClickedIcons] = useState(Array(icons.length).fill(false));
    const [hoveredIcons, setHoveredIcons] = useState(Array(icons.length).fill('none'));
    const [swipeValue, setSwipeValue] = React.useState(0);
    const [mousePos,setMousePos] = useState({x:0,y:0});
    const [mouseDown,setMouseDown] = useState(false);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    useEffect(()=>{
        setIconState(0,true);

        const len = icons.length;
        const tempIcons = [...currentIcons];
        tempIcons[0] = icons[0].clickedIcon;
        for(var i=1;i<tempIcons.length;++i){
            tempIcons[i] = icons[i].defaultIcon;
        }
        
        setCurrentIcon(tempIcons);
    },[])

    function setIconState(i,state){
        const tempClicks = [...clickedIcons];
        tempClicks[i] = state;
        setClickedIcons(tempClicks);
    }

    function handleMouseClick(e,v,i){
        const tempIcons = [...currentIcons];
        const tempClicks = [...clickedIcons];

        if(clickedIcons[i]===false){
            tempIcons[i] = icons[i].clickedIcon;
            tempClicks[i] = !tempClicks[i];
        }else{
            tempIcons[i] = icons[i].defaultIcon;
            tempClicks[i] = !tempClicks[i];
        }

        if(i==0){
            for(var i=1;i<tempIcons.length;++i){
                tempIcons[i] = icons[i].defaultIcon;
                tempClicks[i] = false;
            }
        }

        setCurrentIcon(tempIcons);
        setClickedIcons(tempClicks);
    }

    function handleMouseOver(e,v,i){
        const hIcons = [...hoveredIcons]; 
        hIcons[i] = 'visible';
        setHoveredIcons(hIcons);
    }

    function handleMouseLeave(e,v,i){
        const hIcons = [...hoveredIcons]; 
        hIcons[i] = 'hidden';
        setHoveredIcons(hIcons);
    }

    function handleMouseDown(e){
        const x = e.clientX;
        const y = e.clientY;
        setMousePos({x:x,y:y});
        setMouseDown(true);
    }

    function handleMouseUp(e){
        const x = e.clientX;
        const y = e.clientY;
        const deltaX = (mousePos.x-x); //if +ve left slide
        const deltaY = (mousePos.y-y);
        setMouseDown(false);
    }

    function handleMouseMove(e){
        if(mouseDown===true){ //dragging has started
            const element = moveRef.current;
            const x = e.clientX;
            const y = e.clientY;
            const deltaX = -(mousePos.x-x); //if +ve left slide
            const deltaY = -(mousePos.y-y);
            if(element){
                if(deltaX<=0){
                    element.style.transform=`translate(${deltaX}px,0)`;
                }
            }
        }
    }

    return (
            <Box sx={{display:'flex', width:'100%', justifyContent:'center'}}>
            <Box sx={style} className='scrollable_tabs'
                onMouseDown={(e)=>handleMouseDown(e)} 
                onMouseUp={(e)=>handleMouseUp(e)}
                onMouseMove={(e)=>handleMouseMove(e)}
                ref={moveRef}
                style={{gap:'70px', overflowX:'hidden'}}
            >
                {
                    icons.map((v,i)=>{
                        return <Box key={i} sx={{display:'flex', flexDirection:'column',
                                        cursor:'pointer', alignItems:"center"}} 
                                        onMouseOver={(e)=>handleMouseOver(e,v,i)}
                                        onMouseLeave={(e)=>handleMouseLeave(e,v,i)}
                                        onClick={(e)=>handleMouseClick(e,v,i)}
                                        >
                                    <Icon sx={{fontSize:'40px'}}>
                                        {currentIcons[i]}
                                    </Icon>
                                    <Typography sx={{fontWeight:clickedIcons[i]?"bold":"light"}}>{v.title}</Typography>
                                    <span className="tag_icons_horizontal_line" style={{visibility:hoveredIcons[i]}}/>
                                </Box>
                    })
                }
            </Box>
            </Box>
    )
}

export default TagIcons;