import React from 'react'
import useDisclosure from '../../hooks/useDisclosure'
import {List,ListItemButton,Collapse,Box,Grid,Typography} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const MenuDropDown = ({value}) => {
    const {toggle,isOpen}=useDisclosure();
  return (
   <Box>
        <List className="drawer">
                <ListItemButton onClick={toggle}>
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
                                return <ListItemButton key={i}>
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