import React from 'react'
import CreativePeopleHeading from '../Components/CreativePeopleHeading';
import HeadersRest from '../Components/HeadersRest';
import image from './../images/bg/portfolio.jpg'
import Container from '@mui/material/Container';
import Latestwork from '../Components/Latestwork';

const Portfolio = () => {
  return (
    <section className='portfolio'>
       <HeadersRest title="Portfolio" mainTitle="Latest Works" image={image} />
       <article className='p-50'>
        <Container maxWidth="md">
        <CreativePeopleHeading title="Our works"  headings="We have done lots of works, lets check some" align="center"/>
        </Container>        
       </article>
       <Latestwork/>
    </section>
  )
}

export default Portfolio