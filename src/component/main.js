/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './main.css';
import Avatar from '@mui/material/Avatar';

import { Box,Grid, Typography } from '@mui/material';
import HomeSVG from './HomeSVG.js';

function main() {
  return (
<Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row',alignItem:"center", justifyContent:"center" } }}>
<Grid item xs={12} md={6} sx={{ textAlign: 'justify' }}>
  <br/>
  <br/>
        <Typography variant="h6">
        
         Hey, My name is
        </Typography>
        <Typography variant="h3">
           Sadock Chakma.
       </Typography>
        </Grid>
                <Grid item md={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                    <HomeSVG />
                </Grid>
    </Grid>

  )
}

export default main