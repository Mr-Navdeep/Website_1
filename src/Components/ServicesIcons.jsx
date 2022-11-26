import React from 'react'
import { Grid,  Typography ,Container,Box }  from '@mui/material';
import { Services } from '../data';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    svg_width: {
        '& svg': {
            color: '#f75757',
            fontSize:'2.5rem'
         }
    },
    flex:{
        display:"flex",
        justifyContent:"center",
        alignItems:"start",
        gap:"15px"

    },
    pbt5:{
      paddingTop:"20px",
      paddingBottom:"20px",
        }

  });

const ServicesIcons = (props) => {
  

    const classes = useStyles();

  return (
    <Container maxWidth="lg">
         <Grid container spacing={3} className={classes.pbt5}>
        {
           Services.filter(index => index.id <= props.len).map(({id,icon,headings,para}) => {
               
                return (
                    <Grid item xs={12} lg={4}>
                    
                    <Box className={classes.flex}>
                      
                      <Box component="div" className={classes.svg_width} >
                        {icon}
                      </Box>
                      <Box component = "div">
                      <Typography variant="h5" gutterBottom>{headings}</Typography>
                      <Typography variant="body-1" gutterBottom>{para}</Typography>
                      </Box>
                      </Box>
                    </Grid>
                     
                )
            } )
        }
        </Grid>
    </Container>
  )
}

export default ServicesIcons