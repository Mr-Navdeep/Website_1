import React from 'react'
import CreativePeopleHeading from './CreativePeopleHeading'
import Container from '@mui/material/Container';
import Teammembers from './Teammembers';



const OurTeam = () => {
  return (
    <section className='p-100'>
          <Container maxWidth="md">
          <CreativePeopleHeading title="Our Team" headings="Expert Team member to get best service" align="center"/>
          
      </Container>
      <Container maxWidth="lg">
        <Teammembers/>
      </Container>
        

    </section>
  )
}

export default OurTeam