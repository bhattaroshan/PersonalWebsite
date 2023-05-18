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
    const [subMenuBoolean,setSubMenuBoolen] = useState(Array(menuItems.length).fill(false));

    const {isOpen:isDrawerOpen,close:closeDrawer,toggle:toggleDrawer,open:openDrawer} = useDisclosure();

    function flipSubMenuArray(index){
        setSubMenuBoolen(prevArray=>{
            const newArr = [...prevArray];
            newArr[index] = !newArr[index];
            return newArr;
        });
    }

    function handleMenuOpen(e){
        setMenuOpen(true);
        setAnchorEl(e.currentTarget);
    }

    function handleDropMenu(value,index){
        if(value.hasOwnProperty("submenu")){
            flipSubMenuArray(index);
        }
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
                    menuItems[navIndex].submenu &&
                    menuItems[navIndex].submenu.map((v,i)=>{
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
                                return <div key={index}>
                                    <List className="drawer">
                                            <ListItemButton onClick={()=>handleDropMenu(value,index)}>
                                                {value.name}
                                                {
                                                    value.submenu &&
                                                    <KeyboardArrowDownIcon/>
                                                }
                                            </ListItemButton>
                                        </List>
                                        {
                                            value.submenu &&
                                            <Collapse in={subMenuBoolean[index]} timeout='auto' unmountOnExit>
                                                <List>
                                                    {
                                                        value.submenu.map((v,i)=>{
                                                            return <ListItemButton key={index*10+i}>
                                                                    {v.name}
                                                                </ListItemButton>
                                                        })
                                                    }
                                                </List>
                                            </Collapse>
                                        }
                                        </div>
                            })
                        }
            </Drawer>
        </AppBar>
    );
}

export default Navbar;