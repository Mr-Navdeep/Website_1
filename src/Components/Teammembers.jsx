import React,{useState} from 'react';
import {teams} from './../data'
import {Grid,Box,Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Teamone from './Teamone';

const useStyles = makeStyles({});



const Teammembers = () => {

    const classes = useStyles();
    

  return (
    <div>
        <Grid container spacing={2}>
        {
            teams.map(({id,name,job,avatar,facebook,twitter,insta,linkedian}) =>{
                return(
                    
                        <Grid item xs={12} lg={4} md={6}>
                          <Teamone name={name} avatar={avatar} facebook={facebook} twitter={twitter} insta={insta} linkedian={linkedian}/>
                          <Box component="div" sx={{margin:"15px 0 0 0"}}>
                          <Typography variant="h5" gutterBottom sx={{marginBottom:"0px"}}>{name}</Typography>
                          <Typography variant="subtitle1" gutterBottom>{job}</Typography>
                          </Box>
                        </Grid>
                        
                        
                )
            })
        }
        </Grid>
    </div>
  )
}

export default Teammembers