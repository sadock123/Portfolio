import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { DiJavascript1, DiReact, DiPython, DiGit } from "react-icons/di";
import {colors} from '../CSS/colors.js';

function Techskill() {
  return (
    <div>
        <Typography variant="h4" align='center'>
             My  <span style={{ color: colors.red, fontWeight: 600 }}>Professional Skillset</span>
        </Typography>
        <br/>
        <br/>
        <br/>
        <Grid container spacing={3} sx={{ fontSize: '4rem', alignItems: 'center', justifyContent: 'center' }}>
          <Grid item xs={12} sm={6} md={2} sx={{ fontSize: '4rem', alignItems: 'center', justifyContent: 'center' }}>
            <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}>
              <CardContent sx={{ display: 'grid', placeItems: 'center' }}>
                <CgCPlusPlus/>
                </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center' }}>
                            <DiJavascript1/>
                        </CardContent>
                    </Card>
                </Grid>   
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center' }}>
                            <DiReact/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center' }}>
                            <DiGit/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center' }}>
                            <DiPython/>
                        </CardContent>
                    </Card>
                </Grid>         
                 
        </Grid>
    </div>
  )
}

export default Techskill

