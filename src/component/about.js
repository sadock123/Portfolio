import React from 'react'
import Image from '../image/Sadock.jpeg'
import { colors } from '../CSS/colors.js';
import { Avatar, Box, Grid, Typography } from '@mui/material';
function About() {
  return (
    <Box 
    sx={{
        width: '100%',
        padding: '2rem',
        backgroundColor: '#310A5D',
        backdropFilter:"blur(20px)",
        borderRadius: '1rem',   
    }}
>
    <Grid container sx={{alignItem:"center", justifyContent:"center"}}>
      <Grid item xs={12} md={8} sx={{ textAlign: 'justify' }}>
        <Typography variant='h3' align='center' fontWeight='1000'>
          <span style={{color:colors.red}}>About Me </span> 
        </Typography>
        <br/>
        <Typography variant="h6">
        Hi there, I am <span style={{ color: colors.orange, fontWeight: 600 }}>Sadock Chakma</span> from Guwahati, India.
I am currently in my 3rd year of BTech at <span style={{ color: colors.orange, fontWeight: 600 }}>Indian Institute of Technology Dharwad</span>. 
        </Typography>
        <br/>
        <br/>
        <Typography variant="h6">
        I am currently working on <span style={{ color: colors.orange, fontWeight: 600 }}>Frontend Development</span>.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h6">
        I can fluently code in <span style={{ color: colors.orange, fontWeight: 600 }}> C++, Python and JavaScript</span>.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h6">
          Apart from coding, I love to <span style={{ color: colors.orange, fontWeight: 600 }}>play computer games </span>, <span style={{ color: colors.red, fontWeight: 600 }}>read tech-related articles </span>and do <span style={{ color: colors.orange, fontWeight: 600 }}>competitive programming.</span>
        </Typography>
        
      </Grid>
      <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
      <Avatar alt="Sadock Chakma" src={Image} sx={{ width: 200, height: 200 }}/>
      </Grid>

    </Grid>
    </Box>
  )
}

export default About