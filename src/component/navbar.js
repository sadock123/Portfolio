import React from 'react';
import {Button, Toolbar, AppBar, Box, IconButton, Container} from '@mui/material';
import { GoGitBranch } from "react-icons/go";
import  {DownloadOutlined as DownloadOutlinedIcon} from '@mui/icons-material';
export default function ButtonAppBar() {

  return (
    
    <>
      <AppBar  position='sticky' color='primary' sx={{
                backdropFilter:"blur(20px)",
                backgroundColor: "#12004478",
            }}>
      <Container maxWidth="lg">
      <Toolbar disableGutters>
      <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex', } }}>
      
      <Button color="inherit" href='#home'>
          Home 
      </Button> 
      <Button color="inherit" href='#about'>
          About
          </Button>   
          <Button color="inherit" href='#skill'>
              Skillset
          </Button>   
          <Button color="inherit" href='#project'>
              Project
          </Button>   
          <Button color="inherit" href='#contact'>
              Contact 
          </Button> 
          
      </Box> 
      <Box>
      <IconButton size="large" color="inherit" href='https://github.com/sadock123'>
            <GoGitBranch/>
          </IconButton>
          <IconButton size="large" color="inherit" href='https://drive.google.com/file/d/18Kn1vnqBENL6cYQZ_U7_LPmpV_diKX8s/view?usp=sharing'>
            <DownloadOutlinedIcon/>
          </IconButton>
      </Box> 
      </Toolbar>
     </Container> 
      </AppBar>
    </>
  );
}