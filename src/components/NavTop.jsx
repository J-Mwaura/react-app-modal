import React, { useState } from 'react';
import { AppBar, Grid, Toolbar, 
    Typography, Tabs, Tab, 
    useTheme, 
    useMediaQuery} from '@mui/material';
import DrawerComp from './Drawer';
import './styles/NavTop.css';

const NavTop = ({links}) =>{
    const theme= useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const  [value, setValue] = useState();
    return (
        <AppBar sx={{bgcolor: '#3390FF'}}>
            <Toolbar>
                {isMatch ? <>
                <Grid sx={{placeItems: "center"}} spacing={2} container>
                <Grid item xs={4}>
                <Typography>
                    Logo
                </Typography>
                </Grid>
                <Grid item xs={{md: '6', sm: '8' }}>
                <Typography  sx={{ fontWeight: 'bold'}}>
                    <span className='titleClass'>My company name </span>
                </Typography>
                </Grid>
                </Grid>
                <DrawerComp links={links}/></> :
            <Grid sx={{placeItems: "center"}} container>
                <Grid>
                <Typography>
                    logo
                </Typography>
                </Grid>
                <Grid xs ={6}>
                    <Tabs indicatorColor='secondary' textColor='white' value={value}
                    onChange={(e, value) => setValue(value)}>
                        <Tab className='active' href='#main' label='Home'></Tab>
                        <Tab className='about' href="#about" label='About'></Tab>
                        <Tab className='services' href="#services" label='Services'></Tab>
                        <Tab className='contact' href='#contact' label='Contact'></Tab>
                    </Tabs>
                </Grid>         
            </Grid>
            }
            </Toolbar>
        </AppBar>
    )  
};

export default NavTop;