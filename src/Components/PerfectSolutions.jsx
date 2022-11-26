import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    paddingsBottom: {
      paddingBottom:"1em",
    },
  });


const PerfectSolutions = (props) => {

  const classes = useStyles();

  return (
    <>
     <Grid container spacing={2}>
        <Grid item xs={1} md={1}>
          {props.icon}
        </Grid>
        <Grid item xs={11} md={11}>
          <Typography variant="h5" gutterBottom>{props.headings}</Typography>
          <Typography variant="body1" gutterBottom>{props.para}</Typography>
        </Grid>
      </Grid>
    </>
    
  )
}

export default PerfectSolutions