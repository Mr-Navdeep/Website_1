import React from 'react'
import {Grid,Container,Box,Typography,Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { makeStyles } from '@mui/styles';
import bgImage from './../images/bg/home-1.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};


const useStyles = makeStyles({
    paddings: {
      padding:"6em 0",
      '@media (max-width:768px)':{
        padding:"3em 0"
      }
    },    
    
  });


const MainBanner = () => {

    const classes = useStyles();

  return (
    <section className={classes.paddings} style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"
    }}>
        <ThemeProvider theme={theme}>
         <Container maxWidth="lg">
           <Grid container>
             <Grid item xs={12} lg={6}>
             <Box  component="div" >
               <Typography variant="subtitle1" gutterBottom className='textWhite'>
                Prepare for New future
               </Typography>
               <Typography variant="h2" component="h1"  gutterBottom className='textWhite'>
               Our work is presentation of our capabilities.</Typography>
               <Button variant="contained" endIcon={<EastIcon />}   sx={{ borderRadius: '20px',padding:"8px 28px" }} className="Button_color"> Send </Button>
             </Box>          
            </Grid>
         </Grid>
      </Container>
      </ThemeProvider>
    </section>
  )
}

export default MainBanner