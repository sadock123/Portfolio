import React from 'react'
import './experience.css'
import Image from './CFL.png'
import Zoom from 'react-reveal/Zoom';
import { Box,Grid, Typography,Card,CardContent, CardMedia, Button ,CardActionArea} from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Experiences() {
  return (
    <>

      <Typography  variant='h4' align='center' >
      <span style={{ color: '#FF004D', fontWeight: 600 }}>Projects Done </span>by me
      </Typography>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={6} >
       <Grid xs={2}/>
      <Grid item xs={12} md={4} sx={{ textAlign: 'center',}}>
       
        <Card sx={{ maxWidth: 600 }} >
        
          <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}> 
          <Zoom>
            <CardMedia
              component="img"
              width={600} height={300}
              image={Image}
              alt="Codeforces LeaderBoard"
              objectFit="cover" 
            /> 
          </Zoom>
          <br/>
          <Typography variant='h5'>
              Codeforces LeaderBoard    
          </Typography>
          <br/>
          <Stack direction="row" spacing={1} alignItem='center' justifyContent='center'>
            <Chip label="ReactJS" />
            <Chip label="JavaScript" />
          </Stack>
          <br/>
          <Typography variant='p' textAlign='justify'>
            Created a project to track down the overall standing of IITDh students in the CodeForces Contest.
          </Typography>
          <br/>
          <br/>
            <Button size="small" variant="containe">View Project</Button>
            <Button variant="contained">Source Code</Button>
          <br/>
          <br/>
          
        </Card> 
      
      </Card>
       
      
    </Grid>
    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
        <Card sx={{ maxWidth: 600 }}>
          <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}> 
          <Zoom>
            <CardMedia
              component="img"
              width={600} height={300}
              image={Image}
              alt="Codeforces LeaderBoard"
              objectFit="cover" 
            /> 
          </Zoom>
          <br/>
          <Typography variant='h5'>
              Technical Website    
          </Typography>
          <br/>
          <Stack direction="row" spacing={1} alignItem='center' justifyContent='center'>
            <Chip label="ReactJS" />
            <Chip label="JavaScript" />
          </Stack>
          <br/>
          <Typography variant='p' textAlign='justify'>
            Created a project to track down the overall standing of IITDh students in the CodeForces Contest.
          </Typography>
          <br/>
          <br/>
            <Button size="small" variant="containe">View Project</Button>
            <Button variant="contained">Source Code</Button>
          <br/>
          <br/>
        </Card> 
        
      </Card>
    </Grid>
    </Grid>
    </>
  )
}

export default Experiences