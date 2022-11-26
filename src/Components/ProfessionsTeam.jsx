import React from 'react'
import image from './../images/bg/home-3.jpg';
import { Grid ,Container} from '@mui/material';
import EntrustProject from './EntrustProject';


const ProfessionsTeam = () => {
  return (
    <section className='p-100' style={{backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
        <Container>
           <Grid container spacing={2}>
               <Grid item xs={12} lg={4}>
                 <EntrustProject/>
               </Grid>
           </Grid>
        </Container>
    </section>
  )
}

export default ProfessionsTeam