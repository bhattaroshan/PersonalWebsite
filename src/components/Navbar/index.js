import { useState } from 'react';
import {AppBar,Toolbar,Grid,Tab,Tabs,Menu,MenuItem,Avatar,Drawer,List,
        ListItem,Box,IconButton,ListItemButton,Collapse,Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useDisclosure from '../../hooks/useDisclosure';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './style.scss';
import MenuDropDown from '../MenuDropDown';

const menuItems = [
    {
        name: 'HOME',
        url: '',
        icon: '',
        submenu:[
            {
                name:'test',
            }
        ]
    },
    {
        name: 'EXPERIENCE',
        url: '',
        icon: '',
        submenu:[
            {
                name: 'ACADEMICS',
                url: '',
                icon: '',
            },
            {
                name: 'BOOKS',
                url: '',
                icon: '',
            },
            {
                name: 'TRAVEL',
                url: '',
                icon: '',
            },
        ]
    },
    {
        name: 'BLOGS',
        url: '',
        icon: ''
    },
    {
        name: 'CONTACT ME',
        url: '',
        icon: ''
    }
]

function Navbar(){
    const [navIndex,setNavIndex] = useState(0);
    const [anchorEl,setAnchorEl] = useState();
    const [menuOpen,setMenuOpen] = useState(false);

    const {isOpen:isDrawerOpen,close:closeDrawer,toggle:toggleDrawer,open:openDrawer} = useDisclosure();

  
    function handleMenuOpen(e){
        setMenuOpen(true);
        setAnchorEl(e.currentTarget);
        console.log(e.currentTarget);
    }

  

    return (
        <AppBar>
            <Toolbar>
                <Grid container sx={{display:'flex'}}>
                    <Grid item sx={{display:'flex', alignItems:'center', flexGrow:"1"}}>
                        <Avatar>R</Avatar>
                    </Grid>
                    <Grid item sx={{display:{xs:'none',md:'flex'}}}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={navIndex}
                              onChange={(e,v)=>setNavIndex(v)} >
                            {
                                menuItems.map((value,index)=>{
                                    return <Tab label={
                                        <Typography>{value.name}</Typography>
                                    }
                                            onClick={value.submenu?handleMenuOpen:null} 
                                            key={index}
                                            />
                                })
                            }
                        </Tabs>
                    </Grid>
                    <Grid item sx={{display:{xs:'flex',md:'none'}, alignItems:'center'}}>
                        <IconButton 
                            onClick={openDrawer}
                            sx={{color:"white"}}>
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

            <Menu id='menu' anchorEl={anchorEl} open={menuOpen} onClose={()=>setMenuOpen(false)} className="menu">
                {
                    menuItems[navIndex].submenu?.map((v,i)=>{
                        return <MenuItem key={i} className="menuitem">
                            {v.name}
                        </MenuItem>
                    })
                }
            </Menu>

            <Drawer anchor="right"
                    open={isDrawerOpen}
                    onClose={closeDrawer}>
                        {
                            menuItems.map((value,index)=>{
                                return <MenuDropDown value={value} key={index}/>
                            })
                        }
            </Drawer>
        </AppBar>
    );
}

export default Navbar;