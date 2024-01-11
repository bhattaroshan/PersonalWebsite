import { useEffect, useState } from 'react';
import {AppBar,Toolbar,Grid,Tab,Tabs,Menu,MenuItem,Avatar,Drawer,List,
        ListItem,Box,IconButton,ListItemButton,Collapse,Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useDisclosure from '../../hooks/useDisclosure';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {set,reset} from '../../features/drawer/drawerSlicer';

import './style.scss';
import MenuDropDown from '../MenuDropDown';
import menuItems  from '../../contants/menus';

function Navbar(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [navIndex,setNavIndex] = useState(0);
    const [anchorEl,setAnchorEl] = useState();

    const mouseEventEnabledEvent = new CustomEvent('drawerEnabled', { detail: { enabled: true } });

    const {isOpen:isDrawerOpen,close:closeDrawer,toggle:toggleDrawer,open:openDrawer} = useDisclosure();

    useEffect(()=>{
        let currentIndex = 0;
        if(window.location.pathname==="/travel" ||
            window.location.pathname==="/books" || 
            window.location.pathname==="/programming" || 
            window.location.pathname==="/academics") currentIndex=1;
        else if(window.location.pathname==='/portfolio') currentIndex=2;
        else if(window.location.pathname==='/blogs') currentIndex=3;
        else if(window.location.pathname==='/contactme') currentIndex=4;
        else currentIndex=0;
        setNavIndex(currentIndex);
    },[window.location.pathname])

    function setDrawerEnabled(enabled) {
        mouseEventEnabledEvent.detail.enabled = enabled;
        document.dispatchEvent(mouseEventEnabledEvent);
    }
    
    function handleClickOpen(e,v){
        navigate(v.url);
    }

    function handleClickOpenClose(e,v){
        navigate(v.url);
        setAnchorEl(null);
    }

    function handleMenuOpen(e,v,i){
        if(v.submenu!==undefined){
            setNavIndex(i);
            setAnchorEl(e.currentTarget);
        }
    }

    function handleClose(){
        setAnchorEl(null);
    }

    return (
        <AppBar position="sticky" sx={{margin:0, padding:0}}>
            <Toolbar sx={{gap:4, justifyContent:'end'}}>
                    {
                        menuItems.map((value,index)=>{
                            return <Typography key={index} sx={{cursor:'pointer', textDecoration:navIndex===index?'underline':'none', textUnderlineOffset:'10px', display:{sm:'none', md:'block'}}}
                                onClick={(e)=>handleClickOpen(e,value)}
                                onMouseOver={(e)=>handleMenuOpen(e,value,index)}
                            >
                                    {value.name}
                                </Typography>
                        })
                    }
                        <IconButton 
                            onClick={()=>{
                                openDrawer();
                                dispatch(set());
                            }}
                            sx={{color:"white", display:{sm:'block', md:'none'}}}>
                            <MenuIcon/>
                        </IconButton>
            </Toolbar>

            <Menu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} className="menu"
            MenuListProps={{onMouseLeave:handleClose}}>
                {
                    menuItems[navIndex].submenu?.map((v,i)=>{
                        return <MenuItem key={i} className="menuitem" onClick={(e)=>handleClickOpenClose(e,v)}>
                            <Typography>{v.name}</Typography>
                        </MenuItem>
                    })
                }
            </Menu>

            <Drawer anchor="right"
                    sx={{display:{xs:'block',md:'none'}}}
                    open={isDrawerOpen}
                    onClose={()=>{
                        //setExDrawerOpen(false);
                        dispatch(reset());
                        closeDrawer();
                    }}>
                        {
                            menuItems.map((value,index)=>{
                                return <MenuDropDown value={value} key={index} closeDrawer={()=>{
                                    //setExDrawerOpen(false);
                                    dispatch(reset());
                                    closeDrawer();
                                }}/>
                            })
                        }
            </Drawer>
        </AppBar>
    );
}

export default Navbar;