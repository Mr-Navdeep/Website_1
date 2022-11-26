import React from 'react'
import CreativePeopleHeading from './CreativePeopleHeading';
import {Grid,Container,Button} from '@mui/material';
import image from './../images/about/home-7.jpg'

const TextImage = () => {
  return (
    <section class="p-100">
        <Container>
        <Grid container spacing={2}>
              <Grid item xs={12} md={6}>        
                  <CreativePeopleHeading  title="who we are" headings="We are dynamic team of creative people" para="We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier."/>
                  <Button variant="contained"   sx={{ borderRadius: '20px'}} className="Button_color"> Get Started </Button>

             </Grid>
            <Grid item xs={12} md={6}>
                <img src={image} alt="about us team"/>
           </Grid>

</Grid>
        </Container>
    </section>
  )
}

export default TextImage