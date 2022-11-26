import React from 'react'
import CreativePeopleHeading from '../Components/CreativePeopleHeading'
import HeadersRest from '../Components/HeadersRest'
import image  from './../images/bg/aerial-view-business-team.jpg'
import {Container} from '@mui/material';
import ServicesIcons from '../Components/ServicesIcons';
import ContactBanner from '../Components/ContactBanner';
import bgimage from './../images/bg/home-3.jpg'

const Services = () => {
  return (<>
    <HeadersRest title="Services" image={image} mainTitle="What we do"/>
    <article className='p-100'>
       <Container maxWidth="sm">
          <CreativePeopleHeading title="Our Services" headings="We provide a wide range of creative services" align="center"/>
       </Container>
       <ServicesIcons len="9"/>
    </article>
    <ContactBanner image={bgimage}/>
    </>
  )
}

export default Services