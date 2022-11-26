import React from 'react';
import { Box,Typography } from '@mui/material';
import CreativePeopleHeading from './CreativePeopleHeading';
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    svg_width: {
        '& svg': {
            color: '#f75757',
         }
    }

  });


const EntrustProject = () => {

    const classes = useStyles();

  return (
    <Box sx={{backgroundColor:"#fff",padding:"2em"}}>
    <CreativePeopleHeading title="We create for you" headings="Entrust Your Project to Our Best Team of Professionals" fontSize="1.8rem" />
      <Typography variant="subtitle1" gutterBottom>
        Have any project on mind? For immidiate support :
      </Typography>
      <Box sx={{display:"flex",alignItems:"center"}} className= {classes.svg_width} >
        <CallIcon/>
        <Typography variant="subtitle1" gutterBottom>+123 456 789 0</Typography>
        
      </Box>
    </Box>
  )
}

export default EntrustProject