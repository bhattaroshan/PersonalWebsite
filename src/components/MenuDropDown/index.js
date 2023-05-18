import React from 'react'
import useDisclosure from '../../hooks/useDisclosure'
import {List,ListItemButton,Collapse,Box,Grid,Typography} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {useNavigate} from 'react-router-dom';

const MenuDropDown = ({value,closeDrawer}) => {

    const navigate = useNavigate();
    const {toggle,isOpen}=useDisclosure();

    function handleClick(e,v){
        if(v.submenu===undefined){
            navigate(v.url);
            closeDrawer();
        }else{
            toggle();
        }
    }

  return (
   <Box>
        <List className="drawer">
                <ListItemButton onClick={(e)=>handleClick(e,value)}>
                    <Typography sx={{flex:"1"}} fontWeight={700}>{value.name}</Typography>
                    {
                        value.submenu &&
                        <KeyboardArrowUpIcon sx={{rotate:isOpen?"0deg":"180deg", transition:"0.4s ease"}}/>
                    }
                </ListItemButton>
            </List>
            {
                value.submenu &&
                <Collapse in={isOpen} timeout='auto' unmountOnExit> 
                        {
                            value.submenu.map((v,i)=>{
                                return <ListItemButton key={i} onClick={(e)=>handleClick(e,v)}>
                                        <Typography  sx={{pl:"30px"}}>{v.name}</Typography>
                                    </ListItemButton>
                            })
                        }
                </Collapse>
            }
    </Box>
  )
}

export default MenuDropDown