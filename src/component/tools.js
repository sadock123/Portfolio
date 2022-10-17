import React from 'react'
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { SiLinux, SiVisualstudiocode, SiJupyter } from "react-icons/si";
import {colors} from '../CSS/colors.js';

function Tools() {
  return (
    <div>
    <Typography variant="h4" align='center'>
                <span style={{ color: colors.red, fontWeight: 600 }}>Tools</span> I Know
    </Typography>
            <br/>
            <br/>
            <br/>
    <Grid container spacing={3} sx={{ fontSize: '4rem', alignItems: 'center', justifyContent: 'center' }}>
    <Grid item xs={12} sm={6} md={2}>
            <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)'}}>
              <CardContent sx={{ display: 'grid', placeItems: 'center', }}>
                <SiLinux/>
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)',  }}>
              <CardContent sx={{ display: 'grid', placeItems: 'center',  }}>
                <SiVisualstudiocode/>
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)',  }}>
              <CardContent sx={{ display: 'grid', placeItems: 'center', }}>
                <SiJupyter/>
                </CardContent>
            </Card>
          </Grid>
    </Grid>
    </div>
  )
}

export default Tools