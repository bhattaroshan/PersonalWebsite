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
    const [menuOpen,setMenuOpen] = useState(false);

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

    function handleMenuOpen(e,v,i){
        console.log("hello from hover");
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
            <Toolbar>
                <Grid container sx={{display:'flex'}}>
                    <Grid item sx={{display:'flex', alignItems:'center', flexGrow:"1"}}>
                        {/* <Avatar>R</Avatar> */}
                    </Grid>
                    <Grid item sx={{display:{xs:'none',md:'flex'}}}>
                        {/* <Tabs indicatorColor="secondary" textColor="inherit" value={navIndex}
                              onChange={(e,v)=>setNavIndex(v)} >
                            {
                                menuItems.map((value,index)=>{
                                    return <Tab label={
                                        <Typography>{value.name}</Typography>
                                    }
                                            onClick={(e)=>handleMenuOpen(e,value)} 
                                            key={index}
                                            />
                                })
                            }
                        </Tabs> */}
                        <Toolbar sx={{gap:4}}>
                            {
                                menuItems.map((value,index)=>{
                                    return <Typography key={index} sx={{cursor:'pointer'}}
                                        onClick={(e)=>handleClickOpen(e,value)}
                                        onMouseOver={(e)=>handleMenuOpen(e,value,index)}
                                    >
                                            {value.name}
                                        </Typography>
                                })
                            }
                        </Toolbar>
                    </Grid>
                    <Grid item sx={{display:{xs:'flex',md:'none'}, alignItems:'center'}}>
                        <IconButton 
                            onClick={()=>{
                                openDrawer();
                                //setExDrawerOpen(true);
                                dispatch(set());
                            }}
                            sx={{color:"white"}}>
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

            <Menu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} className="menu"
            MenuListProps={{onMouseLeave:handleClose}}>
                {
                    menuItems[navIndex].submenu?.map((v,i)=>{
                        return <MenuItem key={i} className="menuitem" onClick={(e)=>handleClickOpen(e,v)}>
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