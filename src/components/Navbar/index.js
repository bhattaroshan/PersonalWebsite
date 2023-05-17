import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


function Navbar(){
    const [navIndex,setNavIndex] = useState(0);
    return (
        <AppBar>
            <Toolbar>
                <Grid container>
                    <Grid item xs={5}>
                        <Tabs indicatorColor="secondary" textColor="inherit" value={navIndex}
                              onChange={(e,v)=>setNavIndex(v)} 
                        >
                            <Tab label="HOME"></Tab>
                            <Tab label="EXPERIENCE"></Tab>
                            <Tab label="BLOGS"></Tab>
                            <Tab label="CONTACT ME"></Tab>
                        </Tabs>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;