import { useEffect, useState } from 'react';
import {AppBar,Toolbar,Grid,Tab,Tabs,Menu,MenuItem,Avatar,Drawer,List,
        ListItem,Box,IconButton,ListItemButton,Collapse,Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useDisclosure from '../../hooks/useDisclosure';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {set,reset} from '../../features/drawer/drawerSlicer';
import { makeStyles } from "@material-ui/core";

import './style.scss';
import MenuDropDown from '../MenuDropDown';
import menuItems  from '../../contants/menus';

const useStyles = makeStyles(theme => ({
    root: {
      "& .MuiPaper-root": {
        background: 'rgb(17,24,39)',
        border: '1px solid rgb(100,100,100)',
        borderRadius: '5px'
      }
    }
  }));
function Navbar(){
    const classes = useStyles();
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
        <AppBar position="sticky" sx={{margin:0, padding:0}} className='bg-gray-900'>
            <Toolbar sx={{gap:4, justifyContent:'end'}}>
                    {
                        menuItems.map((value,index)=>{
                            return <Typography key={index} 
                            className={`hidden md:block cursor-pointer 
                                        ${navIndex===index?'underline':'no-underline'} underline-offset-8`}
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
                            className='block md:hidden text-white'>
                            <MenuIcon/>
                        </IconButton>
            </Toolbar>

            <Menu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} 
                  className={classes.root}
                  MenuListProps={{onMouseLeave:handleClose}}>
                {
                    menuItems[navIndex].submenu?.map((v,i)=>{
                        return <MenuItem key={i} 
                            className="bg-gray-900 hover:bg-gray-800 hover:border-white text-white w-52
                                      gap-4" 
                            onClick={(e)=>handleClickOpenClose(e,v)}>
                            <v.icon className='w-6 h-6'/>
                            <Typography>{v.name}</Typography>
                        </MenuItem>
                    })
                }
            </Menu>

            <Drawer anchor="right"
                    sx={{display:{xs:'block',md:'none'}}}
                    open={isDrawerOpen}
                    onClose={()=>{
                        dispatch(reset());
                        closeDrawer();
                    }}>
                        {
                            menuItems.map((value,index)=>{
                                return <MenuDropDown value={value} key={index} closeDrawer={()=>{
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