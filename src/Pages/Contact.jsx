import React from 'react'
import HeadersRest from '../Components/HeadersRest'
import image from './../images/about/contact.jpg'
import {Grid,Typography,Container,Box} from '@mui/material';
import Form from './../Components/Form';
import CreativePeopleHeading from './../Components/CreativePeopleHeading'
import Address from '../Components/Address';

const Contact = () => {
  return (
    <section className='Contact'>
        <HeadersRest title="Contact Us" mainTitle="Get In Touch" image={image}/>        

        <article className='p-50'>
          <Container maxWidth="lg">
          <Grid container spacing={2}>
               <Grid item xs={12} lg={6}>
                <Form/>
               </Grid>
               <Grid item xs={12} lg={6} >
                   <Box component="div" sx={{p:5}}>
                      <CreativePeopleHeading title="We are Professionals" headings="Don’t Hesitate to contact with us for any kind of information" fontSize="2.5rem;"/>

                      <Address/>
      
                   </Box>
                   
               </Grid>

          </Grid>
          </Container>
        </article>
    </section>

  )
}

export default Contact