import React from 'react'
import CreativePeopleHeading from './CreativePeopleHeading'
import Container from '@mui/material/Container';
import Creativepeoplesicons from './Creativepeoplesicons';



const Creativepeoples = () => {
  return (
    <section className='p-100'>

      <Container maxWidth="lg">
          <CreativePeopleHeading title="We are creative & expert people" headings="We work with business & provide solution to client with their business problem"/>
          <Creativepeoplesicons/>
     </Container>

    </section>
  )
}

export default Creativepeoples