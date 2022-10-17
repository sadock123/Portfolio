/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Box,Grid, Typography } from '@mui/material';
import HomeSVG from './HomeSVG.js';
import {colors} from '../CSS/colors';
function main() {
  return (
<Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row',alignItem:"center", justifyContent:"center" ,} }}>

<Grid item xs={12} md={6} sx={{ textAlign: 'justify' }}>
<br/>
  <br/>
  <br/>
  <Typography variant="h5">
      Hey, My name is
    </Typography>
    <Typography variant="h3">
        <span style={{color:'orange', fontWeight: 400 }}>Sadock Chakma</span>
    </Typography>
    
    </Grid>
        <Grid item md={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
            <HomeSVG />
        </Grid>
    </Grid>

  )
}

export default main