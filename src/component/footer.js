import React from 'react'
import { Typography, Grid} from '@mui/material';
function Footer() {
  return (
    <div>
        <Grid container>
            <Grid xs={2}/>
            <Grid item xs={4}>
                <Typography >
                    Design and Developed by Sadock Chakma
                </Typography>
            </Grid>
            <Grid xs={2}/>
            <Grid item xs={2}>
                <Typography>
                    Copyright &copy;2022
                </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer