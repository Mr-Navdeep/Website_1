import React from 'react'
import {Container }  from '@mui/material';
import CreativePeopleHeading from './CreativePeopleHeading';
import Testimonial from './Testimonial';

const MainTestimonial = (props) => {
  return (
    <section className='Main_testimonial p-100' style={{background:props.bg}}>
        <Container maxWidth="lg">
             <CreativePeopleHeading title="Clients testimonial" headings="Check what's our clients say about us" align="center" />
             <Testimonial/>
        </Container>
    </section>
  )
}

export default MainTestimonial