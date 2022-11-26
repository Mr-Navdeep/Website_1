import React from 'react'
import {Grid,Container,Button,Box} from '@mui/material';
import CreativePeopleHeading from './CreativePeopleHeading';


const ContactBanner = (props) => {
  return (
    <article className='ContactBanner'>
    <Container>
    <Box component="div" sx={{backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",p:5}}>
      
    
        <Grid container spacing={2}>
             <Grid item xs={12} lg={8}>
                <CreativePeopleHeading title="For Every Type Business" headings="Entrust Your Project to Our Best Team of Professionals" color="#fff"/>
             </Grid>
             <Grid item xs={12} lg={4} sx={{display:"grid",placeItems:"center"}}>
                <Button variant="contained" className='Button_color'>Contact Us</Button>
             </Grid>
         </Grid>
         </Box>
    </Container>
    </article>
  )
}

export default ContactBanner