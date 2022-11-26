import React from 'react';
import {projects} from './../data';
import { Grid,  Typography ,Container }  from '@mui/material';


const Projectsdone = () => {
  return (
    <>
    <section class="p-100">
    <Container maxWidth="md">
    <Grid container spacing={2}>
    {
        projects.map(({id,headings,para}) => { return (
        
        <Grid item xs={3} key={id}>
           <Typography variant="h3" gutterBottom fontWeight={700}>
           {headings}
      </Typography>

      <Typography variant="body2" gutterBottom>
        {para}
      </Typography>
          
          </Grid>) })
    }     
        
      </Grid> 
   
    </Container>
    </section>
    </>
  )
}

export default Projectsdone