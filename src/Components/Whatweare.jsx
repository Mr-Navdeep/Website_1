import React from 'react'
import Box from '@mui/material/Box';
import image from '../images/about/home-8.jpg'
import Grid from '@mui/material/Grid';
import CreativePeopleHeading from './CreativePeopleHeading';
import PerfectSolutions from './PerfectSolutions';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    p_all: {
      padding:"40px 80px!important",
    },
  });


const Whatweare = () => {

    const classes = useStyles();

  return (
    <>
    <section className='What__are--are'>
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box component="div">
            <img src={image} alt="homeImage" />
           </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.p_all}>
              <CreativePeopleHeading  title="What we are" headings="We are dynamic team of creative people"/>
              <PerfectSolutions icon={<EmojiObjectsIcon/>} headings="We are Perfect Solution" para="We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier."/>
              <Button variant="contained"   sx={{ borderRadius: '20px',padding:"8px 28px",marginTop:"40px", marginLeft:"50px" }} className="Button_color"> Get Started </Button>
        </Grid>
      </Grid>
    </section>
    </>
  )
}

export default Whatweare