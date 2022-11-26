import React from 'react'
import {Grid,Container,Box} from '@mui/material';

const Footerbottom = () => {
  return (
    <Box component="div" sx={{ pb: 5 }}>
    <Container p={5}>
    <Grid container spacing={2}>
    <Grid item xs={12} lg={6}>
       Copyright © 2020, Designed & Developed by Themefisher
    </Grid>
    <Grid item xs={12} lg={6}>
      
    </Grid>
    </Grid>
    </Container>
  </Box>
    
  )
}

export default Footerbottom