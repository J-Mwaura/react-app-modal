import React from 'react';
import './styles/Footer.css'
import { Box, Grid, Typography } from '@mui/material';

function Footer() {
    return (

        <div className='footer'>
            <Box bgcolor={'#ffcccc'}>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center">
                <Grid container
                    sx={{ marginBottom: 3, marginTop: 2 }}
                    spacing={0}
                    direction="column"
                    textAlign={'center'}
                    justifyContent="center">
                    <Typography sx={{
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                        fontSize={15}>102 Highway
                        <Typography>Malindi</Typography>
                        <Typography>Kenya</Typography>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container
                marginTop={5}
                direction="column"
                textAlign={'center'}
                justifyContent="center">
                <Typography sx={{
                    alignItems: 'center',
                    textAlign: 'center'
                }}
                    fontSize={15}>
                    &copy;{new Date().getFullYear()} My company name All rights reserved.
                </Typography>
            </Grid>
            </Box>
        </div>

    );

}

export default Footer;