import React from 'react';
import { Card, Grid, CardContent, Typography } from '@mui/material';


export default function HomeB1() {
    return (
        <Card
            alignItems='center'
            justifyContent='center'
            sx={{
                paddingTop: 12,
                minWidth: 275, minHeight: 280
            }}>
            <CardContent>
                <Typography sx={{
                    color: 'black', fontWeight: 'bold',
                    textAlign: 'center', marginBottom: 5, fontSize: 30
                }}
                    color="text.secondary"
                    gutterBottom
                    alignItems='center'
                    justifyContent='center'>
                    Card #1
                </Typography>
                <Grid container
                    sx={{ marginBottom: 2 }}
                    direction="column"
                    alignItems="center">

                    <Typography>00000000000</Typography>

                    <br />
                    <Typography>email.co.uk</Typography>
                </Grid>

            </CardContent>
        </Card>
    );
}