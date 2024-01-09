import { useState } from 'react';
import {AppBar,Toolbar,Grid,Tab,Tabs,Menu,MenuItem,Avatar,Drawer,List,
        ListItem,Box,IconButton,ListItemButton,Collapse,Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useDisclosure from '../../hooks/useDisclosure';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {set,reset} from '../../features/drawer/drawerSlicer';
import { useLocation } from 'react-router-dom';

import './style.scss';
import MenuDropDown from '../MenuDropDown';
import menuItems  from '../../contants/menus';

function Navbar(){
    const location = useLocation();

    let currentIndex = 0;
    if(location.pathname==="/travel" ||
        location.pathname==="/books" || 
        location.pathname==="/programming" || 
        location.pathname==="/academics") currentIndex=1;
    else if(location.pathname==='/portfolio') currentIndex=2;
    else if(location.pathname==='/blogs') currentIndex=3;
    else if(location.pathname==='/contactme') currentIndex=4;


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [navIndex,setNavIndex] = useState(currentIndex);
    const [anchorEl,setAnchorEl] = useState();
    const [menuOpen,setMenuOpen] = useState(false);

    const mouseEventEnabledEvent = new CustomEvent('drawerEnabled', { detail: { enabled: true } });

    const {isOpen:isDrawerOpen,close:closeDrawer,toggle:toggleDrawer,open:openDrawer} = useDisclosure();

    function setDrawerEnabled(enabled) {
        mouseEventEnabledEvent.detail.enabled = enabled;
        document.dispatchEvent(mouseEventEnabledEvent);
    }
      
    function handleMenuOpen(e,v){
        if(v.submenu!==undefined){
            setMenuOpen(true);
            setAnchorEl(e.currentTarget);
        }else{ //need to push to navigator
            navigate(v.url);
            setMenuOpen(false);
        }
    }

    return (
        <AppBar position="sticky" sx={{margin:0, padding:0}}>
            <Toolbar>
                <Grid container sx={{display:'flex'}}>
                    <Grid item sx={{display:'flex', alignItems:'center', flexGrow:"1"}}>
                        {/* <Avatar>R</Avatar> */}
                    </Grid>
                    <Grid item sx={{display:{xs:'none',md:'flex'}}}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={navIndex}
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
                        </Tabs>
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

            <Menu id='menu' anchorEl={anchorEl} open={menuOpen} onClose={()=>setMenuOpen(false)} className="menu">
                {
                    menuItems[navIndex].submenu?.map((v,i)=>{
                        return <MenuItem key={i} className="menuitem" onClick={(e)=>handleMenuOpen(e,v)}>
                            <Typography>{v.name}</Typography>
                        </MenuItem>
                    })
                }
            </Menu>

            <Drawer anchor="right"
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