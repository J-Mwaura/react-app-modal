import React from 'react';
import { Box, Grid } from '@mui/material';
import HomeB1 from './HomeBox1';
import MediaCard from './MediaCard';
export default function Home() {
    return (
        <div className='container'>
            <Box
                sx={{
                }}>
                <Grid xs={12} sm={6} md={6}>
                    <HomeB1/>
                </Grid>
                <Grid xs={12} sm={6} md={6}>
                    <MediaCard/>
                </Grid>
            </Box>
        </div>
    );
}