/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './main.css';
import Avatar from '@mui/material/Avatar';
import { Box,Grid, Typography } from '@mui/material';
import HomeSVG from './HomeSVG.js';

function main() {
  return (
<Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
<Grid item md={6} xs={12}>
  <br/>
  <br/>
        <Typography variant="h4">
        
         Hey, My name is Sadock Chakma.
        </Typography>
        </Grid>
        <Grid item md={6} xs={12}>  
        <HomeSVG/>  
      </Grid>
    </Grid>

  )
}

export default main