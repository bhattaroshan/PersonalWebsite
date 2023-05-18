import { useState } from 'react';
import {AppBar,Toolbar,Grid,Tab,Tabs,Menu,MenuItem,Avatar,Drawer,List,
        ListItem,Box,IconButton,ListItemButton,Collapse} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useDisclosure from '../../hooks/useDisclosure';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './style.scss';

const menuItems = [
    {
        name: 'HOME',
        url: '',
        icon: ''
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

    const {isOpen,close,toggle,open} = useDisclosure();
    const {isOpen:drawerOpen,close:closeDrawer,toggle:toggleDrawer,open:openDrawer} = useDisclosure();

    function handleMenuOpen(e){
        setMenuOpen(true);
        setAnchorEl(e.currentTarget);
    }

    function handleMenuClose(e){
        setMenuOpen(false);
    }

    function handleDropMenu(e){

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
                                    return <Tab label={value.name}
                                            onClick={value.submenu?handleMenuOpen:null} 
                                            />
                                })
                            }
                        </Tabs>
                    </Grid>
                    <Grid item sx={{display:{xs:'flex',md:'none'}, alignItems:'center'}}>
                        <IconButton 
                            onClick={open}
                            sx={{color:"white"}}>
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

            <Menu id='menu' anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose} className="menu">
                {
                    menuItems.map((value,index)=>{
                        return value.submenu?
                        value.submenu.map((v,i)=>{
                            return <MenuItem key={i} className="menuitem">{v.name}</MenuItem>
                        }):null
                    })
                }
            </Menu>

            <Drawer anchor="right"
                    open={isOpen}
                    onClose={close}>
                <Box >
                    <List>
                        {
                            menuItems.map((value,index)=>{
                                return <>
                                    <List className="drawer">
                                            <ListItemButton onClick={handleDropMenu}>
                                                {value.name}
                                                {
                                                    value.submenu &&
                                                    <KeyboardArrowDownIcon/>
                                                }
                                            </ListItemButton>
                                        </List>
                                        {
                                            value.submenu &&
                                            <Collapse in={drawerOpen} timeout='auto' unmountOnExit>
                                                <List>
                                                    {
                                                        value.submenu.map((v,i)=>{
                                                            return <ListItemButton>{v.name}</ListItemButton>
                                                        })
                                                    }
                                                </List>
                                            </Collapse>
                                        }
                                        </>
                            })
                        }
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}

export default Navbar;