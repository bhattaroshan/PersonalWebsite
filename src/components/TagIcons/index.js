import React,{useState,useEffect,useRef} from 'react'
import {Box, Typography,Icon} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {useTheme } from '@mui/material/styles';
import Draggable from 'react-draggable'; // The default

import './style.scss';
import { Translate } from '@mui/icons-material';

function TagIcons({style,icons}) {
    const theme = useTheme();
    const frameRef = useRef();
    const iconRef = useRef();
    const [currentIcons,setCurrentIcon] = useState(Array(icons.length).fill(null));
    const [clickedIcons, setClickedIcons] = useState(Array(icons.length).fill(false));
    const [hoveredIcons, setHoveredIcons] = useState(Array(icons.length).fill('none'));
    const [swipeValue, setSwipeValue] = React.useState(0);
    const [mousePos,setMousePos] = useState({x:0,y:0});
    const [mouseDown,setMouseDown] = useState(false);

    const [dragPosition,setDragPosition] = useState({x:0,y:0});

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

    function handleOnDrag(e,data){
        console.log("dragging right now");
        const frameLeft = frameRef.current.getBoundingClientRect().left;
        const frameRight = frameRef.current.getBoundingClientRect().right;
        const iconLeft = iconRef.current.getBoundingClientRect().left;
        const iconRight = iconRef.current.getBoundingClientRect().right;

        const frameWidth = frameRight-frameLeft;
        const iconWidth = iconRight-iconLeft;
        let rem = 0;
        if(frameWidth>iconWidth){
            rem = iconWidth-frameWidth;
        }

        if(iconLeft>frameLeft){
            setDragPosition({x:0,y:0});
        }else if(iconRight<frameRight){
            setDragPosition({x:frameWidth-iconWidth-rem,y:0})
        }
        else{
            setDragPosition({x:data.x,y:0});
        }
    }

    function handleDragStop(){
    }

    return (<Box sx={{overflow:'hidden', display:'flex',maxWidth:'80%'}} ref={frameRef}>
                <Draggable axis='x' onDrag={handleOnDrag} onStop={handleDragStop} position={dragPosition}>
                <Box sx={style} style={{gap:'70px'}} ref={iconRef}>
                {
                    icons.map((v,i)=>{
                        return <Box key={i} sx={{display:'flex', flexDirection:'column',
                                        cursor:'pointer', alignItems:"center"}} 
                                        onMouseOver={(e)=>handleMouseOver(e,v,i)}
                                        onMouseLeave={(e)=>handleMouseLeave(e,v,i)}
                                        onClick={(e)=>handleMouseClick(e,v,i)}
                                        onTouchStart={(e)=>handleMouseClick(e,v,i)}
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
                </Draggable>
             </Box>
    )
}

export default TagIcons;