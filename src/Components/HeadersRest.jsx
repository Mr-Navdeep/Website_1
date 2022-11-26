import React from 'react';
import {Typography , Container} from '@mui/material';



const HeadersRest = (props) => {
  return (
    <section className='p-100 Headersrest'  style={{backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
        <Container maxwidth="lg">
        <Typography variant="subtitle1" gutterBottom align="center" sx={{color:"#fff"}}>
            {props.title}        
      </Typography>
      <Typography variant="h2" component={"h2"} gutterBottom fontWeight={600} align="center" sx={{color:"#fff"}}>
        {props.mainTitle}
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{color:"#fff"}}>
            Home/{props.title}     
      </Typography>

      </Container>
    </section>
  )
}

export default HeadersRest