import React from 'react'
import { Typography, Grid, IconButton} from '@mui/material';
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
function Contact() {
  return (
    <>
    <Typography  variant='h4' align='center' >
      <span style={{ color: '#FF004D', fontWeight: 600 }}>Contact  </span>Details
      </Typography>
      <br/>
      <br/>
    <Grid container>
    <Grid xs={2}/>
    <Grid xs={2}/>
    <Grid item xs={2} sm={1} align='center'>
        <IconButton size="large" color="inherit">
            <FiInstagram/>
        </IconButton>
    <Typography variant='h6'>
        
    </Typography>
    </Grid>
    <Grid item xs={2} sm={1} align='center'>
        <IconButton size="large" color="inherit" href='https://github.com/sadock123'>
            <FiGithub/>
        </IconButton>
    <Typography variant='h6'>
        
    </Typography>

    </Grid>
    <Grid item xs={2} sm={1} align='center'>
        <IconButton size="large" color="inherit" href='https://www.linkedin.com/in/sadock-chakma-b190a2218/'>
            <FiLinkedin/>
        </IconButton>
    <Typography variant='h6'>
        
    </Typography>
    
    </Grid>
    <Grid item xs={2} sm={1} align='center'>
        <IconButton size="large" color="inherit" href='https://mail.google.com/mail/u/0/#inbox'>
            <FiMail/>
        </IconButton>
    <Typography variant='h6'>
        
    </Typography>
    
    </Grid>
    </Grid>
    </>
  )
}

export default Contact