import React,{useState,useEffect} from 'react'
import {Box, Typography,Icon} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import './style.scss';

function TagIcons({style,icons}) {

    const [currentIcons,setCurrentIcon] = useState(Array(icons.length).fill(null));
    const [clickedIcons, setClickedIcons] = useState(Array(icons.length).fill(false));
    
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
        
    }

    function handleMouseLeave(e,v,i){
    }

    return (
        <Box sx={style}>
            {
                icons.map((v,i)=>{
                    return <Box key={i} sx={{display:'flex', flexDirection:'column', marginRight:'35px',  marginLeft: '35px',
                                    cursor:'pointer', alignItems:"center"}} 
                                    onMouseOver={(e)=>handleMouseOver(e,v,i)}
                                    onMouseLeave={(e)=>handleMouseLeave(e,v,i)}
                                    onClick={(e)=>handleMouseClick(e,v,i)}
                                    >
                                <Icon sx={{fontSize:'40px'}}>
                                    {currentIcons[i]}
                                </Icon>
                                <Typography sx={{fontWeight:clickedIcons[i]?"bold":"light"}}>{v.title}</Typography>
                                <span className="tag_icons_horizontal_line"/>
                            </Box>
                })
            }
        </Box>
    )
}

export default TagIcons;