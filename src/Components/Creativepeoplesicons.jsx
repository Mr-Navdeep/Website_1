import React from 'react'
import {provideSolutions} from './../data'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';


const useStyles = makeStyles({
    svg_width: {
        '& svg': {
            color: '#f75757',
            fontSize:'2.5rem'
         }
    },
  });

const Creativepeoplesicons = () => {

    const classes = useStyles();

  return (
    <article>
        <Grid container spacing={2}>
        {
            provideSolutions.map(({id,headings,para,icon}) => {return (
                <Grid item xs={12} key={id} lg={4}>
                    <Box component="span" className={classes.svg_width} >{icon}</Box>
                     
                     <Typography variant="h6" gutterBottom>{headings}</Typography>
                     <Typography variant="body1" gutterBottom>{para}</Typography>

                </Grid>
            )})
        }
      </Grid>
    </article>
  )
}

export default Creativepeoplesicons