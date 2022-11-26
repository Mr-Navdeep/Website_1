import React from 'react'
import CreativePeopleHeading from './CreativePeopleHeading'
import {Container} from '@mui/material';
import ServicesIcons from './ServicesIcons';

const Services = () => {
  return (
    <section class="p-100">
    <Container maxWidth="sm">    
    <CreativePeopleHeading title="our Services" headings="We provide a wide range of creative services" align="center"/>
  </Container>
  <ServicesIcons len="6"/>
  </section>
   
  )
}

export default Services